// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import "forge-std/Test.sol";
import "../src/CommodityPool.sol";
import "../lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol";

contract MockERC20 is ERC20 {
    constructor() ERC20("FemFundToken", "FFT") {
        _mint(msg.sender, 1e24); 
    }
}

contract CommodityPoolTest is Test {
    CommodityPool public pool;
    MockERC20 public token;

    address public owner = address(1);
    address public contributor1 = address(2);
    address public contributor2 = address(3);

    uint256 public contributionGoal = 100 ether;
    uint256 public cycleDuration = 7 days;

    function setUp() public {
        token = new MockERC20();

        vm.prank(owner);
        pool = new CommodityPool(address(token), contributionGoal, cycleDuration);

        token.transfer(contributor1, 100 ether); 
        token.transfer(contributor2, 100 ether);

        vm.prank(contributor1);
        token.approve(address(pool), 100 ether); 

        vm.prank(contributor2);
        token.approve(address(pool), 100 ether); 
    }

    function testContribute() public {
        vm.prank(contributor1);
        pool.contribute(25 ether);

        assertEq(pool.totalContributions(), 25 ether);
        assertEq(pool.getContribution(contributor1), 25 ether);

        vm.prank(contributor2);
        pool.contribute(30 ether);

        assertEq(pool.totalContributions(), 55 ether);
        assertEq(pool.getContribution(contributor2), 30 ether);
    }

    function testCheckGoal() public {
        vm.prank(contributor1);
        pool.contribute(50 ether);

        vm.prank(owner);
        pool.checkGoal();
        assertFalse(pool.goalAchieved());

        vm.prank(contributor2);
        pool.contribute(50 ether);

        vm.prank(owner);
        pool.checkGoal();
        assertTrue(pool.goalAchieved());
    }

    function testCalculateShare() public {
        vm.prank(contributor1);
        pool.contribute(40 ether);

        vm.prank(contributor2);
        pool.contribute(60 ether);

        uint256 share1 = pool.calculateShare(contributor1);
        uint256 share2 = pool.calculateShare(contributor2);

        assertEq(share1, 400000000000000000); 
        assertEq(share2, 600000000000000000); 
    }

    function testResetCycle() public {
        vm.prank(contributor1);
        pool.contribute(40 ether);

        vm.prank(contributor2);
        pool.contribute(60 ether);

        vm.prank(owner);
        pool.checkGoal();

        vm.prank(owner);
        pool.resetCycle(200 ether, 14 days);

        assertEq(pool.totalContributions(), 0);
        assertEq(pool.contributionGoal(), 200 ether);
        assertFalse(pool.goalAchieved());
    }
}


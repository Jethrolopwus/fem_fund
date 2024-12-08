// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "forge-std/Test.sol";
import "../src/ComodityPool.sol";

contract CommodityPoolTest is Test {
    CommodityPool private pool;
    address private owner = address(0xABCD);
    address private user1 = address(0x1234);
    address private user2 = address(0x5678);

    function setUp() public {
        vm.startPrank(owner);
        pool = new CommodityPool(10 ether, 1 weeks); 
        vm.stopPrank();
    }
function testContribute() public {
    vm.prank(user1);
    pool.contribute{value: 5 ether}();
    assertEq(pool.getContribution(user1), 5 ether); 
        assertEq(pool.totalContributions(), 5 ether); 
}


function testCheckGoal() public {
    vm.prank(user1);
    pool.contribute{value: 10 ether}(); 

    vm.prank(owner);
    pool.checkGoal();
    assertTrue(pool.goalAchieved()); 
}



function testCalculateShare() public {
    vm.prank(user1);
    pool.contribute{value: 6 ether}();
    vm.prank(user2);
    pool.contribute{value: 4 ether}();

    uint256 share = pool.calculateShare(user1);
    assertEq(share, 6e18 / 10); 
}

  
function testResetCycle() public {
    vm.prank(user1);
    pool.contribute{value: 10 ether}();

    vm.prank(owner);
    pool.resetCycle(20 ether, 2 weeks);

    assertEq(pool.totalContributions(), 0); 
    assertEq(pool.getContribution(user1), 0); 
}


function testDistributeCommodity() public {
    vm.prank(user1);
    pool.contribute{value: 6 ether}();
    vm.prank(user2);
    pool.contribute{value: 4 ether}();

    vm.prank(owner);
    pool.checkGoal();

    vm.prank(owner);
    pool.distributeCommodity();
    assertEq(user1.balance, 6 ether); 
    assertEq(user2.balance, 4 ether); 
}
    receive() external payable {} 
}

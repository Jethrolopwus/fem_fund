/// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import "forge-std/Script.sol";
import "../src/CommodityPool.sol";
import "../lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol";

contract MockERC20 is ERC20 {
    constructor() ERC20("FemFundToken", "FFT") {
        _mint(msg.sender, 1e24); 
    }
}

contract DeployCommodityPool is Script {
    function run() external {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY"); 
        address deployer = vm.addr(deployerPrivateKey);

       
        address tokenAddress;
        uint256 contributionGoal = 100 ether; 
        uint256 cycleDuration = 7 days; 

        vm.startBroadcast(deployerPrivateKey);

        MockERC20 token = new MockERC20();
        tokenAddress = address(token);

        console.log("MockERC20 deployed at:", tokenAddress);

        CommodityPool pool = new CommodityPool(tokenAddress, contributionGoal, cycleDuration);

        console.log("CommodityPool deployed at:", address(pool));
        console.log("Owner of the pool:", deployer);

        vm.stopBroadcast();
    }
}


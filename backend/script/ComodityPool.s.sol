// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "forge-std/Script.sol";
import "../src/ComodityPool.sol";

contract DeployScript is Script {
    function run() external {
        vm.startBroadcast();

        // Deploy the contract
        CommodityPool pool = new CommodityPool(10 ether, 1 weeks);

        vm.stopBroadcast();
    }
}

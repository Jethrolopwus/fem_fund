// // SPDX-License-Identifier: SEE LICENSE IN LICENSE
// pragma solidity ^0.8.26;
// import "../lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol";
// contract femfundToken is ERC20 (femfundToken, "FFT") {
//     address public owner;
//       constructor() {
//         owner = msg.sender;
//         _mint(msg.sender, 100000e18);
//     }
//      function mint(uint _amount) external {
//         require(msg.sender == owner, "you are not owner");
//         _mint(msg.sender, _amount * 1e18);
//     }
// }
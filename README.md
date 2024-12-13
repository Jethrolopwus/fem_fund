FemFund Documentation (Contribution-Based)
1. Overview
Project Name
FemFund
Project Summary
FemFund is a decentralized application (DApp) designed for collaborative contributions. The platform empowers women to pool their funds toward purchasing commodities that are then distributed based on individual contributions. Rather than a staking pool, FemFund allows participants to contribute funds toward a commodity purchase that is executed at the end of a set period (e.g., 3 or 6 months).
Key Features
Contribution-Based Purchase: Each user can contribute tokens toward a shared purchase.
Commodity Goal Tracking: Track progress toward each purchase goal and notify users when the target is met.
Proportional Distribution: At the end of each period, commodities are distributed according to the amount contributed by each participant.
Flexible Participation: Users can join multiple contribution cycles based on their needs and desired commodities.
2. Project Architecture
The FemFund smart contract will use a modular approach, but without the Diamond contract complexity since this model doesn’t require staking or complex reward mechanisms.
Core Smart Contract Components
Contribution Management: Allows users to contribute tokens, stores contribution amounts, and keeps track of the total contributions.
Commodity Purchase Trigger: After a specific period, the contract initiates the purchase if the contribution target is met.
Distribution Mechanism: Calculates the share each participant is entitled to receive based on their contribution.
Cycle Reset Mechanism: Resets contribution totals after each purchase cycle, preparing the contract for a new commodity goal.
Technology Stack
Smart Contracts: Solidity
Testing & Deployment: Foundry
Frontend: React with ethers.js for Web3 interactions
Backend (optional): NestJS for tracking contribution history, analytics, and notifications


USAGE:

cd Backend
Read through this below to rund the backend code.
Foundry
Foundry is a blazing fast, portable and modular toolkit for Ethereum application development written in Rust.

Foundry consists of:

Forge: Ethereum testing framework (like Truffle, Hardhat and DappTools).
Cast: Swiss army knife for interacting with EVM smart contracts, sending transactions and getting chain data.
Anvil: Local Ethereum node, akin to Ganache, Hardhat Network.
Chisel: Fast, utilitarian, and verbose solidity REPL.
Documentation
https://book.getfoundry.sh/

Usage

Build
$ forge build
Test
$ forge test
Format
$ forge fmt
Gas Snapshots
$ forge snapshot
Anvil
$ anvil
Deploy
$ forge script script/Counter.s.sol:CounterScript --rpc-url <your_rpc_url> --private-key <your_private_key>
Cast
$ cast <subcommand>
Help
$ forge --help
$ anvil --help
$ cast --help

FRONT END USAGE:

cd Frondend
Install Dependencies:
run: npm install
to start the application locally:
run: npm run dev

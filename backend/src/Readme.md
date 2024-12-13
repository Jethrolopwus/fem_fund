
contract Address= 0x328D4A582edc299c31583573d26a53230d1e8Ae5
Wallet Address=0x21726d1CBf49479CA2bc6E7688c6c591C0981F08





forge verify-contract 0x328D4A582edc299c31583573d26a53230d1e8Ae5  \
./src/CommodityPool.sol:CommodityPool \
--chain 4202 \
--watch \
--verifier blockscout \
--verifier-url https://sepolia-blockscout.lisk.com/api





forge create --rpc-url https://rpc.sepolia-api.lisk.com \
--etherscan-api-key MVUSE7NIRPDNPHMS6YQZETVJAYP12FDBMH \
--verify \
--verifier blockscout \
--verifier-url https://sepolia-blockscout.lisk.com/api \
--private-key 43db3940e393854a1b3a267e7a9f0dc1a0d7ffabe28d14a12b5010a2949a3e6b  \
src/femfundToken.sol:femfundToken






forge verify-contract 0x4c8d4Ff2Ce701c39ebAd75b7d1bE1c103a4B1aD4 \
./src/femfundToken.sol:femfundToken \
--chain 4202 \
--watch \
--verifier blockscout \
--verifier-url https://sepolia-blockscout.lisk.com/api


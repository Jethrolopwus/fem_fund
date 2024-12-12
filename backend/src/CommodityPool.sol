// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import "../lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol";

contract CommodityPool {
    address public owner;
    uint256 public contributionGoal;
    uint256 public totalContributions;
    uint256 public cycleEndTimestamp;
    bool public goalAchieved;

    IERC20 public contributionToken;
    mapping(address => uint256) public contributions;
    address[] private contributors;

    event ContributionMade(address indexed user, uint256 amount);
    event GoalChecked(bool achieved);
    event PurchaseInitiated(uint256 totalContributions);
    event CommodityDistributed(address indexed user, uint256 amount);
    event CycleReset(uint256 newGoal, uint256 newEndTimestamp);


    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function");
        _;
    }

    modifier cycleActive() {
        require(block.timestamp <= cycleEndTimestamp, "Cycle has ended");
        _;
    }

    constructor(
        address _tokenAddress,
        uint256 _goal,
        uint256 _cycleDuration
    ) {
        owner = msg.sender;
        contributionToken = IERC20(_tokenAddress);
        contributionGoal = _goal;
        cycleEndTimestamp = block.timestamp + _cycleDuration;
    }

    function contribute(uint256 amount) external cycleActive {
        require(amount > 0, "Must send a positive amount");
        require(
            contributionToken.transferFrom(msg.sender, address(this), amount),
            "Token transfer failed"
        );

        if (contributions[msg.sender] == 0) {
            contributors.push(msg.sender);
        }

        contributions[msg.sender] += amount;
        totalContributions += amount;

        emit ContributionMade(msg.sender, amount);
    }

    function getContribution(address user) external view returns (uint256) {
        return contributions[user];
    }

    function checkGoal() external onlyOwner {
        if (totalContributions >= contributionGoal || block.timestamp > cycleEndTimestamp) {
            goalAchieved = true;
        }
        emit GoalChecked(goalAchieved);
    }

    function initiatePurchase() external onlyOwner {
        require(goalAchieved, "Goal not met or cycle not ended");
        emit PurchaseInitiated(totalContributions);
    }

    function calculateShare(address user) public view returns (uint256) {
        require(totalContributions > 0, "No contributions made");
        return (contributions[user] * 1e18) / totalContributions;
    }


    function distributeCommodity() external onlyOwner {
        require(goalAchieved, "Goal not met or cycle not ended");

        for (uint256 i = 0; i < contributors.length; i++) {
            address user = contributors[i];
            uint256 share = calculateShare(user);
            uint256 amount = (share * totalContributions) / 1e18;

            require(
                contributionToken.transfer(user, amount),
                "Token transfer failed"
            );

            emit CommodityDistributed(user, amount);
        }
    }

    function resetCycle(uint256 _newGoal, uint256 _cycleDuration) external onlyOwner {
        for (uint256 i = 0; i < contributors.length; i++) {
            address user = contributors[i];
            contributions[user] = 0;
        }

        delete contributors;
        totalContributions = 0;
        goalAchieved = false;
        contributionGoal = _newGoal;
        cycleEndTimestamp = block.timestamp + _cycleDuration;

        emit CycleReset(_newGoal, cycleEndTimestamp);
    }
}

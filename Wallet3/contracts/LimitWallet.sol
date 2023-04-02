// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract LimitWallet {
    address public owner;
    mapping(address => uint256) public spendingLimits;

    event LimitSet(address indexed spender, uint256 limit);
    event Spent(address indexed spender, address indexed recipient, uint256 amount);

    constructor() {
        owner = msg.sender;
    }

    function setLimit(address spender, uint256 limit) public {
        require(msg.sender == owner, "Only owner can set limits");
        spendingLimits[spender] = limit;
        emit LimitSet(spender, limit);
    }

    function spend(address payable recipient, uint256 amount) public {
        require(spendingLimits[msg.sender] <= amount, "Spending limit exceeded");
        spendingLimits[msg.sender] -= amount;
        recipient.transfer(amount);
        emit Spent(msg.sender, recipient, amount);
    }

    function getLimit(address spender) public view returns (uint256) {
        return spendingLimits[spender];
    }
}

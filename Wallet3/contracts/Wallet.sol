// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Wallet {
    address owner;

    constructor() {
        owner = msg.sender;
    }

    function deposit() public payable {}

    function withdraw(uint amount) public {
        require(msg.sender == owner, "Only owner can withdraw funds");
        require(address(this).balance >= amount, "Insufficient balance");
        payable(msg.sender).transfer(amount);
    }

    function getBalance() public view returns(uint) {
        return address(this).balance;
    }
}

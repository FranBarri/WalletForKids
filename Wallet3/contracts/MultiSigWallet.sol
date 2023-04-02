// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract MultiSigWallet {
    uint public numOwners;
    uint public required;
    mapping(address => bool) public isOwner;
    mapping(address => bool) public isConfirmed;
    address[] public owners;

    event Deposit(address indexed sender, uint amount);
    event Transfer(address indexed receiver, uint amount);
    event OwnerAdded(address indexed newOwner);
    event OwnerRemoved(address indexed oldOwner);
    event RequirementChanged(uint required);

    constructor(address[] memory _owners, uint _required) payable {
        require(_owners.length > 0, "Owners required");
        require(_required > 0 && _required <= _owners.length, "Invalid requirement");
        for (uint i = 0; i < _owners.length; i++) {
            require(!isOwner[_owners[i]] && _owners[i] != address(0), "Invalid owner");
            isOwner[_owners[i]] = true;
        }
        numOwners = _owners.length;
        required = _required;
        owners = _owners;
        emit RequirementChanged(required);
        emit OwnerAdded(_owners[0]);
    }

    function deposit() external payable {
        emit Deposit(msg.sender, msg.value);
    }

    function transfer(address payable receiver, uint amount) external onlyOwner {
        require(address(this).balance >= amount, "Insufficient balance");
        require(receiver != address(0), "Invalid receiver");
        require(!isConfirmed[msg.sender], "Already confirmed");
        isConfirmed[msg.sender] = true;
        emit Transfer(receiver, amount);
        if (isConfirmedByRequired()) {
            for (uint i = 0; i < owners.length; i++) {
                isConfirmed[owners[i]] = false;
            }
            receiver.transfer(amount);
        }
    }

    function addOwner(address newOwner) external onlyOwner {
        require(!isOwner[newOwner] && newOwner != address(0), "Invalid owner");
        isOwner[newOwner] = true;
        numOwners++;
        owners.push(newOwner);
        emit OwnerAdded(newOwner);
    }

    function removeOwner(address oldOwner) external onlyOwner {
        require(isOwner[oldOwner], "Invalid owner");
        require(numOwners > required, "Cannot remove owner");
        isOwner[oldOwner] = false;
        numOwners--;
        for (uint i = 0; i < owners.length; i++) {
            if (owners[i] == oldOwner) {
                owners[i] = owners[owners.length - 1];
                owners.pop();
                break;
            }
        }
        if (required > numOwners) {
            required = numOwners;
            emit RequirementChanged(required);
        }
        emit OwnerRemoved(oldOwner);
    }

    function changeRequirement(uint _required) external onlyOwner {
        require(_required > 0 && _required <= numOwners, "Invalid requirement");
        required = _required;
        emit RequirementChanged(required);
    }

    function isConfirmedByRequired() private view returns (bool) {
        uint count = 0;
        for (uint i = 0; i < owners.length; i++) {
            if (isConfirmed[owners[i]]) {
                count++;
                if (count == required) {
                    return true;
                }
            }
        }
        return false;
    }

    modifier onlyOwner() {
        require(isOwner[msg.sender], "Only owner");
        _;
    }
}
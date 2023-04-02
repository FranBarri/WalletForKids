const { ethers } = require("ethers");
const fs = require("fs");

// Create a random Ethereum account
const wallet = ethers.Wallet.createRandom();

// Save the private key to a file
fs.writeFileSync("private-key3.txt", wallet.privateKey);

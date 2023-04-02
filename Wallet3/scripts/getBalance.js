const { ethers } = require("hardhat");

async function getBalance() {
  // Get the signer object
  const [signer] = await ethers.getSigners();

  // Get the balance of the account
  const balance = await signer.getBalance();

  console.log(`Account balance: ${ethers.utils.formatEther(balance)}`);
}

getBalance();

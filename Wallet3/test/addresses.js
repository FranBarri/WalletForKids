const { ethers } = require("hardhat");

async function main() {
  const provider = ethers.provider;
  const addresses = await provider.listAccounts();
  console.log(addresses);
}

main();
const { ethers } = require("hardhat");

async function deployWallet() {
  const [deployer] = await ethers.getSigners();

  console.log("Haciendo la wallet con el address:", deployer.address);

  const Wallet = await ethers.getContractFactory("Wallet");
  const wallet = await Wallet.deploy();

  console.log("Wallet creada con la address:", wallet.address);
}

deployWallet()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
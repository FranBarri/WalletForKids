const { ethers } = require("hardhat");

async function main() {
  const MultiSigWallet = await ethers.getContractFactory("MultiSigWallet");
  const multiSigWallet = await MultiSigWallet.deploy(
    ["0x7E5F4552091A69125d5DfCb7b8C2659029395Bdf"], // Owner addresses
    1 // Number of required signatures
  );
  await multiSigWallet.deployed();
  console.log("MultiSigWallet deployed to:", multiSigWallet.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

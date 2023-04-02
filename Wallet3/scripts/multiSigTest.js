const { ethers } = require("hardhat");

async function main() {
  const [owner1, owner2] = await ethers.getSigners();

  // Deployear el contrato
  const MultiSigWallet = await ethers.getContractFactory("MultiSigWallet");
  const multiSigWallet = await MultiSigWallet.deploy([owner1.address, owner2.address], 2);
  await multiSigWallet.deployed();

  // Depositar eth al contrato
  const depositTx = await multiSigWallet.connect(owner2).deposit({ value: ethers.utils.parseEther("1") });
  await depositTx.wait();
  console.log("Esperando verificacion de la otra wallet...")

  // Transferir
  const transferTx = await multiSigWallet.connect(owner1).transfer(owner2.address, ethers.utils.parseEther("0.5"));
  await transferTx.wait();

  console.log("Transaccion exitosa");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

const { ethers } = require('hardhat');

async function main() {
  const [sender] = await ethers.getSigners();
  const receiverAddress = '0xAEf125B6fF23d1FcE7A9886150caF515f9211839';

  // Balance del emisor
  const balanceBefore = await sender.getBalance();
  console.log(`Account balance before: ${ethers.utils.formatEther(balanceBefore)} ETH`);

  // Cuanto enviar
  const amountToSend = ethers.utils.parseEther('1');

  // Hacer el objeto de transaccion
  const txObj = {
    to: receiverAddress,
    value: amountToSend,
  };

  const signedTx = await sender.signTransaction(txObj);
  const tx = await ethers.provider.sendTransaction(signedTx);

  const receipt = await tx.wait();
  console.log(`Transaction confirmed in block ${receipt.blockNumber}`);

  // Balance del emisor luego de la transaccion
  const balanceAfter = await sender.getBalance();
  console.log(`Account balance after: ${ethers.utils.formatEther(balanceAfter)} ETH`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
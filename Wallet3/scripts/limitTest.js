const { ethers } = require("hardhat");

async function main() {
  const provider = new ethers.providers.JsonRpcProvider();
  const signer = provider.getSigner();

  // Deployear el contrato
  const Limit = await ethers.getContractFactory("LimitWallet");
  const limit = await Limit.deploy();

  // Obtener el address de las wallets
  const [owner, spender] = await ethers.getSigners();

  // Setear limit a 10 eth
  await limit.setLimit(spender.address, ethers.utils.parseEther("20"));

  // Obtener balances iniciales
  const ownerBalanceBefore = await owner.getBalance();
  const spenderBalanceBefore = await spender.getBalance();

  // Intentar una transaccion que excede el limite
  try {
    const tx = await limit.spend(owner.address, ethers.utils.parseEther("15"));
    const receipt = await tx.wait(); // Get the transaction receipt
    console.log("Transaction receipt:", receipt);
  } catch (err) {
    console.error(err.message);
  }

  // Get the final balances
  const ownerBalanceAfter = await owner.getBalance();
  const spenderBalanceAfter = await spender.getBalance();

  // Log the balances
  console.log("Owner balance before:", ethers.utils.formatEther(ownerBalanceBefore));
  console.log("Spender balance before:", ethers.utils.formatEther(spenderBalanceBefore));
  console.log("Owner balance after:", ethers.utils.formatEther(ownerBalanceAfter));
  console.log("Spender balance after:", ethers.utils.formatEther(spenderBalanceAfter));
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
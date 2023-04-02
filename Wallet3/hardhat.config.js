require("@nomiclabs/hardhat-waffle");

module.exports = {
    networks: {
      ganache: {
        url: "http://localhost:8545",
        chainId: 1337,
      }
  },
  solidity: {
    compilers: [
      {
        version: "0.8.9",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          }
        }
      }
    ]
  }
};

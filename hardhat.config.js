require("@nomicfoundation/hardhat-toolbox");
require("hardhat-deploy");
require("@nomiclabs/hardhat-ethers");
require("dotenv").config();

const config = require("./config");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  // solidity: "0.8.8",
  solidity: {
    compilers: [{ version: "0.8.8" }, { version: "0.6.6" }],
  },
  networks: {
    sepolia: {
      url: config.SEPOLIA_RPC_URL,
      accounts: [config.PRIVATE_KEY],
      chainId: config.SEPOLIA_CHAIN_ID,
      blockConfirmations: 6,
    },
  },
  namedAccounts: {
    deployer: {
      default: 0,
    },
  },
  gasReporter: {
    enabled: true,
    outputFile: "gas-report.txt",
    noColors: true,
    currency: "USD",
    coinmarketcap: config.COINMARKETCAP_API_KEY,
    token: "MATIC",
  },
  etherscan: {
    apiKey: {
      sepolia: config.ETHERSCAN_API_KEY,
    },
  },
};

const { network } = require("hardhat");
const { DEVELOPMENT_CHAINS, DECIMALS, INITIAL_ANSWER } = require("../config");

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();

  if (DEVELOPMENT_CHAINS.includes(network.name)) {
    log("Local network detected! Deploying mocks...");
    await deploy("MockV3Aggregator", {
      contract: "MockV3Aggregator",
      from: deployer,
      log: true,
      args: [DECIMALS, INITIAL_ANSWER],
    });
    log("Mocks deployed!");
    log("--------------------------------------------");
  }
};

module.exports.tags = ["all", "mocks"];

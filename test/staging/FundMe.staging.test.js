const { ethers, getNamedAccounts, network } = require("hardhat");
const { DEVELOPMENT_CHAINS } = require("../../config");
const { assert } = require("chai");

DEVELOPMENT_CHAINS.includes(network.name)
  ? describe.skip
  : describe("FundMe", () => {
      let fundMe;
      let deployer;
      const sendValue = ethers.parseEther("1");

      beforeEach(async () => {
        deployer = (await getNamedAccounts()).deployer;
        fundMe = await ethers.getContract("FundMe", deployer);
      });

      it("allows people to fund and withdraw", async () => {
        await fundMe.fund({ value: sendValue });
        await fundMe.withdraw();
        const endingBalance = await ethers.provider.getBalance(fundMe.target);
        assert.equal(endingBalance.toString(), "0");
      });
    });

require("dotenv").config();
const { utils } = require("ethers");
const fs = require("fs");
//const chalk = require("chalk");
require("@nomiclabs/hardhat-waffle");
require("@tenderly/hardhat-tenderly");
require("hardhat-deploy");
require("@eth-optimism/hardhat-ovm");
require("@nomiclabs/hardhat-ethers");

const defaultNetwork = "rinkeby";

module.exports = {
  defaultNetwork,

  networks: {
    rinkeby: {
           url: `https://rinkeby.infura.io/v3/${process.env.RINKEBY_INFURA_KEY}`,
            accounts: [`${process.env.RINKEBY_DEPLOYER_PRIV_KEY}`],
    }
  },
  solidity: {
    compilers: [
      {
        version: "0.8.4",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      }
    ],
  },
  ovm: {
    solcVersion: "0.7.6",
  },
  namedAccounts: {
    deployer: {
      default: 0, // here this will by default take the first account as deployer
    },
  },
};


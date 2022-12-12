require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config()
require("./tasks/block-number") // Must import here so Hardhat can actually execute the function

const RPC_URL_GOERLI = process.env.RPC_URL_GOERLI;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    goerli: {
      url: RPC_URL_GOERLI,
      accounts: [PRIVATE_KEY],
      chainId: 5
    },
    localhost: {
      url: "http://127.0.0.1:8545/",
      chainId: 31337 // Hardhat Chain ID
    }
  },
  solidity: "0.8.17",
  etherscan: {
    apiKey: ETHERSCAN_API_KEY
  }
};

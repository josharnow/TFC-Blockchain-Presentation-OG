require("@nomiclabs/hardhat-waffle");
require('@openzeppelin/hardhat-upgrades');
// Any file that has require('dotenv').config() statement 
// will automatically load any variables in the root's .env file.
require('dotenv').config();

module.exports = {
  solidity: "0.8.0",
  networks:{
    goerli:{
      // Ankr's Public RPC URL
      url: "https://rpc.ankr.com/eth_goerli",
     // PRIVATE_KEY loaded from .env file
      accounts: [`0x4a348450462a982bd9257f32528351f4684f94ec3b398bee2ac55d53170727de`]
      //accounts: [`0x${process.env.PRIVATE_KEY}`]
    }
  }
};
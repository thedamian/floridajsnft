const { ethers } = require("hardhat");

module.exports =  {
        mint:  async (signature ) => { // example:  toAddress = "0x79A4105C64548aABffB53d555F3441f0b2f3Dd03"
             var MessageToSign =  "This is FloridaJS NFTs Minting page asking you to prove who you are.!";
             const toAddress = web3.eth.accounts.recover(MessageToSign,signature);
             console.log("\n\n 🎫 Minting to "+toAddress+"...\n");
             const FloridaJSPresentation = await ethers.getContractAt('FloridaJSPresentation', "0x2116515c1b6fb146b370dd407df3e31e2d9bd07d") //<-- if you want to instantiate a version of a contract at a specific address!
  
             console.log("FloridaJSPresentation",FloridaJSPresentation)
             const working = await FloridaJSPresentation.safeMint(toAddress,"https://raw.githubusercontent.com/thedamian/floridajsnft/main/meta/nft.json",{gasLimit:400000})
            console.log("working",working);
        } // mint
} // module.export
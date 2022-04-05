const { ethers } = require("hardhat");

module.exports =  {
        mint:  async (toAddress ) => { // example:  toAddress = "0x79A4105C64548aABffB53d555F3441f0b2f3Dd03"
             console.log("\n\n 🎫 Minting to "+toAddress+"...\n");
             const FloridaJSPresentation = await ethers.getContractAt('FloridaJSPresentation', "0x67a871dD64c9FA033cF39719D2427b4714cDDE9d") //<-- if you want to instantiate a version of a contract at a specific address!
             const working = await FloridaJSPresentation.mintItem(toAddress,"https://raw.githubusercontent.com/thedamian/floridajsnft/main/meta/nft.json",{gasLimit:400000})
            console.log("working",working);
        } // mint
} // module.export
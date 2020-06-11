const path = require("path");
const HDWalletProvider = require('@truffle/hdwallet-provider');

//Put your mnemonic here, take care of this and don't deploy your mnemonic into production!
const mnemonic = 'A_MNEMONIC';

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    develop: {
      port: 8545
    },
    mainnet: {
      provider: () => new HDWalletProvider(mnemonic, 'https://public-node.rsk.co', 0, 1, true, "m/44'/137'/0'/0/"),
      network_id: 30,
      gasPrice: 0x387EE40
    },    
    testnet: {
      provider: () => new HDWalletProvider(mnemonic, 'https://public-node.testnet.rsk.co', 0, 1, true, "m/44'/37310'/0'/0/"),
      network_id: 31,
      gasPrice: 0x387EE40
    }
  },
};
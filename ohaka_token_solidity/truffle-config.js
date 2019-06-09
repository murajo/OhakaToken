const HDWalletProvider = require('truffle-hdwallet-provider');

//////////////////////////////////////
const INFURA_PROJECT_ID = "";   // input here
const mnemonic = "";            // input here
//////////////////////////////////////

module.exports = {
  networks: {
    ganache: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*",
      gas: 5500000,
    },
    kovan: {
      provider: () => new HDWalletProvider(mnemonic, `https://kovan.infura.io/v3/${INFURA_PROJECT_ID}`),
      network_id: "*",
      gas: 5500000,
    },
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${INFURA_PROJECT_ID}`),
      network_id: "*",
      gas: 5500000,
    },
  },
  compilers: {
    solc: {
      version: "0.5.2",
    }
  }
}

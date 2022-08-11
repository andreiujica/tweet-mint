require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.2",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/HA2tEuNsadGfwBCRgyFrT6tpxgzMgG6z",
      accounts: [
        "51a7bfbb0c6afd2faa61a81d6115e9639c0f301bacdf36d8decffe632187afc6",
      ],
    },
  },
};

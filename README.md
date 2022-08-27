
<h4 align="center">A Twitter Blockchain Clone web app built on top of <a href="https://docs.soliditylang.org/en/v0.8.16/" target="_blank">Solidity</a>.</h4>

<p align="center">
 <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/>
 <img src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white"/>
 <img src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white"/>
 <img src="https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white"/>
</p>

<p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#license">License</a>
</p>

![presentation  photo](https://user-images.githubusercontent.com/46849514/187025005-0d31eb63-2c20-4cf9-91e4-e1e3e90775bd.png)

## Key Features

* MetaMask Authentication 
  - Connect using your crypto wallet instead of email
* NFT Profile Picture Minting
  - Mint your profile pictures as NFTs on OpenSea
  - Get a hexagon border around your profile pic (showing that the NFT is real)
* Next.js was used for front-end
  - TailwindCSS was used for the CSS framework
* Sanity.io was used for the back-end
* Tweets are stored in Pinata, an IPFS platform
* The smart contract is writtern in Solidity
  - OpenZeppelin is used to check ERC-721 compliance
* Deployed on Vercel

## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/andreiujica/twitter-clone-blockchain

# Go into the repository
$ cd twitter-clone-blockchain/client

# Install dependencies
$ yarn install

# Run the app
$ yarn dev
```
Otherwise, just use the deployed version at https://twitter-clone-blockchain-six.vercel.app/


## License

MIT



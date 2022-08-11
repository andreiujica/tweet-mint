const main = async () => {
  const profileImageFactory = await hre.ethers.getContractFactory(
    "ProfileImageNfts"
  );
  const profileImageContract = await profileImageFactory.deploy();

  await profileImageContract.deployed();

  console.log(
    "Profile Image Minter deployed to:",
    profileImageContract.address
  );
};

(async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();

// contract address: 0x35C6F410D61Ba56245393473d9Cc686b7e630307

const { ethers } = require("hardhat");

/**
 * for futther desciprition for hardhat deployment
 * @see: https://hardhat.org/guides/deploying.html
 */
async function main() {
  const MyWaifu = await ethers.getContractFactory("MyWaifu");
  const myWaifu = await MyWaifu.deploy();

  console.log("MyWaifu deployed:", myWaifu.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
const { ethers } = require("hardhat");

/**
 * for futther desciprition for hardhat deployment
 * @see: https://hardhat.org/guides/deploying.html
 */
async function main() {
  const EmotionalShapes = await ethers.getContractFactory("EmotionalShapes");
  const emotionalShapes = await EmotionalShapes.deploy();

  console.log("EmotionalShapes deployed:", emotionalShapes.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
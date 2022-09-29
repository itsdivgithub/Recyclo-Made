const { ethers } = require("hardhat");

async function enterRaffle() {
  const raffle = await ethers.getContract("Raffle");
  const entranceFee = await raffle.getEntranceFee();
  await raffle.enterRaffle({ value: entranceFee + 1 });
  console.log("Entered!");
}

enterRaffle()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

  //contract address - 0x5380c4765a0858c44DD9b5fa4Dc71324fCE12e2d  -  0.1ETH fees
  // tx - 0x2d7a29a00bba85fef79b496e4750008a28ed242887595d0189c05de7794e9925

  //contract address - 0xC5743daf1403955dFC792D73E0FE2e63B9297db4  - 0.001ETH fees
  // tx - 0xa5e1cd6c6fa1b8740353b7b5a4b99d531886003ab2247c09549a455d79b6721a
# Plants And Pillars

Project Description -
- Plants and Pillars is a decentralized organization that aims to encourage people to plant more trees and make Earth a better place to live in.
- We aim to build a community of enthusiasts who'll help us achieve our goal of planting 1 million trees through this project.

## Objectives

---

Core Objectives and Future Plans of Plants And Pillars-

- 🔗 **Connecting**: Our aim is to connect and make people aware of the importance of trees to human mankind.
- 💵 Award: We'll randomly award our supporters to add a P2E environment to this project in order to keep the people engaged in this project which will eventually help mother Nature.
- 📚 **Education:** Our Organization will also make people aware of the current situation on Earth and educate them regarding the global issues of **SAVE SOIL**, **GLOBAL WARMING**, etc.
- 🌍 **Plants and Pillars DAO**: This will help our community to take all the important decisions in a decentralized way and help in the smooth functioning of the project.
- 🎯 **GOAL**: Our Ultimate Goal is to reduce carbon emissions by planting more and more trees and educating people about our current environmental issues.


### Implementation and MVP

---

- GitHub Repository - https://github.com/aviral10x/Plants-And-Pillars

### Sponsor Integrations -

- Polygon Dapp - The whole app is deployed on Polygon Mumbai Testnet.

- Ceramic - Ceramic is used to create the decentralized identities of the people who want to post blogs on PlantsPedia. It is used to publish the content on IPFS and for data streaming purposes.
- Link - https://github.com/aviral10x/Plants-And-Pillars/blob/main/components/Feed.js

- IPFS - Blogs for PlantsPedia are stored on IPFS through Ceramic Data Streaming. NFTs which are uploaded through NFTPort are uploaded on IPFS.
- Link - https://github.com/aviral10x/Plants-And-Pillars/blob/main/components/Feed.js

- POAP - POAP API is used for displaying and interacting with existing POAPs. Also, we will award the active supporters of the project with POAPs to encourage them.
- Link - https://github.com/aviral10x/Plants-And-Pillars/blob/main/components/Competition.js

- NFTPort - NFTPort's API is used to upload the image of the plant which is planted by the users.
- Link - https://github.com/aviral10x/Plants-And-Pillars/blob/main/components/MintNFT.js

- Covalent API - Covalent API is used for displaying the portfolio of the user.
- Link - https://github.com/aviral10x/Plants-And-Pillars/blob/main/components/CovalentDashboard.js

- Chainlink - Chainlink VRF (Verifiable Random Function)

- This is used to generate a random winner from the list of people who have planted trees on a particular day and have minted their NFTs.
- Chainlink Keepers Functions -
- This is used to automate the smart contracts by running the Verifiable Random Function to help in selecting the winner every day.
- The checkUpkeep function will check if the auction/grant ended or not.
the performUpkeep function will automatically execute the functions in a set time period when the day has ended. This function also automatically sends the amount to the winner of that day.
- Link - https://github.com/aviral10x/Plants-And-Pillars/blob/main/components/LotteryEntrance.js

- Spheron Protocol - Plants and Pillars is also deployed on Spheron.





### **Tech Stack -**
- **BACKEND -**
- IPFS
- Ceramic
- Covalent
- POAP
- Solidity
- Hardhat
- Spheron
- Chainlink

- **FRONTEND -**
- Nextjs for the frontend app
- TailwindCSS
- web3uikit by Moralis

- NOTION PAGE - https://www.notion.so/Plants-And-Pillars-95884cb336794be7ad0f883a0e771411

- Made By - AVIRAL GUPTA
- Github - https://github.com/aviral10x
- Discord - aviral23#0766
- Twitter - https://twitter.com/aviral10x

# Thank you!


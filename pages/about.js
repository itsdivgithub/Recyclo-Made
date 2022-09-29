import LotteryEntrance from '../components/LotteryEntrance'
import { useMoralis } from "react-moralis"
import React, { useEffect, useState } from "react"
import MintNFT from '../components/MintNFT';


const supportedChains = ["31337", "4"]


function About() {

    const { isWeb3Enabled, chainId } = useMoralis();

  return (
      <>
          {isWeb3Enabled ? (
              <div className=" flex flex-col justify-center items-center">
                  {supportedChains.includes(parseInt(chainId).toString()) ? (
                      <div className="flex flex-row">
                          <LotteryEntrance className="p-8" />
                      </div>
                  ) : (
                      <div>{`Please switch to a supported chainId. The supported Chain Ids are: ${supportedChains}`}</div>
                  )}
              </div>
          ) : (
              <div>Please connect to a Wallet</div>
          )}
          <MintNFT />
      </>
  )
}

export default About
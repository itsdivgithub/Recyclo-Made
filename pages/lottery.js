import LotteryEntrance from "../components/LotteryEntrance"
import { useMoralis } from "react-moralis"
import React, { useEffect, useState } from "react"
import MintNFT from "../components/MintNFT"
import Header from "../components/Header"

const supportedChains = ["31337", "4","80001"]

function Lottery() {
    const { isWeb3Enabled, chainId } = useMoralis()

    return (
        <>
            <div className="min-h-screen bg-plant bg-cover">
                
            <Header />
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
            </div>
        </>
    )
}

export default Lottery

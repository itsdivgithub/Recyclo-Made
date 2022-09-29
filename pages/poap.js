import React, { useEffect, useState } from "react"
import LoadingBar from "react-top-loading-bar"
import Competition from "../components/Competition"
import Header from "../components/Header"

function Poap() {
    const [progress, setProgress] = useState(0)
    return (
        <>
           
            
            <LoadingBar height={3} color="#f11946" progress={progress} />
            <div className="min-h-screen bg-plant bg-cover">
                
            <Header />
            <Competition/>
             </div>
        </>
    )
}

export default Poap

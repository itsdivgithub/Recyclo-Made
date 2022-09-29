import React from "react"

const TokenItem = (props) => {
    let { imageUrl, ticker, value } = props
    return (
        <>
            <div className="flex flex-col">
                <div className="border-gradient-1 font-roboto p-3 justify-center items-center">
                    <img src={imageUrl} alt="add" width="100" height="200"></img>
                    <h6 className="text-white">
                        <span id="value">{value}</span>&nbsp;
                        <span id="ticker">{ticker}</span>
                    </h6>
                </div>
            </div>
        </>
    )
}
export default TokenItem

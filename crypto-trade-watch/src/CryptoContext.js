import React, { createContext, useContext, useState } from 'react'

const Crypto = createContext();

const CryptoContextProvider = ({children}) => {
    const [currency, setCurrency] = useState("USD")
    const [symbol, setSymbol] = useState("$")

    if(currency === "USD"){
        setSymbol("$")
        console.log("USD")
    }
    else if(currency === "KSH"){
        setSymbol("Ksh")
        console.log("KSH")
    }

  return (
    <Crypto.Provider value={{currency, symbol}}>{children}</Crypto.Provider>
  )
}

export default CryptoContextProvider;

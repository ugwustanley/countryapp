import React, { useState , createContext } from 'react'


// Fetch context
export const FetchContext = createContext();

export const FetchProvider = (props) =>{
   
 const   [countries , setCountries] =  useState([])
    return(
        <FetchContext.Provider value = {[countries , setCountries]}>
            {props.children}
        </FetchContext.Provider>
    )
}


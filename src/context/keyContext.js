import React, { useState , createContext } from 'react'


 //keyword to search context
 export const KeyContext = createContext();

 export const KeyProvider = (props) =>{
     const   [key , setKey] =  useState('all')
        return(
            <KeyContext.Provider value = {[key , setKey]}>
                {props.children}
            </KeyContext.Provider>
        )
    }
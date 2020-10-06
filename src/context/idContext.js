import React, { useState , createContext } from 'react'


 //fetch id context
 export const IdContext = createContext();

 export const IdProvider = (props) =>{
     const   [id , setId] =  useState({id: 0 , pop: false})
        return(
            <IdContext.Provider value = {[id , setId]}>
                {props.children}
            </IdContext.Provider>
        )
    }
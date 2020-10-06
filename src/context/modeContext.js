
import React, { useState , createContext } from 'react'


//Darkmode context

export const ModeContext = createContext();

export const ModeProvider = (props) =>{
    const   [mode , setMode] =  useState(true)
       return(
           <ModeContext.Provider value = {[mode , setMode]}>
               {props.children}
           </ModeContext.Provider>
       )
   }

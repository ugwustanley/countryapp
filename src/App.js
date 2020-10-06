import React ,{useContext} from 'react';
import Countries from './component/countries';
import Header from './component/header'
import Input from './component/input'
import {ModeContext} from './context/modeContext'
import './App.css'


function App(){
   //mode context
   const [mode , setMode] = useContext(ModeContext)
   //mode change handler
   const changeMode = () =>{  
   const style =  mode?({
      backgroundColor : "hsl(207, 26%, 17%)",
      minHeight:"100vh",
      color:'#fff'
      }): ({
      color:'#121212',
      backgroundColor: ' rgba(0,0,0,0.05)',
      minHeight:"100vh"
      })
      return style
  }
      return (
       
        <div style={changeMode()}>

          <Header />
          <Input />
          <Countries />
                        
        </div>      
      );
    }
    
export default App;
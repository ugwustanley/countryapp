import React, { useContext } from 'react';
import {ModeContext} from '../context/modeContext'
const Header = () =>{
//usecontext for mode switch 
const [mode , setMode] = useContext(ModeContext)

//switch mode (dark/light)
const switchMode = () =>{
   (mode? setMode(false) : setMode(true))
}
//handle mode change(dark/light)
const changeMode = () =>{
    const style = mode?{backgroundColor:'hsl(209, 23%, 22%)'} :{ backgroundColor :'#fff'};
    return style
}
//header to be returned
    return(
        <div className="p-3 header" style={changeMode()}>
        
         <h5 className="where">Where in the World?</h5>
         <div  className="mode" onClick = {switchMode}> 
         { mode ?   <b><i className="fas fa-star"></i> Light Mode</b> : <b><i className="fas fa-moon"></i> Dark Mode</b>   }
         </div>
         </div>
       
    )
}
  
export default Header;

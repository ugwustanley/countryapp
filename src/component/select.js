import React, { useContext } from 'react';
import {KeyContext}  from '../context/keyContext';
import {ModeContext} from '../context/modeContext'
import {IdContext} from '../context/idContext';
const Select = () =>{
  const  [key , setKey] = useContext(KeyContext)
  const  [mode , setMode] = useContext(ModeContext)
  let [id , setId]  = useContext(IdContext)
  const handleSelect = (e) =>{
      e.preventDefault()
      setId({id:id.id , pop: false})
      let value = e.target.value
      setKey(`region/${value}`)
  }
  //handle mode change(dark/light)
   const changeMode = () =>{
    const style = mode?({boxShadow:'none',color:'#fff',backgroundColor:'hsl(209, 23%, 22%)'}) :{color:'#444',backgroundColor:'#fff'};
    return style
  }
    return(
        <div className="selection" style={changeMode()} >
            <select onChange = {handleSelect} style={changeMode()} className="py-2 pr-2 pl-2" >
                <option  defaultValue="Filter by region" selected disabled>Filter by region</option>
                <option  value="africa">Africa</option>
                <option  value="americas">America</option>
                <option  value="asia">Asia</option>
                <option  value="europe">Europe</option>
                <option  value="oceania">Oceania</option>
            </select>
        </div>
     );
}
    
export default Select;

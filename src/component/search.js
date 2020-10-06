import React, { useContext,useState } from 'react';
import {KeyContext}  from '../context/keyContext';
import {ModeContext} from '../context/modeContext'
import {IdContext} from '../context/idContext';
const Search = () =>{

  const  [key , setKey] = useContext(KeyContext)
  let [id , setId]  = useContext(IdContext)
  const  [mode , setMode] = useContext(ModeContext)
  const  [input  , setInput] = useState('')

  const  handleChange = (e) =>{
      e.preventDefault()
      let value = e.target.value
      setInput(value)
  }
  const handleSubmit = async (e) =>{
      e.preventDefault()
      setId({id:id.id , pop: false})
    const setting = await  setKey(`name/${input}`)
    
  }
  //handle mode change(dark/light)
  const changeMode = () =>{
    const style = mode?({boxShadow:'none',color:'#fff',backgroundColor:'hsl(209, 23%, 22%)'}) :{color:'#444',backgroundColor:'#fff'};
    return style
  }
    return(
        <div className="SearchBox" style={changeMode()} >
            <i onClick={handleSubmit} className="fas fa-search"></i>
            <form onSubmit={handleSubmit}>
            <input type="text" value={input} onChange={handleChange}  placeholder="Search for a country..." className="px-4 py-2 input-box"  /> 
            </form>
           
          </div>     
     );
}
      
export default Search;

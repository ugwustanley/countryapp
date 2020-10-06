import React , {useContext} from 'react'
import {ModeContext} from '../context/modeContext'
import {FetchContext} from '../context/fetchContext';
import {IdContext} from '../context/idContext'
const Country = ({ flag , population, index ,name , region , capital}) =>{
    //mode change context
    const [mode , setMode] = useContext(ModeContext)
    //id context
    const [id , setId]  = useContext(IdContext)
    const [countries , setCountries] = useContext(FetchContext)
    //mode change handler
    const changeMode = () =>{  
    const style =  mode?({
       backgroundColor : "hsl(209, 23%, 22%)",
       color:'#fff',
       border:'none'
       }): ({
       color:'#444'
       })
       return style
   }
   //handle click
   const clickHandler  = async (e) =>{
        const  value = await e.target.id  
         const x =     await setId({id: value , pop: true} )
   }
    return(
        <div id={index} key={index} className="country" onClick={clickHandler} style={changeMode()}>
                   <img id={index} src={flag} onClick={clickHandler}   alt="img"></img>
                            
                    <div id={index} className="text">
                           <h4 id={index}>{ name}</h4>
                           <p  id={index}><b>Population:</b> {population}</p>
                           <p  id={index}><b>region:</b> {region}</p>
                           <p  id={index}><b>Capital:</b> { capital }</p>
                    </div>
               </div>
    )
}

export default Country;
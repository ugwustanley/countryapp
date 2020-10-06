import React , {useContext } from 'react';
import {FetchContext} from '../context/fetchContext';
import {ModeContext} from '../context/modeContext'
import { KeyContext } from '../context/keyContext'
import {IdContext} from '../context/idContext';
const Detail = () =>{
    let [id , setId]  = useContext(IdContext)
    const  [key , setKey] = useContext(KeyContext)
    const [countries , setCountries] = useContext(FetchContext)
    const  [mode , setMode] = useContext(ModeContext)
    id = id.id
//handle mode change(dark/light)
const changeMode = () =>{
  const style = mode?({color:'#fff',backgroundColor:'hsl(209, 23%, 22%)',boxShadow: '1px 1px 2px hsl(209, 10%, 22%)'}) :{color:'#000',backgroundColor : '#fff'};
  return style
}
//switch to border
 const viewBorder = async (e) =>{
   const val = e.target.innerHTML;
   
   await countries.map((country , index) => country.alpha3Code === val? setId({id:index , pop:true}) : id )
 }
    return(       
        <div className="detail-box">
           <div className="main-details">
              <button onClick={() =>{setId({id: id , pop :false})}} style={changeMode()} className="btn button px-3 py-1"><i className="fas fa-arrow-left"></i>  Back</button>
           <div className="details">
           <div className="img-box">
               <img className="pop-img" src={countries[id].flag} alt="country flag"></img>        
           </div>
           <div className="messages">
               <h5 className="mt-1">{countries[id].name}</h5>
               <p><b>Native Name:</b><span>{countries[id].nativeName}</span></p> 
               <p><b>Country Code:</b><span>{countries[id].callingCodes}</span></p> 
               <p><b>Capital:</b><span>{countries[id].capital}</span></p> 
               <p><b>Area:</b><span>{countries[id].area}</span></p>
               <p><b>Population:</b><span>{countries[id].population}</span></p> 
               <p><b>Region:</b><span>{countries[id].region}</span></p> 
               <p><b>Subregion:</b><span>{countries[id].subregion}</span></p>
               <p><b className="mr-3">Borders:</b><div className="borders">{countries[id].borders.map(border => <button style={changeMode()} onClick={viewBorder} className="btn mb-2 mt-1  px-1 py-0 mr-3">{border}</button>)}</div></p> 
        </div>
       </div>
      </div>
   </div>
     );
}

export default Detail;
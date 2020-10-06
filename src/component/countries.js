import React, { useContext , useEffect } from 'react'
import { FetchContext } from '../context/fetchContext'
import { KeyContext } from '../context/keyContext'
import {IdContext} from '../context/idContext'
import Detail from './detail'
import Country from './country'
import Loading from './loading'


    const Countries = () =>{
    const [countries , setCountries]  =  useContext(FetchContext)  
    const [id , setId]  =  useContext(IdContext) 
    const value= useContext(KeyContext)   
    const API = 'https://restcountries.eu/rest/v2/' + value[0] ;
     //api fetch handler
    useEffect(  () => {
       fetch(API)
        .then(res => res.json())
        .then(data => {setCountries(data);console.log(data)})
        .catch(err => console.log(err)  )
    } , [setCountries , API]);

    return(
        <div className="countries">
            {countries[0] !== undefined ?id.pop == true? <Detail /> :  countries.map( (country, index) => (
               <Country {...country}  index = {index} />

           )) : <Loading />}

        </div>
    )
}

export default Countries;
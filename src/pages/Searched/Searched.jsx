import React from 'react'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Searched.scss'


function Searched() {

    const params = useParams()
    const [detail,setDetail] = useState([])

    const GetSingleCountry = async(name)=>{
        const api = await fetch(`https://restcountries.com/v3.1/name/${name}`)
        const data = await api.json()
        setDetail(data)
        
    }

    useEffect(()=>{
        GetSingleCountry(params.name)
    },[params.name])

    



    return (
        <div className="searched-wrapper">
            { detail.map((item)=>
            <>
            <div className='flags'>
                <div className="coat-of-arm">
                    <img src={item.coatOfArms.png} alt=''></img>
                </div>
                <div className="mainflag">
                    <img src={item.flags.png} alt=''></img>
                </div>
            </div>
            <div className="info">
                <h3>Name:{item.name.common}</h3>
                <h3>Capital:{item.capital[0]}</h3>
                <h3>Region:{item.region}</h3>
                <h3>Subregion:{item.subregion}</h3>
            

                <Link to='/'><button>back</button></Link>

            </div>
            </>
            )}


            
            
        </div>
        
    )
}

export default Searched

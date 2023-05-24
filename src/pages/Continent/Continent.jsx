import React from 'react'
import {useParams} from 'react-router-dom'
import { useState,useEffect } from 'react'
import Card from '../../components/Card/Card'
import {Link} from 'react-router-dom'
import './Continent.scss'

function Continent() {

    const params = useParams()
    const [detail,setDetail] = useState([])

    const GetContinent= async(name)=>{
        const api = await fetch(`https://restcountries.com/v3.1/region/${name}`)
        const data = await api.json()
        setDetail(data)
        console.log(detail)
    }

    useEffect(()=>{
        GetContinent(params.region)
    },[params.region])

    return (
        <div class='home-container'>
            {
                detail.map(item=>
                    <Link to={'/search/' + item.name.common}>
                    <Card key={item.name.common} flag={item.flags.png}
                    name={item.name.common}
                    info={item.population}/>
                    </Link>)
            } 
            
        </div>
    )
}

export default Continent

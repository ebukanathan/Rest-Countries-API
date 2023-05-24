import React from 'react'
import { useState,useEffect} from "react";
import "./Home.scss"
import Card from "../../components/Card/Card"
import { Link } from 'react-router-dom'

function Home() {

    const [allcountries,setAllcountries] = useState([])


    const Getall = async()=>{
        const api = await fetch("https://restcountries.com/v3.1/all");
        const data = await api.json()
        console.log(data)
        
        setAllcountries(data)
    }

    useEffect(() => {
        Getall()
 

    },[])


    return (
        <div className="home-container"> 
            {allcountries.map((item)=>
            <Link to={'/search/' + item.name.common}>
            <Card  key={item.name.common} flag={item.flags.png} name={item.name.common} info={item.population}/>
            </Link>
            )}
            
        </div>
    )
}

export default Home

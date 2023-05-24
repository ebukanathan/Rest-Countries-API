import React from 'react';
import "./Country.scss"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


export default function Search() {

    const [input,setInput] = useState('')
    const[search,setSearch] = useState('')
    

    const navigate = useNavigate()

    const handleSubmit=(e)=>{
        e.preventDefault()
        
        navigate('/search/' + input)
        setInput('')
        
    
    }

   
    
 



    return (
        <nav className="nav">
            
            <form className="search-bar" onSubmit={handleSubmit}>
            <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}placeholder="search Country..."></input>
        
            
        </form>

        
    
        </nav>
    )
}

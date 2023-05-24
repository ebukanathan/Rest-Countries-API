import React from 'react';
import "./Search.scss"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Region from '../Region/Region'
import Country from '../Country/Country'

export default function Search() {

    
   
    
 



    return (
        <nav className="nav">
            <div className="search-bar">
            <Country/>
            <Region/>
            </div>
            
    
        </nav>
    )
}

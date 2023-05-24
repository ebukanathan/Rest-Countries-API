import React from 'react'
import './Card.scss'

export default function Card({name,info,flag,map}) {

    return (
        <div className="card-container"> 
            <img src={flag}/>
            <div className="card-body">
    <h3 className="card-title">{name}</h3>
    <h4 className="card-infos">Pop.:{info}</h4>
    <div>{map}</div>
            </div>

            
        </div>
    )
}

import React from 'react'
import{ useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select'






function Region() {

    const options=[
        {value:"Africa",label:"Africa"},
        {value:"South America",label:"South America"},
        {value:"North America",label:"North America"},
        {value:"Europe",label:"Europe"},
        {value:"Asia",label:"Asia"},
        {value:"Oceania",label:"oceania"},
    ]
    
    const navigate = useNavigate()

    const [continent,setContinent] = useState('')

   
    
    const handleSelect=(selectedOption)=>{
       
        //setContinent(selectedOption.value)

         navigate('/region/' + selectedOption.value)
    

          
        

        
    
    }

    return (
        <div className="search-bar select">
            <Select options={options}  value={options.value} onChange={handleSelect}/>
            
        </div>
    )
}

export default Region

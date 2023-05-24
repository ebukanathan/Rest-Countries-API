import React from 'react'
import Home from '../Home/Home'
import Searched from '../Searched/Searched'
import Continent from '../Continent/Continent'

import { Routes,Route} from 'react-router-dom'


function Page() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/search/:name" element={<Searched/>}/>
            <Route path="region/:region" element={<Continent/>}/>
        </Routes>
    )
}

export default Page

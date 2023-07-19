import React from 'react'
import { useState,useEffect} from "react";
import "./Home.scss"
import Card from "../../components/Card/Card"
import { Link } from 'react-router-dom'
import ReactPaginate from 'react-paginate';


function Home() {

    const [allcountries,setAllcountries] = useState([])
    const [pagenumber,setPagenumber] = useState(0)


    const Getall = async()=>{
        const api = await fetch("https://restcountries.com/v3.1/all");
        const data = await api.json()
        console.log(data)
        
        setAllcountries(data.slice(0,100))
    }

    const userPerPage = 10;
    const pagesVisited = pagenumber * userPerPage

    const displaycountries = allcountries.slice(pagesVisited,pagesVisited + userPerPage)
    console.log(displaycountries)
    console.log(allcountries)


    useEffect(() => {
        Getall()
 

    },[])

    const pageCount = Math.ceil(allcountries.length/userPerPage)
    const changePage=({selected})=>{
        setPagenumber(selected)
    }

    return (
       <div className="home">
        
         <div className="home-container"> 

                {displaycountries.map((item)=>
                <Link to={'/search/' + item.name.common}>
                <Card  key={item.name.common} flag={item.flags.png} name={item.name.common} info={item.population}/>
                </Link>
                )}

                </div>

                <ReactPaginate
                previousLabel={'Previous'}
                nextLabel={'Next'}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={'paginationBttns'}
                previousLinkClassName={'previousBttn'}
                nextLinkClassName={'nextBttn'}
                disabledClassName={'paginationDisabled'}
                activeClassName={'paginationActive'}

                />
       </div>
    )
}

export default Home

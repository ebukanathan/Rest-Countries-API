import Page from './pages/Page/Page'
import { useState } from "react"
import Search from './components/Search/Search'
import { BrowserRouter} from 'react-router-dom'
import Country from './components/Country/Country' 
import Header from './components/Header/Header'
import Searched from './pages/Searched/Searched'
import "./App.scss"


function App() {

  const [isDarkMode,setIsDarkMode] = useState(false)

  const toggleDarkMode =()=>{
    console.log('clicked')
    setIsDarkMode(!isDarkMode)
  
  }

  

  return (
    <BrowserRouter>
      <div  className={isDarkMode?'app':'app-dark'}>
      <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode}/>
      <Search/>
      

      <Page/>

      </div>
    </BrowserRouter>
      
  )
}

export default App

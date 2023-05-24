import Page from './pages/Page/Page'
import Search from './components/Search/Search'
import { BrowserRouter} from 'react-router-dom'
import Country from './components/Country/Country' 

function App() {
  

  return (
    <BrowserRouter>
      <Search/>
      

      <Page/>

    </BrowserRouter>
      
  )
}

export default App

import './App.css'
import NavBar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import {BrowserRouter , Routes,Route} from 'react-router'
import { Container } from 'react-bootstrap'
import ItemDetailContainer from './components/ItemDetailContainer'

function App() {

  return (
    <>
      
        <BrowserRouter className="" >
          <NavBar/>
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/categorias/:id" element={<ItemListContainer />} />
            <Route path="/pdetaill/:id" element={<ItemDetailContainer />} />
          </Routes>
        </BrowserRouter>
    
    </>
    
  )
}

export default App

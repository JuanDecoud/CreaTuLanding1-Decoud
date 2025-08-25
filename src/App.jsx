import './App.css'
import NavBar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'

function App() {


  return (
    <>
      <div class ="container-fluid w-100 h-100 p-2">
        <NavBar/>
        <ItemListContainer text={"Bienvenido a la web "}/>

      </div>

     
    </>
    
  )
}

export default App

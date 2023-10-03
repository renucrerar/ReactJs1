import {useState} from "react"
import Navbar from "./components/nav/Navbar" 
import ItemListContainer from "./components/ItemListContainer"
import Home from "./components/home/Home"







function App() {
  

  return (
    <>
    
     <Navbar/>  
 
     <ItemListContainer greet={"Carrito"}/>
    
     <Home/>

    </>
    
   ) 

    
  
}

export default App

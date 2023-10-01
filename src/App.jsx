import {useState} from "react"
import Navbar from "./components/nav/Navbar" 
import Home from "./components/home/Home"
import CartWidget from "./components/CartWidget"






function App() {
  

  return (
    <>
  
     <Navbar />
     
     <Home/>
  
     <CartWidget/>
    </>
   ) 

    
  
}

export default App

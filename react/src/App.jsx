import {useState} from "react"
import Navbar from "./components/nav/Navbar" 
import ItemListContainer from "./itemList/ItemListContainer"
import Home from "./components/home/Home"








function App() {
  

  return (
    <>
    
     <Navbar/>  
 
     <ItemListContainer/>
    
     <Home/>

    </>
    
   ) 

    
  
}

export default App

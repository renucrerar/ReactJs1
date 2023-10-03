
      {/*  import React, { useEffect, useState } from 'react'
    import ItemList from "./ItemList"
import { products } from '../productsMock'
    

    
  

 const [items, setItems] = useState([])

      useEffect (( )=>{

        const tarea = new Promise ((resolve,reject)=>{
          resolve (products)
         });
          
      tarea
      .then((res)=> setItems ( res ) )
      .catch((error)=>console.log(error))
      
      } ,[])
      
    console.log(items)

   return (  <ItemList items={items} />)*/}
   import styles from "../components/ItemListContainer.module.css"
const ItemListContainer = ({greet}) => {
  
  return (
<div className={styles.cartel}>
    <h2>{greet}</h2>

   {/* <img src={producto1} alt="pepito" />
        <h2>{items[0].titulo}</h2>
        <p>Alfajor con cobertura de chocolate y triple relleno, con chips de chocolate. $450</p>*/}
 </div>
  )
}

export default ItemListContainer


  
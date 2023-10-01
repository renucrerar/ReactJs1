import { useState } from 'react';
import styles from "../components/nav/Navbar.module.css"
import ItemListContainer from "./ItemListContainer";


const CartWidget = () => {
  const [saludo, setSaludo]= useState (false);
  return (
    <div>
    <h2>
   <button className={styles.button} onClick={()=>setSaludo(!saludo)} > Saludo </button>
</h2>
{
    saludo && <ItemListContainer/>
    }
    </div>
  )
}

export default CartWidget
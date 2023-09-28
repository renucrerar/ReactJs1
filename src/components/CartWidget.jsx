import { useState } from 'react';
import styles from "../components/nav/Navbar.module.css"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';
import ItemListContainer from "./ItemListContainer";

const CartWidget = () => {
  const [saludo, setSaludo]= useState (false);
  return (
    <div>
    <button className={styles.button} onClick={()=>setSaludo(!saludo)} ><Badge badgeContent={4} color="primary"><ShoppingCartIcon/>
      </Badge></button>

{
    saludo && <ItemListContainer/>
    }
    </div>
  )
}

export default CartWidget
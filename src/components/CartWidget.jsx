import { useState } from 'react';
import styles from "../components/nav/Navbar.module.css"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';


const CartWidget = () => {
  const [saludo, setSaludo]= useState (false);
  return (
    <div>
    <h2>
   <button className={styles.button} onClick={()=>setSaludo(!saludo)} > <Badge badgeContent={4} color="primary"><ShoppingCartIcon/>
      </Badge></button>
</h2>
    </div>
  )
}

export default CartWidget
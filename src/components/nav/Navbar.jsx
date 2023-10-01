import {useState} from 'react';
import styles from "./Navbar.module.css"
import logo from "../imagenes/alfajor.png"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';



  function Navbar() {
  return (
      
    <nav className={styles.navbar}>

      <nav className={styles.navbar}>

        <img className={styles.logoNav} src={logo} alt="logo de mi pagina" />
     <div>
     <Badge badgeContent={4} color="primary"><ShoppingCartIcon/>
      </Badge>
  </div>
    <ul className={styles.navList}>
      <li className={styles.navitem}><a href="#">Inicio</a></li>
      <li className={styles.navitem}><a href="#">Contacto</a></li>
    </ul>
  </nav></nav>

  );
}


export default Navbar;

import {useState} from 'react';
import styles from "./Navbar.module.css"
import logo from "../imagenes/alfajor.png"




  function Navbar() {
  return (
      
    <nav className={styles.navbar}>

      <nav className={styles.navbar}>
        <img className={styles.logoNav} src={logo} alt="logo de mi pagina" />
     <div>
  </div>
    <ul className={styles.navList}>
      <li className={styles.navitem}><a href="#">Inicio</a></li>
      <li className={styles.navitem}><a href="#">Contacto</a></li>
    </ul>
  </nav></nav>

  );
}


export default Navbar;

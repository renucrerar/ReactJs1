import {useSate} from "react";
import producto from "../imagenes/terrabusi.jpg"
import producto1 from "../imagenes/pepito.png"
import producto2 from "../imagenes/aguila.png"
import styles from "./Home.module.css"
import CounterContainer from "../counter/CounterContainer"
import ItemList from "../../itemList/ItemList"


function Home() { 
  return ( 
    <div>
   <ItemList/>
        <div className={styles.titulo}>
  <h1>Alfajores Argentinos</h1>
   </div>
    <div className={styles.cardcontainer}>
    
    <div className={styles.card}>
        <img src={producto} alt="terrabusi" />
        <h2>Terrabusi</h2>
        <p>Alfajor con cobertura de chocolate negro y doble relleno de dulce de leche. $350</p>

        <CounterContainer stock = {5} />
    
    </div>
    <div className={styles.card}>
      
        <img src={producto1} alt="pepito" />
        <h2>Pepitos</h2>
        <p>Alfajor con cobertura de chocolate y triple relleno, con chips de chocolate. $450</p>

        <CounterContainer stock = {9} />

    </div>
    <div className={styles.card}>
        <img src={producto2} alt="Aguila" />
        <h2>Aguila</h2>
        <p>Alfajor con cobertura de chocolate, con doble relleno, de crema y dulce de leche. $450</p>

         <CounterContainer stock = {11} />
             
    </div>
    
  
</div>
 </div>
  );

}

export default Home
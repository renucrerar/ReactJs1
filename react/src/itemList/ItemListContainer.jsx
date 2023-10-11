
   import styles from "./ItemListContainer.module.css"
   import { useState, useEffect } from "react";
import { productos } from "../productsMock";
import ItemList from "./ItemList";

const ItemListContainer = ({greet}) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // const tarea2 = fetch("api")
    // tarea2.then().catch()
    
    const tarea = new Promise((resolve, reject) => {
      resolve(productos);
      // reject("algo salio mal")
    });

    tarea.then((res) => setItems(res)).catch((error) => console.log(error));
  }, []);

  return <ItemList items={items}  />;


<div className={styles.cartel}>
    <h2>{greet}</h2>

 </div>

}

export default ItemListContainer


  
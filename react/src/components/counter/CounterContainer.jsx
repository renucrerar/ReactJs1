import React, { useState } from 'react';
import CounterPresentacional from './CounterPresentacional';
const CounterContainer = ({stock})=> {
const [counter, setCounter] = useState(0)


 const sumar = () => {
  if (counter < stock){
 setCounter (counter + 1)
}else{
  alert ("No hay mas alfajores en stock")
}
 }
const restar = () =>{
    if (counter > 1){
        setCounter (counter - 1)
    }
}


 return(
    <CounterPresentacional sumar = {sumar} restar = {restar} counter = {counter} />
 )
}
  
export default CounterContainer
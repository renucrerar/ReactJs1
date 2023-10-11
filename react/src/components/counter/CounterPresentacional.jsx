import React from 'react'

const CounterPresentacional = ({sumar, restar, counter}) => {
  return (
    <div>
    <button onClick = {sumar} > agregar </button>
    <h4> {counter} </h4>
    <button onClick = {restar} > eliminar</button>
</div>
  )
}

export default CounterPresentacional
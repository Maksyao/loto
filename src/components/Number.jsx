import React, { useState } from 'react'

const Number = ({ number, choosenNumbers, list }) => {
  const [activeItem, setActiveItem] = useState(false);
  const setChoise = (activeItem, number,list) => {
    if (list === '1') {
      if (!activeItem) {
        if (choosenNumbers.length === 8) {
          alert(`Вы уже выбрали все доступные числа из поля ${list}`)
        } else {
          choosenNumbers.push(number);
          setActiveItem(!activeItem);
        }
      } else {
        choosenNumbers.splice(choosenNumbers.indexOf(number), 1);
        setActiveItem(!activeItem);
      }
    }else{
      if (!activeItem) {
        if (choosenNumbers.length === 1) {
          alert(`Вы уже выбрали все доступные числа из поля ${list}`)
        } else {
          choosenNumbers.push(number);
          setActiveItem(!activeItem);
        }
      } else {
        choosenNumbers.splice(choosenNumbers.indexOf(number), 1);
        setActiveItem(!activeItem);
      }
    }
  }
  return (
    <div className={`numberButton ${activeItem ? 'selected': ''}`} onClick={() => setChoise(activeItem, number,list)}>{number}</div>
  )
}

export default Number
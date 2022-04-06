import React from 'react'

const Button = ({ children, choosenNumbers, winningCombination }) => {
  const checkWin = (choosenNumbers) => {
    if ((choosenNumbers[0].length === 8)&&(choosenNumbers[1].length === 1)) {
      generateCombination(winningCombination);
      let count = 0;
      choosenNumbers[0].forEach(element => {
        if (winningCombination[0].indexOf(element) !== -1) {
          count++;
        }
      });

      if ((count > 3) || ((count === 3) && (choosenNumbers[1][0] === winningCombination[1][0]))) {
        alert("Удача на вашей стороне!");
      } else {
        alert(`Не везёт в лото - повезёт в любви! \n Выигрышная комбинация: [${winningCombination[0]}],[${winningCombination[1][0]}]`)
      }
      console.log(winningCombination);
    }else{
      alert('Вы выбрали недостаточное количество чисел');
    }
  }
  const generateCombination = (winningCombination) => {
    winningCombination[0] = [];
    winningCombination[1] = [];
    while (winningCombination[0].length < 9) {
      const temp = Math.floor(Math.random() * 19) + 1;
      if (winningCombination[0].indexOf(temp) === -1) {
        winningCombination[0].push(temp);
      }
    }
    winningCombination[1].push(Math.floor(Math.random() * 2) + 1);
  }
  return (
    <div onClick={() => checkWin(choosenNumbers)} className='Button'>{children}</div>
  )
}

export default Button
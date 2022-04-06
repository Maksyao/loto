import { Number, Button } from "./components";


function App() {
  const firstNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
  const secondNumbers = [1, 2];
  const choosenNumbers = [[], []];
  const winningCombination = [[], []];
  return (
    <div className="container">
      <h1>Билет 1</h1>
      <p>Поле 1 <span>Отметьте 8 чисел.</span></p>
      <section>
        {firstNumbers.map(num => (
          <Number choosenNumbers={choosenNumbers[0]} number={num} key={'first' + num} list='1' />
        ))}
      </section>
      <p>Поле 2 <span>Отметьте 1 число.</span></p>
      <section>
        {secondNumbers.map(num => (
          <Number choosenNumbers={choosenNumbers[1]} number={num} key={'second' + num} list='2' />
        ))}
      </section>
      <Button
        choosenNumbers={choosenNumbers}
        winningCombination={winningCombination}
      >Показать результат</Button>
    </div>
  );
}

export default App;

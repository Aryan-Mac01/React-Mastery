import { useState } from "react";

function App() {
  let [counter, setCounter] = useState(15); // kyuki counter ki value change honi hai isliye we will use 'let' instead of 'const'

  /*  useState ->  jaise kisi cheez ko UI me change karna ho tb useState use karte, ye state change kardeta
      isme 'counter' ek value hai jo ye return karega
      'setCounter' ek function hai jo ye return karega
  */

  //let Counter = 15

  const addValue = () => {
    counter = counter + 1;
    if (counter <= 20) {
      setCounter(counter); // wo function ko idhr call karke value print
    }
    
    

    /* ye counter ki value log me toh change kardega but samne website ke UI pe wo 15 hi rahegi, usko change karne ke liye 
    usko sambhalne ke liye hooks aaye*/
  };

  const decValue = () => {
    counter = counter - 1;
    if (counter >= 0) {
      setCounter(counter);
    }
    
  };

  return (
    <>
      <h1>Time to React</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <button onClick={decValue}>Dec value</button>
    </>
  );
}

export default App;

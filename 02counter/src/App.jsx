

function App() {
  
  let Counter = 15

  const addValue = () => {
    console.log("clicked", Math.random());
    Counter = Counter+1;
  }

  return (

    

    <>
      <h1>Time to React</h1>
      <h2>Counter value: {Counter}</h2>

      <button
      onClick={addValue}
      >Add value</button>
      <button>Dec value</button>
    </>
  )
}

export default App

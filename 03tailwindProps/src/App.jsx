import Card from './components/card'
import Figure from './components/figure'
import './App.css'

function App() {

  let myObj = {
    username: "Aryan",
    age: 21
  }

  return (
    <>
      <h1 className='bg-green-400 text-black rounded-xl'>Tailwind Test</h1>
      <Figure/>
      <Card username="Aryan"/>
      <Card username="Mishra"/>



    </>
  )
}

export default App

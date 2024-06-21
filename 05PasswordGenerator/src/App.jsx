import { useState, useCallback } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [noAllowed, setNoAllowed] = useState(false);
  const [character, setCharacter] = useState(false);
  const [password, setPassword] = useState("");

  /*
    we have to use passwordGenertor function again and again (in length, in numberAllowed, in Character and others too) and to make our task easy
    we will use the hook useCallback, it will call only the required part of the function and will decrease the complexity.


    syntax -> useCallback(fn, dependencies) dependencies here are numberAllowed, length and Character on which the hook is dependent
  */
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (noAllowed) {
      str += "0123456789";
    }
    if (character) {
      str += "!@#$%^&*(){}~`";
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass = str.charAt(char);
    }
    setPassword(pass);
  }, [length, noAllowed, character, setPassword]);

  return (

      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
          />
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>
            Copy
          </button>
        </div>
      </div>
    
  );
}

export default App;

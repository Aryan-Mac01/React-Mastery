import React from "./React";

//Vite is a bundler for react which means it loads faster and collect the vital packages in a bundle <npm create vite@latest>

function App() {

  const username = "Aryan mishra"

  return (
    <>
      <h1>Full of Reaction | AM</h1>
      <h1>{username}</h1>
      <React />
    </> //These are known as fragments and are used to wrap multiple components together so that they can be rendered together

    //<h1>{username}</h1> this is known as expression and this is evaluated expression because we are using the final outcome of the js variable


  );
}

export default App;

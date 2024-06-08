import React from "./React";

//Vite is a bundler for react which means it loads faster and collect the vital packages in a bundle <npm create vite@latest>

function App() {
  return (
    <>
      <h1>Full of Reaction | AM</h1>
      <React />
    </> //These are known as fragments and are used to wrap multiple components together so that they can be rendered together
  );
}

export default App;

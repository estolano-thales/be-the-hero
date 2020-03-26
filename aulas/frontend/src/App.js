import React from 'react';
// import React, { useState } from 'react';

import './global.css' // CSS q limpa o css default do browser

// import Header from './Header'
// import Logon from './pages/Logon'
import Routes from './routes'

// um Componente no react é uma Função que retorna HTML
function App() {
  // // let counter = 0
  // const [counter, setCounter] = useState(0) // useState retorna Array com 2 posições
  //                                           // Array[valor, funcaoDeAtualizacao] 
  // function increment() {
  //   // counter +=1
  //   // console.log(counter)
  //   setCounter(counter + 1)    
  // }

  return (
    // <Header title="Semana Omnistack"/>
    // <Header>Semana Omnistack</Header>
    // <div>
    //   <Header>Contador: {counter}</Header>
    //   <button onClick={increment}>Incrementar</button>
    // </div>
    
    // <Logon />
    <Routes />
  );
}

export default App;
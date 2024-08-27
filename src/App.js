import React from 'react';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <main>
        <h1>Bienvenido a CR Consulting SAS</h1>
        <p>Tu aliado estrategico</p>
      </main>
    </div>
  );
}

export default App;

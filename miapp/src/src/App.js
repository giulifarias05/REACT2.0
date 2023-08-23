import React from 'react';
import logo from './logo.svg';
import './App.css';
import CardComponent from './components/CardComponent'; 

function App() {
  return (
    <div className="app-container">
    {/* Usa el componente CardComponent */}
    <CardComponent />
  </div>
  );
}

export default App;

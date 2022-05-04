import { useState } from 'react'
import logo from './logo.svg'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {

  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer saludo={'Usted ha ingresado al mundo del Real Madrid'}/>
     {}
    </div>
  )
}

export default App

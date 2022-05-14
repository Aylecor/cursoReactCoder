import { useState } from 'react'
import logo from './logo.svg'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './Container/ItemListContainer'

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

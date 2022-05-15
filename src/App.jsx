import { useState } from 'react'
import logo from './logo.svg'
import { BrowserRouter } from 'react-router-dom'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './Container/ItemListContainer'

function App() {

  return (
    <BrowserRouter> 
    <div className="App">
      <NavBar/>
      <ItemListContainer saludo={'Usted ha ingresado al mundo del Real Madrid'}/>
     {}
    </div>
    </BrowserRouter>
  )
}

export default App

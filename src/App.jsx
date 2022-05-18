import { useState } from 'react'
import logo from './logo.svg'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './Container/ItemListContainer'
import ItemDetailContainer from './Container/ItemDetailContainer/ItemDetailContainer'

function App() {

  return (
    <BrowserRouter> 
    
    <div className="App">
      <NavBar/>
     <Routes>
      <Route path="/" element = { <ItemListContainer  saludo={'Usted ha ingresado al mundo del Real Madrid'} /> } />
      <Route path="/category/:id" element = { <ItemListContainer  saludo={'Hola soy el componente contenedor pos 1'} /> } />                        
      <Route path="/detail/:id" element = { <ItemDetailContainer /> } />
      {}           
      </Routes>

    </div>
    </BrowserRouter>
  )
}

export default App

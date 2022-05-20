import { useState } from 'react'
import logo from './logo.svg'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './Container/ItemListContainer'
import ItemDetailContainer from './Container/ItemDetailContainer/ItemDetailContainer'
import CartWidget from './components/CartWidget/CartWidget'

function App() {

  return (
    <BrowserRouter> 
    <div className="App">
      <NavBar/>
        <Routes>
          <Route path="/" element = { <ItemListContainer  saludo={'Usted ha ingresado al mundo del Real Madrid'} /> } />                       
          <Route path="/category/:id" element = { <ItemListContainer  saludo={'Componente contenedor 1'} /> } /> 
          <Route path="/detail/:id" element = { <ItemDetailContainer /> } />
          <Route path="/cart" element = { <CartWidget /> } />  
          <Route path="/*" element = { <Navigate to='/' replace  /> } />
          {} 
        </Routes>  
    </div>
    </BrowserRouter>
  )
}

export default App

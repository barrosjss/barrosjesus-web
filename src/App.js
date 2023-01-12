import React from 'react'
import './App.css'

import Header from './components/header/Header.jsx'
import Home from './components/home/Home'
import About from './components/about/About'


export default function App() {
  return (
    <>
      <Header />
      <main className='main'>
        <Home />
        <About />
      </main>
    </>
  )
}

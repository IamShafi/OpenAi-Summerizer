import React from 'react'
import './App.css'
import Header from './components/Header'
import Form from './components/Form'

const App = () => {
  return (
    <main>
        <div className="main">
            <div className="gradient"/>
        </div>
        <div className="app">
          <Header/>
          <Form/>
        </div>
        
    </main>
  )
}

export default App

//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import './colors.css'
import Header from '../src/components/header/header.jsx';
import NewEntry from '../src/components/header/new_entry.jsx';


function App() {
 
  return (
    <>
      <Header>
        <NewEntry/>
      </Header>
    </>
  )
}

export default App

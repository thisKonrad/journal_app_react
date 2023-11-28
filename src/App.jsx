//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import './colors.css'
import Header from '../src/components/header/header.jsx';
import NewEntry from '../src/components/header/new_entry.jsx';
import Footer from '../src/components/footer/footer.jsx';
import Motto from '../src/components/entry_input/motto.jsx';
import Notes from '../src/components/entry_input/notes.jsx';
import Button from '../src/components/buttons/buttons.jsx';

function App() {
 
  return (<>
    <Header>
      <NewEntry/>
    </Header>
    <Motto/>
    <Notes/>
    <Button/>
    <>
    <Footer/>
    </>

  </>)
}

export default App

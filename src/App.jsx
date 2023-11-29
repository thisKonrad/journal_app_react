//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import './colors.css'
import Header from '../src/components/header/header.jsx';
import MainWrap from '../src/components/main/main_wrap.jsx';
import Footer from '../src/components/footer/footer.jsx';
import Motto from '../src/components/entry_input/motto.jsx';
import Notes from '../src/components/entry_input/notes.jsx';
import Button from '../src/components/buttons/buttons.jsx';
import EntryForm from '../src/components/entry_input/entry_form.jsx';
import EntryFormHeadline from '../src/components/entry_input/headline.jsx';
import StatusWrap from '../src/components/status_bar/status_wrap.jsx';
import AllEntries from '../src/components/status_bar/all_entries.jsx';
import Favourites from '../src/components/status_bar/favourites.jsx';
import CardWrap from '../src/components/card/card_wrap.jsx';
import Card from '../src/components/card/card.jsx';



function App() {
 
  return (<>

    <Header/>
  
    <MainWrap>

      <EntryForm>
        <EntryFormHeadline/>
        <Motto/>
        <Notes/>
        <Button/>
      </EntryForm>

      <StatusWrap>
        <Favourites/>
        <AllEntries/>
      </StatusWrap>

      <CardWrap>
        <Card/>
        <Card/>
        <Card/>
      </CardWrap>
  
    </MainWrap>
    <>
    <Footer/>
    </>

  </>)
}

export default App

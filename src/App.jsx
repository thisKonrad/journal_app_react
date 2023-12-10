import './App.css'
import './colors.css'
import Header from '../src/components/header/header.jsx';
import MainWrap from '../src/components/main/main_wrap.jsx';
import EntryForm from '../src/components/entry_input/entry_form.jsx';
import StatusWrap from '../src/components/status_bar/status_wrap.jsx';
import AllEntries from '../src/components/status_bar/all_entries.jsx';
import Favourites from '../src/components/status_bar/favourites.jsx';
import CardWrap from '../src/components/card/card_wrap.jsx';

import Footer from '../src/components/footer/footer.jsx';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


function App() {

  let idTag = uuidv4();

  const[motto, setMotto]= useState('');
  const[note, setNote]= useState('');
  const[cards,setCards]= useState([]);

  function handleCard(card){
    setCards((cards)=> [...cards, card])
    console.log("handleCards: ",card)
  }

  function handleMotto(event) {
    setMotto(event.target.value)
    console.log('motto: ',motto)
  } 

  function handleNote(event) {
    setNote(event.target.value)
    console.log('note: ',note)
  }

  function handleSubmit(event){
      event.preventDefault()

      if(!motto || !note){return}

      const newCard = [{
        date: new Date().toLocaleDateString(),
        motto,
        note,
        id: idTag,
        }
      ];

      handleCard(newCard)

      console.log("idTag: ",idTag)
      console.log("Submit values: motto:",motto,"note: ",note)
     /*  setMotto('')
      setNote('') */
      event.target.elements.motto.focus();
  }

 
  return (<>
  <Header/>
    <MainWrap>
      <EntryForm 
      handleSubmit={handleSubmit}
      motto={motto}
      handleMotto={handleMotto}
      note={note}
      handleNote={handleNote} 
      />

      <StatusWrap>
        <Favourites/>
        <AllEntries/>
      </StatusWrap>

      <CardWrap cards={cards}
     /*  cards={cards}
      motto={motto}
      note={note} */>
      </CardWrap>
    </MainWrap>
    <Footer/>
  </>)
}

export default App

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
  const[date, setDate]= useState('');
  const[cards,setCards]= useState([]);


  function handleCard(card){
    setCards((cards)=> [...cards, card])
  }

  function handleMotto(event) {

    event.preventDefault();
    let mottoValue = event.target.value;
    console.log('note: ',mottoValue)

    setMotto(mottoValue)
  } 

  function handleNote(event) {

    event.preventDefault();
    let noteValue = event.target.value;
    console.log('note: ',noteValue)

    setNote(noteValue)
  }

  function handleSubmit(event){
      event.preventDefault()

      if(!motto || !note){return}

      setDate(new Date().toLocaleDateString())
     
      console.log(date)
      console.log("Values: ",motto," ",note, " ",date)

      const newCard = [{
        date:date,
        motto:motto,
        note:note,
        id: idTag,
        favourite: false,
        }
      ];

      handleCard(newCard)

      console.log(idTag)

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

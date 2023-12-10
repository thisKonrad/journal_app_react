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


function App() {

  const[motto, setMotto]= useState('');
  const[note, setNote]= useState('');
  const[date, setDate]= useState('');
  const[cards,setCards]= useState([]);

  function handleCard(){
    setCards((cards)=> [...cards, card])
  }

  function handleMotto(event) {

    event.preventDefault();
    const noteValue = event.target.value;
    console.log('note: ',noteValue)

    setMotto(noteValue)
    event.target.reset();
  } 

  function handleNote(event) {

    event.preventDefault();
    const noteValue = event.target.value;
    console.log('note: ',noteValue)

    setNote(noteValue)
    event.target.reset();
  } 

  function handleSubmit(event){
      event.preventDefault()

      if(!motto || !note){return}

      const date =  new Date().toLocaleDateString();
      setDate(date)
      console.log(date)
      console.log("Values: ",motto," ",note)

      const newCard = [{
        date,
        motto,
        note,
        id: Date.now(),
        favourite: false,
        }
      ];

      setCards(newCard);

      event.target.elements.motto.focus();

    /*   setMotto('')
      setNote('') */
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

      <CardWrap cards={cards}>
        {/* <Card  
        motto={motto} 
        note={note}
        date={date}
        /> */}
      </CardWrap>
    </MainWrap>
    <Footer/>
  </>)
}

export default App

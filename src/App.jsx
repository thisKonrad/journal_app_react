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


export default function App() {

  let idTag = uuidv4();

  const[motto, setMotto]= useState('');
  const[note, setNote]= useState('');
  const[cards, setCards]= useState([]);
  const[entries, setEntries]= useState(0);
  const[favourites, setFavourites]= useState(0);

  function handleCard(card){
    setCards((cards)=> [...cards, card])
    console.log("CARDS: ",cards)
    console.log("CARDS.length: ", cards)
  } 

  function handleMotto(event) {
    setMotto(event.target.value)
    //console.log('motto: ',motto)
  } 

  function handleNote(event) {
    setNote(event.target.value)
    //console.log('note: ',note)
  }

  function handleEntries(entry){
    setEntries(entry.length)
  }

/*   function handleFavourites(card){
    setFavourites(card.filter(
      (card)=> card.favourite === false).length)
  } */


  function handleToggle(id){
    
    setCards((cards)=> cards.map((card)=>
    card.id === id ? {...card,favourite: !card.favourite}
    : card ))

  }

 /*  setFavourites((cards)=> cards.filter((card)=>
  card.favourite).length */

 
/*   console.log("favourites Length: ",favourites) */


  function handleSubmit(event){
      event.preventDefault()

      if(!motto || !note){return}

      const newCard = {
        motto,
        note,
        date: new Date().toLocaleDateString(),
        id: idTag,
        favourite: true
      };

      handleCard(newCard) 

      handleEntries(cards)
     // handleFavourites(newCard)

      setMotto('')
      setNote('')
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
        <Favourites
        allFavourites={favourites}/>
        <AllEntries 
        allEntries={entries}/>
      </StatusWrap>
      <CardWrap 
      cards={cards} 
      onToggle={handleToggle}>
      </CardWrap>
    </MainWrap>
    <Footer/>
  </>)
}
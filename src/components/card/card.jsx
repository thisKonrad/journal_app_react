/* eslint-disable react/prop-types */
import './card.css';
import {useState} from 'react';


export default function Card({card}) {
    const [toggle, setToggle] = useState(true)

    return(<li className="card">
        <button   
            className ="card_icon"
            onClick={()=> setToggle((current)=>!current)}>
            { toggle ? <img src='../assets/star.svg'></img> :
            <img src='../assets/star-filled.svg'></img> 
            }
        </button>
            <div><p className="date">date: <span>{card.date}</span></p></div>
            <h3>{card.motto}</h3>
        <article>
                 <p>
                {card.note}
                </p>
        </article>
    </li>)

} 
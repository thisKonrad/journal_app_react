/* eslint-disable react/prop-types */
import './card.css';


export default function Card({card, onToggle}) {

    return(<li className="card">
        <button   
            className ="card_icon"
            onClick={()=>onToggle(card.id)}>
            { card.favourite ? <img src='../assets/star.svg'></img> :
                <img src='../assets/star-filled.svg'></img> } 
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
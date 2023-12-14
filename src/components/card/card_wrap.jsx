/* eslint-disable react/prop-types */
import './card.css';
import Card from './card.jsx';


export default function CardWrap({cards, onToggle, onDelete}){

    return(<section className="card_wrap">
        <ul>
            {cards.map((card)=> <Card 
            key={card.id} 
            card={card}
            onDelete={onDelete}
            onToggle={onToggle}
            />)}
        </ul>
    </section>)

} 
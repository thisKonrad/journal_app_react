import './card.css'
import Card from '../src/components/card/card.jsx';

export default function CardWrap({cards}){

    return( <>
            <section className="card_wrap">
                <ul>
                {cards.map((card)=> <Card
                    key ={card.id} 
                    card={card}/>)} 
                </ul>
            </section>
        </>
    )

} 
import './card.css'

//{text},{star}
export default function Card({
    motto, 
    date,
    note
}){

    return(<li className="card">
                <img className ="card_icon" src="../assets/star.svg"></img>
                <div><p className="date">date: <span>{date}</span></p></div>
                <h3>{motto}</h3>
                <article>
                    <p>
                    {note}
                    </p>
                </article>
            </li>)

}
import './card.css'

//{text},{star}
export default function Card(){

    return( <>
            <div className="card">
                <img className ="card_icon" src="../assets/star-filled.svg"></img>
                <h3>"Thats life in the City"</h3>
                <article>
                    <p>
                    In The City There are Dremaers,
                    struggling Thiefs. Bad People. Beware..there are some 
                    genius, animals. Howw gonna hunt them?
                    Nooar you damm , go back to the countryside...
                    </p>
                </article>
            </div>
        </>
    )

}
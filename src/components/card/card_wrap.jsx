import './card.css'


export default function CardWrap({children}){

    return( <>
            <section className="card_wrap">
                {children}
            </section>
        </>
    )

} 
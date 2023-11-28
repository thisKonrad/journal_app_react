import './status.css'
import CountFav from '../counters/countFav.jsx';


export default function Favourites(){

    return( <>
            <p className="favourites">favourites:<span>{CountFav}</span></p>
        </>
    )

}
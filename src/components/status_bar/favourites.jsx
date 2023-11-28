import './status.css'
import CountFav from '../counters/countFav.jsx';


export default function Favourites(){

    return( <>
           <div><p className="favourites">favourites:</p>{CountFav}</div> 
        </>
    )

}
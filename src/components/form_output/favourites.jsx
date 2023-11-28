import './status.css'
import CountFav from '../src/components/counters/countFav.jsx';


export default function Favourites(){

    return( <>
            <h2>favourites:<span>{CountFav}</span></h2>
        </>
    )

}
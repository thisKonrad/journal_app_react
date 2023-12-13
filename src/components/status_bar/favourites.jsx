/* eslint-disable react/prop-types */
import './status.css'


export default function Favourites({allFavourites}){

    return(<>
           <div>
            <p className="favourites">favourites:<span>{allFavourites}</span>
            </p>
            </div> 
        </>)

}
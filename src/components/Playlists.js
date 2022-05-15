import React from 'react'
import {ReactComponent as PlayIcon} from '../svgs/play.svg'
import JSON from './AllData.json'

const Playlists = props => {


let apiData = JSON
    .filter(playlist => playlist.id === props.category_id);

	return (
    <div>    <div className="wrapInner">
    {apiData[0].items.map(category => (


         <div className="card">
           <div className="cardImage">
             <img src={category.track.album.images[1].url} alt=''/>
           </div>
          <div className="cardContent">
            <h3>{category.track.name}</h3>
                {category.track.artists.map(artista => ( <p className="subText">{artista.name}</p> ))}
                <p className="subText albumSubtext">{category.track.album.name}</p>
          </div>
          <span className="playIcon">
            <PlayIcon/>
          </span>
         </div>


              ))}

    </div>         </div>
	)
};

export default Playlists
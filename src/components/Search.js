import React from 'react'
import { useParams } from 'react-router-dom'
import { ReactComponent as PlayIcon } from '../svgs/play.svg'
import { ReactComponent as HeartIcon } from '../svgs/heart.svg'
import { ReactComponent as NoteIcon } from '../svgs/note.svg'
import JSON from './AllDataAlt.json'


console.log(JSON)
const Search = (props) => {
let apiData = JSON;
console.log(props.dataInput);
  return (

          <ul className="songList">
    {apiData.filter( song => song.track.name.toLowerCase().includes(props.dataInput.toLowerCase()) ).map(category => (


            <li>
              <div className="songIcon">
                <NoteIcon className="noteI" />
                <PlayIcon className="playI" />
              </div>
              <div className="songDetails">
                <h3>{category.track.name}</h3>
                <span>{category.track.artists.map(artista => ( <p className="subText">{artista.name}</p> ))}{category.track.album.name}</span>
              </div>
              <div className="songTime">
                <span> { Math.floor(((category.track.duration_ms / 1000)/60)%60)}:{('0' + Math.floor((category.track.duration_ms / 1000)%60)).slice(-2)} </span>
              </div>
            </li>
              ))}
</ul>
  )
}

export default Search
import React from 'react'
import Playlists from './Playlists'

var SpotifyWebApi = require('spotify-web-api-node');
var spotifyApi = new SpotifyWebApi({
  clientId: '3bb912ded916493d84f321189869a3c9',
  clientSecret: 'ce64cdaa18b441a3bbded556cf03e48c',
  redirectUri: 'http://localhost:3000'
});
spotifyApi.setAccessToken('BQBJq5wB6mfs1Hje6yFSWFrsV0QJJqCKW_8vkEjRTNRzVOjUW22D6CyYXh769B28Tzy-_XRBrQPHNs4DsrXeDpHx52wVW_xfgD3ai-Dy1zUXyZIQ8_wr7GeUJY_EX1OiytDYyvEso8AksheWZuH1yztn8VWiW5Ep7zY');

var playlists = [{
    "items": [
        {
            "collaborative": false,
            "description": "Rock legends & epic songs spanning decades, that continue to inspire generations. ",
            "external_urls": {
                "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWXRqgorJj26U"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWXRqgorJj26U",
            "id": "37i9dQZF1DWXRqgorJj26U",
            "idNum": 1,
            "images": [
                {
                    "height": null,
                    "url": "https://i.scdn.co/image/ab67706f00000003571c3e893c065ed5832b3a3e",
                    "width": null
                }
            ],
            "name": "Rock Classics",
            "owner": {
                "display_name": "Spotify",
                "external_urls": {
                    "spotify": "https://open.spotify.com/user/spotify"
                },
                "href": "https://api.spotify.com/v1/users/spotify",
                "id": "spotify",
                "type": "user",
                "uri": "spotify:user:spotify"
            },
            "primary_color": null,
            "public": null,
            "snapshot_id": "MTYzOTEzNTM2MiwwMDAwMDA3MzAwMDAwMTdkYTQxNGJmMjQwMDAwMDE3ZDAxMDlmOWM2",
            "tracks": {
                "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWXRqgorJj26U/tracks",
                "total": 172
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWXRqgorJj26U"
        },
        {
            "collaborative": false,
            "description": "La banda de sonido de tu día.",
            "external_urls": {
                "spotify": "https://open.spotify.com/playlist/37i9dQZF1DXc8YFRm3hen8"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXc8YFRm3hen8",
            "id": "37i9dQZF1DXc8YFRm3hen8",
            "idNum": 2,
            "images": [
                {
                    "height": null,
                    "url": "https://i.scdn.co/image/ab67706f000000032e5512d7215a0304de76b784",
                    "width": null
                }
            ],
            "name": "Rock del Día",
            "owner": {
                "display_name": "Spotify",
                "external_urls": {
                    "spotify": "https://open.spotify.com/user/spotify"
                },
                "href": "https://api.spotify.com/v1/users/spotify",
                "id": "spotify",
                "type": "user",
                "uri": "spotify:user:spotify"
            },
            "primary_color": null,
            "public": null,
            "snapshot_id": "MTYzOTI1NTEyMCwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
                "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXc8YFRm3hen8/tracks",
                "total": 80
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DXc8YFRm3hen8"
        },

        {
            "collaborative": false,
            "description": "Lo mejor del pop en un solo lugar. Foto: MYA & Emilia.",
            "external_urls": {
                "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX6ec78YGWIGS"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX6ec78YGWIGS",
            "id": "37i9dQZF1DX6ec78YGWIGS",
            "idNum": 3,
            "images": [
                {
                    "height": null,
                    "url": "https://i.scdn.co/image/ab67706f000000033c3abb0c601315b047697914",
                    "width": null
                }
            ],
            "name": "Pop Argentina",
            "owner": {
                "display_name": "Spotify",
                "external_urls": {
                    "spotify": "https://open.spotify.com/user/spotify"
                },
                "href": "https://api.spotify.com/v1/users/spotify",
                "id": "spotify",
                "type": "user",
                "uri": "spotify:user:spotify"
            },
            "primary_color": null,
            "public": null,
            "snapshot_id": "MTYzOTEwNTIwMCwwMDAwMDBlZjAwMDAwMTdkYTI0ODgwMWYwMDAwMDE3ZDdjOTcwYTRj",
            "tracks": {
                "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX6ec78YGWIGS/tracks",
                "total": 100
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX6ec78YGWIGS"
        },
        {
            "collaborative": false,
            "description": "All the best in new and classic Christmas Pop! Cover: Kelly Clarkson",
            "external_urls": {
                "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX0A8zVl7p82B"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX0A8zVl7p82B",
            "id": "37i9dQZF1DX0A8zVl7p82B",
            "idNum": 4,
            "images": [
                {
                    "height": null,
                    "url": "https://i.scdn.co/image/ab67706f0000000381bf00afe466ff3259dcec04",
                    "width": null
                }
            ],
            "name": "Christmas Pop",
            "owner": {
                "display_name": "Spotify",
                "external_urls": {
                    "spotify": "https://open.spotify.com/user/spotify"
                },
                "href": "https://api.spotify.com/v1/users/spotify",
                "id": "spotify",
                "type": "user",
                "uri": "spotify:user:spotify"
            },
            "primary_color": null,
            "public": null,
            "snapshot_id": "MTYzOTE2NTA4NCwwMDAwMDA1MTAwMDAwMTdkYTVkYTQ1NDYwMDAwMDE3ZDA4MTNjYzcx",
            "tracks": {
                "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX0A8zVl7p82B/tracks",
                "total": 164
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX0A8zVl7p82B"
        },
 {
            "id": "7s8HPQwSEaqask9jKs6ShK",
            "idNum": 5,
            "images": [
                {
                    "height": 640,
                    "url": "https://mosaic.scdn.co/640/ab67616d0000b2731a84d71391df7469c5ab8539ab67616d0000b273769a32367e8bb631560572fdab67616d0000b273a9df5b3eff8dc6bdb6a7e550ab67616d0000b273b7521f4f408968a265bebd91",
                    "width": 640
                },
                {
                    "height": 300,
                    "url": "https://mosaic.scdn.co/300/ab67616d0000b2731a84d71391df7469c5ab8539ab67616d0000b273769a32367e8bb631560572fdab67616d0000b273a9df5b3eff8dc6bdb6a7e550ab67616d0000b273b7521f4f408968a265bebd91",
                    "width": 300
                },
                {
                    "height": 60,
                    "url": "https://mosaic.scdn.co/60/ab67616d0000b2731a84d71391df7469c5ab8539ab67616d0000b273769a32367e8bb631560572fdab67616d0000b273a9df5b3eff8dc6bdb6a7e550ab67616d0000b273b7521f4f408968a265bebd91",
                    "width": 60
                }
            ],
            "name": "Rock Progresivo",
            "owner": {
                "display_name": "Jota Bueno",
                "external_urls": {
                    "spotify": "https://open.spotify.com/user/ozemari"
                },
                "href": "https://api.spotify.com/v1/users/ozemari",
                "id": "ozemari",
                "type": "user",
                "uri": "spotify:user:ozemari"
            },
            "primary_color": null,
            "public": null,
            "snapshot_id": "NTEwLDBiZGQ4NTdiY2U1MTNmNTYzZmQ5NTc5ODUxZWNhODM0NjMwMjg2ZTQ=",
            "tracks": {
                "href": "https://api.spotify.com/v1/playlists/7s8HPQwSEaqask9jKs6ShK/tracks",
                "total": 950
            },
            "type": "playlist",
            "uri": "spotify:playlist:7s8HPQwSEaqask9jKs6ShK"
        },
        {
            "collaborative": false,
            "description": "",
            "external_urls": {
                "spotify": "https://open.spotify.com/playlist/4ZtYUZ4RDjDsxpCNbFNtHl"
            },
            "href": "https://api.spotify.com/v1/playlists/4ZtYUZ4RDjDsxpCNbFNtHl",
            "id": "4ZtYUZ4RDjDsxpCNbFNtHl",
            "idNum": 6,
            "images": [
                {
                    "height": 640,
                    "url": "https://mosaic.scdn.co/640/ab67616d0000b273128450651c9f0442780d8eb8ab67616d0000b27332d813ed532a7ea31b965c29ab67616d0000b2735405ef9e393f5f1e53b4b42eab67616d0000b273ec7e2c5c7ecd29301f1c4b93",
                    "width": 640
                },
                {
                    "height": 300,
                    "url": "https://mosaic.scdn.co/300/ab67616d0000b273128450651c9f0442780d8eb8ab67616d0000b27332d813ed532a7ea31b965c29ab67616d0000b2735405ef9e393f5f1e53b4b42eab67616d0000b273ec7e2c5c7ecd29301f1c4b93",
                    "width": 300
                },
                {
                    "height": 60,
                    "url": "https://mosaic.scdn.co/60/ab67616d0000b273128450651c9f0442780d8eb8ab67616d0000b27332d813ed532a7ea31b965c29ab67616d0000b2735405ef9e393f5f1e53b4b42eab67616d0000b273ec7e2c5c7ecd29301f1c4b93",
                    "width": 60
                }
            ],
            "name": "rock progresivo ingles",
            "owner": {
                "display_name": "1232785276",
                "external_urls": {
                    "spotify": "https://open.spotify.com/user/1232785276"
                },
                "href": "https://api.spotify.com/v1/users/1232785276",
                "id": "1232785276",
                "type": "user",
                "uri": "spotify:user:1232785276"
            },
            "primary_color": null,
            "public": null,
            "snapshot_id": "MTk0LDRiYjJmNmY5M2RiZTYyZGU2ZjNhYmQ0NGFiOTM0MzdkY2RjNzc4ZjE=",
            "tracks": {
                "href": "https://api.spotify.com/v1/playlists/4ZtYUZ4RDjDsxpCNbFNtHl/tracks",
                "total": 152
            },
            "type": "playlist",
            "uri": "spotify:playlist:4ZtYUZ4RDjDsxpCNbFNtHl"
        }
    ],}];

//Intente pasarlo a una variable global pero no supe como, cree una API con una coleccion pequeña que saque de la API de spotify.

//spotifyApi.searchPlaylists('Aca iria la playlist para buscar, luego se agrega al array', { limit : 2, offset : 2 })
//  .then(function(data) {
//    let playlists = data.body.playlists;
//    console.log(playlists, {'maxArrayLength': null})
//  }, function(err) {
//    console.error(err);
//  });




const Categories = () => {

	return (
    <div>
    {playlists[0].items.map(category => (

              <div className="cardsWrap">
                <h1>{category.name}</h1>
                <p className="subTextTitle subText">{category.description}</p>
                <Playlists category_id={category.id}/>
              </div>

              ))}

    </div>
	)
};

export default Categories
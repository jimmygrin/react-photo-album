import React, { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import axios from "axios"




function Album(props) {
    const [albums, setAlbums] = useState([])
    const[album, setAlbum] = useState("")
const [pictures, setPictures] = useState([])
const albumId = props.match.params.albumId;

useEffect (()=> {
axios.get(`/albums/${albumId}?_embed=pictures`).then(resp => {
    setAlbum(resp.data.albums)
    setPictures(resp.data.pictures)
})
}, [albumId])

useEffect(()=>{
    axios.get("/albums").then(resp =>{
      setAlbums(resp.data)
    })
  }, [])

  return (

    <div class="piccontainer">
        <div class="header">
            <h1>My Pictures</h1>
        </div>   
        <div class="albumsections">     
        <div class="list">
                  {albums.map(album => (
                    
                    <div class="eachalbum">
                      <Link to ={"/album/" + album.id}>
                      <p>{album.name}</p>
                      </Link>
                   </div>
                ))}
                </div>   
            <div class="pictures">
                {pictures.map(pic => (
                    <div class="eachpic">
                        <Link to={"/pic/"+ pic.id}>
                        <div>
                            <img src={pic.url}/>
                        </div>
                        <p>{pic.name}</p>
                        </Link>
                    </div>   
                
            ))}
            </div>
           
        </div>
        
    </div>


  )}

export default Album
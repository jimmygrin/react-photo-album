import React, { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import axios from "axios"


function Myalbums(props) {
  const [albums, setAlbums] = useState([])

  useEffect(()=>{
    axios.get("/albums").then(resp =>{
      setAlbums(resp.data)
    })
  }, [])


  return( 
  <div class="albumcontainer">
        <h1>My Albums</h1>
        
                <div class="album">
                  {albums.map(album => (
                    
                    <div class="eachalbum">
                      <Link to ={"/album/" + album.id}>
                      <img src={album.url}/>
                      <p>{album.name}</p>
                      </Link>
                   </div>
                ))}
                </div>
               
    
    </div>
)}

export default Myalbums
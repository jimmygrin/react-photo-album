import React, { useState, useEffect } from "react"
import axios from "axios"




function Pic(props) {

    const [picture, setPicture] = useState("")
    const id = props.match.params.id;

useEffect (()=> {
axios.get(`/pictures/${id}`).then(resp => {
    setPicture(resp.data)
})
}, [id])

  return (

    <div class="piccontainer">
        <div class="header">
            <h1>My Pictures</h1>
        </div>   
        <div class="picbody">     
             
            <div class="picture">
                
                <div class="singlepic">
                    <div>
                        <img src={picture.url}/>
                    </div>
                    <p>{picture.name}</p>
                </div>
                
            </div>
           
        </div>
        
    </div>


  )}

export default Pic
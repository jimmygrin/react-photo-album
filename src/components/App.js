import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Myalbums from "./Myalbums"
import Album from "./Album"
import Pic from "./Pic"


function App() {

  return (
    <Router>
      <div class="container">
    
    <Route exact path = "/" component = {Myalbums} />
    <Route path = "/album/:albumId" component={Album} />
    <Route path = "/pic/:id" component={Pic} />
     
    </div>
    </Router>
)




}

export default App

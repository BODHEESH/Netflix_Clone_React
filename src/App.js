import React from "react";
import './App.css'
import {action,originals,comedy,horror,romance} from'./urls'
import Banner from "./Components/Banner/Banner";
import NavBar from "./Components/NavBar/NavBar";
import Rowpost from "./Components/RowPost/Rowpost";


function App() {
  return(
    <div className="App">
    <NavBar/>
    <Banner/>
    <Rowpost url={originals}  title='Netflix Originals'/>
    <Rowpost url={comedy} title='Comedy Movies' isSmall/>
    <Rowpost url={horror} title='Horror Movies' isSmall/>
    <Rowpost url={romance} title='Romance Movies' isSmall/>
    <Rowpost url={action} title='Action Movies' isSmall/>
    </div>
  )
}

export default App;


/* eslint-disable */

import {Routes, Route} from "react-router-dom"
import React, { useState } from "react"
import Search from "./components/Search/Search";
import Sign_up from "./components/Sign_up/Sign_up";
import Login from "./components/Login/Login";
import Map from "./components/Map/Map";


function App() {

  const [place, setPlace] = useState('');

  return (
    <div>
      <div className="navbar">
        <div className="navbar_logo">
        <img className="qpImage" alt="무제-1" src="img/무제-1.png" />
        </div>
        <div className="navbar_search">
          <Search setPlace={setPlace}/>
        </div>
        <div className="navbar_menu">
          <Sign_up />
          <Login />
        </div>
      </div>
      <div>
        <Map Search={place}/>
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css'
import NavBar from "./components/NavBar/NavBar";
import Banner from './components/Banner/Banner';
import Rowpost from './components/Rowpost/Rowpost';
import {originals, action} from'./url'
function App() {
  return (
    <div>
    
    <NavBar/>
    <Banner/>
    <Rowpost url={originals} title="Netflix orginals"/>
    <Rowpost url={action} title="Action" isSmall />
    <Rowpost url={action} title="Comedy" isSmall />
    </div>
  );
}

export default App;

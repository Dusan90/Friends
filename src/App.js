import React, { useEffect } from "react";
import "./App.css";
import {fetchData} from './FetchData'
import Routes from './Routes'


function App() {


  useEffect(() => {
    fetchData()
  }, []);


  return <div className="App">
    <Routes/>
  </div>;
}

export default App;

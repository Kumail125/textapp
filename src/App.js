import { useState } from 'react';
import React from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textuttils from './components/Textuttils';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";

function App() {
  const [mode , setmode] = useState("light")
  const [alert,setalert] = useState(null)

  const showalert = (message,type)=>{
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 2000);
  }
  const togglemode = () =>{
      if(mode === "light"){
        setmode("dark");
        document.body.style.backgroundColor='#1f0739';
        document.body.style.color='white';
        document.title="Textapp in Dark Mode";
        showalert("Dark mode has been updated", "success");
      }else{
        setmode("light");
        document.body.style.backgroundColor='white';
        document.body.style.color='#1f0739';
        document.title="Textapp in Light Mode";
        showalert("Light mode has been updated", "success");
      }
  }
  return (
    <>
      {/* <Router> */}
        <Navbar tittle="Text App" link="Home" mode={mode} toggleMode={togglemode}/>
        {/* <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/"> */}
            <Alert alert={alert}/>
            <Textuttils heading="Enter the text to anylyze below"/>
          {/* </Route>
        </Switch>
      </Router> */}
      
      
      
    </>
  );
}

export default App;

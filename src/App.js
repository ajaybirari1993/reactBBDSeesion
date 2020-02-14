import React from 'react';
import logo from './logo.svg';
import './App.css';

import Home from "./components/home";
import About from "./components/about";
import AxiosExample from "./components/axiosExample";

import {
  BrowserRouter, Link, Route, Switch
} from "react-router-dom";

function App() {
 
  const testFun = () =>{
    alert("test");
  }

  const testAgain=() =>{
    alert("one more function call");
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>

        <Switch>
          <Route exact path="/">
            <Home msg="test" testFun={testFun}
              oneMoreFun={()=>testAgain()}/>
          </Route>
          <Route exact path="/home">
            <Home msg="test" testFun={()=>testFun()}/>
          </Route>
          <Route exact path="/about">
            <About/>
          </Route>
        </Switch>
       
       <div>Footer</div>
      </BrowserRouter>

      <h5>Axios Example Start</h5>
      <AxiosExample/>

    </div>
  );

  
}

export default App;

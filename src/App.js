import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Greet  from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
class App extends Component{
  render(){
    return (
     <div className = "App">
       {/* <Greet name = "Vinothkumar" heroName = "Ranveer">
         <p>The Gully Boy</p>
       </Greet>
       <Greet name = "Selvan" heroName = "Hrithik">
         <button>Demo</button>
       </Greet>
       <Greet name = "Kiruthika" heroName = "Vijay"></Greet>

       <Welcome name = "Vinothkumar" heroName = "Ranveer">
       <p>The Gully Boy</p>
      </Welcome>
       <Welcome name = "Selvan" heroName = "Hrithik" ></Welcome>
       <Welcome name = "Kiruthika" heroName = "Vijay"></Welcome> */}
        <Hello></Hello>
     </div>
    // <Greet></Greet>
    )
  }
}

export default App;

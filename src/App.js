import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Greet  from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Count from './components/Counter';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/Eventbind';
import Parent from './components/Parent';
import UserGreeting from './components/UserGreeting';

class App extends Component{
  render(){
    return (
     <div className = "App">
       {/* <FunctionClick></FunctionClick>
       <ClassClick></ClassClick> */}
      {/* <EventBind></EventBind> */}
       {/* <Parent></Parent> */}
       {/* <Counter></Counter> */}
       <UserGreeting></UserGreeting>
       {/* <Message></Message> */}
       {/* <Greet name = "Vinothkumar" heroName = "Ranveer">
         <p>The Gully Boy</p>
       </Greet> */}
       {/* <Greet name = "Selvan" heroName = "Hrithik">
         <button>Demo</button>
       </Greet>
       <Greet name = "Kiruthika" heroName = "Vijay"></Greet> */}
{/* 
       <Welcome name = "Vinothkumar" heroName = "Ranveer">
       <p>The Gully Boy</p>
      </Welcome> */}
       {/* <Welcome name = "Selvan" heroName = "Hrithik" ></Welcome>
       <Welcome name = "Kiruthika" heroName = "Vijay"></Welcome> */}
        {/* <Hello></Hello> */}
     </div>
    // <Greet></Greet>
    )
  }
}

export default App;

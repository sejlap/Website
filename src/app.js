import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Workshops from "./Components/Workshops";
import Header from './header'; 


class App extends Component {
  render() {
    return (
    <BrowserRouter>
         <Header/>
          <div>
            <Route path="/" exact component={Home}/>
            <Route path="/website" exact component={Home}/>
            <Route path="/website/projects" exact component={Projects}/>
            <Route path="/website/workshops" exact component={Workshops}/>
            <Route path="/website/contact" exact component={Contact}/>
        </div>
    </BrowserRouter>
    );
  }
}

export default App;
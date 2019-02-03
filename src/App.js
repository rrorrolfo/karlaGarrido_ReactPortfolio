import React, { Component } from 'react';
import './App.css';
import { 
  BrowserRouter,
  Route} from "react-router-dom";
import Header from "./components/Header";
import Jumbotron from "./components/Jumbotron";
import Portafolio from './components/portafolio/Portafolio';
import Footer from "./components/Footer";

class App extends Component {
  render() {
    
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={ Jumbotron }/>
          <Route path="/portafolio" component={ Portafolio }/>
          <Footer />
        </div>
      </BrowserRouter>
      
    );
  }
}

export default App;

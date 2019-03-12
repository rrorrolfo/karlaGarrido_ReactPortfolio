import React, { Component } from 'react';
import './App.css';
import { 
  BrowserRouter,
  Route} from "react-router-dom";
import Header from "./components/Header";
import Jumbotron from "./components/Jumbotron";
import Acerca from "./components/acerca/Acerca";
import Portafolio from './components/portafolio/Portafolio';
import Trayectoria from "./components/trayectoria/Trayectoria";
import Demos from "./components/demos/Demos";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={ Jumbotron }/>
          <Route path="/acerca" component={ Acerca }/>
          <Route path="/portafolio" component={ Portafolio }/>
          <Route path="/trayectoria" component={ Trayectoria }/>
          <Route path="/demos" component={ Demos }/>
          <Footer />
        </div>
      </BrowserRouter>
      
    );
  }
}

export default App;

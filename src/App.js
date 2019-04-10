import React, { Component } from 'react';
import './App.css';
import { 
  BrowserRouter,
  Route,
  Redirect,
  Switch } from "react-router-dom";
import { Provider } from "./components/context/index";
import Header from "./components/Header";
import Jumbotron from "./components/Jumbotron";
import Acerca from "./components/acerca/Acerca";
import Portafolio from './components/portafolio/Portafolio';
import Trayectoria from "./components/trayectoria/Trayectoria";
import Demos from "./components/demos/Demos";
import Galeria from "./components/galeria/Galeria";
import Contacto from "./components/contacto/Contacto";
import Footer from "./components/Footer";
import SocialMedia from "./components/SocialMedia";
import Loader from "./components/loader/Loader";
import NotFound from "./components/NotFound";

class App extends Component {

  state = {
    isLoading: true
  }

  toogleLoading = () => {
    this.setState({
      isLoading: !this.state.isLoading
    })
  }

  render() {
    
    return (

      <Provider value={ {
        actions: {
          toogleLoading: this.toogleLoading
        }
      } }>
        <BrowserRouter>
          <div>
            <Header />
            <Switch>
              <Route exact path="/" component={ Jumbotron }/>
              <Route path="/acerca" component={ Acerca }/>
              <Route path="/portafolio" component={ Portafolio }/>
              <Route path="/trayectoria" component={ Trayectoria }/>
              <Route path="/demos" component={ Demos }/>
              <Route path="/galeria" component={ Galeria }/>
              <Route path="/contacto" component={ Contacto }/>
              <Route path="/notfound" component={ NotFound }/>
              <Route render={ () => <Redirect to="/notfound" /> }/>
            </Switch>
            <Footer />
            <SocialMedia />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;

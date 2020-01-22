import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Contact from './components/Contact';
import Resume from './components/Resume';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <body className="App-body">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/resume">
              <Resume />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </body>
        <footer className="App-footer">
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;

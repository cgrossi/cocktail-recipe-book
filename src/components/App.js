import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Gin from './Gin';
import Vodka from './Vodka';
import Rum from './Rum';
import Whiskey from './Whiskey';
import Tequila from './Tequila';

const App = () => {

  return (
    <Router>
      <div className="recipebook">
        <Header />
        <div className="layout">
          <nav className="nav">
            <ul>
              <li><Link to={'/'} >Home</Link></li>
              <li><Link to={'/gin'} >Gin</Link></li>
              <li><Link to={'/vodka'} >Vodka</Link></li>
              <li><Link to={'/rum'} >Rum</Link></li>
              <li><Link to={'/whiskey'} >Whiskey</Link></li>
              <li><Link to={'/tequila'} >Tequila</Link></li>
            </ul>
          </nav>
          <main className="main">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/gin" component={Gin} />
              <Route path="/vodka" component={Vodka} />
              <Route path="/rum" component={Rum} />
              <Route path="/whiskey" component={Whiskey} />
              <Route path="/tequila" component={Tequila} />
            </Switch>
          </main>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import React from 'react';
import Home from './views/Home'
import About from './views/About'
import Header from './components/Header';
import {ContactUs} from './views/ContactUs';
import OurProjects from './views/OurProjects';

function App() {
  return (
    <Router>
        <Header/>

        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/more' component={OurProjects}/>
          <Route path='/contact-us' component={ContactUs}/>
        </Switch>

    </Router>
  );
}

export default App;
// background: rgb(17, 22, 26);
// background: rgb(36, 44, 51);
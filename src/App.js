import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from './views/Home'
import About from './views/About'
import OurProjects from './views/OurProjects';



function App() {
  return (
    <Router>

        <Header/>


        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/more' component={OurProjects}/>

        </Switch>

        <Footer/>

    </Router>
  );
}

export default App;
// background: rgb(17, 22, 26);
// background: rgb(36, 44, 51);
import React from "react";
import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
// import './App.css';
import "./styles/my.css";
import "./styles/images.css"
import Footer from "./components/footer";
import About from './About';
import Home from './Home';
import Projects from "./Projects";
import Contact from "./Contact";
import ThankYou from "./thankyou";
import Resume from "./Resume";

function App() {  
  return (    
   <React.Fragment>
      <Router>
        <Switch>
        <Route exact path="/portfolio" component={Home} />        
        <Route path="/about" component={About} />        
        <Route path="/projects" component={Projects} />        
        <Route path="/contact" component={Contact} />   
        <Route path="/thankyou" component={ThankYou} />  
        <Route path="/resume" component={Resume} />    
        </Switch>
        <Footer />
    </Router>
    </React.Fragment>
  );
}

export default App;

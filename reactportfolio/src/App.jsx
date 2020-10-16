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
        <Route path="/portfolio/about" component={About} />        
        <Route path="/portfolio/projects" component={Projects} />        
        <Route path="/portfolio/contact" component={Contact} />   
        <Route path="/portfolio/thankyou" component={ThankYou} />  
        <Route path="/portfolio/resume" component={Resume} />    
        </Switch>
        <Footer />
    </Router>
    </React.Fragment>
  );
}

export default App;

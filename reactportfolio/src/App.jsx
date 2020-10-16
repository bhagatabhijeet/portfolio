import React from "react";
import { BrowserRouter as Router,Route,Switch,HashRouter } from "react-router-dom";
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
      <HashRouter>
        <Switch>
        <Route exact path="/" component={Home} />        
        <Route exact path="/about" component={About} />        
        <Route exact path="/projects" component={Projects} />        
        <Route exact path="/contact" component={Contact} />   
        <Route exact path="/thankyou" component={ThankYou} />  
        <Route exact path="/resume" component={Resume} />    
        </Switch>
        <Footer />
    </HashRouter>
    </React.Fragment>
  );
}

export default App;

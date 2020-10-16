import React, { useEffect } from "react";
import "./styles/my.css";
import "./styles/images.css"
import NavbarPage from "./components/navbarPage";
import ParticlesComponent  from './components/particles';
import $ from 'jquery';
import {GithubButton,LinkedinButton}  from './components/customComponents';
import { MDBJumbotron,MDBBtn,MDBCol,MDBRow, MDBContainer } from "mdbreact";

/**
 * Home Component
 * @description This is route '/' or landing page of the portfolio app
 */

function Home() {
  useEffect(()=>{
    
      $('#main-container').fadeOut(1000);
      $('#main-container').fadeIn(3000);
      $('#mainfooter').fadeOut(1000);
      $('#mainfooter').fadeIn(2000);
      $('#social-btns-main').css('display', 'flex');
    
  },[]);
  return (
   <React.Fragment>
      <ParticlesComponent />  
      <NavbarPage links={["about", "projects", "contact","resume"]}/>
      <MDBContainer id="main-container">
        <MDBRow>
          <MDBCol>
            <main>
              <MDBJumbotron>
                {/* Jumbotron start*/} 
                <div className="luminous" style={{ textAlign: "center" }}>
                  Hi, my name is
                </div>
                <div id="primary-title-name">Abhijeet Bhagat</div>
                <div
                  className="secondary-title"
                  style={{ color: "#007ced", textAlign: "right" }}
                >
                  I build web applications
                </div>
                <article>
                  I'm a software engineer based in Dublin, CA. I am a{" "}
                  <em>Full Stack Developer</em>, I build &#38; design websites and
                  web applications. I build, test and deploy applications.
                </article>
                <div id="contactmebtn">
                  <MDBBtn outline size="lg"
                    id="moreaboutme"
                    href="/about"
                  >
                    More About Me...
                  </MDBBtn>
                  <MDBBtn outline size="lg"
                    id="getintouch"
                    href="/contact"
                  >
                    Get In Touch...
                  </MDBBtn>
                </div>
                <section id="social-btns-main">
                  <LinkedinButton />                
                  <GithubButton />    
                </section>
              </MDBJumbotron>
              {/* Jumbotron end */}
            </main>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </React.Fragment>
  );
}

export default Home;

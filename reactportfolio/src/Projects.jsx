import React from "react";
import "./styles/my.css";
import "./styles/images.css";
import NavbarPage from "./components/navbarPage";
import { MDBCol, MDBContainer, MDBRow } from "mdbreact";
import { LuminousHr, PrimaryTitle } from "./components/customComponents";
import { ProjectCardBig } from "./components/projectCardBig";
import trkSearchImage from "./images/TKRSEARCH.gif";
import meteopalImage from "./images/meteopal.gif";
import workdayschedulerImage from "./images/Workday_Scheduler_demo-min.gif";
import RPS from "./images/RockPaperScissors.png"
import cqdemo from "./images/CodeQuizDemo.gif"

function Projects() {
  return (
    <React.Fragment>
      <NavbarPage links={["about", "contact", "resume"]} />
      <MDBContainer className="container">
        <PrimaryTitle>Portfolio</PrimaryTitle>
        <LuminousHr />
        <h5 class="head5">Some Things I've Built.</h5>
        <MDBRow>
          <MDBCol lg="10">
            {/* Project 1 */}
            <ProjectCardBig
              header="Featured"
              projectTitle="tkrSearch"
              repo="https://github.com/bhagatabhijeet/tkrsearch"
              appUrl="https://bhagatabhijeet.github.io/tkrsearch/index.html"
              image={trkSearchImage}
              techs="HTML5 JavaScript(ES6) CSS3"
            >
              tkrSearch pronounced as "Ticker Search" is stock and
              cryptocurrency search application. trkSearch searches the ticker
              and presents the user with company profile and useful information
              like current price, 52 Week High and Low
            </ProjectCardBig>

            {/* Project 2 */}
            <ProjectCardBig
              header="Featured"
              projectTitle="MeteoPal"
              repo="https://github.com/bhagatabhijeet/meteopal"
              appUrl="https://bhagatabhijeet.github.io/meteopal/index.html"
              image={meteopalImage}
              techs="HTML5 JavaScript(ES6) CSS3 Libraries: jQuery"
            >
              MeteoPal is an application built on top of openweathermap API. The
              application is both web browser and mobile browser friendly. The
              application allows users to search any city in the open weathermap
              data base. The application fetches the city's current info,
              forecast for 5 days and shows the UVIndex (color coded e.g Red
              means harmful, Violet means Extreme and Green means safe) of the
              city.
            </ProjectCardBig>

            {/* Project 3 */}
            <ProjectCardBig
              header="Featured"
              projectTitle="Workday Scheduler"
              repo="https://github.com/bhagatabhijeet/workdayscheduler"
              appUrl="https://bhagatabhijeet.github.io/workdayscheduler/index.html"
              image={workdayschedulerImage}
              techs="HTML5 JavaScript(ES6) CSS3 Libraries: moment.js"
            >
              workdayscheduler is a simple calendar application that allows the
              user to save events for each hour of the day.
            </ProjectCardBig>

            {/* Project 4 */}
            <ProjectCardBig
              header="Featured"
              projectTitle="Rock, Paper, Scissors"
              repo="https://github.com/bhagatabhijeet/RockPaperScissorsGame"
              appUrl="https://bhagatabhijeet.github.io/RockPaperScissorsGame/index.html"
              image={RPS}
              techs="HTML5 JavaScript(ES6) CSS3"
            >
              A game of Rock, Paper Scissors created using Html and inline
              JavaScript. I made use of flexbox to understand the flex and other
              positioning in CSS. Who should fork the GitHub repo of this
              project?
              <br />
              Those who want to:
              <br />
              understanding flexbox and positioning, understand how to make
              modal using plain old JavaScript(ES5).
            </ProjectCardBig>

            {/* Project 5 */}
            <ProjectCardBig
              header="Featured"
              projectTitle="Code Quiz"
              repo="https://github.com/bhagatabhijeet/codequiz"
              appUrl="https://bhagatabhijeet.github.io/codequiz/index.html"
              image={cqdemo}
              techs="JavaScript HTML5 CSS3"
            >
              Code Quiz is a user friendly and developer friendly Quizzing application.
                  User Friendly : because , user just have to select options.
                  User can store scores and compare overall performance.
                  Developer Friendly : Code Quiz. Referred as CQ is developer friendly application.
                  Developer can easily add new quizzes or even change the question sources without even touching the
                  HTML. CQ is completely JavaScript based application and uses JSON syntax for creating quiz question
                  sources.
            </ProjectCardBig>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div style={{ height: "60px" }}></div>
    </React.Fragment>
  );
}

export default Projects;

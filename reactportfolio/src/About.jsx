import React from "react";
import "./styles/my.css";
import "./styles/images.css";
import NavbarPage from "./components/navbarPage";
import { MDBCol, MDBContainer, MDBRow } from "mdbreact";
import {
  GithubButton,
  IntroBoxLeft,
  IntroBoxRight,
  LinkedinButton,
  LuminousHr,
  LuminousSpan,
  PrimaryTitle,
} from "./components/customComponents";
import mainimg from "./images/abhi2.png";

function About() {
  return (
    <React.Fragment>
      <NavbarPage links={["projects", "contact", "resume"]} />
      <MDBContainer className="container">
        <MDBRow>
          <MDBCol md="5">
            <main
              className="sticky-top"
              style={{ top: "20%", alignContent: "center" }}
            >
              <PrimaryTitle>About Me</PrimaryTitle>
              <LuminousHr />
              <img id="abhi" src={mainimg} alt="Abhijeet Bhagat's Pic" />
              {/* scocial buttons */}
              <section id="social-btns">
                <LinkedinButton />
                <GithubButton />
              </section>
            </main>
          </MDBCol>
          <MDBCol md="7" className="mt-auto">
            <IntroBoxLeft head="Introduction">
              Hello!, I'm Abhijeet Bhagat. I am a
              <LuminousSpan>software Engineer</LuminousSpan>, based in Bay Area,
              California. I am a full stack developer and enjoy creating
              applications, utilities, websites and programs that make others
              more productive.
            </IntroBoxLeft>

            <IntroBoxRight head="I Love">
              I love to participate in all phases of
              <LuminousSpan>software development</LuminousSpan>, from
              requirement to development, to coding and testing and finally
              deploying to production. I am a team player and have worked in all
              mixes of <LuminousSpan>Agile</LuminousSpan>
              development models. I also have very good expertise in
              <LuminousSpan>Automated Software Testing</LuminousSpan> and I'm
              experienced in allmost all tools and popular
              <LuminousSpan>Unit Testing</LuminousSpan> frameworks.
              <br />
              <br />
            </IntroBoxRight>

            <IntroBoxLeft head="More...">
              After graduating from
              <LuminousSpan>
                Government College of Engineering, India.
              </LuminousSpan>
              I worked in many good companies like, Geometric Software
              Solutions, Persistent Systems Inc., Synechron Inc and on-site with
              Clients like :<LuminousSpan>Bank of America </LuminousSpan>,
              <LuminousSpan>Intuit </LuminousSpan>,
              <LuminousSpan>GCI </LuminousSpan>.<br />
              <br />
            </IntroBoxLeft>

            <IntroBoxRight head="What's happening now...">
              I am currently working as
              <LuminousSpan>Distinguished Engineer</LuminousSpan>
              at <LuminousSpan>BlackBerry Ltd. USA.</LuminousSpan>
              Where I work on modern alerting and network based notification
              system.
              <br />
              currently I am also doing a <em>bootcamp</em> from
              <LuminousSpan>
                University Of California,Berkeley, extension.
              </LuminousSpan>
              <br />
              <br />
            </IntroBoxRight>
            <IntroBoxLeft head="Technologies">
              Here is a list of some of the technologies I am currently working
              on or have worked in past:
              <MDBRow>
                <MDBCol sm="6">
                  Current:
                  <ul
                    style={{ "column-count": "auto", "list-style": "square" }}
                  >
                    <li>C# (.Net Core)</li>
                    <li>JavaScript (ES6+)</li>
                    <li>HTML &#38; CSS</li>
                    <li>Java 8</li>
                  </ul>
                </MDBCol>
                <div className="col-sm-6">
                  Past:
                  <ul
                    style={{ "column-count": "auto", "list-style": "square" }}
                  >
                    <li>VB.Net</li>
                    <li>VBScript</li>
                    <li>
                      Python 2.7 (for writing a full Unit Testing Framework)
                    </li>
                    <li>Oracle 9i / SQL Server</li>
                  </ul>
                </div>
              </MDBRow>
            </IntroBoxLeft>
            <IntroBoxRight head="Certifications">             
              <ul style={{ "column-count": "auto", "list-style": "square" }}>
                <li>                  
                  <span>
                    IBM - ACSE(Advance certificate in Software Engineering.
                  </span>
                </li>
                <li>
                  <span>Oracale Certified Associate. Oracle 9i DBMS.</span>
                </li>
                <li>                 
                  <span>
                    <a href="https://www.softwarecertifications.org/cste/">
                      CSTE
                    </a>
                    - Certified Software Test Engineer. Awarded By : 
                  </span>                  
                  <a href="https://www.softwarecertifications.org/about-qai/">
                    QAI.
                  </a>
                </li>
              </ul>
              <br />
              <br />
            </IntroBoxRight>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </React.Fragment>
  );
}

export default About;

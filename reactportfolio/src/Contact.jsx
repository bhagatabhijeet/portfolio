import React from "react";
import "./styles/my.css";
import "./styles/images.css";
import NavbarPage from "./components/navbarPage";
import { MDBCol, MDBContainer, MDBRow, MDBInput, MDBBtn } from "mdbreact";
import {
  GithubButton,
  LinkedinButton,
  LuminousHr,
  PrimaryTitle,
} from "./components/customComponents";

function Contact() {
  return (
    <React.Fragment>
      <NavbarPage links={["about", "projects", "resume"]} />
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <PrimaryTitle>Get In Touch</PrimaryTitle>
            <LuminousHr />
            <section id="social-btns">
              <LinkedinButton />
              <GithubButton />
            </section>
            <form
              name="contactForm"
              id="contactForm"
              method="GET"
              action="/thankyou"
            >
              <div className="form-group">
                <MDBInput
                  label="Your name"
                  group
                  type="text"
                  className="form-control"
                  id="contactName"
                />
                <MDBInput
                  label="Your email"
                  group
                  type="email"
                  className="form-control"
                  id="contactEmail"
                />
                <small id="emailHelp" class="form-text text-muted">
                  I'll never share your email with anyone else.
                </small>
              </div>
              <div class="form-group">
                <label for="Message">Tell me more / Type your message.</label>
                <textarea class="form-control" id="Message" rows="3"></textarea>
              </div>

              <MDBBtn
                type="submit"
                class="btn btn-outline-primary mx-auto d-block"
              >
                Submit
              </MDBBtn>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div style={{ height: "60px" }}></div>
    </React.Fragment>
  );
}

export default Contact;

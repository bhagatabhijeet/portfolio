import React from "react";
import { MDBBtn } from "mdbreact";
import "../styles/my.css";
import "../styles/images.css";
import "../styles/timeline.css";

export function GithubButton() {
  return (
    <MDBBtn
      outline
      id="githubbtn"
      onClick={(event) =>
        window.open("https://github.com/bhagatabhijeet", "blank")
      }
    >
      <i className="fa fa-github" aria-hidden="true"></i>
    </MDBBtn>
  );
}

export function LinkedinButton() {
  return (
    <MDBBtn
      outline
      id="linkedinbtn"
      onClick={(event) =>
        window.open("https://www.linkedin.com/in/abhijeetbhagat/", "blank")
      }
    >
      <i className="fa fa-linkedin" aria-hidden="true"></i>
    </MDBBtn>
  );
}

export function PrimaryTitle(props) {
  return <div className="primary-title">{props.children}</div>;
}

export function LuminousHr() {
  return <hr className="hr-luminous" />;
}

export function IntroBoxLeft(props) {
  return (
    <div className="left-box">
      <article>
        <h5 className="head5">{props.head}</h5>
        {props.children}
        <br />
      </article>
    </div>
  );
}
export function IntroBoxRight(props) {
  return (
    <div className="right-box">
      <article>
        <h5 className="head5">{props.head}</h5>
        {props.children}
        <br />
      </article>
    </div>
  );
}

export const LuminousSpan = (props)=>(<span className="luminous">{" " + props.children + " "}</span>);


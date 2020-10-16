import { MDBBtn } from "mdbreact";
import React from "react";

export function ProjectCardBig(props) {
  return (
    <div className="card project-card">
      <div className="card-header">{props.header}</div>
      <div className="row">
        <div className="col-md-7">
          <div className="card-body">
  <h5 className="card-title project-card-title">{props.projectTitle}</h5>
            <p className="card-text project-card-text">
              {props.children}
            </p>
            <MDBBtn
              rounded
              outline
              href={props.repo}
              target="_blank"
              className="mr-2"
            >
              <i className="fa fa-github" aria-hidden="true"></i>
            </MDBBtn>

            <MDBBtn
              rounded
              outline
              href={props.appUrl}
              target="_blank"
            >
              <i className="fa fa-globe" aria-hidden="true"></i>
            </MDBBtn>
          </div>
        </div>
        <div className="col-md-5">
          <img
            className="card-img"
            src={props.image}
            alt="Card cap"
          />
        </div>
      </div>
      <div className="card-footer text-muted project-card-footer-text">
        {props.techs}
      </div>
    </div>
  );
}

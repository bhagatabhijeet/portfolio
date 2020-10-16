import React from "react";
import "./styles/my.css";
import "./styles/images.css";
import NavbarPage from "./components/navbarPage";
import resume from './images/AbhijeetBhagat.pdf';
import {  MDBContainer} from "mdbreact";
import PDFViewer from "./components/pdfViewer";


function Resume() {
  return (
    <React.Fragment>
      <NavbarPage links={["about", "portfolio", "contact"]} />
      <MDBContainer>     
      <PDFViewer pdf={resume}/>      
      </MDBContainer>
      <div style={{ height: "60px" }}></div>
    </React.Fragment>
  );
}

export default Resume;

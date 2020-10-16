import { MDBCol, MDBContainer, MDBRow } from "mdbreact";
import React from "react";
import { LuminousHr, PrimaryTitle } from "./components/customComponents";
import NavbarPage from "./components/navbarPage";


export default function ThankYou(){
  return (
    <React.Fragment>
    <NavbarPage links={["about", "portfolio", "resume"]} />
<MDBContainer class="container">
        {/* <container Start */}
        <MDBRow>
            <MDBCol md='6'>
                <main>
                    <PrimaryTitle>
                        Thank You!
                    </PrimaryTitle>
                    <LuminousHr />
                    <div class="luminous" style={{"marginTop": "100px"}}>
                        Thanks a lot for contacting me. I will get in touch with you as soon as I can.
                    </div>
                </main>
            </MDBCol>
        </MDBRow>
    </MDBContainer>
    </React.Fragment>
  );
}

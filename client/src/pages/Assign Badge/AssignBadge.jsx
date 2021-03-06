import React from "react";
import AccountHolderForm from "./AccountHolderForm";
import NonAccountHolderForm from "./NonAccountHolderForm";
import styled from "styled-components";
import Heading from "../../components/Typography/Heading";

const AssignBadgeContainer = styled.div`
width: 100%;
height: 100%;
padding-top: 10vh;
background: #FBFBFD;
.heading {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  display: block;
  text-align: left;
  @media only screen and (max-width: 900px){
    width: 90vw;
  }
}
.form-container {
  background: #ffffff;
  width: 90vw;
  margin: 0 auto;
  max-width: 800px;
  border-radius: 10px;
}
`;

const StyledHeading = styled(Heading)`
margin-right: 35vw;
`;

function AssignBadge() {
  return (
    <AssignBadgeContainer>
      <StyledHeading className="heading">Assign a Badge</StyledHeading>
      <div className="form-container">
        <AccountHolderForm />
        <NonAccountHolderForm/>
      </div>
    </AssignBadgeContainer>
  );
}

export default AssignBadge;

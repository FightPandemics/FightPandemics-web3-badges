import React from "react";
import AccountHolderForm from "./AccountHolderForm";
import NonAccountHolderForm from "./NonAccountHolderForm";
import styled from "styled-components";
import Heading from "../../components/Typography/Heading";

const AssignBadgeContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding-top: 10vh;
`;

const StyledHeading = styled(Heading)`
margin-right: 35vw;
`;

function AssignBadge() {
  return (
    <AssignBadgeContainer>
      <StyledHeading>Assign a Badge</StyledHeading>
      <AccountHolderForm />
      <NonAccountHolderForm/>
    </AssignBadgeContainer>
  );
}

export default AssignBadge;

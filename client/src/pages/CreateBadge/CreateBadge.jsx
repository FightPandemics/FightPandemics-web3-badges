import React from "react";
import { CreateBadgeContainer, FormContainer } from "./StyledCreateBadge";
import CreateBadgeForm from "./CreateBadgeForm";
import Heading from "../../components/Typography/Heading";
import styled from "styled-components";
const StyledCreateBadgeContainer = styled(CreateBadgeContainer)`
  background: #FBFBFD;
`;

export default function CreateBadge() {
  return (
    <div>
      <StyledCreateBadgeContainer>
        <Heading> Create Badge </Heading>
        <FormContainer>
          <CreateBadgeForm/>
        </FormContainer>
      </StyledCreateBadgeContainer>
    </div>
  );
}

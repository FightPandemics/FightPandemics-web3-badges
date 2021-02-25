import React from "react";
import { CreateBadgeContainer, FormContainer } from "./StyledCreateBadge";
import CreateBadgeForm from "./CreateBadgeForm";
import Heading from "../../components/Typography/Heading";

export default function CreateBadge() {
  return (
    <div>
      <CreateBadgeContainer>
        <FormContainer>
          <Heading> Create Badge </Heading>
          <CreateBadgeForm/>
        </FormContainer>
      </CreateBadgeContainer>
    </div>
  );
}

import React from "react";
import { CreateBadgeContainer, FormContainer } from "./CreateBadgeComponents";
import CreateBadgeForm from "./CreateBadgeForm";

export default function CreateBadge() {
  return (
    <div>
      <CreateBadgeContainer>
        <h1>Create Badge</h1>
        <FormContainer>
          <CreateBadgeForm/>
        </FormContainer>
      </CreateBadgeContainer>
    </div>
  );
}

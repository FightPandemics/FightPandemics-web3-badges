/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
import { theme } from "../../constants/theme";
import Heading from "../../components/Typography/Heading";
const { selago, darkGray, white, royalBlue } = theme.colors;
const { body } = theme.typography.font.family;

const StyledProfile = styled.div`
padding-top: 10vh;
`;

function BadgeProfile() {
  return (
    <StyledProfile className="app-body">
      <Heading>Badge Profile</Heading>
    </StyledProfile>
  );
}

export default BadgeProfile;

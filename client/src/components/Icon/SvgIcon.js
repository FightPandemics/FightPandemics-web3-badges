import React from "react";
import styled from "styled-components";
import logo from "./logo.svg";

const StyledImg = styled.img`
  width: 2.2rem;
  height: 2.2rem;
  &.is-clickable {
    cursor: pointer;
  }
`;

const SvgIcon = () => (
  <StyledImg
    src={logo}
  />
);

export default SvgIcon;

import React from "react";
// import Input from "antd";
import styled from "styled-components";
import { theme } from "../../constants/theme";
const { colors } = theme;

const FormInput = styled.input`
border: none;
box-shadow: none;
color: ${colors.black};
flex-grow: 1;
overflow: auto;
padding-bottom: 0.5rem;
`;

function BasicInput() {
  return (
    <FormInput />
  );
}

export default BasicInput;

import React from "react";
import { Checkbox as AntCheckbox } from "antd";
import styled from "styled-components";
import { theme } from "../../constants/theme";
const { body } = theme.typography.font.family;

const StyledCheckbox = styled(AntCheckbox)`
span {
    font-family: ${body};
}
`;

const Checkbox = (inputLabel) => {
  return (
    <StyledCheckbox>{inputLabel}</StyledCheckbox>
  );
};

export default Checkbox;

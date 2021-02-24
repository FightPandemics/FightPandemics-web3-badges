import React from "react";
import { Form, Input } from "antd";
import styled from "styled-components";
import { theme } from "../../constants/theme";

const StyledInput = styled(Input)`
font-family: ${theme.typography.font.family.body};
`;

const BasicInput = (inputLabel) => {
  return (
    <Form.Item label={inputLabel}>
      <StyledInput />
    </Form.Item>
  );
};

export default BasicInput;

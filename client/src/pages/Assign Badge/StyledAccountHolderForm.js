/* eslint-disable no-tabs */
/* eslint-disable no-unused-vars */
import { Form } from "antd";
import styled, { css } from "styled-components";
import { theme } from "../../constants/theme";
const { display, body } = theme.typography.font.family;
const { royalBlue } = theme.colors;

const StyledForm = styled(Form)`

  width: 33%;
  min-width: 250px;
  margin: 2.5vh auto;

  .ant-form-item-label label {
    padding: 0;
    width: 100%;
    min-width: 250px;
    font-weight: 800;
    font-size: 16px;
    font-family: ${body};
  }

.ant-input {
  width: 100%;
  min-width: 250px;
  margin-bottom -7px;
  padding: 4.5px;
}

.ant-form-item-control-input-content .jpEryk {
    align-self: flex-end;
    width: 148px;
    font-size: 14px;
}

.modal {
  border-radius: 10px;
}
h4 { padding: 0; margin: 0; }

.ant-form-item-control-input-content {
  position: relative;
  display: flex;
  flex-direction: column;
  span {
    text-align: left;
  }
}

.ant-input-group-addon button {
  border-top: hidden;
  border-bottom: hidden;
  border-right: hidden;
  &:hover {
    border: ${royalBlue}
    border-top: solid;
    border-bottom: solid;
    border-right: solid;
  }
}
`;

export default StyledForm;

/* eslint-disable no-tabs */
/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { theme } from "../../constants/theme";
const { body } = theme.typography.font.family;
const { royalBlue } = theme.colors;

const StyledForm = styled(Form)`

  width: 33%;
  min-width: 250px;
  margin: 2.5vh auto;

  button {
    width: 100%;
    margin: 0;
  }
  
  span {
    text-align: left;
  }

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
}
.modal {
  border-radius: 10px;
}
h4 { padding: 0; margin: 0; }

.ant-form-item-control-input-content {
  position: relative;
  display: flex;
  flex-direction: column;
}

.ant-form-item-control-input-content .jpEryk {
    align-self: flex-end;
    width: 226px;
}

.radio {
    display: flex
    flex-direction: row
    margin-bottom: 10px;
    .ant-radio-wrapper {
        justify-content: space-between;
    }
}

.ant-radio-checked .ant-radio-inner{
  border-color: ${royalBlue} !important ;
}

.ant-radio-checked:before{
  background-color: ${royalBlue};
}

.ant-radio-checked .ant-radio-inner:after{
  background-color: ${royalBlue};
}

.ant-radio:hover .ant-radio-inner {
  border-color: ${royalBlue} ;
}
`;

export default StyledForm;

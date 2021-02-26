/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { Modal as AntModal, Button } from "antd";
import { theme } from "../../constants/theme";
import BaseButton from "../../components/Button/BaseButton";
import Heading from "../../components/Typography/Heading";
const { colors, typography } = theme;

const StyledModal = styled(AntModal)`
  background-color: red;
  color: white;
  height: 50%;
  width: 100%;
`;

export default function CongratulationsModal(props) {
  return (
	  <StyledModal
      // eslint-disable-next-line react/prop-types
      visible={props.isCongratulationsModalShowing}
      // eslint-disable-next-line react/prop-types
      onCancel={props.hide}>
      centered
      footer={null}
      title={
        <Heading>
          <h4>Congratulations!!!</h4>
        </Heading>
      }
    </StyledModal>
  );
}

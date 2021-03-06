/* eslint-disable react/prop-types */
/* eslint-disable max-len */
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
  text-align: center;
  width: 100%;
  .ant-modal-header {
  }
  &&& h4 {
    text-align: center;
    margin: 28px 0 0;
  }
  .btn-primary {
    margin: 0 auto;
    display: block;
  }
  .image-holder {
    height: 280px;
    width: 280px;
    display: block;
    background: #425af2;
    margin: 2.5vh auto;
    border-radius: 50%;
  }
  .remaining {
    text-align: center;
    display: block;
  }

  .hxWmnw {
    margin: 0;
  }
  .ant-modal-body {
    width: 100%;
    text-align: center;
    padding: 30px;
  }
  &&& .ant-modal-content {
    border-radius: 10px;
  }
  &&& .ant-modal-header {
    border-radius: 10px 10px 0 0;
  }
`;

export default function CongratulationsModal(props) {
  return (
	  <StyledModal
      // eslint-disable-next-line react/prop-types
      visible={props.isCongratulationsModalShowing}
      keyboard={true}
      // eslint-disable-next-line react/prop-types
      onCancel={props.hide}
      okButtonProps={{ type: "primary" }}
      cancelButtonProps={{ type: "primary" }}
      footer={null}
      centered
      title={
        <Heading>
          <h4>Congratulations You created xx new badges!</h4>
        </Heading>
      }>
      {props.modalBodyText === "true"
        ? (
          <div className="modal-form-body">
            <span className="remaining">You now have xxx/{props.quantity} badges remaining.</span>
            <span className="image-holder"></span>
            <BaseButton
              className="btn-primary"
              type="primary"
              key="submit">
              {props.buttonPrimary}
            </BaseButton>
          </div>
        )
        : null}
    </StyledModal>
  );
}

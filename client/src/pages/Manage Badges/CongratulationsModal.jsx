/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import React from "react";
import styled from "styled-components";
import { Modal as AntModal } from "antd";
import BaseButton from "../../components/Button/BaseButton";
import Heading from "../../components/Typography/Heading";

const StyledModal = styled(AntModal)`
  text-align: center;
  width: 90vw;
  max-width: 564px;
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
      width="564"
      // eslint-disable-next-line react/prop-types
      visible={props.isCongratulationsModalShowing}
      keyboard={true}
      // eslint-disable-next-line react/prop-types
      onCancel={props.hide}
      okButtonProps={{ type: "primary " }}
      cancelButtonProps={{ type: "primary " }}
      footer={null}
      centered
      title={
        <Heading>
          <h4>{props.title}</h4>
        </Heading>
      }
    >
      {props.modalBodyText === "true"
        ? (
          <div className="modal-form-body">
            <span className="remaining">
              You now have xxx/{props.quantity} badges remaining.
            </span>
            <img className="image-holder" src={props.currentBadge.src}/>
            <BaseButton className="btn-primary" type="primary" key="submit">
              {props.buttonPrimary}
            </BaseButton>
          </div>
        )
        : null}
    </StyledModal>
  );
}

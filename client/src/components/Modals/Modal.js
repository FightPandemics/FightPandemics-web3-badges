/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { Modal as AntModal, Button } from "antd";
import { theme } from "../../constants/theme";
import logo from "../Logo/Logo.svg";
import BaseButton from "../Button/BaseButton";
import Heading from "../Typography/Heading";
const { colors, typography } = theme;

const StyledModal = styled(AntModal)`
	border-radius: 10px;
	&&& .btn-primary {
		font-family: ${typography.font.family.display.poppins};
		border-radius: 46px;
		background-color: ${colors.royalBlue};
		color: white;
	}

	&&& .btn-secondary !important {
		border-radius: 46px;
		background-color: ${colors.white};
		color: ${colors.royalBlue};
		border: 1px solid ${colors.royalBlue};
	}

	&&& .btn-tertiary {
		background-color: ${colors.white};
		color: ${colors.royalBlue};
		border: none;
		box-shadow: none;
	}
	.btn-container {
		width: 524px;
		margin: 0 auto;
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}
	.ant-typography h4 {
		text-align: center;
		margin-bottom: 0;
	}
	.ant-modal-body {
		width: 100%;
		text-align: center;
	}

	.hxWmnw {
		display: flex;
		justify-content: center;
		align-content: center;
        margin: 0;
		margin-bottom: 0;
	}
`;

const Modal = ({
  isShowing,
  hide,
  title,
  buttonPrimary,
  buttonSecondary,
  button,
  modalBodyText,
  modalWidth,
}) =>
  isShowing
    ? ReactDOM.createPortal(
      <React.Fragment>
        <StyledModal
          centered
          width={parseInt(modalWidth)}
          title={
            <Heading>
              <h4>{title}</h4>
            </Heading>
          }
          visible={isShowing}
          onCancel={hide}
          okButtonProps={{ type: "primary" }}
          cancelButtonProps={{ type: "primary" }}
          footer={null}>
          {button === "false"
            ? null
            : (
              <div className="btn-container">
                <Button className="btn-tertiary" key="back" onClick={hide}>
                  {buttonSecondary}
                </Button>
                <BaseButton
                  className="btn-primary"
                  type="primary"
                  key="submit"
                  onClick="">
                  {buttonPrimary}
                </BaseButton>
              </div>
            )}
          {modalBodyText
            ? (
              <span className="modal-body">{modalBodyText}</span>
            )
            : null}
        </StyledModal>
      </React.Fragment>,
      document.body,
		  )
    : null;

export default Modal;

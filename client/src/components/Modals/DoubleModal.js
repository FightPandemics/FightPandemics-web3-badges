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
		margin: 0 auto;
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}
	.ant-typography h4 {
		text-align: center;
		margin-bottom: 0;
	}
	.hxWmnw {
		display: flex;
		justify-content: center;
		align-content: center;
		margin: 0;
		margin-bottom: 0;
	}
	.modal-form-body {
		display: flex;
		flex-direction: column;
		span {
			padding-left: 5vw;
			padding-bottom: 20px;
		}
	}
`;

const DoubleModal = ({
  isShowing,
  hide,
  title,
  footer,
  buttonPrimary,
  buttonSecondary,
  button,
  modalBodyText,
  modalWidth,
  secondaryButtonStyle,
  onOk,
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
          footer={ footer }>
          {modalBodyText ? <>{modalBodyText}</> : null}
          {/* <div className="btn-container">
            <BaseButton className="btn-secondary" key="back" onClick={hide}>
              {buttonSecondary}
            </BaseButton>
            <BaseButton
              className="btn-primary"
              type="primary"
              key="submit"
              onClick=""
              onOk={onOk}>
              {buttonPrimary}
            </BaseButton>
          </div> */}

        </StyledModal>
      </React.Fragment>,
      document.body,
		  )
    : null;

export default DoubleModal;

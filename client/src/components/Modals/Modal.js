/* eslint-disable no-tabs */
import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Modal as AntModal, Button } from "antd";
import { theme } from "../../constants/theme";
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
		padding-top: 30px;
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
	&&& .ant-modal-content {
		border-radius: 10px;
	}
	&&& .ant-modal-header {
		border-radius: 10px 10px;
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
  secondaryButtonStyle,
  onOk,
  primarybuttonlink,
  secondarybuttonlink,
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
          {modalBodyText ? <>{modalBodyText}</> : null}
          {button === "false"
            ? null
            : (
              <div className='btn-container'>
                <Button className='btn-tertiary' key='back' onClick={hide}>
                  {buttonSecondary}
                </Button>
                <BaseButton
                  className='btn-primary'
                  type='primary'
                  key='submit'
                  onClick=''>
                  {buttonPrimary}
                </BaseButton>
              </div>
            )}
          {secondaryButtonStyle === "true"
            ? (
              <div className='btn-container'>
                <BaseButton className='btn-secondary' key='back' onClick={hide}>
                  {buttonSecondary}
                </BaseButton>
                <BaseButton
                  className='btn-primary'
                  type='primary'
                  key='submit'
                  onClick=''
                  onOk={onOk}>
                  {buttonPrimary}
                </BaseButton>
              </div>
            )
            : null}
          {secondarybuttonlink
            ? (
              <div className='btn-container'>
                <Link to={secondarybuttonlink}>
                  <BaseButton
                    className='btn-tertiary'
                    key='back'
                    onClick={hide}>
                    {buttonSecondary}
                  </BaseButton>
                </Link>
                <BaseButton
                  className='btn-primary'
                  type='primary'
                  key='submit'
                  onClick=''
                  onOk={onOk}>
                  {buttonPrimary}
                </BaseButton>
              </div>
            )
            : null}
          {primarybuttonlink
            ? (
              <div className='btn-container'>
                <BaseButton className='btn-tertiary' key='back' onClick={hide}>
                  {buttonSecondary}
                </BaseButton>
                <Link to={primarybuttonlink}>
                  {" "}
                  <BaseButton
                    className='btn-primary'
                    type='primary'
                    key='submit'
                    onClick=''
                    onOk={onOk}>
                    {buttonPrimary}
                  </BaseButton>
                </Link>
              </div>
            )
            : null}
        </StyledModal>
      </React.Fragment>,
      document.body,
    )
    : null;

export default Modal;

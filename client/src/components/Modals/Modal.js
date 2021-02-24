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
	}
`;

const Modal = ({ isShowing, hide, title, buttonPrimary, buttonSecondary }) =>
  isShowing
    ? ReactDOM.createPortal(
      <React.Fragment>
        <StyledModal
          centered
          width={800}
          title={
            <Heading>
              <h4>{title}</h4>
            </Heading>
          }
          visible={isShowing}
          onCancel={hide}
          okButtonProps={{ type: "primary" }}
          cancelButtonProps={{ type: "primary" }}
          footer={[
            <Button className="btn-tertiary" key="back" onClick={hide}>
              {buttonSecondary}
            </Button>,
            <BaseButton
              className="btn-primary"
              type="primary"
              key="submit"
              onClick="">
              {buttonPrimary}
            </BaseButton>,
          ]}>
          <img src={logo} />
        </StyledModal>
      </React.Fragment>,
      document.body,
    )
    : null;

export default Modal;

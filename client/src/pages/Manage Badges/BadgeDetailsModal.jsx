import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { Modal as AntModal } from "antd";
import { theme } from "../../constants/theme";
import Heading from "../../components/Typography/Heading";
const { colors, typography } = theme;

const StyledModal = styled(AntModal)`
width: 90vw;
max-width: 500px;
padding: 30px;
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
    flex-wrap: wrap;
    justify-content: flex-end;
    align-items: center;
}
.ant-typography h4 {
    text-align: center;
    margin-bottom: 0;
}
.hxWmnw {
    margin: 0;
}
.modal-form-body {
    display: flex;
    flex-direction: column;
    span {
      padding-bottom: 20px;
      width: 67%;
      margin: auto;
    }
}
.ant-modal-footer {
  border: none;
  padding: 0 30px 30px;
}
&&& .ant-modal-content {
  border-radius: 10px;
}
&&& .ant-modal-header {
  border-radius: 10px 10px 0 0;
}
`;

const BadgeDetailsModal = ({
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
        </StyledModal>
      </React.Fragment>,
      document.body,
    )
    : null;

export default BadgeDetailsModal;

/* eslint-disable max-len */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { Modal as AntModal, Button, Form, Input } from "antd";
import logo from "../Logo/Logo.svg";
import BaseButton from "../Button/BaseButton";
import Heading from "../Typography/Heading";
import CreateFormModal from "../../pages/Manage Badges/CreateFormModal";
import { theme } from "../../constants/theme";
const { colors, typography } = theme;

// const StyledModal = styled(AntModal)`
// 	border-radius: 10px;
//     .ant-modal-body {
//         background: pink
//         height: 100px;
//     }
//     .btn-container {
//         padding-top: 50px;
//     }
// 	&&& .btn-primary {
// 		font-family: ${typography.font.family.display.poppins};
// 		border-radius: 46px;
// 		background-color: ${colors.royalBlue};
// 		color: white;
// 	}

// 	&&& .btn-secondary !important {
// 		border-radius: 46px;
// 		background-color: ${colors.white};
// 		color: ${colors.royalBlue};
// 		border: 1px solid ${colors.royalBlue};
// 	}

// 	&&& .btn-tertiary {
// 		background-color: ${colors.white};
// 		color: ${colors.royalBlue};
// 		border: none;
// 		box-shadow: none;
// 	}
// 	.btn-container {
// 		width: 524px;
// 		margin: 0 auto;
// 		display: flex;
// 		justify-content: flex-end;
// 		align-items: center;
// 	}
// 	.ant-typography h4 {
// 		text-align: center;
// 		margin-bottom: 0;
// 	}
// 	.ant-modal-body {
// 		width: 100%;
// 		text-align: center;
//         padding: 30px;
// 	}

// 	.hxWmnw {
// 		display: flex;
// 		justify-content: center;
// 		align-content: center;
//         text-content: center;
//         margin: 0;
// 		margin-bottom: 0;
// 	}
//     .modal-form-body {
//         display: flex;
//         flex-direction: column;
//         align-text: left;
//     }
// `;

// const FormModal = (props, { isDoubleShowing }) =>
//   isDoubleShowing
//     ? ReactDOM.createPortal(
//       <React.Fragment>
//         <CreateFormModal {...props}
//         />
//       </React.Fragment>,
//       document.body,
// 		  )
//     : null;

// export default FormModal;

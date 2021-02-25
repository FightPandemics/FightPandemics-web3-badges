/* eslint-disable no-unused-vars */
/* eslint-disable no-tabs */
import styled from "styled-components";
import { Button } from "antd";
import { theme } from "../../constants/theme";
const { colors } = theme;
const { display } = theme.typography.font.family;

const BaseButton = styled(Button)`
	height: 44px;
	width: 148px;
	left: 0px;
	top: 0px;
	background-color: ${colors.royalBlue};
	color: white;

	&&&.btn-primary {
		font-size: 14px;
		border-radius: 46px;
		background-color: ${colors.royalBlue};
		color: white;
		font-family: ${display};
		height: 44px;
		width: 148px;
		left: 0px;
		top: 0px;
	}

	&&&.btn-secondary {
		font-size: 14px;
		border-radius: 46px;
		background-color: ${colors.white};
		color: ${colors.royalBlue};
		border: 1px solid ${colors.royalBlue};
		font-family: ${display};
		height: 44px;
		width: 148px;
		left: 0px;
		top: 0px;
	}

	&&&.btn-tertiary {
		background-color: ${colors.white};
		color: ${colors.royalBlue};
		border: none;
		font-family: ${display};
	}
`;

export default BaseButton;

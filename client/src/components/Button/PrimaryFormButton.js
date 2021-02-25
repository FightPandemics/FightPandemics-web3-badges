/* eslint-disable no-tabs */
import styled from "styled-components";
import { Button } from "antd";
import { theme } from "../../constants/theme";
const { colors } = theme;

const PrimaryFormButton = styled(Button)`
	font-family: ${theme.typography.font.family.display};
	height: 44px;
	width: 148px;
	left: 0px;
	top: 0px;
	border-radius: 46px;
	background-color: ${colors.royalBlue};
	color: white;
	margin-left: 20px;

	&&&.btn-primary {
		border-radius: 46px;
		background-color: ${colors.royalBlue};
		color: white;
		margin-left: 20px;
	}
	&&&.btn-right {
	}
`;

export default PrimaryFormButton;

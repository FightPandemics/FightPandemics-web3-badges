import styled from "styled-components";
import { Button } from "antd";
import { theme } from "../../constants/theme";
const { colors } = theme;

const PrimaryFormButton = styled(Button)`
    &&&.btn-primary {
    border-radius: 46px;
    background-color: ${colors.royalBlue};
    color: white;
    margin-left: 20px;
}
`;

export default PrimaryFormButton;

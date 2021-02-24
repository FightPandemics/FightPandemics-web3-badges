import styled from "styled-components";
import { Button } from "antd";
import { theme } from "../../constants/theme";
const { colors } = theme;

const BaseButton = styled(Button)`

&&&.btn-primary {
  border-radius: 46px;
  background-color: ${colors.royalBlue};
  color: white;
}

&&& .btn-secondary {
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

export default BaseButton;

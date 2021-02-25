import { Typography } from "antd";
import styled from "styled-components";
import { theme, mq } from "../../constants/theme";

const { Title } = Typography;
const { heading } = theme.typography;
const { display } = theme.typography.font.family;

const Heading = styled(Title)`
  &.ant-typography {
    font-weight: bold;
    font-family: ${display};
  }
  &.h2 {
    font-family: ${display}
    font-size: 18px;
    text-align: "center";
    @media screen and (max-width: ${mq.phone.wide.maxWidth}) {
      font-size: ${heading.three};
    }
  }
  &.h3 {
    font-size: ${heading.three};
  }
  &.h4 {
    font-size: ${heading.four};
  }
  &.h5 {
    font-size: 18px;
    text-align: center;
  }
`;

export default Heading;

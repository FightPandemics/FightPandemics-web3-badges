import styled from "styled-components";
import { mq, theme } from "../constants/theme";
const { white, darkerGray, royalBlue } = theme.colors;
const { display } = theme.typography.font.family;

export const CreateBadgeContainer = styled.div`
width: 100%;
align-items: center;
justify-content: center;
text-align: center;
color: ${darkerGray};
margin: 0 auto;
background-color: ${white};
letter-spacing: normal;
font-style: normal;
font-stretch: normal;
@media screen and (max-width: ${mq.phone.wide.maxWidth}) {
    padding: 0 3rem;
}
h1 {
    position: absolute;
    width: 225px;
    height: 48px;
    left: 384px;
    top: 112px;

    font-family: ${display.poppins};
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 48px;
    /* identical to box height */

    /* Color/Primary Text */

    color: #282828;
    @media screen and (max-width: ${mq.phone.wide.maxWidth}) {
        font-size: 2.6rem;
        line-height: 2.8rem;
    }
}
`;

export const FormContainer = styled.div`
position: absolute;
width: 800px;
height: 673px;
left: 384px;
top: 208px;
border: 1px solid #c4c4c4;
box-sizing: border-box;

#create-badge-form {
    align-content: center;
    justify-content: center;
    position: absolute;
    left: 17.12%;
    right: 17.12%;
    top: 7.85%;
    bottom: 75.7%;
}

.ant-btn {
  position: absolute;
  background-color: white;
  color: ${royalBlue};

}

p {
  position: absolute;
  left: 37.5%;
  right: 37.5%
  top: 74.89%;
  bottom: 20.36%;

}

.ant-btn-primary {
  border-radius: 46px;
  background-color: ${royalBlue};
  color: white;
}
`;

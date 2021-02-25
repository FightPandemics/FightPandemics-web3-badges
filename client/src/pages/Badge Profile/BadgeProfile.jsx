/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
import { theme } from "../../constants/theme";
import Heading from "../../components/Typography/Heading";
import { ReactComponent as Banner } from "../../components/Icon/profilebanner.svg";
const { selago, darkGray, white, royalBlue } = theme.colors;
const { body } = theme.typography.font.family;

const StyledProfile = styled.div`
padding-top: 5vh;
.rectangles {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 1173px;
    margin: 0;
    padding: 0;
}
`;

const StyledBanner = styled(Banner)`
position: absolute;
width: 100%;
height: 262px;
left: 0px;
right: 0px;
top: 7vh;
border-radius: 0px 0px 60px 60px;
`;

const StyledRectangle = styled.div`
position: absolute;
top: 30%;
left: 50%;
transform: translate(-50%, -50%);
width: 1173px;
height: 222px;
margin: auto;
background: #FFFFFF;
box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.08);
border-radius: 8px;
`;

const StyledBadgeContainer = styled.div`
position: relative;
align-self: right;
height: 1196px;
width: 950px;
border-radius: 12px;
background: #FFFFFF;
box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.08);
border-radius: 12px;
`;

function BadgeProfile() {
  return (
    <StyledProfile className="app-body">
      <Heading>Badge Profile</Heading>
      <StyledBanner />
      <div className="rectangles">
        <StyledRectangle />
        <StyledBadgeContainer />
      </div>
    </StyledProfile>
  );
}

export default BadgeProfile;

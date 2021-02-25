/* eslint-disable max-len */
import React from "react";
import ClaimBadgeForm from "./ClaimBadgeForm";
import styled from "styled-components";
import { theme } from "../../constants/theme";
import namelogo from "../../components/Icon/namelogo.svg";
import walletlogo from "../../components/Icon/wallet.svg";
import Heading from "../../components/Typography/Heading";
const { selago, darkGray, white, royalBlue } = theme.colors;
const { body } = theme.typography.font.family;

const StyledContainer = styled.div`
  display: flex;
  height: calc(100vh - 94px);
  .left {
    background: ${selago};
    width: 50%;
  }
  .right {
    width: 50%;
    padding-top: 10vh;
    position: relative;
    .vertically-center {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    h1 {
      margin: 10px 0 0;
      font-weight: 800;
      font-size: 26px;
      color: ${royalBlue};
    }
    h3 {
        font-family: ${body};
        font-size: 16px;
    }
    
  }
`;

const StyledFooter = styled.footer`
  background: ${white};
  display: block;
  height: 94px;
  width: 100%;
  padding: 1em 0;
  
  .policy-container {
    display: flex;
    justify-content: center;
  }
  .policy-container a {
    color: ${darkGray};
    text-decoration: underline
  }
  .policy-container a:nth-child(1)::after, .policy-container a:nth-child(2)::after {
    content: "|";
    padding: 0 1em;
    color: ${darkGray};
  }
`;

const StyledLogo = styled.img`
width: 40%;
align-content: left;
margin-left: -40%;
margin-top: 2.5vh;
`;

const StyledWallet = styled.img`
margin: 2.5vh auto;

`;

const StyledHeading = styled(Heading)`
color: ${royalBlue};
`;

function ClaimBadge() {
  return (
    <>
      <StyledContainer>
        <div className="left">
          <StyledLogo src={ namelogo} />
        </div>
        <div className="right">
          <div className="vertically-center">
            <StyledHeading>Claim Your Badge</StyledHeading>
            <StyledWallet src={walletlogo}/>
            <h3>To claim your badge, please your email below<br/>to sign up for a FightPandemics wallet.</h3>
            <ClaimBadgeForm/>
          </div>

        </div>
      </StyledContainer>
      <StyledFooter>
        <p>Copyright 2020 FightPandemics. All rights reserved</p>
        <div className="policy-container">
          <a>Terms & Conditions</a>
          <a>Privacy Policy</a>
          <a>Cookies Policy</a>
        </div>
      </StyledFooter>
    </>
  );
}

export default ClaimBadge;

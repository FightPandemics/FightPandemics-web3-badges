/* eslint-disable react/prop-types */
import React from "react";
import { NavBar } from "antd-mobile";
import styled from "styled-components";
import { ReactComponent as Logo } from "./Logo.svg";
import { ReactComponent as Mail } from "../../components/Icon/mail copy.svg";
import { ReactComponent as Bell } from "../../components/Icon/header-bell.svg";

const FPLogo = styled(Logo)`
width: 30px;
`;

const MailLogo = styled(Mail)`
width: 25px;
border-radius: 0px;
margin-right: 15px;
`;

const BellLogo = styled(Bell)`
height: 25px;
`;

const StyledNavBar = styled(NavBar)`
padding: 10px 25px;
height: 100%;
.am-navbar-title {
  display: none;
}
.am-navbar-right, .am-navbar-left {
  align-self: center;
}
border-bottom: 0.5px solid rgba(147, 147, 147, 0.1);
display: flex;
justify-content: space-between;
align-content: center;
`;

const HeaderWrapper = styled.div`
background: #ffffff;
height: 80px;
width: 100%;
border-radius: 0px;
`;

const Header = () => {
  return (
    <HeaderWrapper className="header">
      <StyledNavBar
        className="navbar"
        mode="light"
        leftContent={<FPLogo />}
        rightContent={
          <>
            <MailLogo />
            <BellLogo />
          </>
        }
      />
    </HeaderWrapper>
  );
};

export default Header;

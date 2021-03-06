/* eslint-disable no-unused-vars */
/* eslint-disable no-tabs */
import React from "react";
import { Link } from "react-router-dom";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import styled from "styled-components";
import BaseButton from "../../components/Button/BaseButton";
import { theme } from "../../constants/theme";
import { ReactComponent as DuinGood } from "../../components/Logo/duingood.svg";
const { SubMenu } = Menu;
const { selago, darkGray, white, royalBlue } = theme.colors;
const { display, body } = theme.typography.font.family;

const StyledNav = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 0.5px solid rgba(147, 147, 147, 0.1);
	height: 80px;
  height: clamp(60px, 7vh, 80px);
	margin-top: 0;
	padding: 10px 0;
	font-family: ${display};
	font-size: 20px;
	font-style: normal;
	font-weight: 500;
	line-height: 28px;
	text-align: left;
  z-index: 10;
  background: white;
  position: relative;
  white-space: nowrap;

	.btn-secondary {
		
	}
	.btn-primary {
		
	}
  .ant-dropdown-link {
    width: 100%;
    padding: 0 .5em;
  }

  .navbar-left {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 45vw;
  }
`;
const StyledLogo = styled(DuinGood)`
align-items: left;
justify-self: flex-start;
padding-left: 2vw;
padding-right: 0.5vw;
width: clamp(125px, 25vw, 250px);
`;
const Marketplace = styled(Menu)`
`;
const FindGig = styled(Menu)`
`;
const FindDuinGudders = styled(Menu)`
  white-space: nowrap;
`;
const SignUp = styled(BaseButton)`
	align-items: right;
	justify-self: flex-end;
`;
const SignIn = styled(BaseButton)`
	align-items: right;
	justify-self: flex-end;
`;

const marketplacemenu = (
  <Marketplace className="menu-item">
    <Menu.Item>
      <Link to="/createbadge"><p>Create Badge</p></Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/assignbadge">Assign Badge </Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/claimbadge">Claim Badge </Link>
    </Menu.Item>
  </Marketplace>
);
const findgigmenu = (
  <FindGig className="menu-item">
    <Menu.Item>
      <Link to="/createbadge">Create Badge </Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/assignbadge">Assign Badge </Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/claimbadge">Claim Badge </Link>
    </Menu.Item>
  </FindGig>
);
const findduinguddersmenu = (
  <FindDuinGudders className="menu-item">
    <Menu.Item>
      <Link to="/createbadge">Create Badge </Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/assignbadge">Assign Badge </Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/claimbadge">Claim Badge </Link>
    </Menu.Item>
  </FindDuinGudders>
);

const groupmenu = (
  <Menu>
    <SubMenu className="menu-item" title="Marketplace">
      <Menu.Item>
        <Link to="/createbadge">
          <p>Create Badge</p>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/createbadge">Assign Badge </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/createbadge">Claim Badge </Link>
      </Menu.Item>
    </SubMenu>
    <SubMenu className="menu-item" title="Find Gig">
      <Menu.Item>
        <Link to="/createbadge">Create Badge </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/createbadge">Assign Badge </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/createbadge">Claim Badge </Link>
      </Menu.Item>
    </SubMenu>
    <SubMenu className="menu-item" title="Find Duingudders">
      <Menu.Item>
        <Link to="/createbadge">Create Badge </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/createbadge">Assign Badge </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/createbadge">Claim Badge </Link>
      </Menu.Item>
    </SubMenu>
  </Menu>
);

function Navbar() {
  console.log(window.innerWidth);
  return (
    <StyledNav>
      <StyledLogo />
      {window.innerWidth < 1025
        ? (
          <>
            <Dropdown overlay={groupmenu}>
              <div className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
                Menu
                <DownOutlined />
              </div>
            </Dropdown>
          </>
        )
        : (
          <>
            <div className="navbar-left">
              <Dropdown overlay={marketplacemenu}>
                <div
                  className="ant-dropdown-link"
                  onClick={(e) => e.preventDefault()}>
                Marketplace <DownOutlined />
                </div>
              </Dropdown>
              <Dropdown overlay={findgigmenu}>
                <div
                  className="ant-dropdown-link"
                  onClick={(e) => e.preventDefault()}>
                Find Gig <DownOutlined />
                </div>
              </Dropdown>
              <Dropdown overlay={findduinguddersmenu}>
                <div
                  className="ant-dropdown-link"
                  onClick={(e) => e.preventDefault()}>
                Find DuinGudders <DownOutlined />
                </div>
              </Dropdown>
            </div>
            <SignUp className="btn-secondary">Sign Up</SignUp>
            <SignIn className="btn-primary">Sign In</SignIn>
          </>
        )}
    </StyledNav>
  );
}

export default Navbar;

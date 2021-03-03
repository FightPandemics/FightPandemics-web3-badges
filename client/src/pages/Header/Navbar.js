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
	padding-top: 10px;
	padding-bottom: 10px;
	font-family: ${display};
	font-size: 20px;
	font-style: normal;
	font-weight: 500;
	line-height: 28px;
	letter-spacing: 0em;
	text-align: left;
    z-index: 10;
    background: white;
    position: relative;
	.btn-secondary {
		margin-left: 30vw;
	}
	.btn-primary {
		margin-right: 2vw;
	}
`;
const StyledLogo = styled(DuinGood)`
align-items: left;
justify-self: flex-start;
padding-left: 2vw;
width: clamp(125px, 25vw, 250px);
`;
const Marketplace = styled(Menu)`
    width: 100%;
`;
const FindGig = styled(Menu)`
	width: 100%;
`;
const FindDuinGudders = styled(Menu)`
	width: 100%;
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
      <Link to="/createbadge">Assign Badge </Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/createbadge">Claim Badge </Link>
    </Menu.Item>
  </Marketplace>
);
const findgigmenu = (
  <FindGig className="menu-item">
    <Menu.Item>
      <Link to="/createbadge">Create Badge </Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/createbadge">Assign Badge </Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/createbadge">Claim Badge </Link>
    </Menu.Item>
  </FindGig>
);
const findduinguddersmenu = (
  <FindDuinGudders className="menu-item">
    <Menu.Item>
      <Link to="/createbadge">Create Badge </Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/createbadge">Assign Badge </Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/createbadge">Claim Badge </Link>
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
      {window.innerWidth < 900
        ? (
          <Dropdown overlay={groupmenu}>
            <div className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
              Menu
              <DownOutlined />
            </div>
          </Dropdown>
        )
        : (
          <>
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
            <SignUp className="btn-secondary">Sign Up</SignUp>
            <SignIn className="btn-primary">Sign In</SignIn>
          </>
        )}
    </StyledNav>
  );
}

export default Navbar;

/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import React from "react";
import { Menu } from "antd";
import styled from "styled-components";
import { theme } from "../../constants/theme";
const { selago, darkGray, white, royalBlue } = theme.colors;
const { display } = theme.typography.font.family;

const StyledSideMenu = styled(Menu)`
padding: 0 1.5vw;
border-radius: 0.5vmax;
li {
  font-family: ${display};
  margin: 35px;
  font-family: Poppins;
  font-size: 22px;
  font-weight: 400;
  letter-spacing: 0px;
  text-align: left;
  padding-bottom: 100px;
  margin: 0;
}

&&&.ant-menu-item ant-menu-item-only-child {
    margin-bottom: 10px;
}

&&&li.ant-menu-item ant-menu-item-only-child customClass ant-menu-item-selected {
    background: red;
    color: ${royalBlue};
}
`;

export default class SideMenu extends React.Component {
  state = {
    current: "creations",
  };

  handleClick = e => {
    console.log("click ", e);
    this.setState({ current: e.key });
  };

  render() {
    const { current } = this.state;
    return (
      <StyledSideMenu onClick={this.handleClick} selectedKeys={[current]} mode="vertical">
        <Menu.Item key="activity">
          Activity
        </Menu.Item>
        <Menu.Item key="posts" >
                Posts
        </Menu.Item>
        <Menu.Item key="organizations">
          Organizations
        </Menu.Item>
        <Menu.Item key="badges" >
            Badges
        </Menu.Item>
        <Menu.Item key="thanks">
          Thanks
        </Menu.Item>
        <Menu.Item key="creations" className="customClass">
                Creations
        </Menu.Item>
        <Menu.Item key="drops">
          Drops
        </Menu.Item>
        <Menu.Item key="gallery" >
          Gallery
        </Menu.Item>
      </StyledSideMenu>
    );
  }
}

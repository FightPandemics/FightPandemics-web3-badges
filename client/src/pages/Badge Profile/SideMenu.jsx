/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import React, { useState } from "react";
import { Menu } from "antd";
import styled from "styled-components";
import { theme } from "../../constants/theme";
const { selago, darkGray, white, royalBlue } = theme.colors;
const { display } = theme.typography.font.family;

const StyledSideMenu = styled(Menu)`
width: 100%;
grid-column: 1/2;
@media only screen and (max-width: 600px){
  grid-column: 1/3;
}
padding: 0 1.5vw;
border-radius: 8px;
border: 1px solid ${darkGray};
box-shadow: 5px;
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

export default function SideMenu() {
  const [current, setCurrent] = useState("creations");

  const handleClick = e => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <StyledSideMenu onClick={handleClick} selectedKeys={[current]} mode="vertical">
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

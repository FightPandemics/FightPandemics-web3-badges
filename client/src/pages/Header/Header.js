/* eslint-disable react/prop-types */
import React from "react";
import { NavBar } from "antd-mobile";
import styled from "styled-components";
import { ReactComponent as Logo } from "./Logo.svg";
import { mq } from "../../constants/theme";
import { ReactComponent as Mail } from "../../components/Icon/mail copy.svg";
import { ReactComponent as Bell } from "../../components/Icon/header-bell.svg";

const FPLogo = styled(Logo)`
top: 22.26%;
bottom: 37.18%;
height: 32.4484977722168px;
width: 30.743572235107422px;
left: 16.920654296875px;
top: 17.805908203125px;
border-radius: 0px;
`;

const MailLogo = styled(Mail)`
top: 22.26%;
bottom: 37.18%;
height: 32.4484977722168px;
width: 30.743572235107422px;
left: 16.920654296875px;
top: 17.805908203125px;
border-radius: 0px;
margin-right: 15px;
`;

const BellLogo = styled(Bell)`
top: 22.26%;
bottom: 37.18%;
height: 32.4484977722168px;
width: 30.743572235107422px;
left: 16.920654296875px;
top: 17.805908203125px;
border-radius: 0px;
margin-right: 25px;
`;

const StyledNavBar = styled(NavBar)`
height: 7vh;
margin-top: 0;
padding: 10px;
padding-left: 25px;
@media screen and (max-width: ${mq.phone.wide.maxWidth}) {
  height: auto;
  margin-top: 0;
}
.am-navbar-title {
  display: none;
}
.am-navbar-left {
  @media screen and (max-width: ${mq.phone.wide.maxWidth}) {
    padding-left: 2.3rem;
    padding-top: 1rem;
  }
}
border-bottom: 0.5px solid rgba(147, 147, 147, 0.1);
display: flex;
justify-content: space-between;
`;

const HeaderWrapper = styled.div`
position: absolute;
left: 0%;
right: 0%;
top: 0%;
bottom: 0%;
background: #ffffff;
height: 50px;
width: 100%;
left: 0px;
top: 0px;
border-radius: 0px;
`;

const Header = () => {
  //   return (
  //     <InboxIcon>
  //       <NavLink>
  //         <Badge>
  //           <SvgIcon></SvgIcon>
  //         </Badge>
  //       </NavLink>
  //     </InboxIcon>
  //   );
  // };

  return (
    <HeaderWrapper className="header">
      <StyledNavBar
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

/* eslint-disable max-len */
import React from "react";
import styled from "styled-components";
import { theme } from "../../constants/theme";
import BaseButton from "../../components/Button/BaseButton";
import BadgeContainer from "./BadgeContainer";
import { ReactComponent as Banner } from "../../components/Icon/profilebanner.svg";
import SideMenu from "./SideMenu";
import { ReactComponent as Mail } from "../../components/Icon/white mail.svg";
import { ReactComponent as Heart } from "../../components/Icon/heart-filled.svg";
const { royalBlue } = theme.colors;
const { body, display } = theme.typography.font.family;

const StyledProfile = styled.div`
align-items: center;
.rectangles {
    display: grid;
    grid-template-columns: 1fr minmax(140px, auto);
    grid-gap: 2.5vw;
    width: 80vw;
    margin: 0 10vw;
    @media only screen and (max-width: 600px){
      width: 90vw;
      margin: 0 5vw;
    }
}
`;

const StyledBanner = styled(Banner)`
z-index: -1;
width: 100vw;
position: absolute;
top: calc(70px - 7vw);
left: 0;
border-radius: 0px 0px 2.5vmax 2.5vmax;
transition: .5s;
@media only screen and (min-width: 1000px) {
  top: calc(75px - 8vw);
} 
svg {
  width: 40px;
}
`;

const StyledRectangle = styled.div`
grid-column: 1/3;
width: 100%;
margin: auto;
background: none;
box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.08);
position: relative;
border-radius: 8px;
.white-background {
  position: absolute;
  bottom: 0;
  background: #ffffff;
  border-radius: 8px;
  width: 100%;
  height: 75%;
  z-index: 0;
}
`;

const StyledProfileBox = styled.div`

display: grid;
position: relative;
padding: 2.5vh 2.5vw 2.5vh;
border-radius: 8px;
grid-template-columns: calc(140px + 5vw) 1fr calc(148px + 2.5vw);
grid-template-rows: repeat(2, 55px) minmax(30px, auto) minmax(55px, 110px);
align-content: center;
justify-content: center;
.profile-img-container {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  grid-row: 1/4;
  justify-self: center;
  border: 5px solid #ffffff;
  position: relative;
  .profile-img {
    background: #000090;
    height: 100%;
    width: 100%;
    border-radius: 50%;
  }
  .active {
    position: absolute;
    right: 2px;
    bottom: 2px;
    display: block;
    height: 33px;
    width: 33px;
    border-radius: 50%;
    background: #00f0a0;
    border: 5px solid #ffffff;
  }
}
.profile-name-container {
  grid-row: 2/4;
  grid-column: 2/3;
  justify-self: left;
  align-self: end;
  font-family: ${display};
  .profile-name {
    font-size: 26px;
    line-height: 28px;
    font-weigth: 700;
  }
  span {
  }
  .location {
    .blue-dot {
      background: ${royalBlue};
      height: 8px;
      width: 8px;
      border-radius: 50%;
      margin: 0 7px 1px;
      display: inline-block;
    }
    font-size: 14px;
    line-height: 18px;
    text-align: left;
  }
}
.buttons-con {
  grid-column: 3/4;
  grid-row: 1/4;
  align-self: end;
}
.btn {
  margin: 7px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  span{
    padding: 0 7px;
  }
}
&&& .btn-primary {
  border: 5px solid #ffffff;
  height: 54px;
  width: 158px;
  margin-left: -5px;
}
.bio {
  grid-column: 1/3;
  grid-row: 4/5;
  font-family: ${body};
  font-size: 14px;
  max-width: 600px;
  text-align: left;
  margin-left: calc(2.5vw + 5px);
  padding-top: 1em;
}
.badges {
  grid-column: 3/4;
  grid-row: 4/5;
  align-self: center;
  display: flex;
  justify-content: space-evenly;
  width: 148px;
  .circle {
    display: inline-block;
    height: 55px;
    width: 55px;
    border-radius: 50%;
  }
  .green {
    background: #008000;
  }
  .blue {
    background: #40ffff;
  }
}
@media only screen and (max-width: 600px){
  height: 100%;
  grid-template-columns: auto auto;
  grid-template-rows: repeat(5, auto);
  justify-items: center;
  .profile-img-container {
    grid-column: 1/2;
    grid-row: 1/2;
  }
  .profile-name-container {
    grid-column: 2/3;
    grid-row: 1/2;
  }
  .bio {
    grid-column: 1/3;
    grid-row: 2/3;
  }
  .buttons-con {
    grid-column: 1/3;
    grid-row: 3/4;
    align-self: end;
  }
  .badges {
    grid-column: 1/3;
    grid-row: 4/5;
    padding: 2vmin;
  }
}
`;

const StyledMail = styled(Mail)`
color: white;
height: 15.999998092651367px;
width: 20.000001907348633px;
left: 2.0001220703125px;
top: 4px;
border-radius: 0px;
`;

function BadgeProfile() {
  return (
    <StyledProfile className="app-body">
      <StyledBanner className="banner" />
      <div className="rectangles">
        <StyledRectangle>
          <div className="white-background"></div>
          <StyledProfileBox>
            <div className="profile-img-container">
              <div className="profile-img"></div>
              <span className="active"></span>
            </div>
            <div className="profile-name-container">
              <h2 className="profile-name">Artie Artist<span>*</span></h2>
              <p className="location"><span className="blue-dot"></span>New York, NY</p>
            </div>
            <div className="buttons-con">
              <BaseButton className="btn btn-primary"><StyledMail/>Message</BaseButton>
              <BaseButton className="btn btn-secondary"><Heart/>Thank</BaseButton>
            </div>
            <p className="bio">I aposm an artsy artist blah blah ipsum lorem blah lorem ipsum sumartsy artist blah blah ipsum lorem blah lorem ipsumsum apos. </p>
            <div className="badges">
              <span className="green circle"></span>
              <span className="blue circle"></span>
            </div>
          </StyledProfileBox>
        </StyledRectangle>
        <div className="aside">
          <SideMenu/>
        </div>
        <BadgeContainer />
      </div>
    </StyledProfile>
  );
}

export default BadgeProfile;

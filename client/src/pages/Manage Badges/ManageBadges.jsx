/* eslint-disable max-len */
/* eslint-disable no-tabs */
import React from "react";
import styled from "styled-components";
import Heading from "../../components/Typography/Heading";
import ManageBadgesForm from "./ManageBadgesForm";
import { mq, theme } from "../../constants/theme";
import { ReactComponent as Badge } from "../../components/Icon/grey circle.svg";
import BaseButton from "../../components/Button/BaseButton";
import useModal from "../../hooks/useModal";
import useDoubleModal from "../../hooks/useDoubleModal";
import DoubleModal from "../../components/Modals/DoubleModal";
import CreateFormModal from "./CreateFormModal";
const { white, darkerGray, royalBlue } = theme.colors;
const { display } = theme.typography.font.family;

const CreateBadgeContainer = styled.div`
	width: 800px;
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
	margin-bottom: 104px;

	h1 {
		font-family: ${display.poppins};
		font-size: 32px;
		font-style: normal;
		font-weight: 700;
		line-height: 48px;
		letter-spacing: 0em;
		text-align: left;
		margin-top: 7vh;
		padding: 3vh 0;

		/* Color/Primary Text */

		color: #282828;
		@media screen and (max-width: ${mq.phone.wide.maxWidth}) {
			font-size: 2.6rem;
			line-height: 2.8rem;
		}
	}
;
`;

const FormContainer = styled.div`
	position: relative;
	margin-bottom: 104px;
	border: 1px solid #c4c4c4;
	#create-badge-form {
		align-content: center;
		justify-content: center;
		margin: 3vh 2.5vw;
	}

	.ant-modal-body {
		text-align: left;
	}

	.ant-btn {
		position: relative;
		background-color: white;
		color: ${royalBlue};
	}

	p {
		font-family: ${display.worksans};
		font-size: 12px;
		font-style: normal;
		font-weight: 400;
		line-height: 16px;
		letter-spacing: 0em;
		text-align: center;
	}

	.ant-btn-primary {
		border-radius: 46px;
		background-color: ${royalBlue};
		color: white;
		align-items: right;
	}

	.ant-btn-secondary {
		border-radius: 46px;
		background-color: ${white};
		color: ${royalBlue};
		border: 1px solid ${royalBlue};
		height: 44px;
		width: 200px;
		left: 0px;
		top: 0px;
		font-weight: 500;
	}
`;

const StyledCircle = styled(Badge)`
margin: 0;
`;
const StyledBadge = styled.div`
width: min-content;
margin-right: 0;
padding: 10px;
display: flex;
flex-direction: column;
span {
padding: 5px;
}
`;

function ManageBadges() {
  const { isShowing, toggle } = useModal();
  const { isDoubleShowing, doubletoggle } = useDoubleModal();
  const renderBadges = () => {
    const badges = [];
    for (let i = 0; i < 20; i++) {
      badges.push(Badge);
    }
    console.log(badges);
    return badges.map(badge => <StyledBadge key="badge.id" ><StyledCircle onClick={openModal}/><span>[Name]</span><span>[Tags]</span></StyledBadge>);
  };
  const openModal = (e) => {
    toggle(e);
    console.log(e.target);
  };
  const doubleToggleHandler = () => {
    toggle();
    doubletoggle();
  };

  return (
    <div>
      <CreateBadgeContainer>
        <Heading>Manage Badges</Heading>
        <FormContainer>
          <ManageBadgesForm />
          {renderBadges()}
          <DoubleModal
            isShowing={isShowing}
            hide={toggle}
            title="Badge Details"
            secondaryButtonStyle="true"
            modalBodyText={
              <div className="modal-form-body">
                <span>Name:</span>
                <span>Description: </span>
                <span>Tags: </span>
                <span>Remaining Quantity: xxx/</span>
              </div>}
            footer={
              <div className="btn-container">
                <BaseButton className="btn-secondary" key="back">
                Assign Badge
                </BaseButton>
                <BaseButton
                  className="btn-primary"
                  type="primary"
                  key="submit"
                  onClick={doubleToggleHandler}>
                Create More
                </BaseButton>
              </div>
            }>
          </DoubleModal>
          <CreateFormModal
            isDoubleShowing={isDoubleShowing}
            hide={doubletoggle}
            title="Create More Badges"
            buttonPrimary="Create More"
            buttonSecondary="Cancel"
            modalBodyText="true"
            name="name"
            description="description"
            tags="tags"
            quantity="quantity" />
          {/* <FormModal
            showModal={isDoubleShowing}
            hide={doubletoggle}/> */}
        </FormContainer>
      </CreateBadgeContainer>
    </div>
  );
}

export default ManageBadges;

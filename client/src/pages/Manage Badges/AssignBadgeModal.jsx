/* eslint-disable react/prop-types */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Form, Input, Radio, Modal as AntModal } from "antd";
import styled, { css } from "styled-components";
import useModal from "../../hooks/useModal";
import BaseButton from "../../components/Button/BaseButton";
import Modal from "../../components/Modals/Modal";
import PrimaryFormButton from "../../components/Button/PrimaryFormButton";
import { theme } from "../../constants/theme";
import SearchInput from "../../components/Input/SearchInput";
import Heading from "../../components/Typography/Heading";
const { display, body } = theme.typography.font.family;
const { royalBlue } = theme.colors;
const { TextArea } = Input;

const StyledModal = styled(AntModal)`
  text-align: center;
  width: 100%;
  .ant-modal-header {
  }
  &&& h4 {
    text-align: center;
    margin 0;
  }
  .btn-primary {
    margin: 0 auto;
    display: block;
  }
  .image-holder {
    height: 280px;
    width: 280px;
    display: block;
    background: #425af2;
    margin: 2.5vh auto;
    border-radius: 50%;
  }
  .remaining {
    text-align: center;
    display: block;
  }

  .hxWmnw {
    margin: 0;
  }
  .ant-modal-body {
    width: 100%;
    text-align: center;
    padding: 30px;
  }
  &&& .ant-modal-content {
    border-radius: 10px;
  }
  &&& .ant-modal-header {
    border-radius: 10px 10px
  }
  &&& .ant-modal-content {
    width: 100%;
  }
`;

const StyledForm = styled(Form)`

  width: 100%;
  min-width: 275px;
.ant-input {
  border-radius: 2px;
}
.ant-form-item-label label {
  padding: 0;
  width: 100%;
  min-width: 250px;
  font-weight: 800;
  font-size: 16px;
  font-family: ${body};
}

.ant-input {
  width: 100%;
  min-width: 250px;
  margin-bottom -7px;
  padding: 4.5px;
}

.ant-form-item-control-input-content, .jpEryk {
  align-self: flex-end;
  min-width: 148px;
  font-size: 14px;
}

.jpEryk {
  width: 30%;
}

.generate-link {
  background-color: white;
  color: #425af2;
  border-color: #425af2;
}

.modal {
  border-radius: 10px;
}

h4 { 
  padding: 0; 
  margin: 0; 
}

.ant-form-item-control-input-content {
  position: relative;
  display: flex;
  flex-direction: column;
  span {
    text-align: left;
  }
}

.ant-input-group-addon button {
  border-top: hidden;
  border-bottom: hidden;
  border-right: hidden;
  &:hover {
    border: ${royalBlue}
    border-top: solid;
    border-bottom: solid;
    border-right: solid;
  }
}

.generate-link {
  margin: 0;
}

.evidence-span {
  font-weight: 700;
}

.btn-tertiary {
  justify-content: center;
  align-content: center;
  padding: 0;
  width: auto;
  margin-right: 50px;
}

.buttons-parent-div .ant-form-item-control-input-content {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}

.grid-item .ant-form-item-control-input-content {
  display: grid;
  grid-template-rows: repeat(3, auto);
  grid-template-columns: auto auto;
  align-content: center;
  input {
    grid-row: 2/3;
    grid-column: 1/2;
    align-self: center;
    margin-bottom: 0;
    @media only screen and (max-width: 500px){
      width: 100%;
      grid-column: 1/3;
    }
  }
  button {
    grid-row: 2/3;
    grid-column: 2/3;
    justify-self: flex-end;
    align-self: center;
    @media only screen and (max-width: 500px) {
      grid-column: 1/3;
      grid-row: 3/4;
      margin-top: 24px;
      justify-self: center;
    }
  }
}
`;

export default function AssignBadgeModal(props) {
  const { isShowing, toggle } = useModal();
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState("vertical");
  const [value, setValue] = useState();
  const [nameValue, setNameValue] = useState();

  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
  };

  const formItemLayout =
    formLayout === "horizontal"
      ? {
        labelCol: {
          span: 5,
        },
        wrapperCol: {
          span: 14,
        },
      }
      : null;

  const formInputs = (accountValue, evidenceValue) => {
    if (accountValue && evidenceValue) {
      submitHandler(accountValue, evidenceValue);
    }
  };

  const submitHandler = (accountValue, evidenceValue) => {
    console.log("account holder submitting", accountValue, evidenceValue);
  };

  return (
    <StyledModal
    // eslint-disable-next-line react/prop-types
      visible={props.assignBadgeModal}
      keyboard={true}
      // eslint-disable-next-line react/prop-types
      onCancel={props.hide}
      okButtonProps={{ type: "primary" }}
      cancelButtonProps={{ type: "primary" }}
      footer={null}
      centered
      title={
        <Heading>
          <h4>Assign a Badge</h4>
        </Heading>
      }>
      <StyledForm
        id = "create-badge-form"
        {...formItemLayout}
        layout={formLayout}
        form={form}
        initialValues={{
          layout: formLayout,
        }}
        onValuesChange={onFormLayoutChange}
      >
        <Form.Item label="Select a FightPandemics account holder">
          <SearchInput placeholder="Start typing names of the person you want to award badges to" forminputs={formInputs({ value })}/>
        </Form.Item>
        <Form.Item label= "Share link with a non-account holder">
          <span>Username</span>
          <Input placeholder="First and Last Name" forminputs={formInputs(value)} />
        </Form.Item>
        <Form.Item className="grid-item">
          <span>Email</span>
          <Input placeholder="Email of non-account holder recipient" />
          <PrimaryFormButton
            className="generate-link"
            type="primary"
            onClick={toggle}
            // onSubmit={linkSubmitHandler()}
          >Generate Link</PrimaryFormButton>
          <Modal
            isShowing={isShowing}
            hide={toggle}
            modalWidth={800}
            title="Share Link with a non-account holder"
            buttonPrimary="Copy URL"
            buttonSecondary="Link"
            modalBodyText="The badge link has been successfully generated for [name]. Please copy this link to send to them!"
          />
        </Form.Item>
        <Form.Item label="">
          <span className="evidence-span">Evidence</span>
          <TextArea placeholder="Optionally provide evidence for the person who completed the task" forminputs={formInputs({ value })}/>
        </Form.Item>
        <Form.Item className="buttons-parent-div">
          <BaseButton className="btn-tertiary" key="back" onClick={props.hide}>
            Cancel
          </BaseButton>
          <PrimaryFormButton className="assign-badge" type="primary" onClick={toggle} onSubmit={submitHandler()}>Assign Badge</PrimaryFormButton>
          <Modal
            isShowing={isShowing}
            hide={toggle}
            modalWidth={800}
            title="Congratulations your badge has been assigned!"
            buttonPrimary="Copy URL"
            buttonSecondary="Link"
            modalBodyText="Your badge has been sent to [recipient name]! They will receieve an email notification for their new badge. You now have xxx badges remaining."
          />
        </Form.Item>
      </StyledForm>
    </StyledModal>
  );
}

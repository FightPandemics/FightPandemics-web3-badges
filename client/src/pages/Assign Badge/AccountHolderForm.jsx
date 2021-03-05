
import React, { useState } from "react";
import { Form, Input } from "antd";
import styled from "styled-components";
import Modal from "../../components/Modals/Modal";
import useModal from "../../hooks/useModal";
import PrimaryFormButton from "../../components/Button/PrimaryFormButton";
import { theme } from "../../constants/theme";
import SearchInput from "../../components/Input/SearchInput";
const { body } = theme.typography.font.family;
const { royalBlue } = theme.colors;
const { TextArea } = Input;

const StyledForm = styled(Form)`
  width: 100%;
  min-width: 250px;
  max-width: 500px;
  margin: 2.5vh auto;

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

.ant-form-item-control-input-content .jpEryk {
    align-self: flex-end;
    width: 148px;
    font-size: 14px;
}

.modal {
  border-radius: 10px;
}
h4 { padding: 0; margin: 0; }

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
`;

export default function AccountHolderForm() {
  const { isShowing, toggle } = useModal();
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState("vertical");
  const [value] = useState();
  // const [nameValue, setNameValue] = useState();

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
        <SearchInput
          placeholder="Start typing names of the person you want to award badges to"
          forminputs={formInputs({ value })}/>
      </Form.Item>
      <Form.Item label="">
        <span>Evidence</span>
        <TextArea
          placeholder="Optionally provide evidence for the person who completed the task"
          forminputs={formInputs({ value })}/>
      </Form.Item>
      <Form.Item>
        <PrimaryFormButton
          className="btn-right" type="primary"
          onClick={toggle}
          onSubmit={submitHandler()}>Assign Badge</PrimaryFormButton>
        <Modal
          isShowing={isShowing}
          hide={toggle}
          modalWidth={800}
          title="Congratulations your badge has been assigned!"
          buttonPrimary="Copy URL"
          buttonSecondary="Link"
          // eslint-disable-next-line max-len
          modalBodyText="Your badge has been sent to [recipient name]! They will receieve an email notification for their new badge. You now have xxx badges remaining."
        />
      </Form.Item>
    </StyledForm>
  );
}

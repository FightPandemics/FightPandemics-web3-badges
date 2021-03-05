/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Form, Input, Radio } from "antd";
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

  button {
    width: 100%;
    margin: 0;
  }
  
  span {
    text-align: left;
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
}
.modal {
  border-radius: 10px;
}
h4 { padding: 0; margin: 0; }

.ant-form-item-control-input-content {
  position: relative;
  display: flex;
  flex-direction: column;
}

.ant-form-item-control-input-content .jpEryk {
    align-self: flex-end;
    width: 226px;
}

.ant-radio-group {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.radio {
    display: flex
    flex-direction: row
    margin-bottom: 10px;
    .ant-radio-wrapper {
        justify-content: space-between;
    }
}

.ant-radio-checked .ant-radio-inner{
  border-color: ${royalBlue} !important ;
}

.ant-radio-checked:before{
  background-color: ${royalBlue};
}

.ant-radio-checked .ant-radio-inner:after{
  background-color: ${royalBlue};
}

.ant-radio:hover .ant-radio-inner {
  border-color: ${royalBlue} ;
}
`;

export default function AccountHolderForm() {
  const { isShowing, toggle } = useModal();
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState("vertical");
  const [value, setValue] = useState();

  const onChange = e => {
    setValue(e.target.value);
  };

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

  const formInputs = (radioValue, nameValue) => {
    if (radioValue && nameValue) {
      linkSubmitHandler(radioValue, nameValue);
    }
  };

  const linkSubmitHandler = (radioValue, nameValue) => {
    console.log("OBJECT", {
      Radio: radioValue,
      Name: nameValue,
    },
    );
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
      <Form.Item label= "Share link with a non-account holder">
        <span>Name</span>
        <Input placeholder="First and Last Name" forminputs={formInputs(value)} />
      </Form.Item>
      <Form.Item >
        <Radio.Group className="radio" onChange={onChange} value={value} forminputs={formInputs({ value })}>
          <Radio value={1}>I know the recipient&apos;s email </Radio>
          <Radio value={2}>I don&apos;t know the recipient&apos;s email </Radio>
        </Radio.Group>
      </Form.Item>

      {value === 1
        ? (
          <Form.Item label="">
            <span>Email</span>
            <Input placeholder="Email of non-account holder recipient" />
          </Form.Item>)
        : null
      }

      <Form.Item>
        <PrimaryFormButton className="btn-right" type="primary" onClick={toggle} onSubmit={linkSubmitHandler()}>Generate Link to Share</PrimaryFormButton>
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
    </StyledForm>
  );
}

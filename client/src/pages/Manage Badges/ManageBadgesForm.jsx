/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Form, Input, Button, Upload } from "antd";
import Modal from "../../components/Modals/Modal";
import useModal from "../../hooks/useModal";
import UploadButton from "../../components/Button/UploadButton";
import PrimaryFormButton from "../../components/Button/PrimaryFormButton";
import styled from "styled-components";
import { mq, theme } from "../../constants/theme";
import SearchInput from "../../components/Input/SearchInput";
import { SearchOutlined } from "@ant-design/icons";
const { white, darkerGray, royalBlue } = theme.colors;
const { display, body } = theme.typography.font.family;
const { TextArea } = Input;

const StyledForm = styled(Form)`
position: relative;
margin: 0 auto;
display: flex;
p {
    font-family: ${body};
    margin: 1em 0;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    text-align: center;
}
.ant-form-item {
  width: 100%;
}

.ant-form-item-label {
    font-family: ${body};
}
.ant-form-item-control-input-content {
    font-family: ${body};
}

.ant-input-affix-wrapper-lg {
    border-radius: 40px;
}

.ant-form-item-label {
position: absolute;
left: -10000px;
top: auto;
width: 1px;
height: 1px;
}

`;

export default function ManageBadgeForm() {
  const { isShowing, toggle } = useModal();
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState("vertical");
  const [value, setValue] = useState();

  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
  };

  const formItemLayout =
    formLayout === "horizontal"
      ? {
        labelCol: {
          span: 1,
        },
        wrapperCol: {
          span: 1,
        },
      }
      : null;

  const formInputs = (value) => {
    console.log(value);
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
      <Form.Item label="Search" >
        <Input size="large" placeholder="Search badges by name or tag" prefix={<SearchOutlined />} />
      </Form.Item>
    </StyledForm>
  );
}

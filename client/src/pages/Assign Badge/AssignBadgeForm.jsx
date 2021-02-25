/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Form, Input } from "antd";
import styled from "styled-components";
import Modal from "../../components/Modals/Modal";
import useModal from "../../hooks/useModal";
import PrimaryFormButton from "../../components/Button/PrimaryFormButton";
import { theme } from "../../constants/theme";
const { body } = theme.typography.font.family;
const { TextArea } = Input;

const StyledForm = styled(Form)`

  width: 33%;
  min-width: 250px;
  margin: 2.5vh auto;

  button {
    width: 100%;
    margin: 0;
  }

  .ant-form-item-label label {
    padding: 0 11px;
    width: 33%;
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
`;

export default function AssignBadgeForm() {
  const { isShowing, toggle } = useModal();
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState("vertical");
  const [image, setImage] = useState();

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

  const normFile = (e) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      console.log(e, e.fileList);
      return e;
    }
    console.log(e.fileList);
    return e && e.fileList;
  };

  // const buttonItemLayout =
  //   formLayout === "vertical"
  //     ? {
  //       wrapperCol: {
  //         span: 14,
  //         offset: 0,
  //       },
  //     }
  //     : null;

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
        <Input placeholder="Start typing names of the person you want to award badges to" />
      </Form.Item>
      <Form.Item label="Evidence">
        <TextArea placeholder="Optionally provide evidence for the person who completed the task" />
      </Form.Item>
      <Form.Item>
        <PrimaryFormButton className="btn-right" type="primary" onClick={toggle}>Assign Badge</PrimaryFormButton>
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

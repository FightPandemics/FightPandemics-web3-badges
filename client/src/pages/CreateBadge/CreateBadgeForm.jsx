/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Form, Input, Button, Upload } from "antd";
import StyledForm from "./StyledCreateBadgeForm";
import Modal from "../../components/Modals/Modal";
import useModal from "../../hooks/useModal";
import UploadButton from "../../components/Button/UploadButton";
import PrimaryFormButton from "../../components/Button/PrimaryFormButton";
const { TextArea } = Input;

export default function CreateBadgeForm() {
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
      <Form.Item label="Title (Name)">
        <Input placeholder="Write the name of the badge here" />
      </Form.Item>
      <Form.Item label="Description">
        <TextArea placeholder="Please write the description of the badge here" />
      </Form.Item>
      <Form.Item label="Tags">
        <TextArea placeholder="Start writing tags to begin autofill" />
      </Form.Item>
      <Form.Item label="Quantity">
        <Input placeholder="Write the amount of badges you want to create" />
      </Form.Item>
      <Form.Item
        name="upload"
        valuePropName="fileList"
        getValueFromEvent={normFile}
        // {...buttonItemLayout}
        className="form-buttons"
      >
        <div className="ant-upload-list-text"/>
        <UploadButton className="upload-btn" />
        <PrimaryFormButton className="btn-right" type="primary" onClick={toggle}>Create Badge</PrimaryFormButton>
        <Modal
          isShowing={isShowing}
          hide={toggle}
          modalWidth={800}
          title="Congratulations Your badge has been created!"
          buttonPrimary="Assign Badge"
          buttonSecondary="Close"
        />
      </Form.Item>
    </StyledForm>
  );
}

import React, { useState } from "react";
// import { FormInput } from "./CreateBadgeFormComponents";
import { Form, Input, Button, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
const { TextArea } = Input;

export default function CreateBadgeForm() {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState("vertical");

  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
  };

  const formItemLayout =
    formLayout === "horizontal"
      ? {
        labelCol: {
          span: 4,
        },
        wrapperCol: {
          span: 14,
        },
      }
      : null;

  const normFile = (e) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  const buttonItemLayout =
    formLayout === "vertical"
      ? {
        wrapperCol: {
          span: 14,
          offset: 4,
        },
      }
      : null;
  return (
    <>
      <Form
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
        >
          <Upload id="upload-button" name="logo" action="/upload.do" listType="picture">
            <Button icon={<UploadOutlined />}>Upload an Image</Button>
          </Upload>
          <p> We accept images in PNG format, 500x500 px </p>
        </Form.Item>
        <Form.Item {...buttonItemLayout}>
          <Button type="primary">Create Badge</Button>
        </Form.Item>
      </Form>
    </>
  );
}

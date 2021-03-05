/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
// import { Form, Input, Button, Upload } from "antd";
import { Form } from "antd";
import StyledForm from "./StyledCreateBadgeForm";
import Modal from "../../components/Modals/Modal";
import useModal from "../../hooks/useModal";
import UploadButton from "../../components/Button/UploadButton";
import PrimaryFormButton from "../../components/Button/PrimaryFormButton";
import pinFileToIPFS from "../../web3/pinata/pinFileToIPFS";
import hashMetadataToIPFS from "../../web3/pinata/hashMetadataToIPFS";
import addIpfsUriToContract from "../../web3/pinata/addIpfsUriToContract";
import { useFormik, FormikProvider } from "formik";
import { Form as FormikAntdForm, Input } from "formik-antd";
const { TextArea } = Input;

export default function CreateBadgeForm() {
  const { isShowing, toggle } = useModal();
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState("vertical");

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

  // Submit event for creating IPFS uri and hashing metadata to that IPFS uri
  async function handlePinataSubmit(values) {
    // TODO: upload file for pinning to work.
    const {
      title,
      description,
      tags,
      quantity,
      upload,
    } = values;

    // this function wont work bc upload is not working yet.
    const ipfsHash = await pinFileToIPFS(upload);
    console.log(ipfsHash);

    await hashMetadataToIPFS(ipfsHash, title, description, tags, quantity);

    // await addIpfsUriToContract(ipfsHash);
  }
  const handleSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
  };

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      tags: "",
      quantity: "",
      upload: "",
    },
    onSubmit: values => {
      handleSubmit(values);
      handlePinataSubmit(values);
    },
  });

  return (
    <FormikProvider value={formik}>
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
        <FormikAntdForm>
          <Form.Item label="Title (Name)">
            <Input name="title" placeholder="Write the name of the badge here" />
          </Form.Item>
          <Form.Item label="Description">
            <Input name="description" placeholder="Please write the description of the badge here" />
          </Form.Item>
          <Form.Item label="Tags">
            <Input name="tags" placeholder="Start writing tags to begin autofill" />
          </Form.Item>
          <Form.Item label="Quantity">
            <Input name="quantity" placeholder="Write the amount of badges you want to create" />
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
            <PrimaryFormButton className="btn-right" type="primary" onClick={toggle} htmlType="submit">Create Badge</PrimaryFormButton>
            <Modal
              isShowing={isShowing}
              hide={toggle}
              modalWidth={800}
              title="Congratulations Your badge has been created!"
              buttonPrimary="Assign Badge"
              buttonSecondary="Close"
            />
          </Form.Item>
        </FormikAntdForm>
      </StyledForm>
    </FormikProvider>
  );
}

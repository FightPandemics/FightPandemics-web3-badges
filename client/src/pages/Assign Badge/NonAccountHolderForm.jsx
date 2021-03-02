/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Form } from "antd";
import { useFormik, FormikProvider } from "formik";
import { Form as FormikAntdForm, Input, Radio } from "formik-antd";
import StyledForm from "./StyledAccountHolderForm";
import Modal from "../../components/Modals/Modal";
import useModal from "../../hooks/useModal";
import PrimaryFormButton from "../../components/Button/PrimaryFormButton";

export default function NonAccountHolderForm() {
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

  const handleSubmit = values => {
    alert(JSON.stringify(values, null, 2));
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
    },
    onSubmit: values => {
      handleSubmit(values);
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
          <Form.Item label= "Share link with a non-account holder">
            <span>Name</span>
            <Input name="name" placeholder="First and Last Name" forminputs={formInputs(value)} />
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
                <Input name="email" placeholder="Email of non-account holder recipient" />
              </Form.Item>)
            : null
          }

          <Form.Item>
            <PrimaryFormButton
              className="btn-right"
              type="primary"
              htmlType="submit"
              onClick={toggle}
              onSubmit={handleSubmit}
            >Generate Link to Share</PrimaryFormButton>
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
        </FormikAntdForm>
      </StyledForm>
    </FormikProvider>
  );
}

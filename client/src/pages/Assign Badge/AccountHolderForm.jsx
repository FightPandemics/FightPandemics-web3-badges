/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Form } from "antd";
import { useFormik, FormikProvider } from "formik";
import { Form as FormikAntdForm, Input } from "formik-antd";
import StyledForm from "./StyledAccountHolderForm";
import Modal from "../../components/Modals/Modal";
import useModal from "../../hooks/useModal";
import PrimaryFormButton from "../../components/Button/PrimaryFormButton";
import SearchInput from "../../components/Input/SearchInput";
const { TextArea } = Input;

export default function AccountHolderForm() {
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

  const handleSubmit = values => {
    alert(JSON.stringify(values, null, 2));
  };

  const formik = useFormik({
    initialValues: {
      accountHolder: "",
      evidence: "",
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
          <Form.Item label="Select a FightPandemics account holder">
            <SearchInput name="accountHolder" placeholder="Start typing names of the person you want to award badges to" forminputs={formInputs({ value })}/>
          </Form.Item>
          <Form.Item label="">
            <span>Evidence</span>
            <TextArea name="evidence" placeholder="Optionally provide evidence for the person who completed the task" forminputs={formInputs({ value })}/>
          </Form.Item>
          <Form.Item>
            <PrimaryFormButton className="btn-right" type="primary" onClick={toggle} onSubmit={handleSubmit}>Assign Badge</PrimaryFormButton>
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
        </FormikAntdForm>
      </StyledForm>
    </FormikProvider>
  );
}

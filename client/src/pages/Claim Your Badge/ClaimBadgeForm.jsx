/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Form, Input, Tooltip } from "antd";
import styled from "styled-components";
import Modal from "../../components/Modals/Modal";
import useModal from "../../hooks/useModal";
import PrimaryFormButton from "../../components/Button/PrimaryFormButton";
import Checkbox from "antd/lib/checkbox/Checkbox";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { theme } from "../../constants/theme";
const { body } = theme.typography.font.family;

const { royalBlue } = theme.colors;
const toolTipText =
<span>
        All of DuinGud&aposs badges are minted in MATIC, but should you want your
        badge mainnet, please un-check this checkbox so that you can submit the
        transaction to migrate the badge to mainnet. You&aposll need to pay for the
        transaction cost.
</span>;
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
`;

const StyledToolTip = styled(Tooltip)`
color: ${royalBlue};
`;
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

  return (
    <StyledForm
      {...formItemLayout}
      layout={formLayout}
      form={form}
      initialValues={{
        layout: formLayout,
      }}
      onValuesChange={onFormLayoutChange}>
      <Form.Item label="Email Address">
        <Input placeholder="" />
      </Form.Item>
      <Form.Item>
        <Checkbox toolTipText={toolTipText}>Free minting in MATIC</Checkbox>
        <StyledToolTip placement="bottom" title={toolTipText}>
          <QuestionCircleOutlined />
        </StyledToolTip>
      </Form.Item>
      <Form.Item>
        <PrimaryFormButton type="primary" onClick={toggle}>Claim Your Badge</PrimaryFormButton>
        <Modal
          isShowing={isShowing}
          hide={toggle}
          title="Thanks for submitting your email!"
          button="false"
          buttonPrimary=""
          buttonSecondary=""
          modalBodyText="Please check your inbox for a link to sign up for your wallet!"
        />
      </Form.Item>
    </StyledForm>
  );
}

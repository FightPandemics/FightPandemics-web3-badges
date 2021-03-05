/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";
import { Form, Input, Modal as AntModal } from "antd";
import BaseButton from "../../components/Button/BaseButton";
import Heading from "../../components/Typography/Heading";
import CongratulationsModal from "./CongratulationsModal";
import { theme } from "../../constants/theme";
import { ControlOutlined } from "@ant-design/icons";
const { colors, typography } = theme;
const StyledModal = styled(AntModal)`
border-radius: 10px;
width: 90vw;
max-width: 500px;
&&& .btn-primary {
  font-family: ${typography.font.family.display.poppins};
  border-radius: 46px;
  background-color: ${colors.royalBlue};
  color: white;
}

.ant-form-item-control-input-content label {
  text-align: left;
  display: block;
  margin-bottom: 10px;
}

.btn-container {
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-top: 50px;
}
.ant-typography h4 {
  text-align: center;
  margin-bottom: 0;
}
.ant-modal-body {
  width: 100%;
  text-align: center;
  padding: 30px;
  .row-item {
    margin-bottom: 20px;
    text-align: left;
  }
}
.modal-form-body {
  display: flex;
  flex-direction: column;
  align-text: left;
}
&&& .ant-modal-content {
  border-radius: 10px;
}
&&& .ant-modal-header {
  border-radius: 10px 10px 0 0;
}
`;
const modalBodyText = <span style={{ textAlign: "center" }}>You now have xxx/xxx badges remaining</span>;
export default class CreateFormModal extends React.Component {
    state = {
      name: this.props.name,
      description: this.props.description,
      tags: this.props.tags,
      quantity: "",
      showModal: false,

    }

  showModalHandler = (event) => {
    this.setState({ showModal: true });
    this.props.openCongratulationsModal();
    this.props.hide();
  }

  hideModalHandler = (event) => {
    this.setState({ showModal: false });
  }

    changeHandler = (e) => {
      this.setState({ [e.target.name]: e.target.value });
    }

    submitHandler = (value) => {
      const object = {
        name: this.state.name,
        description: this.state.description,
        tags: this.state.tags,
        quantity: this.state.quantity,
      };
      console.log(
        "Submitting", object);
    }

    render() {
      return (
        <StyledModal
          centered
          title={
            <Heading>
              <h4>{ this.props.title }</h4>
            </Heading>
          }
          visible={this.props.isCreateMoreModal}
          onCancel={this.props.hide}
          okButtonProps={{ type: "primary" }}
          cancelButtonProps={{ type: "primary" }}
          footer={null}
          keyboard={true}>
          {this.props.modalBodyText === "true"
            ? (
              <div className="modal-form-body">
                <span className="row-item">Name: { this.props.name }</span>
                <span className="row-item">Description: { this.props.description }</span>
                <span className="row-item">Tags: { this.props.tags }</span>
                <span className="row-item">Remaining Quantity: xxx/{this.props.quantity}</span>
                <Form>
                  <Form.Item>
                    <label>Quantity</label>
                    <Input name="quantity" type="number" placeholder="Additional number of badges you want to create" value={this.state.quantity} onChange={this.changeHandler} />
                    <div className="btn-container">
                      <BaseButton className="btn-tertiary" key="back" onClick={this.props.hide}>
                        {this.props.buttonSecondary}
                      </BaseButton>
                      <BaseButton
                        className="btn-primary"
                        type="primary"
                        key="submit"
                        onClick={this.showModalHandler}
                        onSubmit={this.submitHandler()}>
                        {this.props.buttonPrimary}
                      </BaseButton>
                    </div>
                  </Form.Item>
                </Form>
              </div>
            )
            : null}
        </StyledModal>
      );
    }
}

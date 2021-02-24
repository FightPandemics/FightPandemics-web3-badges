/* eslint-disable max-len */
import React from "react";
import styled from "styled-components";
import { Upload, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { theme } from "../../constants/theme";
// const { colors } = theme;

const StyledUpload = styled(Upload)`
font-family: ${theme.typography.font.family.display};
`;

class UploadButton extends React.Component {
state = {
  fileList: [],
};

handleChange = (info) => {
  let fileList = [...info.fileList];
  fileList = fileList.slice(-1);
  this.setState({ fileList });
};

render() {
  const props = {
    onChange: this.handleChange,
    multiple: true,
  };
  return (
    <StyledUpload
      {...props}
      fileList={this.state.fileList}
      id="upload-button"
      name="logo"
      action="/upload.do"
      listType="text"
      accept="image/png">
      {this.state.fileList.length > 0
        ? null
        : (
          <>
            <Button type="secondary" icon={<UploadOutlined />} shape="round">
                  Upload an image
            </Button>

            <p>
              {" "}
            We accept images in PNG format, <br /> 500x500 px, &#60;200KB{" "}
            </p>
          </>
        )}
    </StyledUpload>
  );
}
}

export default UploadButton;

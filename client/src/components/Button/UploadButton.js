import React, { useState } from "react";
import styled from "styled-components";
import { Upload, Button, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { theme } from "../../constants/theme";

const StyledUpload = styled(Upload)`
font-family: ${theme.typography.font.family.display};
`;

export default function UploadButton() {
  const [fileList, setFileList] = useState([]);

  const handleChange = (info) => {
    let newFileList = [...info.fileList];
    newFileList = newFileList.slice(-1);
    setFileList(newFileList);
  };
  const beforeUpload = (file) => {
    const isCorrectSize = file.size < 200000;
    if (!isCorrectSize) {
      message.error("Image must be no more than 500x500 and smaller than 200KB!");
    }
    console.log("isCorrectSize?", isCorrectSize, "File Size:", file.size);
    return isCorrectSize;
  };

  return (
    <StyledUpload
      onChange={handleChange}
      fileList={fileList}
      id="upload-button"
      name="logo"
      action="/upload.do"
      beforeUpload={beforeUpload}
      listType="text"
      accept="image/png"
    >
      {fileList.length > 0
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

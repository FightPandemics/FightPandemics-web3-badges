import styled from "styled-components";
import { Upload } from "antd";
// import { theme } from "../../constants/theme";
// const { colors } = theme;

const UploadButton = styled(Upload)`
&.ant-upload-list.ant-upload-list-text {
    width: 100%;
    color: black;
}
`;

export default UploadButton;

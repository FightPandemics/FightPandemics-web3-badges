import React from "react";
import styled from "styled-components";
import { Input } from "antd";
// import { theme, mq } from "../../constants/theme";
const { Search } = Input;
// const { colors } = theme;

const StyledSearchBar = styled(Search)`
  
`;

const SearchInput = (props) => <StyledSearchBar {...props} />;

export default SearchInput;

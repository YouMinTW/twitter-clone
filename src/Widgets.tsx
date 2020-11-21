import React from 'react';
import styled from 'styled-components';

import SearchIcon from '@material-ui/icons/Search';

const StyledWidgets = styled.div`
  flex: 0.3;
`;
const StyledInputContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.main.backgroundColor};
  padding: 10px;
  border-radius: 20px;
  margin-top: 10px;
  margin-left: 20px;
  & > input {
    border: none;
    background-color: ${props => props.theme.main.backgroundColor};
  }
`;

const StyledWidgetsContainer = styled.div`
  margin-top: 15px;
  margin-left: 20px;
  padding: 20px;
  background-color: #f5f8fa;
  border-radius: 20px;
  & > h2 {
    font-size: 18px;
    font-weight: 800;
  }
`;
const StyledSearchIcon = styled(SearchIcon)`
  color: gray;
`;
const Widgets: React.FC = () => (
  <StyledWidgets>
    <StyledInputContainer>
      <StyledSearchIcon />
      <input placeholder="Search Twitter" type="text" />
    </StyledInputContainer>

    <StyledWidgetsContainer>
      <h2>What's happening</h2>
    </StyledWidgetsContainer>
  </StyledWidgets>
);

export default Widgets;

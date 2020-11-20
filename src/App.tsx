import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { StylesProvider } from '@material-ui/core/styles';
import Sidebar from './Sidebar';
import Feed from './Feed';
import theme from './theme';

const StyledDiv = styled.div`
  display: flex;
  height: 100vh;
  max-width: 1300px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 10px;
`;
function App() {
  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <StyledDiv>
          <Sidebar />
          <Feed />
        </StyledDiv>
      </ThemeProvider>
    </StylesProvider>
  );
}

export default App;

import React from 'react';
import Sidebar from './Sidebar';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import { StylesProvider } from '@material-ui/core/styles';

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
        </StyledDiv>
      </ThemeProvider>
    </StylesProvider>
  );
}

export default App;

import React from 'react';
import { ApolloProvider } from '@apollo/client/react/context/ApolloProvider';
import styled, { ThemeProvider } from 'styled-components';
import { StylesProvider } from '@material-ui/core/styles';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';
import theme from './theme';

import { createApolloClient } from './apollo';

const StyledDiv = styled.div`
  display: flex;
  height: 100vh;
  max-width: 1300px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 10px;
`;

const client = createApolloClient();
function App() {
  return (
    <ApolloProvider client={client}>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <StyledDiv>
            <Sidebar />
            <Feed />
            <Widgets />
          </StyledDiv>
        </ThemeProvider>
      </StylesProvider>
    </ApolloProvider>
  );
}

export default App;

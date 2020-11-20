import React, { useState } from 'react';
import styled from 'styled-components';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
const StyledTweetBox = styled.div`
  padding-bottom: 10px;
  border-bottom: 8px solid ${props => props.theme.main.backgroundColor};
  padding-right: 10px;
  & > form {
    display: flex;
    flex-direction: column;
  }
`;
const StyledInputContainer = styled.div`
  padding: 20px;
  display: flex;
  & > input {
    flex: 1;
    margin-left: 20px;
    font-size: 20px;
    border: none;
  }
`;
const StyledImageInput = styled.input`
  border: none;
  padding: 10px;
`;
const StyledTweetButton = styled(Button)`
  background-color: ${props => props.theme.main.color};
  border: none;
  color: white;
  font-weight: 900;
  text-transform: inherit;
  border-radius: 30px;
  width: 80px;
  height: 40px;
  margin-top: 20px;
  margin-left: auto;
  &:hover {
    background-color: ${props => props.theme.main.color};
  }
`;
const TweetBox: React.FC = () => {

  return (
    <StyledTweetBox>
      <form>
        <StyledInputContainer>
          <Avatar src="https://avatars0.githubusercontent.com/u/50104002?s=460&u=b0a96d4e307ed3108e042d10459a15ee1dea801b&v=4" />
          <input
            type="text"
          />
        </StyledInputContainer>
        <StyledImageInput
          type="text"
        />

        <StyledTweetButton
          type="submit"
        >
          Tweet
        </StyledTweetButton>
      </form>
    </StyledTweetBox>
  );
};

export default TweetBox;

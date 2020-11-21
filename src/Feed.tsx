import React from 'react';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import TweetBox from './TweetBox';
import Post from './Post';

const StyledFeed = styled.div`
  border-right: 1px solid ${props => props.theme.main.backgroundColor};
  flex: 0.4;
  min-width: fit-content;
  overflow-y: scroll;
  // 隱藏 Hide scroll bar
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Hide scrollbar for Chrome, Safari and Opera */
  }
`;
const StyledHeader = styled.div`
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 100;
  border: 1px solid ${props => props.theme.main.backgroundColor};
  padding: 15px 20px;
`;
const StyledH2 = styled.h2`
  font-size: 20px;
  font-weight: 800;
`;
const Feed: React.FC = () => (
  <StyledFeed>
    <StyledHeader>
      <StyledH2>Home</StyledH2>
    </StyledHeader>

    <TweetBox />
    <Post />
    <Post />
    <Post />
  </StyledFeed>
);

export default Feed;

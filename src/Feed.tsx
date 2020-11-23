import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import TweetBox from './TweetBox';
import Post from './Post';
import { usePost, post } from './usePost';

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
const Feed: React.FC = () => {
  const { loading, data } = usePost();
  const [posts, setPosts] = useState<post[]>([]);
  useEffect(() => {
    if (!loading) {
      setPosts(data?.post || []);
    }
  }, [data]);

  return (
    <StyledFeed>
      <StyledHeader>
        <StyledH2>Home</StyledH2>
      </StyledHeader>

      <TweetBox />
      {posts.map((post: any) => (
        <Post
          avatar={post.member.avatar_url}
          displayName={post.member.name}
          verified={post.member.verified}
          username={post.member.account_name}
          text={post.content}
          image={post.image_url}
        />
      ))}
    </StyledFeed>
  );
};

export default Feed;

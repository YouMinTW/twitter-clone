import React, { useState } from 'react';
import styled from 'styled-components';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';

const StyledPost = styled.div`
  display: flex;
  align-items: flex-start;
  border-bottom: 1px solid ${props => props.theme.main.backgroundColor};
  padding-bottom: 10px;
`;
const StyledAvatarContainer = styled.div`
  padding: 20px;
`;
const StyledPostContentContainer = styled.div`
  flex: 1;
  padding: 10px;
  & > img {
    border-radius: 20px;
  }
`;
const StyledPostContentDescriptionContainer = styled.div`
  margin-bottom: 10px;
  font-size: 15px;
`;
const StyledH3 = styled.h3`
  font-size: 15px;
  margin-bottom: 5px;
`;
const StyledSpan = styled.span`
  font-weight: 600;
  font-size: 12px;
  color: gray;
`;
const StyledVerifiedIcon = styled(VerifiedUserIcon)`
  font-size: 14px;
  color: ${props => props.theme.main.color};
`;

const StyledPostContentFooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const Post: React.FC = () => {
  const { avatar, displayName, verified, username, text, image } = {
    avatar:
      'https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png',
    displayName: 'Rafeh Qazi',
    verified: true,
    username: 'cleverqazi',
    text: 'you made my day',
    image:
      'https://cdn.discordapp.com/attachments/483550384133111808/779492492042698762/FB_IMG_1605915870102.jpg',
  };

  return (
    <StyledPost>
      <StyledAvatarContainer>
        <Avatar src={avatar} />
      </StyledAvatarContainer>
      <StyledPostContentContainer>
        <div className="post__header">
          <div className="post__headerText">
            <StyledH3>
              {displayName}{' '}
              <StyledSpan>
                {verified && <StyledVerifiedIcon />} @{username}
              </StyledSpan>
            </StyledH3>
          </div>
          <StyledPostContentDescriptionContainer>
            <p>{text}</p>
          </StyledPostContentDescriptionContainer>
        </div>
        <img src={image} alt="" />
        <StyledPostContentFooterContainer>
          <ChatBubbleOutlineIcon fontSize="small" />
          <RepeatIcon fontSize="small" />
          <FavoriteBorderIcon fontSize="small" />
          <PublishIcon fontSize="small" />
        </StyledPostContentFooterContainer>
      </StyledPostContentContainer>
    </StyledPost>
  );
};

export default Post;

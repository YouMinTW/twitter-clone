import React from 'react';
// import "./Sidebar.css";
import TwitterIcon from '@material-ui/icons/Twitter';
import SidebarOption from './SidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

const StyledSidebar = styled.div`
  border-right: 1px solid ${props => props.theme.main.backgroundColor};
  flex: 0.3;
  /* min-width: 250px; */
  margin-top: 20px;
  padding-left: 20px
  padding-right: 20px;
`;

// Material UI 底層實作支援，可直接放入styled使用
const StyledTwitterIcon = styled(TwitterIcon)`
  color: ${props => props.theme.main.color};
  font-size: 30px !important;
  margin-left: 20px;
  margin-bottom: 20px;
`;

// 範例全用important 好像有點太兇！改用 MUI <StylesProvider injectFirst> 直接預先採用客製化的style
const StyledButton = styled(Button)`
  background-color: ${props => props.theme.main.color};
  border: none;
  color: white;
  font-weight: 900;
  text-transform: inherit;
  border-radius: 30px;
  height: 50px;
  margin-top: 20px;
  &:hover {
    background-color: ${props => props.theme.main.color};
  }
`;

const Sidebar: React.FC = () => (
  <StyledSidebar>
    <StyledTwitterIcon />
    <SidebarOption isActive Icon={HomeIcon} text="Home" />
    <SidebarOption isActive={false} Icon={SearchIcon} text="Explore" />
    <SidebarOption Icon={NotificationsNoneIcon} text="Notifications" />
    <SidebarOption Icon={MailOutlineIcon} text="Messages" />
    <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks" />
    <SidebarOption Icon={ListAltIcon} text="Lists" />
    <SidebarOption Icon={PermIdentityIcon} text="Profile" />
    <SidebarOption Icon={MoreHorizIcon} text="More" />

    {/* Button -> Tweet */}
    <StyledButton variant="outlined" fullWidth>
      Tweet
    </StyledButton>
  </StyledSidebar>
);

export default Sidebar;

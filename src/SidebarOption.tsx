import React from 'react';
import styled from 'styled-components';
import { SvgIconComponent } from '@material-ui/icons';

type SidebarOptionProps = {
  isActive?: boolean;
  text: string;
  Icon: SvgIconComponent;
};

const StyledH2 = styled.h2``;

// 使用 as 來動態抽換元件
const StyledIcon = styled.div``;

const StyledDiv = styled.div<{ active: boolean }>`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: ${props => (props.active ? props.theme.main.color : 'black')};

  &:hover {
    background-color: #e8f5fe;
    border-radius: 30px;
    color: ${props => props.theme.main.color};
    transition: color 100ms ease-out;
  }
  //  如何改變一個props下來的元件的樣式，透過 as
  //  如何使用子選擇器
  & > ${StyledIcon} {
    padding: 20px;
  }
  & > ${StyledH2} {
    font-weight: 800;
    font-size: 20px;
    margin-right: 20px;
  }
`;

const SidebarOption: React.FC<SidebarOptionProps> = ({
  isActive,
  text,
  Icon,
}) => {
  console.log({ isActive });
  return (
    <StyledDiv active={isActive ? true : false}>
      <StyledIcon as={Icon} />
      <StyledH2>{text}</StyledH2>
    </StyledDiv>
  );
};

export default SidebarOption;

import React, { HTMLAttributes, ReactChild } from 'react';
import styled from 'styled-components';

interface ContainerTheme {
  background: string;
  width: number;
  height: number;
}

const defaultContainerTheme: ContainerTheme = {
  background: '#161214',
  width: 400,
  height: 250,
};

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: ReactChild;
  theme?: Partial<ContainerTheme>;
}

export function GigglEmojiPicker(props: Props) {
  return (
    <StyledContainer {...defaultContainerTheme} {...props.theme}>
      {props.children}
    </StyledContainer>
  );
}

const StyledContainer = styled.div<ContainerTheme>`
  position: relative;

  height: ${(p) => p.height};
  width: ${(p) => p.width};
  background: ${(p) => p.background};
`;

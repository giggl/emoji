import React, { HTMLAttributes, ReactChild } from 'react';
import { styled } from './css';

interface ContainerTheme {
  background: string;
  color: string;
  width: number;
  height: number;
}

const defaultContainerTheme: ContainerTheme = {
  background: '#161214',
  color: '#cccccc',
  width: 250,
  height: 400,
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

const StyledContainer = styled('div')<ContainerTheme>({
  background: (p) => p.background,
  width: (p) => p.width,
  height: (p) => p.height,
  color: (p) => p.color,
  borderRadius: 20,
  boxSizing: 'border-box',
});

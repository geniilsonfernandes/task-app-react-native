import styled, { css } from "styled-components/native";

export const Container = styled.View`
  ${({ theme }) => css`
    background: ${theme.COLORS.GRAY_700};
    height: 173px;
    justify-content: center;
    align-items: center;
  `}
`;

export const Logo = styled.Image`
  width: 110px;
  height: 32px;
`;

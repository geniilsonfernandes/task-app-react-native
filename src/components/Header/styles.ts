import styled, { css } from "styled-components/native";

export const Wrapper = styled.View`
  ${({ theme }) => css`
    background: ${theme.COLORS.GRAY_700};
    height: 173px;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 0 24px;
  `}
`;

export const Logo = styled.Image`
  width: 110px;
  height: 32px;
`;

export const InputWrapper = styled.View`
  width: 100%;
  position: absolute;
  bottom: 0;
  margin-bottom: -24px;
`;

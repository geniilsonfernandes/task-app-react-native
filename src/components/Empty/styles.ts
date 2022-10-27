import styled, { css } from "styled-components/native";
import { EmptyProps } from ".";

export const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  align-content: center;
  height: 100%;
  padding: 48px 0;
`;
export const Image = styled.Image``;

export const Title = styled.Text<Pick<EmptyProps, "titleSize">>`
  ${({ theme, titleSize }) => css`
    padding-top: 8px;
    font-weight: 600;
    font-size: ${titleSize === "normal" ? `18px` : `24px`};
    color: ${theme.COLORS.GRAY_300};
  `}
`;
export const SubTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_300};
  `}
`;

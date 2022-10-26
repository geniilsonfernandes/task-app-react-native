import styled, { css } from "styled-components/native";

export const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

type TextProps = {
  color: string;
};
export const Text = styled.Text<TextProps>`
  ${({ theme, color }) => css`
    color: ${color === "blue" ? theme.COLORS.BLUE : theme.COLORS.PURPLE};
    font-weight: 600;
    font-size: 14px;
  `}
`;
export const Counter = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    background: ${theme.COLORS.GRAY_500};
    width: 25px;
    height: 18px;
    align-items: center;
    border-radius: 8px;
    font-weight: 600;
    font-size: 12px;
    text-align: center;
    margin-left: 8px;
  `}
`;

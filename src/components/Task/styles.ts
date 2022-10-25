import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export const Wrapper = styled.View`
  ${({ theme }) => css`
    background: ${theme.COLORS.GRAY_500};
    border: 1px solid ${theme.COLORS.GRAY_400};
    border-radius: 6px;
    padding: 12px 0;
    flex-direction: row;
    align-items: center;
    margin-bottom: 8px;
  `}
`;
export const Checked = styled(TouchableOpacity)`
  padding: 0 12px;
`;
export const Trash = styled(TouchableOpacity)`
  padding: 0 16px;
`;

type TextProps = {
  checked: boolean;
};

const textModifier = () => css`
  text-decoration: line-through;
  opacity: 0.5;
`;

export const Text = styled.Text<TextProps>`
  ${({ theme, checked }) => css`
    font-size: 14px;
    color: ${theme.COLORS.GRAY_100};
    font-weight: 400;
    flex: 1;
    line-height: 20px;
    ${checked && textModifier()}
  `}
`;

import { TextInput } from "react-native";
import styled, { css } from "styled-components/native";

export const Wrapper = styled.View`
  flex-direction: row;
`;

export const Input = styled(TextInput)`
  ${({ theme }) => css`
    padding: 16px;
    min-height: 54px;
    padding: 10px;
    flex: 1;
    border-radius: 6px;
    background: ${theme.COLORS.GRAY_500};
    border: 1px solid ${theme.COLORS.GRAY_700};
    margin-right: 4px;
    color: ${theme.COLORS.GRAY_100};
  `}
`;
export const Button = styled.TouchableOpacity`
  ${({ theme }) => css`
    background: ${theme.COLORS.BLUE_DARK};
    width: 52px;
    height: 52px;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
  `}
`;

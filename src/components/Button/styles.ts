import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export const Wrapper = styled(TouchableOpacity)`
  ${({ theme }) => css`
    background: ${theme.COLORS.BLUE};
    height: 54px;
    padding: 0 ${theme.SPACINGS.SMALL};
    border-radius: 6px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  `}
`;
export const Text = styled.Text`
  ${({ theme }) => css`
    font-weight: 600;
    color: ${theme.COLORS.GRAY_100};
    font-size: 18px;
  `}
`;

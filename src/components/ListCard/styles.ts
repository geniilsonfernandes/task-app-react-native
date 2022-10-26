import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export const Wrapper = styled(TouchableOpacity)`
  ${({ theme }) => css`
    background: ${theme.COLORS.GRAY_500};
    height: 64px;
    padding: ${theme.SPACINGS.SMALL};
    border-radius: 6px;
    flex-direction: row;
    align-items: center;
    margin: 4px 0;
  `}
`;
export const Text = styled.Text`
  ${({ theme }) => css`
    padding-left: 18px;
    color: ${theme.COLORS.GRAY_100};
    font-size: 18px;
  `}
`;
export const IconLeft = styled.View`
  margin-left: auto;
`;

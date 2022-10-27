import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export const Wrapper = styled.View`
  ${({ theme }) => css`
    background: ${theme.COLORS.GRAY_700};
    height: 173px;
    justify-content: center;
    align-items: center;
    position: relative;

    padding: 0 ${theme.SPACINGS.SMALL};
  `}
`;
export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: 18px;
    color: ${theme.COLORS.GRAY_300};
  `}
`;
export const ButtonBack = styled(TouchableOpacity)`
  ${({ theme }) => css`
    position: absolute;
    left: ${theme.SPACINGS.SMALL};
  `}
`;

export const Logo = styled.Image`
  width: 110px;
  height: 32px;
`;

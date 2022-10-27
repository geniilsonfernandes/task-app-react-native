import { TextInput } from "react-native";
import styled, { css } from "styled-components/native";

export const Wrapper = styled.View`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.COLORS.GRAY_600};
    padding-bottom: ${theme.SPACINGS.SMALL};
  `}
`;
export const Content = styled.View`
  ${({ theme }) => css`
    flex: 1;
    justify-content: center;
    padding: 0 ${theme.SPACINGS.SMALL};
  `}
`;
export const Empty = styled.View`
  height: 150px;
`;

export const Input = styled(TextInput)`
  ${({ theme }) => css`
    padding: 16px;
    height: 54px;
    padding: 10px;
    width: 100%;
    margin-bottom: 20px;
    border-radius: 6px;
    background: ${theme.COLORS.GRAY_500};
    border: 1px solid ${theme.COLORS.GRAY_700};
    margin-right: 4px;
    color: ${theme.COLORS.GRAY_100};
  `}
`;

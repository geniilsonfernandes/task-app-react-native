import styled, { css } from "styled-components/native";
import { FlatList } from "react-native";
export const Wrapper = styled.View`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.COLORS.GRAY_600};
    padding-bottom: ${theme.SPACINGS.SMALL};
  `}
`;
export const Flatlist = styled(FlatList)`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.COLORS.GRAY_600};
    border-radius: 6px;
    margin: ${theme.SPACINGS.SMALL} 0;
  `}
`;
export const Content = styled.View`
  ${({ theme }) => css`
    flex: 1;
    padding: 0 ${theme.SPACINGS.SMALL};
    padding-top: ${theme.SPACINGS.SMALL};
    background-color: ${theme.COLORS.GRAY_600};
  `}
`;
export const Head = styled.View``;

export const ContentButton = styled.View`
  ${({ theme }) => css`
    padding: 0 ${theme.SPACINGS.SMALL};
    z-index: 100;
  `}
`;

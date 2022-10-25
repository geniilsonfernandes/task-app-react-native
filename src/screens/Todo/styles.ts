import styled, { css } from "styled-components/native";

export const Wrapper = styled.ScrollView`
  ${({ theme }) => css`
    background: ${theme.COLORS.GRAY_600};
    flex: 1;
  `}
`;
export const TaskList = styled.View`
  padding: 0 24px;
  padding-top: 24px;
`;

import styled, { css } from "styled-components/native";

export const Wrapper = styled.View`
  ${({ theme }) => css`
    background: ${theme.COLORS.GRAY_600};
    flex: 1;
  `}
`;

export const TodoWrapper = styled.View`
  padding: 0 16px;
`;
export const TodosWrapper = styled.View`
  padding: 0 16px;
  flex: 1;
`;
export const InputWrapper = styled.View`
  margin-top: -27px;
`;

export const HeadWrapper = styled.View`
  padding: 16px 0;
  flex-direction: row;
  justify-content: space-between;
`;

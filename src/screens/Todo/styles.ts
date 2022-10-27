import styled, { css } from "styled-components/native";

export const Wrapper = styled.View`
  ${({ theme }) => css`
    background: ${theme.COLORS.GRAY_600};
    flex: 1;
  `}
`;

export const TodoWrapper = styled.View`
  ${({ theme }) => css`
    padding: 0 ${theme.SPACINGS.SMALL};
  `}
`;
export const TodosWrapper = styled.View`
  ${({ theme }) => css`
    padding: 0 ${theme.SPACINGS.SMALL};
  `}
  flex: 1;
`;
export const InputWrapper = styled.View`
  margin-top: -27px;
`;

export const HeadWrapper = styled.View`
  ${({ theme }) => css`
    padding: ${theme.SPACINGS.SMALL} 0;
  `}
  flex-direction: row;
  justify-content: space-between;
`;

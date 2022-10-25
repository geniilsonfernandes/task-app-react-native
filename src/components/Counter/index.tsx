import React from "react";

import * as S from "./styles";

type CounterProps = {
  title: string;
  counter?: number;
  color?: "blue" | "purple";
};

export const Counter = ({
  title,
  counter = 0,
  color = "blue"
}: CounterProps) => {
  return (
    <S.Wrapper>
      <S.Text color={color}>{title}</S.Text>
      <S.Counter>{counter}</S.Counter>
    </S.Wrapper>
  );
};

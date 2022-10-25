import React from "react";
import { Counter } from "../Counter";

import * as S from "./styles";

export const Head = () => {
  return (
    <S.Wrapper>
      <Counter title="Criadas" color="blue" />
      <Counter title="Concluídas" color="purple" />
    </S.Wrapper>
  );
};

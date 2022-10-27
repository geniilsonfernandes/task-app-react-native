import React from "react";
import { useTheme } from "styled-components";
import { Button } from "../../components/Button";
import { Empty } from "../../components/Empty";
import { Header } from "../../components/Header";

import * as S from "./styles";

export const NewList = () => {
  const theme = useTheme();
  return (
    <S.Wrapper>
      <Header />
      <S.Content>
        <S.Empty>
          <Empty
            title="Nova Lista"
            subTitle="Crie tarefas e organize seus itens a fazer"
            titleSize="big"
          />
        </S.Empty>
        <S.Input
          placeholder="Nome da nova lista"
          placeholderTextColor={theme.COLORS.GRAY_300}
        />
        <Button title="Criar" />
      </S.Content>
    </S.Wrapper>
  );
};

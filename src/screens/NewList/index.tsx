import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useTheme } from "styled-components";
import { Button } from "../../components/Button";
import { Empty } from "../../components/Empty";
import { Header } from "../../components/Header";

import * as S from "./styles";

export const NewList = () => {
  const theme = useTheme();
  const navigation = useNavigation();

  const handleAddNewList = () => {
    navigation.navigate("todo");
  };

  return (
    <S.Wrapper>
      <Header showBack />
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
        <Button title="Criar" onPress={handleAddNewList} />
      </S.Content>
    </S.Wrapper>
  );
};

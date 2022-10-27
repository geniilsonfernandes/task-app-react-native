import React from "react";
import { Button } from "../../components/Button";
import { Counter } from "../../components/Counter";
import { Empty } from "../../components/Empty";
import { Header } from "../../components/Header";
import { ListCard } from "../../components/ListCard";

import * as S from "./styles";

export const Lists = () => {
  const list = Array.from(Array(0).keys());

  return (
    <S.Wrapper>
      <Header />
      <S.Content>
        <S.Head>
          <Counter title="Listas" color="blue" counter={list.length} />
        </S.Head>
        <S.Flatlist
          showsVerticalScrollIndicator={false}
          data={list}
          keyExtractor={(id) => `list ${id}`}
          renderItem={({ item }) => <ListCard title={`list ${item}`} />}
          ListEmptyComponent={
            <Empty
              title="Você ainda criou nenhuma lista"
              subTitle="Crie listas e organize seus itens a fazer"
            />
          }
        />
      </S.Content>
      <S.ContentButton>
        <Button title="Criar nova lista" />
      </S.ContentButton>
    </S.Wrapper>
  );
};

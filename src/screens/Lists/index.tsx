import { useCallback, useState } from "react";
import { FlatList } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { Button } from "../../components/Button";
import { Counter } from "../../components/Counter";
import { Empty } from "../../components/Empty";
import { Header } from "../../components/Header";
import { ListCard } from "../../components/ListCard";
import { getAllList } from "../../store/list/getAllLists";

import * as S from "./styles";
import { ListTypes } from "../../store/storageTypes";

export const Lists = () => {
  const navigation = useNavigation();
  const [lists, setLists] = useState<ListTypes[]>();

  const handleNewList = () => {
    navigation.navigate("newlist");
  };

  async function fetchLists() {
    try {
      const data = await getAllList();
      setLists(data);
    } catch (error) {
      console.log(error);
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchLists();
    }, [])
  );

  return (
    <S.Wrapper>
      <Header />
      <S.Content>
        <S.Head>
          <Counter title="Listas" color="blue" counter={lists?.length} />
        </S.Head>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={lists}
          keyExtractor={({ id }) => `list ${id}`}
          renderItem={({ item }) => <ListCard title={item.name} />}
          ListEmptyComponent={
            <Empty
              title="Você ainda criou nenhuma lista"
              subTitle="Crie listas e organize seus itens a fazer"
            />
          }
        />
      </S.Content>
      <S.ContentButton>
        <Button title="Criar nova lista" onPress={handleNewList} />
      </S.ContentButton>
    </S.Wrapper>
  );
};

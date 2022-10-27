import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { useTheme } from "styled-components";
import { Button } from "../../components/Button";
import { Empty } from "../../components/Empty";
import { Header } from "../../components/Header";
import { createNewList } from "../../store/list/createNewList";

import * as S from "./styles";

export const NewList = () => {
  const [listName, setListName] = useState("");
  const theme = useTheme();
  const navigation = useNavigation();

  const handleAddNewList = async () => {
    try {
      await createNewList({ id: listName, name: listName });
      navigation.navigate("todo", { listName: listName });
      setListName("");
    } catch (error) {
      console.log(error);

      //   if (error instanceof AppError) {
      //     Alert.alert(`Novo grupo`, error.message);
      //   } else {
      //     Alert.alert(`Novo grupo`, "Não foi possível criar um novo grupo");
      //     console.log(error);
      //   }
    }
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
          onChangeText={setListName}
          value={listName}
        />
        <Button title="Criar" onPress={handleAddNewList} />
      </S.Content>
    </S.Wrapper>
  );
};

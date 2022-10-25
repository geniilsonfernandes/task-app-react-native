import React from "react";
import { AntDesign } from "@expo/vector-icons";

import * as S from "./styles";
import { useTheme } from "styled-components/native";

export const Input = () => {
  const theme = useTheme();
  return (
    <S.Wrapper>
      <S.Input
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor={theme.COLORS.GRAY_300}
      />
      <S.Button>
        <AntDesign name="pluscircleo" size={18} color="white" />
      </S.Button>
    </S.Wrapper>
  );
};

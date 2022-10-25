import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";

import * as S from "./styles";
import { useTheme } from "styled-components/native";
import { Alert } from "react-native";

type InputProps = {
  onSubmit: (task: string) => string;
};

export const Input = ({ onSubmit }: InputProps) => {
  const theme = useTheme();
  const [value, setValue] = useState("");

  const handleSubmitValue = () => {
    if (value.trim().length > 0) {
      onSubmit && onSubmit(value);
    } else {
      Alert.alert("Nova Tarefa", "digite sua tarefa");
    }
  };

  return (
    <S.Wrapper>
      <S.Input
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor={theme.COLORS.GRAY_300}
        onChangeText={setValue}
        multiline={true}
      />
      <S.Button onPress={() => handleSubmitValue()}>
        <AntDesign name="pluscircleo" size={18} color="white" />
      </S.Button>
    </S.Wrapper>
  );
};

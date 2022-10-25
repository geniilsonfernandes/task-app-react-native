import React from "react";
import { View } from "react-native";
import { Head } from "../../components/Head";
import { Header } from "../../components/Header";
import { Task } from "../../components/Task";

import * as S from "./styles";

const Todo = () => {
  return (
    <S.Wrapper>
      <Header />
      <Head />
      <S.TaskList>
        <Task />
        <Task />
      </S.TaskList>
    </S.Wrapper>
  );
};

export default Todo;

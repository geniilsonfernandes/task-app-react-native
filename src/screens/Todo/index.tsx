import React, { useState } from "react";
import { FlatList } from "react-native";
import { Counter } from "../../components/Counter";
import { Head } from "../../components/Head";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Task } from "../../components/Task";

import * as S from "./styles";

const data = [
  { task: "task 1", create_at: "12,12,12", check: false, id: "123" }
];

const Todo = () => {
  const checkedTasks = data.filter((task) => task.check).length;
  const createdTasks = data.length;

  const handleAddNewTask = (task: string) => {
    console.log(task);
  };

  const handleRemoveTask = (id: string) => {
    console.log(id, "handleRemoveTask");
  };
  const handleCheckTask = (status: boolean) => {
    console.log(status);
  };

  return (
    <S.Wrapper>
      <Header />
      <S.TodoWrapper>
        <S.InputWrapper>
          <Input onSubmit={(task) => handleAddNewTask(task)} />
        </S.InputWrapper>
        <S.HeadWrapper>
          <Counter title="Criadas" color="blue" counter={createdTasks} />
          <Counter title="Concluídas" color="purple" counter={checkedTasks} />
        </S.HeadWrapper>
        <FlatList
          data={data}
          keyExtractor={({ id }) => id}
          renderItem={({ item }) => (
            <Task
              task={item.task}
              check={item.check}
              onRemove={() => handleRemoveTask(item.id)}
              onCheck={(check) => handleCheckTask(check)}
            />
          )}
        />
      </S.TodoWrapper>
    </S.Wrapper>
  );
};

export default Todo;

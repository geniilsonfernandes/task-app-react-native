import React, { useState } from "react";
import { FlatList } from "react-native";
import { Counter } from "../../components/Counter";
import { Empty } from "../../components/Empty";
import { Header } from "../../components/Header";
import { TaskInput } from "../../components/TaskInput";
import { Task } from "../../components/Task";

import * as S from "./styles";

type DataProps = {
  task: string;
  create_at: string;
  check: boolean;
  id: string;
}[];

const Todo = () => {
  const [data, setData] = useState<DataProps>([]);
  const checkedTasks = data.filter((task) => task.check).length;
  const createdTasks = data.length;

  const handleAddNewTask = (task: string) => {
    task &&
      setData((prev) => [
        ...prev,
        {
          task: task,
          check: false,
          id: task,
          create_at: "today"
        }
      ]);
  };

  const handleRemoveTask = (id: string) => {
    const taksFilterd = data.filter((task) => task.id !== id);
    setData(taksFilterd);
  };

  const handleCheckTask = (status: boolean, id: string) => {
    const tasksUpdate = data.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          check: status
        };
      } else {
        return task;
      }
    });
    setData(tasksUpdate);
  };

  return (
    <S.Wrapper>
      <Header />
      <S.TodoWrapper>
        <S.InputWrapper>
          <TaskInput onSubmit={(task) => handleAddNewTask(task)} />
        </S.InputWrapper>
        <S.HeadWrapper>
          <Counter title="Criadas" color="blue" counter={createdTasks} />
          <Counter title="Concluídas" color="purple" counter={checkedTasks} />
        </S.HeadWrapper>
      </S.TodoWrapper>
      <S.TodosWrapper>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          keyExtractor={({ id }) => id}
          renderItem={({ item }) => (
            <Task
              task={item.task}
              check={item.check}
              id={item.id}
              onRemove={() => handleRemoveTask(item.id)}
              onCheck={(check, id) => handleCheckTask(check, id)}
            />
          )}
          ListEmptyComponent={
            <Empty
              title="Você ainda não tem tarefas cadastradas"
              subTitle="Crie tarefas e organize seus itens a fazer"
            />
          }
        />
      </S.TodosWrapper>
    </S.Wrapper>
  );
};

export default Todo;

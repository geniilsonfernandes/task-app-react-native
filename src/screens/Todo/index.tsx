import { useState, useEffect } from "react";
import { FlatList } from "react-native";
import { Counter } from "../../components/Counter";
import { Empty } from "../../components/Empty";
import { Header } from "../../components/Header";
import { TaskInput } from "../../components/TaskInput";
import { Task } from "../../components/Task";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Octicons } from "@expo/vector-icons";
import { Alert } from "react-native";
import { useTheme } from "styled-components/native";

import * as S from "./styles";

import {
  addNewTodoInList,
  getAllTasks,
  updateTasks
} from "../../store/todos/addNewTodoInList";
import { deleteList } from "../../store/list/createNewList";

export type TaskProps = {
  task: string;
  list: string;
  create_at: string;
  check: boolean;
  id: string;
};

type RouteParams = {
  listName: string;
};

const Todo = () => {
  const navigation = useNavigation();
  const theme = useTheme();
  const route = useRoute();
  const { listName } = route.params as RouteParams;
  const [data, setData] = useState<TaskProps[]>([]);
  const checkedTasks = data.filter((task) => task.check).length;
  const createdTasks = data.length;

  const handleAddNewTask = async (task: string) => {
    try {
      await addNewTodoInList(
        {
          task: task,
          list: listName,
          check: false,
          id: Date.now().toString(),
          create_at: Date.now().toString()
        },
        listName
      );
      const tasks = await getAllTasks(listName);
      setData(tasks);
    } catch (error) {
      console.log(error);
    }
  };

  const handleRemoveTask = async (id: string) => {
    try {
      const taksFilterd = data.filter((task) => task.id !== id);
      const tasksupdated = await updateTasks(taksFilterd, listName);
      setData(tasksupdated);
    } catch (error) {
      Alert.alert(`remover`, "Não foi possivel remover a tarefa");
    }
  };

  const removeTaskList = async () => {
    try {
      await deleteList(listName);
      navigation.navigate("lists");
    } catch (error) {
      console.log(error);
      Alert.alert(`remover`, "Não foi possivel remover o grupo");
    }
  };

  const handleDeleteList = async () => {
    Alert.alert(`remover`, "Deseja remover o grupo", [
      {
        text: "Não",
        style: "cancel"
      },
      {
        text: "Sim",
        onPress: () => removeTaskList()
      }
    ]);
  };

  const handleCheckTask = async (status: boolean, id: string) => {
    try {
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
      const tasksupdated = await updateTasks(tasksUpdate, listName);
      setData(tasksupdated);
    } catch (error) {
      Alert.alert(`List`, "não conseguimos atualizar a tarefa");
    }
  };

  useEffect(() => {
    const getTaks = async () => {
      const tasks = await getAllTasks(listName);
      setData(tasks);
      console.log("excultou");
    };
    getTaks();
  }, []);

  return (
    <S.Wrapper>
      <Header showBack title={listName} />
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
      <S.Trash onPress={handleDeleteList}>
        <Octicons name="trash" size={16} color={theme.COLORS.GRAY_100} />
      </S.Trash>
    </S.Wrapper>
  );
};

export default Todo;

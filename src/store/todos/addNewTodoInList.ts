import AsyncStorage from "@react-native-async-storage/async-storage";
import { TODOS } from "../storageConfig";
import { TaskProps } from "../../screens/Todo";
import { getAllTasks } from "./getAllTasks";

export async function addNewTodoInList(task: TaskProps, list: string) {
  try {
    const storedTasks = await getAllTasks(list);
    await AsyncStorage.setItem(
      `${TODOS}:${list}`,
      JSON.stringify([...storedTasks, task])
    );
  } catch (error) {
    console.log(error);
    throw error;
  }
}

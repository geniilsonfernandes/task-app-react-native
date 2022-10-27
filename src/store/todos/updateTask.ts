import AsyncStorage from "@react-native-async-storage/async-storage";
import { TaskProps } from "../../screens/Todo";
import { TODOS } from "../storageConfig";
import { getAllTasks } from "./getAllTasks";

export async function updateTasks(tasks: TaskProps[], list: string) {
  try {
    await AsyncStorage.setItem(`${TODOS}:${list}`, JSON.stringify(tasks));
    const storedTasks = await getAllTasks(list);
    return storedTasks;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

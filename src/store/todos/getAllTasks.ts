import AsyncStorage from "@react-native-async-storage/async-storage";
import { TODOS } from "../storageConfig";

export async function getAllTasks(list: string) {
  try {
    const storage = await AsyncStorage.getItem(`${TODOS}:${list}`);

    const tasks = storage ? JSON.parse(storage) : [];
    return tasks;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

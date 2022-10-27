import AsyncStorage from "@react-native-async-storage/async-storage";

import { TODO_LISTS } from "../storageConfig";
import { StoredListTypes } from "../storageTypes";

export async function getAllList() {
  try {
    const storage = await AsyncStorage.getItem(TODO_LISTS);
    const lists: StoredListTypes = storage ? JSON.parse(storage) : [];
    return lists;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

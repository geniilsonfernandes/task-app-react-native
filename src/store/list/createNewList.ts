import AsyncStorage from "@react-native-async-storage/async-storage";
import { getAllList } from "./getAllLists";

import { TODO_LISTS } from "../storageConfig";
import { ListTypes } from "../storageTypes";

export async function createNewList(list: ListTypes) {
  try {
    const storedList: ListTypes[] = await getAllList();

    const listAlreadyExists = storedList.filter((item) => item.id === list.id);

    if (listAlreadyExists.length > 0) {
      //throw new AppError(`O grupo ${newGroup} já existe.`);
      throw new Error("este grupo ja existe");
    }

    await AsyncStorage.setItem(
      TODO_LISTS,
      JSON.stringify([...storedList, list])
    );
  } catch (error) {
    console.log(error);
    throw error;
  }
}

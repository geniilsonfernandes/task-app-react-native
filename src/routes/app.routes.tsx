import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Lists } from "../screens/Lists";
import { NewList } from "../screens/NewList";
import Todo from "../screens/Todo";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="lists" component={Lists} />
      <Screen name="todo" component={Todo} />
      <Screen
        name="newlist"
        component={NewList}
        options={{ animation: "slide_from_right" }}
      />
    </Navigator>
  );
}

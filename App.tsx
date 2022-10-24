import { StatusBar } from "expo-status-bar";
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold
} from "@expo-google-fonts/inter";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { ThemeProvider } from "styled-components";

import theme from "./src/styles/theme";

export default function App() {
  const [fontsLoaded] = useFonts({ Inter_400Regular, Inter_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="auto" />
      {fontsLoaded ? (
        <View>
          <Text>
            \jsx-eslint\eslint-plugin-react\tree\master\docs\rules\react-in-jsx-scope.md
            Open up App.tsx to dsfsfsfsfsdfdsgdf gdg fd hfh gfstart working on
            your app!
          </Text>
        </View>
      ) : (
        <ActivityIndicator />
      )}
    </ThemeProvider>
  );
}

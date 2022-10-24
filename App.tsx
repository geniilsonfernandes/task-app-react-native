import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { ThemeProvider } from "styled-components";
import theme from "./src/styles/theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <View style={styles.container}>
        <Text>
          \jsx-eslint\eslint-plugin-react\tree\master\docs\rules\react-in-jsx-scope.md
          Open up App.tsx to dsfsfsfsfsdfdsgdf gdg fd hfh gfstart working on
          your app!
        </Text>

        <StatusBar style="auto" />
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

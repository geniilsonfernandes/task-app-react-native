import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold
} from "@expo-google-fonts/inter";
import { ActivityIndicator } from "react-native";

import { ThemeProvider } from "styled-components";
import theme from "./src/styles/theme";

import { Routes } from "./src/routes";

export default function App() {
  const [fontsLoaded] = useFonts({ Inter_400Regular, Inter_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="light" />
      {fontsLoaded ? <Routes /> : <ActivityIndicator />}
    </ThemeProvider>
  );
}

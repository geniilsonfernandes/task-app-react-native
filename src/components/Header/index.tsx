import React from "react";
import { Text } from "react-native";
import logoImg from "../../assets/logo.png";

import { Container, Logo } from "./styles";

export const Header = () => {
  return (
    <Container>
      <Text>Header</Text>
      <Logo source={logoImg} />
    </Container>
  );
};

import React from "react";
import { Text } from "react-native";
import logoImg from "../../assets/logo.png";

import * as S from "./styles";

export const Header = () => {
  return (
    <S.Wrapper>
      <S.Logo source={logoImg} />
    </S.Wrapper>
  );
};

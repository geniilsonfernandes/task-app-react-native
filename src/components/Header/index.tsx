import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import logoImg from "../../assets/logo.png";

import * as S from "./styles";
import { useTheme } from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

type HeaderProps = {
  showBack?: boolean;
};

export const Header = ({ showBack = false }: HeaderProps) => {
  const theme = useTheme();

  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.navigate("lists");
  };

  return (
    <S.Wrapper>
      {showBack && (
        <S.ButtonBack onPress={handleGoBack}>
          <MaterialIcons
            name="arrow-back-ios"
            size={24}
            color={theme.COLORS.GRAY_100}
          />
        </S.ButtonBack>
      )}

      <S.Logo source={logoImg} />
    </S.Wrapper>
  );
};

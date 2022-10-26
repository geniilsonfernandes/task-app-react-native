import React from "react";
import { Octicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import * as S from "./styles";
import { useTheme } from "styled-components/native";
import { TouchableOpacityProps } from "react-native";

type ListCardProps = {
  title: string;
} & TouchableOpacityProps;

export const ListCard = ({ title, ...rest }: ListCardProps) => {
  const theme = useTheme();
  return (
    <S.Wrapper {...rest}>
      <Octicons name="checklist" size={18} color={theme.COLORS.GRAY_100} />
      <S.Text>{title}</S.Text>
      <S.IconLeft>
        <Feather
          name="arrow-up-right"
          size={18}
          color={theme.COLORS.GRAY_100}
        />
      </S.IconLeft>
    </S.Wrapper>
  );
};

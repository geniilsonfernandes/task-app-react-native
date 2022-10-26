import React from "react";
import { TouchableOpacityProps } from "react-native";

import * as S from "./styles";

type ButtonProps = {
  title: string;
} & TouchableOpacityProps;

export const Button = ({ title, ...rest }: ButtonProps) => {
  return (
    <S.Wrapper {...rest}>
      <S.Text>{title}</S.Text>
    </S.Wrapper>
  );
};

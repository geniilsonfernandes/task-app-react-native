import React from "react";
import empty from "../../assets/empty.png";
import * as S from "./styles";
type EmptyProps = {
  title: string;
  subTitle?: string;
};
export const Empty = ({ title, subTitle }: EmptyProps) => {
  return (
    <S.Wrapper>
      <S.Image source={empty} />
      <S.Title>{title}</S.Title>
      <S.SubTitle>{subTitle}</S.SubTitle>
    </S.Wrapper>
  );
};

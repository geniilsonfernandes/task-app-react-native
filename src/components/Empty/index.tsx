import React from "react";
import empty from "../../assets/empty.png";
import * as S from "./styles";
export type EmptyProps = {
  title: string;
  subTitle?: string;
  titleSize?: "normal" | "big";
};
export const Empty = ({
  title,
  subTitle,
  titleSize = "normal"
}: EmptyProps) => {
  return (
    <S.Wrapper>
      <S.Image source={empty} />
      <S.Title titleSize={titleSize}>{title}</S.Title>
      <S.SubTitle>{subTitle}</S.SubTitle>
    </S.Wrapper>
  );
};

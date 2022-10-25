import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";

import * as S from "./styles";

type TaskProps = {
  onRemove: () => void;
  onCheck: () => void;
  task: string;
};

export const Task = ({ onCheck, onRemove, task }: TaskProps) => {
  const [checked, setChecked] = useState(false);
  const theme = useTheme();

  const handleRemove = () => {
    setChecked((s) => !s);
    onRemove && onRemove();
  };
  const handleCheck = () => {
    onCheck && onCheck();
  };

  return (
    <S.Wrapper>
      <S.Checked onPress={() => handleRemove()}>
        {checked ? (
          <MaterialIcons
            name="check-circle"
            size={24}
            color={theme.COLORS.PURPLE}
          />
        ) : (
          <MaterialIcons
            name="radio-button-unchecked"
            size={24}
            color={theme.COLORS.BLUE}
          />
        )}
      </S.Checked>
      <S.Text checked={checked}>{task}</S.Text>
      <S.Trash onPress={() => handleCheck()}>
        <Octicons name="trash" size={16} color={theme.COLORS.GRAY_100} />
      </S.Trash>
    </S.Wrapper>
  );
};

import React, { useEffect, useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";

import * as S from "./styles";

type TaskProps = {
  onRemove: () => void;
  onCheck: (checked: boolean) => void;
  task: string;
  check: boolean;
};

export const Task = ({ onCheck, onRemove, task, check }: TaskProps) => {
  const [checked, setChecked] = useState(check);
  const theme = useTheme();

  const handleRemove = () => {
    onRemove && onRemove();
  };
  const handleCheck = () => {
    setChecked(!checked);
    onCheck && onCheck(!checked);
  };

  useEffect(() => {
    setChecked(check);
  }, [check]);

  return (
    <S.Wrapper>
      <S.Checked onPress={() => handleCheck()}>
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
      <S.Text checked={checked}>
        {task} {check.toString()}
      </S.Text>
      <S.Trash onPress={() => handleRemove()}>
        <Octicons name="trash" size={16} color={theme.COLORS.GRAY_100} />
      </S.Trash>
    </S.Wrapper>
  );
};

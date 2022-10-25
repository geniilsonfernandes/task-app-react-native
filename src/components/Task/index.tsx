import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";

import * as S from "./styles";

export const Task = () => {
  const [checked, setChecked] = useState(false);
  const theme = useTheme();
  return (
    <S.Wrapper>
      <S.Checked onPress={() => setChecked((s) => !s)}>
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
      <S.Text>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
      </S.Text>
      <S.Trash onPress={() => setChecked((s) => !s)}>
        <Octicons name="trash" size={16} color={theme.COLORS.GRAY_100} />
      </S.Trash>
    </S.Wrapper>
  );
};

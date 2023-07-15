import {
  Button,
  ColorModeContextType,
  HStack,
  Icon,
  IconButton,
  Switch,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";

interface Props {
  ontoggleColorMode: (colormode: string) => void;
  colorMode: string;
}

const ColorModeSwitch = ({ ontoggleColorMode, colorMode }: Props) => {
  return (
    <HStack>
      <IconButton
        aria-label="Dark mode"
        icon={colorMode == "dark" ? <BsSun /> : <BsMoon />}
        onClick={() =>
          ontoggleColorMode(colorMode == "dark" ? "light" : "dark")
        }
      />
    </HStack>
  );
};

export default ColorModeSwitch;

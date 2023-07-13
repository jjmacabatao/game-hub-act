import {
  Button,
  HStack,
  Icon,
  IconButton,
  Switch,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      {/* <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      /> */}
      <IconButton
        aria-label="Dark mode"
        icon={colorMode == "dark" ? <BsSun /> : <BsMoon />}
        onClick={toggleColorMode}
      />
    </HStack>
  );
};

export default ColorModeSwitch;

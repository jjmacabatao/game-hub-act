import {
  Box,
  ColorModeContextType,
  Flex,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
  ontoggleColorMode: (colorMode: string) => void;
  colorMode: string;
}

const NavBar = ({ onSearch, ontoggleColorMode, colorMode }: Props) => {
  return (
    <Flex
      position={"fixed"}
      as="header"
      w="100%"
      zIndex={"banner"}
      bgColor={colorMode === "dark" ? "gray.900" : "white"}
    >
      <HStack padding="5px" w="100%">
        <Image src={logo} boxSize="60px" />
        <SearchInput onSearch={(searchText) => onSearch(searchText)} />
        <ColorModeSwitch
          colorMode={colorMode}
          ontoggleColorMode={(colorMode) => ontoggleColorMode(colorMode)}
        />
      </HStack>
    </Flex>
  );
};

export default NavBar;

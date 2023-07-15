import { ColorModeContextType, HStack, Image, Text } from "@chakra-ui/react";
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
    <HStack padding="5px">
      <Image src={logo} boxSize="60px" />
      <SearchInput onSearch={(searchText) => onSearch(searchText)} />
      <ColorModeSwitch
        colorMode={colorMode}
        ontoggleColorMode={(colorMode) => ontoggleColorMode(colorMode)}
      />
    </HStack>
  );
};

export default NavBar;

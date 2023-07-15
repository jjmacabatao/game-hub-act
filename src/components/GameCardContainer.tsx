import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  colorMode: string;
}

const GameCardContainer = ({ children, colorMode }: Props) => {
  return (
    <Box
      overflow="hidden"
      borderRadius={10}
      border={colorMode == "dark" ? "0px" : "1px"}
      borderColor="gray.200"
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;

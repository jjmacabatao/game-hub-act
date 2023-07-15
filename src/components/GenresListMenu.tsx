import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spinner,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenresListMenu = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          {selectedGenre?.name || "Genres"}
        </MenuButton>
        <MenuList>
          {data.map((genre) => (
            <MenuItem key={genre.id} onClick={() => onSelectGenre(genre)}>
              {genre.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default GenresListMenu;

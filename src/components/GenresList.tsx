import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedUrl from "../services/image-url";

interface Props {
  onSelectedGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenresList = ({ onSelectedGenre, selectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack paddingY="3px">
            <Image
              objectFit="cover"
              src={getCroppedUrl(genre.image_background)}
              borderRadius={8}
              boxSize="32px"
            />
            <Button
              whiteSpace="normal"
              textAlign="left"
              fontWeight={selectedGenre?.id == genre.id ? "bold" : "normal"}
              variant={"link"}
              fontSize="md"
              onClick={() => onSelectedGenre(genre)}
              _hover={{ fontWeight: "bold" }}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenresList;

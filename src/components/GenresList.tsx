import { HStack, Icon, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedUrl from "../services/image-url";

const GenresList = () => {
  const { data } = useGenres();

  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              src={getCroppedUrl(genre.image_background)}
              borderRadius={8}
              boxSize="32px"
            />
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenresList;

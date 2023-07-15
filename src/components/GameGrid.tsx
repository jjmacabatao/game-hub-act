import { Heading, SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
  colorMode: string;
}

const GameGrid = ({ gameQuery, colorMode }: Props) => {
  const { error, data, isLoading } = useGames(gameQuery);
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8];

  if (error) return <Text color={"red"}>{error}</Text>;

  // if (data.length == 0)
  //   return (
  //     <Heading fontSize={"2xl"} textAlign={"center"} mt={10}>
  //       No games found.
  //     </Heading>
  //   );

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      spacing={6}
      padding="10px"
    >
      {isLoading &&
        skeleton.map((skeleton) => (
          <GameCardContainer key={skeleton} colorMode={colorMode}>
            <GameCardSkeleton />
          </GameCardContainer>
        ))}
      {data.map((game) => (
        <GameCardContainer key={game.id} colorMode={colorMode}>
          <GameCard game={game} />
        </GameCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;

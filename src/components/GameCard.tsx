import { GameProps } from "../hooks/useGames";
import { HStack, Image } from "@chakra-ui/react";
import { Card } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getImageUrl from "../services/image-url";

interface Props {
  game: GameProps;
}

const GameCard = ({ game }: Props) => {
  return (
    <>
      <Card.Root>
        <Image src={getImageUrl({url : game.background_image})} alt={game.name} />
        <Card.Body>
          <Card.Title fontSize={"2xl"}>{game.name}</Card.Title>
          <HStack justifyContent="space-between">
            <PlatformIconList
              platforms={game.parent_platforms.map(
                (plaform) => plaform.platform
              )}
            ></PlatformIconList>
            <CriticScore metacritic={game.metacritic}></CriticScore>
          </HStack>
        </Card.Body>
      </Card.Root>
    </>
  );
};

export default GameCard;

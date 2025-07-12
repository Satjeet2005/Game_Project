import { useEffect, useState } from "react"
import apiclient from "../services/api-client";
import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { PlatformProps } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameSkeleton from "./GameSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenres";

interface Props{
  genre : Genre | null,
  platform : PlatformProps | null
}

const GameGrid = ({ genre,platform } : Props) => {
const { data, error,isLoading }  = useGames(genre,platform);

const skeleton = [1,2,3,4,5,6];
  return (
    <>
    {error && <Text color={"red"}>{error}</Text>}
    <SimpleGrid columns={{sm : 1,md: 2,lg:3,xl:5}} gap={3} key={'kok'} mt="4">
        {isLoading && skeleton.map((s) => <GameCardContainer key={s}>
          <GameSkeleton></GameSkeleton>
        </GameCardContainer>)}
        {data.map((game) => <GameCardContainer key={game.id}><GameCard key={game.id} game={game}></GameCard></GameCardContainer>)}
    </SimpleGrid>
    </>
  )
}

export default GameGrid
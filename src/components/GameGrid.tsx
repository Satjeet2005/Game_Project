import { useEffect, useState } from "react"
import apiclient from "../services/api-client";
import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameSkeleton from "./GameSkeleton";
import GameCardContainer from "./GameCardContainer";



const GameGrid = () => {
const { data, error,isLoading }  = useGames();

const skeleton = [1,2,3,4,5,6];
  return (
    <>
    {error && <Text color={"red"}>{error}</Text>}
    <SimpleGrid columns={{sm : 1,md: 2,lg:3,xl:5}} gap={10} padding={10} key={'kok'}>
        {isLoading && skeleton.map((s) => <GameCardContainer key={s}>
          <GameSkeleton></GameSkeleton>
        </GameCardContainer>)}
        {data.map((game) => <GameCardContainer key={game.id}><GameCard key={game.id} game={game}></GameCard></GameCardContainer>)}
    </SimpleGrid>
    </>
  )
}

export default GameGrid
import { Grid, GridItem, HStack, Show, useSafeLayoutEffect } from "@chakra-ui/react";
import NavBar from "./components/NavBar/NavBar";
import GameGrid from "./components/GameGrid";
import getImageUrl from "./services/image-url";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import FilterGame from "./components/FilterGame";
import { PlatformProps } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";


export interface GameQuery{
  genre : Genre | null,
  platform : PlatformProps | null,
  ordering : string,
  search : string
}

function App() {
  const [gameQuery,setGameQuery] = useState<GameQuery>({} as GameQuery)

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar handleSubmit={(search) => setGameQuery({...gameQuery,search})}></NavBar>
      </GridItem>
      <GridItem
        area="aside"
        paddingX="5"
        display={{ base: "none", lg: "block" }}
      >
        <GenreList
          handleClick={(genre) => setGameQuery({...gameQuery,genre})}
          selectedGenre={gameQuery.genre}
        ></GenreList>
      </GridItem>
      <GridItem area="main" padding={10}>
        <GameHeading gameQuery={gameQuery}></GameHeading>
        <HStack spaceX={5}>
          <FilterGame handlePlatform={(platform) => setGameQuery({...gameQuery,platform})} selectedPlatform={gameQuery.platform}></FilterGame>
          <SortSelector handleSSortSelect={(ordering) => setGameQuery({...gameQuery,ordering})} selectedOrder={gameQuery.ordering}></SortSelector>
        </HStack>
        <GameGrid gameQuery={gameQuery}></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;

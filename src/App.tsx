import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar/NavBar";
import GameGrid from "./components/GameGrid";
import getImageUrl from "./services/image-url";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import FilterGame from "./components/FilterGame";
import { PlatformProps } from "./hooks/useGames";

function App() {
  const [selectedGenre, setGenre] = useState<Genre | null>(null);
  const [selectedPlatform,setSelectedPlatform] = useState<PlatformProps | null>(null)
  
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
        <NavBar></NavBar>
      </GridItem>
      <GridItem
        area="aside"
        paddingX="5"
        display={{ base: "none", lg: "block" }}
      >
        <GenreList
          handleClick={(genre) => setGenre(genre)}
          selectedGenre={selectedGenre}
        ></GenreList>
      </GridItem>
      <GridItem area="main" padding={10}>
        <FilterGame handlePlatform={(platform) => setSelectedPlatform(platform)} selectedPlatform={selectedPlatform}></FilterGame>
        <GameGrid genre={selectedGenre} platform={selectedPlatform}></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;

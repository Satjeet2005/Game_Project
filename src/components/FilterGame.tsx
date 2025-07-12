import { Box, Button, MenuItem, Portal } from "@chakra-ui/react";
import { Menu } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { Text } from "@chakra-ui/react";
import usePlatforms from "../hooks/usePlatforms";
import { PlatformProps } from "../hooks/useGames";

interface Props{
  handlePlatform : (platform : PlatformProps) => void
  selectedPlatform : PlatformProps | null
}

const FilterGame = ({ handlePlatform,selectedPlatform } : Props) => {
  const { data,error } = usePlatforms();
    if(error) return;
  return (
    <Menu.Root >
      <Menu.Trigger>
        <Button variant="outline" size="sm">
          {selectedPlatform ? selectedPlatform.name : "Platforms"} <BsChevronDown></BsChevronDown>
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
                {data.map((d) => <Menu.Item key={d.id} value={d.name}>{d.name}</Menu.Item>)}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default FilterGame;

import { Button, HStack, Switch } from "@chakra-ui/react";
import { useColorMode } from "./ui/color-mode"
import { Text } from "@chakra-ui/react";


const ColorModeSwitch = () => {
    const { toggleColorMode,colorMode } = useColorMode();
  return (
    <Switch.Root checked={colorMode === "dark"} onChange={toggleColorMode}>
      <Switch.HiddenInput />
      <Switch.Control />
      <Text whiteSpace="nowrap">{colorMode === "dark" ? "Dark Mode" : "Light Mode"}</Text>
    </Switch.Root>
  )
}

export default ColorModeSwitch
import { HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'
import logo from "/home/satjeet/Desktop/game-project/src/assets/logo.webp"
import ColorModeSwitch from '../ColorModeSwitch'
import SearchInput from '../SearchInput'

const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"} padding="10px">
        <Image src={logo} boxSize="60px"/>
        <SearchInput></SearchInput>
        <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  )
}

export default NavBar
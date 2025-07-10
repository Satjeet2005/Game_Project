import { HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'
import logo from "/home/satjeet/Desktop/game-project/src/assets/logo.webp"
import ColorModeSwitch from '../ColorModeSwitch'

const NavBar = () => {
  return (
    <HStack>
        <Image src={logo} boxSize="60px"/>
        <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  )
}

export default NavBar
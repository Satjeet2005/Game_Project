
import { Badge } from '@chakra-ui/react'
import React from 'react'
1

interface Props{
    metacritic : number
}

const CriticScore = ({metacritic} : Props) => {
    const color = metacritic > 75 ? 'green' : metacritic > 60 ? "yellow" : '';
  return (
    <Badge color={color} fontSize={"14px"} bgColor={"gray.800"} paddingX={2}>{metacritic}</Badge>
  )
}

export default CriticScore


import { HStack, List, ListItem } from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres'
import { Text } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import getImageUrl from '../services/image-url';
import GenreSkeleton from './GenreSkeleton';

interface Props{
  handleClick : (genre : Genre) => void
}

const GenreList = ({ handleClick } : Props) => {
    const { data,error,isLoading } = useGenres();
    if(error) return null;
  return (
    <>
    {isLoading && <GenreSkeleton></GenreSkeleton>}
    <List.Root>
            {data.map((genre) => <List.Item key={genre.id} listStyleType="none">
                <HStack paddingY={"5px"}>
                    <Image boxSize="40px" src={getImageUrl({url :genre.image_background})} borderRadius="8px"></Image>
                    <Text fontSize="lg" _hover={{textDecoration:"underline"}} cursor="pointer" onClick={() => handleClick(genre)}>{genre.name}</Text>
                </HStack>
            </List.Item>)}
    </List.Root>

    </>
  )
}

export default GenreList
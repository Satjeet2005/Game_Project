

import { Heading, HStack, List, ListItem } from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres'
import { Text } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import getImageUrl from '../services/image-url';
import GenreSkeleton from './GenreSkeleton';

interface Props{
  handleClick : (genre : Genre) => void
  selectedGenre : Genre | null;
}

const GenreList = ({ handleClick,selectedGenre } : Props) => {
    const { data,error,isLoading } = useGenres();
    if(error) return null;
  return (
    <>
    <Heading as="h2" fontSize="2xl" mb={4}>Genres</Heading>
    {isLoading && <GenreSkeleton></GenreSkeleton>}
    <List.Root>
            {data.map((genre) => <List.Item key={genre.id} listStyleType="none">
                <HStack paddingY={"5px"}>
                    <Image boxSize="40px" src={getImageUrl({url :genre.image_background})} borderRadius="8px" objectFit="cover"></Image>
                    <Text fontSize="lg" fontWeight={genre.id === selectedGenre?.id ? 'bold' : ''} _hover={{textDecoration:"underline"}} cursor="pointer" onClick={() => handleClick(genre)}>{genre.name}</Text>
                </HStack>
            </List.Item>)}
    </List.Root>

    </>
  )
}

export default GenreList
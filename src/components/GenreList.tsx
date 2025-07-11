

import { HStack, List, ListItem } from '@chakra-ui/react';
import useGenres from '../hooks/useGenres'
import { Text } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import getImageUrl from '../services/image-url';
import GenreSkeleton from './GenreSkeleton';

const GenreList = () => {
    const { data,error,isLoading } = useGenres();
    if(error) return null;
  return (
    <>
    {isLoading && <GenreSkeleton></GenreSkeleton>}
    <List.Root>
            {data.map((genre) => <List.Item key={genre.id} listStyleType="none">
                <HStack paddingY={"5px"}>
                    <Image boxSize="40px" src={getImageUrl({url :genre.image_background})} borderRadius="8px"></Image>
                    <Text fontSize="lg">{genre.name}</Text>
                </HStack>
            </List.Item>)}
    </List.Root>

    </>
  )
}

export default GenreList
import { HStack, List, Skeleton, SkeletonText } from '@chakra-ui/react'

const GenreSkeleton = () => {
    const skeletons = [1,2,3,4,5,6];

  return (
    <List.Root>
        {skeletons.map((skeleton) => <List.Item key={skeleton} listStyleType="none">
                <HStack paddingY={"5px"}>
                    <Skeleton boxSize="40px" borderRadius="8px"></Skeleton>
                    <SkeletonText ></SkeletonText>
                </HStack>
            </List.Item>)}
    </List.Root>
  )
}

export default GenreSkeleton
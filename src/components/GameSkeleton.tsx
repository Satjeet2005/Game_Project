import { Card, Skeleton, SkeletonText } from "@chakra-ui/react"



const GameSkeleton = () => {
  return (
    <Card.Root>
        <Skeleton height="200px"></Skeleton>
        <Card.Body>
            <Card.Title>
                <SkeletonText></SkeletonText>
            </Card.Title>
        </Card.Body>
    </Card.Root>
  )
}

export default GameSkeleton
import {
  Box,
  Container,
  Flex,
  Skeleton,
  SkeletonCircle,
  VStack,
} from "@chakra-ui/react";
import Feedpost from "./Feedpost";
import { useEffect, useState } from "react";

const Feedposts = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  const loadingSkeleton = [0, 1, 2, 3].map((_, idx) => (
    <VStack key={idx} gqp={4} alignItems={"flex-start"} mb={10}>
      <Flex gap={2}>
        <SkeletonCircle size={10} />
        <VStack gap={2} alignItems={"flex-start"}>
          <Skeleton height="10px" w={"200px"} />
          <Skeleton height="10px" w={"200px"} />
        </VStack>
      </Flex>
      <Skeleton w={"full"}>
        <Box h={"500px"}>Contents wrapped</Box>
      </Skeleton>
    </VStack>
  ));

  const feedPost = (
    <>
      <Feedpost img="/img1.png" username="AlexHardiooo0_" avatar="/img4.png" />
      <Feedpost img="/img4.png" username="janedoe" avatar="/img2.png" />
      <Feedpost img="/img2.png" username="JaneDD__1" avatar="/img1.png" />
      <Feedpost img="/img3.png" username="jiniie1104" avatar="/img3.png" />
    </>
  );

  return (
    <Container maxW={"container.sm"} py={10} px={2}>
      {isLoading ? loadingSkeleton : feedPost}
    </Container>
  );
};

export default Feedposts;

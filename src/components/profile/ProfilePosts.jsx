import { Box, Grid, Skeleton, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ProfilePost from "./ProfilePost";

function ProfilePosts() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  const loadingSkeleton = [0, 1, 2, 3, 4, 5].map((_, idx) => (
    <VStack key={idx} alignItems={"flex-start"} gap={4}>
      <Skeleton w={"full"}>
        <Box h="300px">Content Wrapped</Box>
      </Skeleton>
    </VStack>
  ));

  const gridItems = (
    <>
      <ProfilePost img="/img1.png" />
      <ProfilePost img="/img2.png" />
      <ProfilePost img="/img3.png" />
      <ProfilePost img="/img4.png" />
    </>
  );

  return (
    <Grid
      templateColumns={{ sm: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
      gap={1}
      columnGap={1}
    >
      {isLoading ? loadingSkeleton : gridItems}
    </Grid>
  );
}

export default ProfilePosts;

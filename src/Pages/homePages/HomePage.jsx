import { Box, Container, Flex } from "@chakra-ui/react";
import Feedposts from "../../components/feedPosts/Feedposts";
import SuggestedUsers from "../../components/suggestedUsers/SuggestedUsers";

export default function HomePage() {
  return (
    <Container maxW={"conainer.lg"}>
      <Flex gap={20}>
        <Box flex={2} py={10}>
          <Feedposts />
        </Box>
        <Box flex={3} mr={20} display={{ base: "none", lg: "block" }} maxW={"300px"}>
          <SuggestedUsers />
        </Box>
      </Flex>
    </Container>
    
  )
}

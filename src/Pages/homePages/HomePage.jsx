import { Box, Container, Flex } from "@chakra-ui/react";
import Feedposts from "../../components/feedPosts/Feedposts";

export default function HomePage() {
  return (
    <Container maxW={"conainer.lg"}>
      <Flex gap={20}>
        <Box flex={2} py={10}>
          <Feedposts />
        </Box>
        <Box flex={3} mr={20} display={{ base: "none", lg: "block" }} maxW={"300px"}>
          Suggested users
        </Box>
      </Flex>
    </Container>
    
  )
}

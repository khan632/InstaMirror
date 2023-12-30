import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import {
  UnlikeLogo,
  NotificationsLogo,
  CommentLogo,
} from "../../assets/constant";

function PostFooter({ username }) {
  const [liked, setLiked] = useState(false);
  const [like, setLike] = useState(100);

  const handleLike = () => {
    if (liked) {
      setLiked(false);
      setLike(like - 1);
    } else {
      setLiked(true);
      setLike(like + 1);
    }
  };
  return (
    <Box mb={10}>
      <Flex alignItems={"center"} w={"full"} gap={4} pt={0} mt={4} mb={2}>
        <Box onClick={handleLike} cursor={"pointer"} fontSize={18}>
          {!liked ? <NotificationsLogo /> : <UnlikeLogo />}
        </Box>
        <Box cursor={"pointer"} fontSize={"sm"}>
          <CommentLogo />
        </Box>
      </Flex>
      <Text fontWeight={600} fontSize={"sm"}>
        {like} likes
      </Text>
      <Text fontSize="sm" fontWeight={700} mt={2}>
        {username}{" "}
        <Text as="span" fontWeight={400}>
          Feeling awesome
        </Text>
      </Text>
      <Text fontSize="sm" color={"gray"} mt={2}>
        View all 99 comments
      </Text>
      <Flex
        alignItem={"center"}
        gap={2}
        justifyContent={"space-between"}
        w={"full"}
      >
        <InputGroup>
          <Input
            variant={"flushed"}
            placeholder={"Add a comment..."}
            fontSize={14}
          />
          <InputRightElement>
            <Button
              fontSize={14}
              color={"blue.500"}
              fontWeight={600}
              cursor={"pointer"}
              _hover={{ color: "white" }}
              bg={"transparent"}
            >
              Post
            </Button>
          </InputRightElement>
        </InputGroup>
      </Flex>
    </Box>
  );
}

export default PostFooter;

import { useState } from "react";
import { Avatar, Box, Button, Flex, Image, VStack } from "@chakra-ui/react";

function SuggestedUser({ name, follower, avatar, official }) {
  const [isFollowed, setIsFollowed] = useState(false);
  return (
    <Flex justifyContent={"space-between"} alignItem={"center"} w={"full"}>
      <Flex alignItem={"center"} gap={2}>
        <Avatar src={avatar} name={name} size={"md"} />
        <VStack space={2} alignItems={"flex-start"}>
          <Flex justifyContent={"space-between"} alignItems={"center"}>
            <Box fontSize={12} fontWeight={"bold"}>
              {name}
            </Box>
            {official && (
              <Image
                ml={"2px"}
                borderRadius="full"
                w={"20px"}
                src="/verified-icon.png"
                alt="verified logo"
              />
            )}
          </Flex>
          <Box fontSize={11} color={"gray.500"}>
            {follower} follower
          </Box>
        </VStack>
      </Flex>
      <Button
        fontSize={13}
        bg={"transparent"}
        p={0}
        h={"max-content"}
        fontWeight={"medium"}
        color={"blue.400"}
        cursor={"pointer"}
        _hover={{ color: "white" }}
        onClick={() => setIsFollowed(!isFollowed)}
      >
        {isFollowed ? "Unfollow" : "Follow"}
      </Button>
    </Flex>
  );
}

export default SuggestedUser;

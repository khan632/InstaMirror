import { Box, Flex, Link, Text, VStack } from "@chakra-ui/react";
import SuggestedHeader from "./SuggestedHeader";
import SuggestedUser from "./SuggestedUser";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase";
import _ from "lodash";

const SuggestedUsers = () => {
  const [ user ] = useAuthState(auth);
  return (
    <VStack py={8} px={4} gap={4}>
      { !_.isEmpty(user) && <SuggestedHeader /> }
      <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
        <Text fontSize={14} fontWeight={"bold"} color={"gray.500"}>
          Suggested for you
        </Text>
        <Text
          fontSize={14}
          fontWeight={"bold"}
          _hover={{ color: "gray.500" }}
          cursor={"pointer"}
        >
          See all
        </Text>
      </Flex>
      <SuggestedUser
        name="Dan Bravo"
        follower={1881}
        avatar="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"
      />
      <SuggestedUser
        name="Kireon Pollard"
        follower={"1.3M"}
        avatar="https://images.news18.com/ibnlive/uploads/2022/11/kieron-pollard-16685125653x2.jpg?impolicy=website&width=510&height=356"
        official
      />
      <SuggestedUser
        name="Sanya Malhotra"
        follower={"3.6M"}
        avatar="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Sanya_Malhotra_spotted_during_an_ad_shoot_in_Mumbai_-_Close_view.jpg/220px-Sanya_Malhotra_spotted_during_an_ad_shoot_in_Mumbai_-_Close_view.jpg"
        official
      />
      <Box fontSize={12} color={"gray.500"} mt={5} alignSelf={"start"}>
        © 2024 Built By{" "}
        <Link
          href={"https://www.linkedin.com/in/md-areeb-uddin-6535591a1/"}
          target="_blank"
          color="blue.400"
          fontSize={14}
        >
          a Developer
        </Link>
      </Box>
    </VStack>
  );
};

export default SuggestedUsers;

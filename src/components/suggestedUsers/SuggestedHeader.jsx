import { Avatar, Flex, Text, Button } from "@chakra-ui/react";
import useLogOut from "../../hooks/useLogOut";
import useAuthStore from "../../store/authStore";
import { Link } from "react-router-dom";

function SuggestedHeader() {
  const { handleLogout, isLoggingOut } = useLogOut();
  const authUser = useAuthStore((state) => state.user);

  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex alignItems={"center"} gap={2}>
        <Link to={`${authUser.userName}`}>
          <Avatar size={"lg"} src={authUser.profilePicURL} />
        </Link>
        <Link to={`${authUser.userName}`}>
          <Text fontSize={12} fontWeight={"bold"}>
            {authUser.userName}
          </Text>
        </Link>
      </Flex>
      <Button
        size={"xs"}
        background={"transparent"}
        _hover={{ background: "transparent" }}
        onClick={handleLogout}
        isLoading={isLoggingOut}
        fontSize={14}
        fontWeight={"medium"}
        color={"blue.400"}
        style={{ textDecoration: "none" }}
        cursor={"pointer"}
      >
        Log out
      </Button>
    </Flex>
  );
}

export default SuggestedHeader;

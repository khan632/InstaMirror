import { Container, Flex } from "@chakra-ui/react";
import ProfileHeader from "../../components/profile/ProfileHeader";
import ProfileTabs from "../../components/profile/ProfileTabs";
import ProfilePosts from "../../components/profile/ProfilePosts";

const ProfilePage = () => {
  return (
    <Container maxW={"container.lg"} py={5}>
      {/* profile basic information detail section */}
      <Flex
        py={10}
        px={4}
        pl={{ base: 4, md: 10 }}
        w={"full"}
        mx={"auto"}
        flexDirection={"column"}
      >
        <ProfileHeader />
      </Flex>

      {/* profile post detail sectiom */}
      <Flex
        px={{ sm: 4, base: 2 }}
        maxW={"full"}
        mx={"auto"}
        borderTop={"1px solid"}
        borderColor={"whiteAlpha.300"}
        direction={"column"}
      >
        {" "}
        <ProfileTabs /> <ProfilePosts />{" "}
      </Flex>
    </Container>
  );
};

export default ProfilePage;

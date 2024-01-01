import { Box, Flex, Text } from "@chakra-ui/react"
import { BsBookmark, BsGrid3X3, BsSuitHeart } from "react-icons/bs";


const ProfileTabs = () => {
  return (
    <Flex w={"full"} justifyContent={"center"} gap={{ base: 4, sm: 10}} textTransform={"uppercase"} fontWeight={"bold"}>
      {profileTabs("Posts", <BsGrid3X3 />, true)}
      {profileTabs("Saved", <BsBookmark />, false)}
      {profileTabs("Likes", <BsSuitHeart fontWeight={"bold"} />, false)}
    </Flex>
  )
}
function profileTabs(name, icon, border) {
  return (<Flex borderTop={`${border} && "1px solid white"`} alignItems={"center"} p="3" gap={1} cursor={"pointer"}>
    <Box fontSize={13}>{icon}</Box>
    <Text as="i" fontSize={12} display={{ base: "none", sm: "block"}}>{name}</Text>
  </Flex>)
}
export default ProfileTabs

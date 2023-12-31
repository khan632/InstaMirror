import {
  Avatar,
  Box,
  Divider,
  Flex,
  GridItem,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { AiFillHeart } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Comment from "../comment/Comment";
import PostFooter from "../feedPosts/PostFooter";

function ProfilePost({ img }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <GridItem
        cursor={"pointer"}
        borderRadius={4}
        overflow={"hidden"}
        border={"1px solid"}
        boderColoe={"whiteAlpha.300"}
        position={"relative"}
        aspectRatio={1 / 1}
        onClick={onOpen}
      >
        <Flex
          opacity={0}
          _hover={{ opacity: 1 }}
          position={"absolute"}
          top={0}
          left={0}
          right={0}
          bottom={0}
          bg={"blackAlpha.700"}
          transition={"all 0.3s ease"}
          zIndex={1}
          justifyContent={"center"}
        >
          <Flex justifyContent={"center"} alignItems={"center"} gap={50}>
            <Flex>
              <AiFillHeart size={20} />{" "}
              <Text fontWeight={"bold"} ml={2}>
                12
              </Text>
            </Flex>
            <Flex>
              <FaComment size={20} />{" "}
              <Text fontWeight={"bold"} ml={2}>
                5
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Image
          src={img}
          alt="post image"
          w={"100%"}
          h={"100%"}
          objectFit={"cover"}
        />
      </GridItem>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered={true}
        size={{ base: "3xl", md: "5xl" }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody bg={"black"} pb={5}>
            <Flex
              gap="4"
              w={{ base: "90%", sm: "70%", md: "full" }}
              mx={"auto"}
            >
              <Box
                borderRadius={4}
                overflow={"hidden"}
                border={"1px solid"}
                borderColor={"whiteAlpha.300"}
                flex={1.5}
              >
                <Image src={img} alt="profile image" />
              </Box>
              <Flex
                flex={1}
                flexDir={"column"}
                px={10}
                display={{ base: "none", md: "flex" }}
              >
                <Flex alignItems={"center"} justifyContent={"space-between"}>
                  <Flex alignItems={"center"} gap={4}>
                    {/* Insta Name avatar */}
                    <Avatar
                      src="/profilepic.png"
                      size={"sm"}
                      name="As an influncer"
                    />
                    <Text fontWeight={"bold"} fontSize={12}>
                      AlexHardiooo0_
                    </Text>
                  </Flex>
                  {/* icons */}
                  <Box _hover={{ color: "red.600" }} borderRadius={4} p={1}>
                    <MdDelete size={20} cursor="pointer" />
                  </Box>
                </Flex>
                <Divider my={4} bg={"gray.500"} />

                <VStack
                  w="full"
                  alignItems={"start"}
                  maxH={"350px"}
                  overflowY={"auto"}
                >
                  <Comment
                    createdAt="3d ago"
                    userName={"AlexHardiooo0_"}
                    profilePic="/profilepic.png"
                    text="Dummy image from unsplash"
                  />
                  <Comment
                    createdAt="1d ago"
                    userName={"AbRam_11"}
                    profilePic="https://bit.ly/dan-abramov"
                    text="nice pix"
                  />
                  <Comment
                    createdAt="3hrs ago"
                    userName={"Max_wardo"}
                    profilePic="https://bit.ly/kent-c-dodds"
                    text="Unbeb pix"
                  />
                  <Comment
                    createdAt="21hrs ago"
                    userName={"Musk"}
                    profilePic="/img4.png"
                    text="ulalala"
                  />
                  <Comment
                    createdAt="21hrs ago"
                    userName={"Musk"}
                    profilePic="/img4.png"
                    text="ulalala"
                  />
                  <Comment
                    createdAt="21hrs ago"
                    userName={"Musk"}
                    profilePic="/img4.png"
                    text="ulalala"
                  />
                  <Comment
                    createdAt="21hrs ago"
                    userName={"Musk"}
                    profilePic="/img4.png"
                    text="ulalala"
                  />
                  <Comment
                    createdAt="21hrs ago"
                    userName={"Musk"}
                    profilePic="/img4.png"
                    text="ulalala"
                  />
                  <Comment
                    createdAt="21hrs ago"
                    userName={"Musk"}
                    profilePic="/img4.png"
                    text="ulalala"
                  />
                  <Comment
                    createdAt="21hrs ago"
                    userName={"Musk"}
                    profilePic="/img4.png"
                    text="ulalala"
                  />
                  <Comment
                    createdAt="21hrs ago"
                    userName={"Musk"}
                    profilePic="/img4.png"
                    text="ulalala"
                  />
                  <Comment
                    createdAt="21hrs ago"
                    userName={"Musk"}
                    profilePic="/img4.png"
                    text="ulalala"
                  />
                  <Comment
                    createdAt="21hrs ago"
                    userName={"Musk"}
                    profilePic="/img4.png"
                    text="ulalala"
                  />
                </VStack>
                <Divider my={4} bg={"gray.800"} />
                <PostFooter isProfilePage={true} />
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ProfilePost;

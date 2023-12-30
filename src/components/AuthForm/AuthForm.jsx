import { useState } from "react";
import { Box, Button, Flex, Image, Input, Text, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    confirmPassword: ""
  })

  const authNavigate = () => {
    console.log(inputs);
    if(!inputs.email || !inputs.password) {
        alert("Please fill the form")
        return;
    }
    navigate("/");
  }
  return (
    <>
      <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <VStack spacing={4}>
          <Image
            src="/logo.png"
            h={12}
            cursor={"pointer"}
            alt="insta logo"
          />
          <Input placeholder="Email" fontSize={14} type="email" value={inputs.email} onChange={(e) => setInputs({ ...inputs, email: e.target.value })} />
          <Input placeholder="Password" fontSize={14} type="password" value={inputs.password} onChange={(e) => setInputs({ ...inputs, password: e.target.value })} />

          {/* signup option */}
          {!isLogin ? (
            <Input
              placeholder="Confirm Password"
              fontSize={14}
              type="password"
              value={inputs.confirmPassword} onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
            />
          ) : null}

          {/* logn/signup button */}

          <Button w={"full"} colorScheme="blue" size={"sm"} fontSize={14} onClick={authNavigate}>
            {isLogin ? "Log in" : "Sign up"}
          </Button>

          {/* ---------- OR -------------- */}
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            my={4}
            gap={1}
            w={"full"}
          >
            <Box flex={2} h={"1px"} bg={"gray.400"} />
            <Text mx={1} color={"gray.400"}>
              OR
            </Text>
            <Box flex={2} h={"1px"} bg={"gray.400"} />
          </Flex>

          {/* Login with Google */}
          <Flex
            alignItem={"center"}
            justifyContent={"center"}
            cursor={"pointer"}
          >
            <Image src="/google.png" w={5} alt="google img" />
            <Text mx={2} color={"blue.500"}>
              Log in with Google
            </Text>
          </Flex>
        </VStack>
      </Box>

      <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <Flex alignItems={"center"} justifyContent={"center"}>
          <Box mx={2} fontSize={14}>
            {isLogin ? "Don't have an account ?" : "Already have an accout ?"}
          </Box>
          <Box
            onClick={() => setIsLogin(!isLogin)}
            color={"blue.500"}
            cursor={"pointer"}
          >
            {isLogin ? "Sign up" : "Log in"}
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default AuthForm;

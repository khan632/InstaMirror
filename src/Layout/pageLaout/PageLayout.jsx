import { Box, Flex, Spinner } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import SideBar from "../../components/sideBar/SideBar";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase";
import Navbar from "../../components/navbar/Navbar";

// instead of adding sidebar component to every page, we can add it only once to the pageLayout
// component and wrap the children with it. This way, we can have sidebar on every page except the Auth page

const PageLayout = ({ children }) => {
  const { pathname } = useLocation();
  const [ user, loading ] = useAuthState(auth);
  const canSideBarRender = pathname !== "/auth" && user;
  const canNavbarRender = !user && !loading && pathname !== "/auth";
  const sidebar = (
    <Box w={{ base: "70px", md: "240px" }}>
      <SideBar />
    </Box>
  );

  const checkingUserIsAuth = !user && loading;
  if (checkingUserIsAuth) return <PageLayoutSpinner />;
  return (
    <Flex flexDir={canNavbarRender ? "column" : "row"}>
      {/* sidebar */}
      {canSideBarRender && sidebar}

      {/* Navbar */}
      {canNavbarRender && <Navbar />}
      {/* main content (feed, friend suggestion box) */}
      <Box
        flex={1}
        w={{ base: "calc(100% - 70px)", md: "calc(100% - 240px)" }}
        mx={"auto"}
      >
        {children}
      </Box>
    </Flex>
  );
};

export default PageLayout;

const PageLayoutSpinner = () => {
  return (
    <Flex
      flexDir={"column"}
      h="100vh"
      alignItems="center"
      justifyContent={"center"}
    >
      <Spinner size="xl" />
    </Flex>
  );
};

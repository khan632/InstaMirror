import { Box, Flex } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import SideBar from "../../components/SideBar/SideBar";

     // instead of adding sidebar component to every page, we can add it only once to the pageLayout 
    // component and wrap the children with it. This way, we can have sidebar on every page except the Auth page

const PageLayout = ({ children }) => {
  const { pathname } = useLocation();
  const sidebar = (
    <Box w={{ base: "70px", md: "240px" }}>
      <SideBar />
    </Box>
  );
  return (
    <Flex>
      {/* sidebar */}
      {pathname !== "/auth" && sidebar}
      {/* main content (feed, friend suggestion box) */}
      <Box flex={1} w={{ base: "calc(100% - 70px)", md: "calc(100% - 240px)" }}>
        {children}
      </Box>
    </Flex>
  );
};

export default PageLayout;

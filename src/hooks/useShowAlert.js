import { useToast } from "@chakra-ui/react";

function useShowAlert() {
  const toast = useToast();

  const showAlert = (title, desc, status) => {
    toast({
      title: title,
      description: desc,
      status: status,
      duration: 2500,
      isClosable: true,
    });
  };
  return showAlert;
}

export default useShowAlert;

import { useSignOut } from "react-firebase-hooks/auth";
import useShowAlert from "./useShowAlert";
import { auth } from "../firebase/firebase";

function useLogOut() {
  const [ signOut, isLoggingOut, error ] = useSignOut(auth);
  const showAlert = useShowAlert();

  const handleLogout = async () => {
    try {
        await signOut();
        localStorage.removeItem("user-insta-info");
        console.log("logout")
    } catch (err) {
      showAlert("Error", err.message, "error");
    }
  };
  return { handleLogout, isLoggingOut, error };
}

export default useLogOut;

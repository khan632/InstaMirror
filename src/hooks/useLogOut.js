import { useSignOut } from "react-firebase-hooks/auth";
import useShowAlert from "./useShowAlert";
import { auth } from "../firebase/firebase";
import useAuthStore from "../store/authStore";

function useLogOut() {
  const [ signOut, isLoggingOut, error ] = useSignOut(auth);
  const showAlert = useShowAlert();
  const userLogout = useAuthStore((state) => state.logout);

  const handleLogout = async () => {
    try {
        await signOut();
        localStorage.removeItem("user-insta-info");
        userLogout();
    } catch (err) {
      showAlert("Error", err.message, "error");
    }
  };
  return { handleLogout, isLoggingOut, error };
}

export default useLogOut;

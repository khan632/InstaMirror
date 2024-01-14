import { Image } from "@chakra-ui/react"
import { auth, firestore } from '../../firebase/firebase'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import useShowAlert  from '../../hooks/useShowAlert';
import { doc, setDoc } from "firebase/firestore";
import useAuthStore from "../../store/authStore";
function GoogleAuth() {
  const [signInWithGoogle, , , error] = useSignInWithGoogle(auth);
  const showAlert = useShowAlert();
  const loginUser = useAuthStore((state) => state.login); 

  const handleGoogleAuth = async () => {
    try {
      const newUser = signInWithGoogle();
      if(newUser) {
        const userDoc = {
					uid: newUser.user.uid,
					email: newUser.user.email,
					userName: newUser.user.email.split("@")[0],
					fullName: newUser.user.displayName,
					bio: "",
					profilePicURL: newUser.user.photoURL,
					followers: [],
					following: [],
					posts: [],
					createdAt: Date.now(),
				};
				await setDoc(doc(firestore, "users", newUser.user.uid), userDoc);
				localStorage.setItem("user-insta-info", JSON.stringify(userDoc));
				loginUser(userDoc);
      } else{
        showAlert("Error", error.message, "error");
        return;
      }
    } catch (error) {
      showAlert("Error", error.message, "error");
    }
  }
  return (
    <Image src="/google.png" w={10} alt="google img" onClick={handleGoogleAuth} />
  )
}

export default GoogleAuth
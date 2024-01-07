import { Navigate, Route, Routes } from "react-router-dom"
import HomePage from "./Pages/homePages/HomePage";
import AuthPage from "./Pages/authPages/AuthPage";
import PageLayout from "./Layout/pageLaout/PageLayout";
import ProfilePage from "./Pages/profilePage/ProfilePage";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase/firebase";


function App() {
    const [authUser] = useAuthState(auth);
  return (
    <PageLayout>
      <Routes>
          <Route path="/" element={authUser ? <HomePage /> : <Navigate to="/auth" /> } />
          <Route path="/auth" element={!authUser ? <AuthPage /> : <Navigate to="/" /> } />
          <Route path="/:username" element={<ProfilePage />} />
      </Routes>
    </PageLayout>
  )
}

export default App

import { Route, Routes } from "react-router-dom"
import HomePage from "./Pages/homePages/HomePage"
import AuthPage from "./Pages/authPages/AuthPage"
import PageLayout from "./Layout/pageLaout/PageLayout"
import ProfilePage from "./Pages/profilePage/ProfilePage"


function App() {

  return (
    <PageLayout>
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/:username" element={<ProfilePage />} />
      </Routes>
    </PageLayout>
  )
}

export default App

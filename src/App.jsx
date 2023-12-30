import { Route, Routes } from "react-router-dom"
import HomePage from "./Pages/homePages/HomePage"
import AuthPage from "./Pages/authPages/AuthPage"


function App() {

  return (
    <>
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </>
  )
}

export default App

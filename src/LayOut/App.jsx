import { Outlet } from "react-router-dom"
import Footer from "../components/Footer/Footer"
import NavBar from "../components/Navbar/Navbar"



function App() {
  

  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  )
}

export default App

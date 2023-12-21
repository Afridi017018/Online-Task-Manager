import { Outlet } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import Footer from "../components/Footer/Footer"
import NavBar from "../components/Navbar/Navbar"



function App() {
  

  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />


      <ToastContainer
      position="top-center"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
    </>
  )
}

export default App

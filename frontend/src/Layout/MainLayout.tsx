import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import { Outlet } from "react-router-dom"

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen m-2 md:m-2">
      {/* Navbar */}
      <header>
        <Navbar/>
      </header>
      {/* Main Content  */}
      <div className="flex-1">
        <Outlet/>
      </div>
      {/* Footer  */}
     <div>
      <Footer/>
     </div>
    </div>
  )
}
export default MainLayout
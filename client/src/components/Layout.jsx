
import { Outlet } from 'react-router-dom'
import Bg from "./Bg";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {



  return (
    <div className="relative">
      <Bg />
      <div className="fixed top-0 w-full"><Header/></div>
      <Outlet />
      <div className="fixed bottom-0 w-full"><Footer /></div>
    </div>
  )
}

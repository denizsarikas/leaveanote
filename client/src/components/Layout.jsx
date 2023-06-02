
import { Outlet } from 'react-router-dom'
// import Bg from "./Bg";
import Header from "./Header";
import Footer from "./Footer";
import background from "../assets/runner.gif"

export default function Layout() {



  return (
    <div className={"flex flex-col h-screen bg-red-500"}>
      <div className="fixed top-0 w-full"><Header /></div>
      <div className="bg-red-300 w-11/12 mt-24 mx-auto h-full"><Outlet /></div>
      <div className="fixed bottom-0 w-full"><Footer /></div>
    </div>
  )
}

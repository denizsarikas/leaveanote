import { Outlet } from 'react-router-dom';
import Header from "./Header";
import Footer from "./Footer";
import background from "../assets/runner.gif";

export default function Layout() {
  return (
    <div className={"flex flex-col h-screen bg-cover bg-center"} style={{ backgroundImage: `url(${background})`}}>
      <div className="fixed top-0 w-full"><Header /></div>
      <div className="w-11/12 mt-24 mx-auto"><Outlet /></div>
      <div className="fixed bottom-0 w-full"><Footer /></div>
    </div>
  );
}
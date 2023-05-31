import axios from 'axios'
import { Route, Routes } from 'react-router-dom'
import Main from "./components/Main";
import Layout from "./components/Layout";

export default function App() {

  // axios.defaults.baseURL = "https://leaveanote.vercel.app/api";
  axios.defaults.baseURL = "http://localhost:4000/api";
  // axios.defaults.withCredentials = true;
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>

        <Route index element={<Main />} />

        </Route>
      </Routes>
    </>

  )
}
import Main from "./components/Main";
import axios from 'axios'
import { ToastContainer } from 'react-toastify';

export default function App() {

  axios.defaults.baseURL = "https://leaveanote.vercel.app/api";
  // axios.defaults.withCredentials = true;
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Main />
    </>

  )
}
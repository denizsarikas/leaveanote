import { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from "react-toastify";
import axios from 'axios'


export default function Register() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleRegister(ev) {
    ev.preventDefault();
    try {
       await axios.post('/user/register', { name, email, password });
      toast("Kullanıcı oluşturuldu.")
      // setRedirect(true);
    } catch (e) {
      console.log(e)
      toast(e.response.data)
    }
  }

  return (
    <div className="flex flex-col items-center">
      <div className='mt-12 w-full md:w-1/2'>
        <form onSubmit={handleRegister}>
          <div className="w-5/6 mx-auto p-4">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
              <span className="text-2xl font-bold text-white text-shadow-form w-full">Mail adresin</span>
            </div>
            <input
              className="w-full rounded-xl p-2 mt-3"
              type="email"
              placeholder="ornek@mail.com"
              required={true}
              value={email}
              onChange={ev => setEmail(ev.target.value)}
            />
          </div>
          <div className="w-5/6 mx-auto p-4">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
                <path d="M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z" />
              </svg>

              <span className="text-2xl font-bold text-white text-shadow-form w-full">Kullanıcı adın</span>
            </div>
            <input
              className="w-full rounded-xl p-2 mt-3"
              type="text"
              placeholder="Adın"
              required={true}
              value={name}
              onChange={(ev) => setName(ev.target.value)}
            />
          </div>
          <div className="w-5/6 mx-auto p-4">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
                <path fillRule="evenodd" d="M15.75 1.5a6.75 6.75 0 00-6.651 7.906c.067.39-.032.717-.221.906l-6.5 6.499a3 3 0 00-.878 2.121v2.818c0 .414.336.75.75.75H6a.75.75 0 00.75-.75v-1.5h1.5A.75.75 0 009 19.5V18h1.5a.75.75 0 00.53-.22l2.658-2.658c.19-.189.517-.288.906-.22A6.75 6.75 0 1015.75 1.5zm0 3a.75.75 0 000 1.5A2.25 2.25 0 0118 8.25a.75.75 0 001.5 0 3.75 3.75 0 00-3.75-3.75z" clipRule="evenodd" />
              </svg>

              <span className="text-2xl font-bold text-white text-shadow-form" >Şifren</span>
            </div>
            <input
              type='password'
              className="w-full rounded-xl p-2 mt-3"
              placeholder="*******"
              required={true}
              value={password}
              onChange={(ev) => setPassword(ev.target.value)}
            />
          </div>
          <div className="flex p-2 ">
            <button className="relative px-6 py-3 font-bold text-white rounded-lg group mx-auto">
              <span className="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-purple-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-pink-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen"></span>
              <span className="relative">Kayıt Ol</span>
            </button>
          </div>
          <div className='text-white text-2xl text-center group m-4  text-shadow-form w-full'>
            Hesabın var mı? <Link className='group-hover:bg-red-900 rounded-2xl p-2 italic' to="/login">Giriş yap.</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

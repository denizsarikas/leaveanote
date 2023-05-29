import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

export default function NoteForm({ setModal }) {

    const [message, setMessage] = useState('');
    const [hint, setHint] = useState('');

    async function handleSubmit(ev) {
        ev.preventDefault();
        try {
            // const response = await axios.post('/message', { message, hint });
            await axios.post('/message', { message, hint });
            setModal(false);
            toast("Yazdıgın sey gonderildi ama goruntulenmesi icin yenilemen lazım daha o kısmı yapmadım .d")
            // setRedirect(true);
        } catch (e) {
            console.log(e)
            alert(e.response.data)
        }
    }

    return (
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#223F6A] rounded-2xl opacity-90 w-full md:w-2/3 md:h-1/2 lg:w-1/3">
            <button className="hover:bg-[#557FA3] rounded-2xl absolute right-0 top-0 text-white p-4" onClick={() => setModal(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </button>
            <form onSubmit={handleSubmit} className="justify-center flex flex-col h-full ">
                <div className="flex flex-col w-5/6 mx-auto p-4">
                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
                            <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
                        </svg>

                        <span className="text-2xl font-bold text-white text-shadow-form">Kendinle ilgili bir ipucu</span>
                    </div>
                    <input
                        className="w-full rounded-xl p-2 mt-3"
                        type="text"
                        value={hint}
                        onChange={ev => setHint(ev.target.value)}
                        placeholder="eski bir dost"
                    />
                </div>
                <div className="flex flex-col w-5/6 mx-auto p-4">
                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
                            <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                            <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                        </svg>

                        <span className="text-2xl font-bold text-white text-shadow-form" >Notun</span>
                    </div>
                    <textarea
                        className="w-full rounded-xl p-2 mt-3"
                        value={message}
                        onChange={ev => setMessage(ev.target.value)}
                        placeholder="Sen bu satırları okurken ben çok uzaklarda olacağım..."
                        required="true"
                    />
                </div>
                <div className=" mx-auto flex p-2 ">
                    <button className="relative px-6 py-3 font-bold text-white rounded-lg group">
                        <span className="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-purple-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0"></span>
                        <span className="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-pink-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen"></span>
                        <span className="relative">Gönder</span>
                    </button>
                </div>
            </form>
        </div>
    )
}

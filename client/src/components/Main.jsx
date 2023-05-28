
import { useState } from "react";
import Bg from "./Bg";
import MuteButton from "./MuteButton";

export default function Main() {

    const [isMuted, setIsMuted] = useState(true);
    const [modal, setModal] = useState(false);

    return (
        <div className="relative">
            <Bg isMuted={isMuted} />
            <div className="absolute top-0 left-0 w-full h-screen border-double border-4 border-sky-500">
                <div className="flex flex-col">
                    <section className="flex justify-around items-center border-double border-4 border-red-500">
                        <div>
                            <MuteButton isMuted={isMuted} setIsMuted={setIsMuted} />
                        </div>
                        <div className="text-white p-6" >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>

                        </div>
                        <div className="text-white p-6" onClick={() => setModal(true)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                            </svg>
                        </div>
                    </section>


                    <section className="border-double border-4 border-gray-500 flex items-center text-white text-2xl w-11/12 mx-auto">
                        <div className="border-double border-4 border-purple-500 flex gap-1 w-full">
                            <h1 className="border-double border-4 border-white-500 w-3/12 text-center my-auto break-words">-isimmm</h1>
                            <h1 className="border-double border-4 border-white-500 w-7/12 text-start my-auto break-words ">mesakljşjjjjjs eos.</h1>
                            <h1 className="border-double border-4 border-white-500 w-2/12 text-center my-auto">12-03-1007</h1>
                        </div>
                    </section>


                    <button onClick={() => setModal(!modal)} className="mx-auto text-3xl uppercase text-white font-bold tracking-widest underline">
                        Leave your own note.
                    </button>




                    {modal && (
                        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2  bg-red-500 w-1/3 h-1/3">

                            <div className="relative">
                                <button className="absolute right-0 top-0" onClick={() => setModal(false)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </button>


                                <div className="flex flex-col pt-12 gap-2">

                                    <div className="flex flex-col w-5/6 mx-auto gap-1">
                                        <div className="flex">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                            </svg>
                                            <span className="text-center">Kendinle ilgili bir ipucu</span>
                                        </div>
                                        <input className="w-full" placeholder="eski bir dost" />
                                    </div>

                                    <div className="flex flex-col w-5/6 mx-auto gap-1">
                                        <div className="flex">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                            </svg>
                                            <span className="text-center" >Notun</span>
                                        </div>
                                        <textarea className="w-full" placeholder="Sen bu satırları okurken ben çok uzaklarda olacağım..." />
                                    </div>


                                    <button className="border border-3 border-gray-500 mx-auto flex bg-blue-500 text-white">
                                        Gönder
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                                        </svg>
                                    </button>
                                </div>

                            </div>

                        </div>
                    )}

                </div>



            </div>
        </div>

    )
}

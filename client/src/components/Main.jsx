
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
                        <div className="absolute top-0 right-0 left-0 bottom-0 m-auto bg-red-500 w-1/3 h-2/3">

                            <button className="absolute right-0 top-0" onClick={() => setModal(false)}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </button>

                            <div className="flex flex-col gap-4 h-full">

                                <div className="flex flex-col w-5/6 mx-auto gap-1 mt-auto">
                                    <div className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                            <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
                                        </svg>

                                        <span className="text-2xl font-bold">Kendinle ilgili bir ipucu</span>
                                    </div>
                                    <input className="w-full" placeholder="eski bir dost" />
                                </div>

                                <div className="flex flex-col w-5/6 mx-auto gap-1">
                                    <div className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                            <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                                            <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                                        </svg>

                                        <span className="text-2xl font-bold" >Notun</span>
                                    </div>
                                    <textarea className="w-full" placeholder="Sen bu satırları okurken ben çok uzaklarda olacağım..." />
                                </div>


                                <button className="border border-3 border-gray-500 mx-auto flex bg-blue-500 text-white mb-auto p-2 ">
                                    Gönder
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                                    </svg>
                                </button>
                            </div>



                        </div>
                    )}

                </div>



            </div>
        </div>

    )
}

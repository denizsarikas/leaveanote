import { useState } from "react";
import Bg from "./Bg";
import NoteForm from "./NoteForm";
import Header from "./Header";
import Notes from "./Notes";
import BlockingLogo from "./BlockingLogo";

export default function Main() {

    const [isMuted, setIsMuted] = useState(true);
    const [modal, setModal] = useState(false);

    return (
        <div className="relative">
            <Bg isMuted={isMuted} />
            <div className="absolute top-0 left-0 w-full h-screen">
                <div className="absolute overflow-hidden bottom-0 left-0 right-0"><BlockingLogo /></div>
                <div className="flex flex-col">
                    <Header isMuted={isMuted} setIsMuted={setIsMuted} modal={modal} setModal={setModal} />
                    <button
                        onClick={() => setModal(!modal)}
                        className="mx-auto text-3xl text-[#ffffd2] font-bold tracking-widest text-shadow-head p-10 hover:underline hover:italic hover:uppercase"
                    >
                        Leave your own note.
                    </button>
                    {modal && (
                        <NoteForm setModal={setModal} />
                    )}
                    <Notes />
                </div>
            </div>
        </div>
    )
}

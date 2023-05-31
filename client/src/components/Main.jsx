import { useState } from "react";
import NoteForm from "./NoteForm";
import Notes from "./Notes";


export default function Main() {

    const [modal, setModal] = useState(false);

    return (

        <div className="absolute top-0 left-0 w-full h-screen">
            <div className="flex flex-col">
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

    )
}

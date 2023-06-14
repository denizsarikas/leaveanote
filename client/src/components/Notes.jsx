import axios from "axios";
import { useEffect, useState } from "react";
// import { format } from 'date-fns';
import { formatDistanceToNow } from 'date-fns';

export default function Notes() {

    const [messages, setMessages] = useState(null);

    useEffect(() => {
        // axios.get('/message').then(({ data }) => {
        axios.get('/note').then(({ data }) => {
             setMessages(data);
            // setMessages([...data, ...data, ...data, ...data])
        });
    }, []);

    if (messages === null) return 'Loading';

    return (
        <>
            {messages.length > 0 && messages.map((message, index) => (
                <div key={index} className="rounded-3xl flex items-center text-2xl w-11/12 mx-auto p-3 m-1 bg-[#153A42] bg-opacity-20">
                    <h1 className="text-[#00b3ff] w-3/12 text-center text-base break-words text-start text-shadow-hint">{message.hint}:</h1>
                    <h1 className="text-white text-base w-7/12 text-center break-words text-shadow-message ">{message.message}</h1>
                    <h1 className=" w-2/12 text-center text-xs text-end text-[#ff8700] text-shadow-time ">
                        {/* {format(new Date(message.createdAt), 'MM/dd/yyyy, HH:mm:ss')} */}
                        {formatDistanceToNow(new Date(message.createdAt), { addSuffix: true })}
                    </h1>
                </div>
            ))
            }
        </>
    )
}

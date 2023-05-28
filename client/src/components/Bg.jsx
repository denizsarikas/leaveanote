
import videoBg from "../assets/test.mp4"



export default function Bg({isMuted}) {



    return (
        <div className="w-full h-screen">
            <video className="w-full h-screen object-fill" src={videoBg} autoPlay loop muted={isMuted} />
        </div>
    )
}

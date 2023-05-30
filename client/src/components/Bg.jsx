// import videoBg from "../assets/test.mp4"
import gifBg from "../assets/runner.gif"

export default function Bg({isMuted}) {

    return (
        <div className="w-full h-screen">
            {/* <video className="w-full h-screen object-fill " src={videoBg} autoPlay loop muted={isMuted} /> */}
            <img className="w-full h-screen object-fill " src={gifBg} alt="blade-runner" />
        </div>
    )
}

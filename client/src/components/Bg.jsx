import gifBg from "../assets/runner.gif"

export default function Bg() {

    return (
        <div className="w-full h-screen">
            <img className="w-full h-screen object-fill " src={gifBg} alt="blade-runner" />
        </div>
    )
}

import videoBg from "../assets/test.mp4";
import gifBg from "../assets/runner.gif";

export default function Bg({ isMuted }) {
  return (
    <div className="w-full h-screen">
      <div className="hidden sm:block">
        <video
          className="absolute top-0 bottom-0 left-0 right-0 h-screen object-fill w-full"
          src={videoBg}
          autoPlay
          loop
          muted={isMuted}
        />
      </div>
      <div className="sm:hidden">
        <img
          className="absolute top-0 bottom-0 left-0 right-0 w-full h-screen object-fill"
          src={gifBg}
          alt="blade-runner"
        />
      </div>
    </div>
  );
}

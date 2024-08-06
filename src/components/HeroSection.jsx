import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
      Transform Your Vision with
        <span className="bg-gradient-to-r from-blue-500 to-green-800 text-transparent bg-clip-text">
          {" "}
          CreatixWeb
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Unleash the full potential of your brand with CreatixWeb’s cutting-edge UI/UX services.
      </p>
      <div className="flex justify-center my-10">
        <a
          href=""
          className="bg-gradient-to-r from-blue-500 to-green-800  py-3 px-4 mx-3 rounded-md"
        >
          Contact Us
        </a>
        <a href="https://www.behance.net/b7362a7b" className="py-3 px-4 mx-3 rounded-md border">
          Behance
        </a>
      </div>
      <div className="flex flex-wrap mt-10 justify-center relative">
        <div className="relative w-full sm:w-1/2 p-2">
          <video
            autoPlay
            loop
            muted
            className="rounded-lg w-full border border-blue-700 shadow-sm shadow-blue-400"
          >
            <source src={video1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white text-2xl sm:text-3xl md:text-5xl font-bold px-4 py-2 rounded bg-black bg-opacity-50">
              UIUX
            </span>
          </div>
        </div>
        <div className="relative w-full sm:w-1/2 p-2">
          <video
            autoPlay
            loop
            muted
            className="rounded-lg w-full border border-blue-700 shadow-sm shadow-blue-400"
          >
            <source src={video2} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white text-2xl sm:text-3xl md:text-5xl font-bold px-4 py-2 rounded bg-black bg-opacity-50">
              Web Development
            </span>
          </div>
        </div>
      </div>

    </div>
  );
};

export default HeroSection;

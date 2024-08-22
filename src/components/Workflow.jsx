import { CheckCircle2 } from "lucide-react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { Carousel } from "react-responsive-carousel";
import codeImg1 from "../assets/code1.png";
import codeImg2 from "../assets/code2.png";
import codeImg3 from "../assets/code3.png";
import { checklistItems } from "../constants";

const Workflow = () => {

  const handleSeeMoreClick = () => {
    const userChoice = window.confirm('Want to see my Behance Profile?');
  
    if (userChoice) {
      window.open("https://www.behance.net/b7362a7b", "_blank");
    }
  };
  

  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">
          <span className="bg-gradient-to-r from-blue-500 to-green-800 text-transparent bg-clip-text"> Landing Pages</span> Designs
        </h2>
      <div className="flex flex-wrap justify-center mt-20 mb-20">
        <div className="p-2 w-full lg:w-1/2">
          <Carousel
            autoPlay
            infiniteLoop
            interval={3000}
            showThumbs={false}
            showStatus={false}
            showArrows
            className="carousel-container"
          >
            <div>
              <img src={codeImg1} alt="Coding 1" />
            </div>
            <div>
              <img src={codeImg2} alt="Coding 2" />
            </div>
            <div>
              <img src={codeImg3} alt="Coding 3" />
            </div>
          </Carousel>
        </div>
        <div className="pt-12 w-full lg:w-1/2">
          {checklistItems.map((item, index) => (
            <div key={index} className="flex mb-12">
              <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                <CheckCircle2 />
              </div>
              <div>
                <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                <p className="text-md text-neutral-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
            <button
              onClick={handleSeeMoreClick}
              className="py-2 px-6 bg-gradient-to-r from-green-500 to-blue-800 text-white rounded-md shadow-lg"
            >
              See More
            </button>
          </div>

      </div>
    </div>
  );
};

export default Workflow;


import { pricingImages } from "../constants";

const Pricing = () => {
  const handleSeeMoreClick = () => {
    const userChoice = window.confirm('Want to see my Behance Profile?');
  
    if (userChoice) {
      window.open("https://www.behance.net/b7362a7b", "_blank");
    }
  };

  return (
    <>
      <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">
          <span className="bg-gradient-to-r from-blue-500 to-green-800 text-transparent bg-clip-text"> Social Media</span> Designs
        </h2>
        <div className="container mx-auto p-4 mt-20 mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {pricingImages.map((column, columnIndex) => (
              <div key={columnIndex} className="grid gap-4">
                {column.map((image, imageIndex) => (
                  <div key={imageIndex}>
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src={image}
                      alt={`Pricing option ${columnIndex * 3 + imageIndex + 1}`}
                    />
                  </div>
                ))}
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
    </>
  );
};

export default Pricing;

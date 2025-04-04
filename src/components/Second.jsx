"use client";
import CircularGallery from "../components/ui/CircularGallery";
import ScrollFloat from "../components/ui/ScrollFloat";

const Second = () => {
  return (
    <div className="h-auto w-full flex flex-col md:flex-row justify-around items-center bg-background px-4 md:px-0">
  {/* Text Section */}
  <div className="mt-10 md:mt-20 w-full font-bold md:w-[700px] md:ml-28 text-center md:text-left">
    <h2 className="font-bold text-xl text-primary">Explore the Popular</h2>
    <h1 className="text-4xl md:text-7xl font-bold font-[cursive]  italic text-stone-500 text-secondary bg-gradient-to-r from-primary to-secondary">
      Destination
    </h1>
    <br />
    <p className="w-full md:w-[700px] font-serif italic  text-muted font-medium text-base md:text-xl">
      Welcome to our travel company, where we offer an exceptional range of
      domestic travel services that will take you on an adventure through
      some of the most beautiful and diverse destinations within your own
      country.
    </p>
  </div>

      {/* Circular Gallery Section */}
      <div
        style={{ height: "400px", position: "relative" }}
        className="w-full md:w-1/2 mt-10 md:mt-0"
      >
        <CircularGallery bend={0} textColor="black" borderRadius={0.05} />
      </div>
    </div>
  );
};

export default Second;
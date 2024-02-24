import React from "react";
import Carousel from "../../components/Carousel";
import Card from "../../components/Card";

const HomePage = () => {
  const [sort, setSort] = React.useState("popularity");
  const [showItem, setShowItem] = React.useState(false);
  const images = [
    "https://via.placeholder.com/500x400/ff0000",
    "https://via.placeholder.com/500x400/00ff00",
    "https://via.placeholder.com/500x400/0000ff",
    "https://via.placeholder.com/500x400/0000ff",
    "https://via.placeholder.com/500x400/0000ff",
  ];

  const handleRentButtonClick = () => {
    // Set state to show the item
    setShowItem(true);

    // After a delay, hide the item
    setTimeout(() => {
      setShowItem(false);
    }, 1000); // Adjust the delay as needed
  };

  return (
    <div className="min-h-screen bg-regular">
      <div className="">
        <Carousel images={images} />
        <div className=" px-8 py-8">
          <div className="flex-row flex justify-between items-center">
            <div>
              <div className="w-16 h-1 bg-red-100 mt-8" />
              <h1 className="font-thin text-white text-2xl my-4 mb-16">
                Catalogues
              </h1>
            </div>
            <div className="flex flex-row items-center">
              <div
                className={`${
                  sort === "popularity" ? "bg-red-200" : "bg-secondary"
                } p-2 px-8 rounded text-white mr-2 text-sm cursor-pointer`}
                onClick={() => {setSort('popularity')}}
              >
                Popularity
              </div>
              <div
                className={`${
                  sort === "release" ? "bg-red-200" : "bg-secondary"
                } p-2 px-8 rounded text-white ml-2 text-sm cursor-pointer`}
                onClick={() => {setSort('release')}}
              >
                Release Date
              </div>
            </div>
          </div>
          <Card images={images} onPress={handleRentButtonClick} title={showItem ? "item added" : "RENT"} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;

import React from "react";
import { CatalogueCard } from "../../components/Card";
import { useMovieService } from "../../services";
import { movieImages } from "../../configs/constants";

const HomePage = () => {

  const { filmList } = useMovieService({
    movieListOption: {
      params: {},
      enabled: true,
    },
  });

  const combinedData = filmList.data?.results.map((item) => ({
    ...item,
    ...movieImages.find((data) => data.id === item.episode_id),
  }));

  return (
    <div className="min-h-screen bg-regular">
      <div className="">
        {/* <Carousel data={bannerList.data} /> */}
        <div className=" px-8 py-8">
          <div className="flex-row flex justify-between items-center mt-8">
            <div>
              <div className="w-16 h-1 bg-red-100 mt-8" />
              <h1 className="font-thin text-white text-2xl my-4 mb-16">
                Catalogues
              </h1>
            </div>
          </div>
          <CatalogueCard
            title={"RENT"}
            data={combinedData}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;

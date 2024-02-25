import { Link } from "react-router-dom";
import * as models from "../../types";
import { useGlobalContext } from "../../functions";

const LoadingSkeleton = () => {
  return (
    <div className="animate-pulse bg-gray-300 rounded-lg overflow-hidden self-end">
      <div className="h-80"></div>
      <div className="p-4 mt-[-116px] bg-opacity-50 bg-gray-400 relative z-30">
        <div className="h-6 w-4/5 bg-gray-400 mb-2"></div>
        <div className="h-4 w-1/2 bg-gray-400"></div>
        <div className="h-4 w-3/4 bg-gray-400 mt-1"></div>
      </div>
    </div>
  );
};


const CatalogueCard = ({
  title,
  data,
}: {
  title?: string;
  data?: models.GetMovieListResponse[];
}) => {
  const { addToCart } = useGlobalContext();

  const handleRentButtonClick = (item: models.GetMovieListResponse) => {
    addToCart({
      id: item.id,
      title: item.title,
      description: item.desc,
      price: Number(item.price),
      imageUrl: item.image,
    });
  };
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {!data && [...Array(8)].map((_data, index) => <LoadingSkeleton key={index} />)}
      {data?.map((item, index) => (
        <div
          key={index}
          className="bg-black rounded-lg overflow-hidden cursor-pointer self-end"
        >
          <Link to={{ pathname: "/detail" }} state={item} className="block">
            <div className="relative">
              <div className="text-white absolute bg-black right-0 p-2 rounded-bl-md">
                $ {item.price}
              </div>
              <img
                src={item.image}
                alt={`Card ${index}`}
                className="w-full h-80 object-contain"
              />
              <div className="p-4 mt-[-116px] bg-opacity-50 bg-black relative z-30">
                <h2 className="text-xl font-bold text-white">{item.title}</h2>
                <p className="text-white text-xs font-bold">
                  director: {item.director}, producer: {item.producer}
                </p>
                <p className="mt-2 text-xs text-white line-clamp-3">
                  {item.desc}
                </p>
              </div>
            </div>
          </Link>
          <div
            className="flex justify-center bg-red-100 py-3 text-white cursor-pointer z-30"
            onClick={() => handleRentButtonClick(item)}
          >
            {title ? title : "RENT"}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CatalogueCard;

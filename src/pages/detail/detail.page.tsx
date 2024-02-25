import { useLocation } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { useGlobalContext } from "../../utils";
import { people, planets, vehicles } from "../../configs/constants";
import { PhotoCard } from "../../components/Card";

const DetailPage = () => {
  const { state } = useLocation();
  const { addToCart } = useGlobalContext();

  const characters = state.characters.map((url: string) => {
    const urlParts = url.split("/");
    return urlParts[urlParts.length - 2];
  });
  const planetData = state.planets.map((url: string) => {
    const urlParts = url.split("/");
    return urlParts[urlParts.length - 2];
  });

  const starships = state.starships.map((url: string) => {
    const urlParts = url.split("/");
    return urlParts[urlParts.length - 2];
  });

  const combineCharacters = characters.slice(0, 10).map((id: any) => {
    const matchingObject = people.find((obj) => obj.id === Number(id));
    return matchingObject
      ? { id: matchingObject.id, image: matchingObject.image }
      : { id };
  });

  const combinePlanets = planetData.slice(0, 10).map((id: any) => {
    const matchingObject = planets.find((obj) => obj.id === Number(id));
    return matchingObject
      ? { id: matchingObject.id, image: matchingObject.image }
      : { id };
  });

  const combineStarships = starships.slice(0, 10).map((id: any) => {
    const matchingObject = vehicles.find((obj) => obj.id === Number(id));
    return matchingObject
      ? { id: matchingObject.id, image: matchingObject.image }
      : { id };
  });

  return (
    <div className="min-h-screen bg-white">
      {/* background movie */}
      <div className="bg-black">
        <img
          src={require("../../assets/images/galaxia.jpg")}
          alt="Pockicks Logo"
          className="w-full object-cover object-top flex flex-1 h-[500px] mt-[-80px]"
        />
      </div>
      {/* detail movie */}
      <div className="mt-[-91px]">
        <div className="bg-black opacity-70 h-[6.4vw]">
          <div className="flex flex-row  py-4 container w-[50vw] ml-[25vw]">
            <div className="text-white flex flex-row items-center">
              <FaStar size={32} color="yellow" />
              <p className="text-2xl font-bold ml-2">7.0</p>
              <div className="ml-2">
                <p className="text-sm text-grey">director</p>
                <p className="text-sm text-white line-clamp-2">
                  {state.director}
                </p>
              </div>
            </div>
            <div className="h-auto w-[0.5px] bg-white mx-4" />
            <div className="ml-2">
              <p className="text-sm text-grey">producer</p>
              <p className="text-sm text-white line-clamp-2">
                {state.producer}
              </p>
            </div>
            <div className="h-auto w-[0.5px] bg-white mx-4" />
            <div className="ml-2">
              <p className="text-sm text-grey">language</p>
              <p className="text-sm text-white">english</p>
            </div>
            <div className="h-auto w-[0.5px] bg-white mx-4" />
            <div className="ml-2">
              <p className="text-sm text-grey">budged</p>
              <p className="text-sm text-white">$200,000,000.00</p>
            </div>
          </div>
        </div>
      </div>
      {/* banner movie */}
      <div className="w-full flex flex-row mt-[-180px] absolute">
        <div className="ml-12" />
        <img
          src={state.image}
          alt="banner"
          className="object-contain w-60 h-72 bg-black rounded"
        />
        <div className="h-auto py-2 rounded ml-4 flex flex-col justify-between">
          <div>
            <p className="text-white text-sm">{state.release_date}</p>
            <p className="text-white text-2xl">{state.title}</p>
            <p className="text-white text-sm">Fantasy</p>
          </div>
          <div className="flex flex-row items-center">
            <div>
              <p className="text-red-100 text-md font-bold">Description</p>
              <p className="text-thin font-sans text-grey w-[50vw] line-clamp-3">
                {state.desc}
              </p>
            </div>
            <div
              className="bg-red-100 py-3 w-[10vw] rounded-md flex justify-center text-white text-sm cursor-pointer ml-10"
              onClick={() => {
                addToCart({
                  id: state.id,
                  title: state.title,
                  description: state.desc,
                  price: Number(state.price),
                  imageUrl: state.image,
                });
              }}
            >
              Rent
            </div>
          </div>
        </div>
      </div>
      {/* details */}
      <div className="my-36 mx-12">
        <div className="my-8">
          <p className="text-red-100 text-md font-bold mb-8">Characters</p>
          <PhotoCard data={combineCharacters} type={'people'} />
        </div>
        <div className="my-8">
          <p className="text-red-100 text-md font-bold mb-8">Planets</p>
          <PhotoCard data={combinePlanets} type={'planets'} />
        </div>
        <div className="my-8">
          <p className="text-red-100 text-md font-bold mb-8">Starships</p>
          <PhotoCard data={combineStarships} type={'starships'} />
        </div>
      </div>
    </div>
  );
};

export default DetailPage;

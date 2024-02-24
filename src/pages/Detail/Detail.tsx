import { useLocation } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import Card from "../../components/Card";

const DetailPage = () => {
  const { state } = useLocation();
  const images = [
    "https://via.placeholder.com/800x400/ff0000",
    "https://via.placeholder.com/800x400/00ff00",
    "https://via.placeholder.com/800x400/0000ff",
    "https://via.placeholder.com/800x400/0000ff",
  ];
  console.log("state:", state);

  return (
    <div className="min-h-screen bg-white">
      {/* background movie */}
      <div className="bg-black">
        <img
          src={state}
          alt="Pockicks Logo"
          className="w-full object-cover object-top flex flex-1 h-[500px] mt-[-80px]"
        />
      </div>
      {/* detail movie */}
      <div className="mt-[-72px]">
        <div className="bg-black opacity-70">
          <div className="flex flex-row  py-4 container w-[50vw] ml-[25vw]">
            <div className="text-white flex flex-row items-center">
              <FaStar size={32} color="yellow" />
              <p className="text-2xl font-bold ml-2">7.0</p>
              <div className="ml-2">
                <p className="text-sm text-grey">user score</p>
                <p className="text-sm text-white">3221 votes</p>
              </div>
            </div>
            <div className="h-auto w-[0.5px] bg-white mx-4" />
            <div className="ml-2">
              <p className="text-sm text-grey">status</p>
              <p className="text-sm text-white">released</p>
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
            <div className="h-auto w-[0.5px] bg-white mx-4" />
            <div className="ml-2">
              <p className="text-sm text-grey">production</p>
              <p className="text-sm text-white">DC Entertaiment</p>
            </div>
          </div>
        </div>
      </div>
      {/* banner movie */}
      <div className="w-full flex flex-row mt-[-180px] absolute">
        <img
          src={state}
          alt="banner"
          className="object-contain w-60 h-72 bg-grey rounded"
        />
        <div className="h-auto py-2 rounded ml-4 flex flex-col justify-between">
          <div>
            <p className="text-white text-sm">2020</p>
            <p className="text-white text-2xl">Wonder Woman</p>
            <p className="text-white text-sm">Fantasy</p>
          </div>
          <div>
            <p className="text-red-100 text-md font-bold">Description</p>
            <p className="text-thin font-sans text-grey">
              Wonder Woman comes into conflict with the Soviet Union during the
              Cold War in the 1980s and finds a formidable foe by the name of
              the Cheetah.
            </p>
          </div>
        </div>
      </div>
      {/* reviews */}
      <div className="mt-36">
        <p className="text-red-100 text-md font-bold ml-12 mb-8">Reviews</p>
        <div className="flex flex-row w-full flex-grow relative justify-between">
          <div className="w-[40vw] bg-dark-100 ml-12 rounded-lg py-4 px-4">
            <div>
              <div className="flex flex-row justify-between">
                <div className="flex flex-row items-center">
                  <div className="h-10 w-10 bg-dark-200 rounded-full " />
                  <div className="ml-4">
                    <p className="text-sm font-bold text-black">SWITCH</p>
                    <p className="text-sm font-thin text-grey">
                      February 18, 2024
                    </p>
                  </div>
                </div>
                <div className="flex flex-row bg-dark-300 rounded-sm p-2">
                  <FaStar size={10} className="text-yellow-500" />
                  <p className="text-2xl text-black font-bold">7.0</p>
                </div>
              </div>
            </div>
            <div>
              <p className="text-sm text-grey mt-4">
                It isn't as easy as saying 'Wonder Woman 1984' is a good or bad
                movie. The pieces are there, and there are moments I adore, but
                it does come across as a bit of a mess, even though the action
                sequences are breathtaking. If you're a fan of the original
                film, you'll be more willing to take the ride, but for those
                more indifferent, it may be a bit of a blander sit. If you can
                and are planning to watch it, the theatrical experience is the
                way to go - there is nothing like seeing these stunning sets,
                fun action scenes and hearing Zimmer's jaw-dropping score like
                on the big screen.
              </p>
            </div>
          </div>
          <div className="w-[40vw] bg-dark-100 mr-12 rounded-lg py-4 px-4">
            <div>
              <div className="flex flex-row justify-between">
                <div className="flex flex-row items-center">
                  <div className="h-10 w-10 bg-dark-200 rounded-full " />
                  <div className="ml-4">
                    <p className="text-sm font-bold text-black">msbreviews</p>
                    <p className="text-sm font-thin text-grey">
                      January 05, 2024
                    </p>
                  </div>
                </div>
                <div className="flex flex-row bg-dark-300 rounded-sm p-2">
                  <FaStar size={10} className="text-yellow-500" />
                  <p className="text-2xl text-black font-bold">7.0</p>
                </div>
              </div>
            </div>
            <div>
              <p className="text-sm text-grey mt-4">
                The superhero genre has been growing exponentially during the
                last decade, so it's bizarre to go through an entire year with
                only Birds of Prey and The New Mutants instead of literally
                dozens of films from both Marvel and DC. Thankfully, Warner
                Bros. decided to release Wonder Woman 1984 before the year's
                end, but not without a catch. Most people will only have the
                possibility of watching one of the few blockbusters of 2020
                through HBO Max, a streaming service only{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Reccomendation */}
      <div className="bg-regular py-12 px-12 mt-8">
        <p className="text-white font-bold text-md mb-8">Reccomendation</p>
        <Card images={images} onPress={()=> alert('add to cart')}/>
      </div>
    </div>
  );
};

export default DetailPage;

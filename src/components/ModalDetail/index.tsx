import React from "react";
import { useDetailService } from "../../services";
import Loading from "../Loading";

const ModalDetail = ({ isOpen, onClose, data, type }: any) => {
  const [enableApi, setEnableApi] = React.useState(false);

  const { detail } = useDetailService({
    detailOption: {
      params: { id: data?.id, type: type },
      enabled: enableApi,
    },
  });

  React.useEffect(() => {
    if (isOpen) {
      setEnableApi(true);
    } else {
      setEnableApi(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const DisplayDetail = ({ type, itemData }: any) => {
    console.log("item:", itemData);

    const renderDetail = () => {
      if (type === "people") {
        return (
          <div className="ml-4">
            <p className="text-grey text-sm">Name: {itemData.name}</p>
            <p className="text-grey text-sm">
              Birth Year: {itemData.birth_year}
            </p>
            <p className="text-grey text-sm">Gender: {itemData.gender}</p>
            <p className="text-grey text-sm">
              Hair Color: {itemData.hair_color}
            </p>
            <p className="text-grey text-sm">Eye Color: {itemData.eye_color}</p>
          </div>
        );
      } else if (type === "planets") {
        return (
          <div className="ml-4">
            <p className="text-grey text-sm">Name: {itemData.name}</p>
            <p className="text-grey text-sm">
              Rotation Period: {itemData.rotation_period}
            </p>
            <p className="text-grey text-sm">
              Orbital Period: {itemData.orbital_period}
            </p>
            <p className="text-grey text-sm">Diameter: {itemData.diameter}</p>
            <p className="text-grey text-sm">Climate: {itemData.climate}</p>
          </div>
        );
      } else if (type === "starships") {
        return (
          <div className="ml-4">
            <p className="text-grey text-sm">Name: {itemData.name}</p>
            <p className="text-grey text-sm">model: {itemData.model}</p>
            <p className="text-grey text-sm">
              manufacturer: {itemData.manufacturer}
            </p>
            <p className="text-grey text-sm">crew: {itemData.crew}</p>
            <p className="text-grey text-sm">passengers: {itemData.passengers}</p>
          </div>
        );
      } else {
        return (
          <div className="flex w-full justify-center">
            <p className="text-red-500">Invalid type</p>
          </div>
        );
      }
    };

    return renderDetail();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg w-[50vw]">
        <div className="bg-secondary flex flex-row justify-between p-2">
          <p className="text-white font-bold">Detail</p>
          <div
            onClick={onClose}
            className="bg-white text-secondary font-bold w-6 h-6 rounded-full flex justify-center cursor-pointer"
          >
            X
          </div>
        </div>
        <div className="m-4 max-h-[30vw] overflow-auto">
          <div className="flex flex-row items-center">
            <img
              src={data.image}
              alt="detail"
              className="h-[20vw] w-[15vw] object-contain bg-dark-300 rounded-md"
            />
            {detail.data ? (
              <DisplayDetail type={type} itemData={detail.data} />
            ) : (
              <div className="flex w-full justify-center">
                <Loading />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalDetail;

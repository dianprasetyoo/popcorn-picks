import React from "react";
import { useDetailService } from "../../services";
import Loading from "../Loading";

interface ModalDetailProps {
  isOpen: boolean;
  onClose: () => void;
  data: any;
  type: string;
}

interface DetailData {
  name: string;
  birth_year?: string;
  gender?: string;
  hair_color?: string;
  eye_color?: string;
  rotation_period?: string;
  orbital_period?: string;
  diameter?: string;
  climate?: string;
  model?: string;
  manufacturer?: string;
  crew?: string;
  passengers?: string;
}

const ModalDetail: React.FC<ModalDetailProps> = ({
  isOpen,
  onClose,
  data,
  type,
}) => {
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

  const DisplayDetail: React.FC<{ type: string; itemData: DetailData }> = ({
    type,
    itemData,
  }) => {
    const renderDetail = () => {
      switch (type) {
        case "people":
          return (
            <div className="ml-4">
              <p className="text-secondary text-lg font-bold">
                Name: {itemData.name}
              </p>
              <p className="text-secondary text-lg font-bold">
                Birth Year: {itemData.birth_year}
              </p>
              <p className="text-secondary text-lg font-bold">
                Gender: {itemData.gender}
              </p>
              <p className="text-secondary text-lg font-bold">
                Hair Color: {itemData.hair_color}
              </p>
              <p className="text-secondary text-lg font-bold">
                Eye Color: {itemData.eye_color}
              </p>
            </div>
          );
        case "planets":
          return (
            <div className="ml-4">
              <p className="text-secondary text-lg font-bold">
                Name: {itemData.name}
              </p>
              <p className="text-secondary text-lg font-bold">
                Rotation Period: {itemData.rotation_period}
              </p>
              <p className="text-secondary text-lg font-bold">
                Orbital Period: {itemData.orbital_period}
              </p>
              <p className="text-secondary text-lg font-bold">
                Diameter: {itemData.diameter}
              </p>
              <p className="text-secondary text-lg font-bold">
                Climate: {itemData.climate}
              </p>
            </div>
          );
        case "starships":
          return (
            <div className="ml-4">
              <p className="text-secondary text-lg font-bold">
                Name: {itemData.name}
              </p>
              <p className="text-secondary text-lg font-bold">
                Model: {itemData.model}
              </p>
              <p className="text-secondary text-lg font-bold">
                Manufacturer: {itemData.manufacturer}
              </p>
              <p className="text-secondary text-lg font-bold">
                Crew: {itemData.crew}
              </p>
              <p className="text-secondary text-lg font-bold">
                Passengers: {itemData.passengers}
              </p>
            </div>
          );
        default:
          return (
            <div className="flex w-full justify-center items-center ml-4">
              <p className="text-red-500 text-lg font-bold">Data Not Found</p>
            </div>
          );
      }
    };

    return renderDetail();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg w-auto">
        <div className="bg-secondary flex flex-row justify-between p-2">
          <p className="text-white font-bold">Detail</p>
          <div
            onClick={onClose}
            className="bg-white text-secondary font-bold w-6 h-6 rounded-full flex justify-center cursor-pointer"
          >
            X
          </div>
        </div>
        <div className="m-12 max-h-[30vw] overflow-auto">
          <div className="flex flex-row">
            <img
              src={data.image}
              alt="detail"
              className="h-[20vw] w-[15vw] object-contain bg-dark-300 rounded-md"
            />
            {detail.data ? (
              <DisplayDetail type={type} itemData={detail.data} />
            ) : (
              <div className="flex w-full justify-center items-center ml-8">
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

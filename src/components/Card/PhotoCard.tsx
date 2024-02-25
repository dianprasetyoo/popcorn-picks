import React from "react";
import ModalDetail from "../ModalDetail";

const PhotoCard = ({ data, type }: { data?: any, type: string }) => {
  const [openModalDetail, setOpenModalDetail] = React.useState(false);
  const [dataDetail, setDataDetail] = React.useState(null);
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {data?.map((item: any, index: number) => (
          <div
            key={index}
            className="bg-dark-300 rounded-lg overflow-hidden cursor-pointer self-end"
            onClick={() => {
              setDataDetail(item)
              setOpenModalDetail(true)
            }}
          >
            <div className="relative">
              <img
                src={item.image}
                alt={`Card ${index}`}
                className="w-full h-28 object-contain"
              />
            </div>
          </div>
        ))}
      </div>
      <ModalDetail isOpen={openModalDetail} onClose={() => setOpenModalDetail(false)} data={dataDetail} type={type} />
    </>
  );
};

export default PhotoCard;

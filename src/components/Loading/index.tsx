import React from "react";

const Loading = ({ size }: { size?: number }) => {
  return (
    <div className="flex">
      <div className="animate-spin rounded-full h-8 w-8 border-t-4 border-b-4 border-red-200" />
    </div>
  );
};

export default Loading;

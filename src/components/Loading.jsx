import React from "react";
import { LineWave } from "react-loader-spinner";
const Loading = () => {
  return (
    <div className="flex justify-center items-center">
      <LineWave
        color="blue"
        height={400}
        width={210}
        ariaLabel="three-circles-rotating"
      />
    </div>
  );
};

export default Loading;

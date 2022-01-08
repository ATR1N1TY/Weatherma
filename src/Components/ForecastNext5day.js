import React from "react";

const ForecastNext5 = ({ time, mintemp, maxtemp }) => {
  return (
    <div className="next5dayCard glass lg:shadow-sm flex justify-between lg:w-42 p-4 mt-2 2xl:w-80 ">
      <div className="date lg:text-xs 2xl:text-base">{time}</div>
      <div className="temp lg:text-xs 2xl:text-base">
        MIN {mintemp} | MAX {maxtemp}
      </div>
    </div>
  );
};

export default ForecastNext5;

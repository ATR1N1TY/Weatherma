import React from "react";

const ForecastNext12 = ({ time, temp }) => {
  return (
    <div className="forcast12 glass lg:shadow-sm p-6 flex flex-col align-middle justify-center text-center">
      <h1 className="Hour">{time}</h1>
      <h2 className="temp">{temp}</h2>
    </div>
  );
};

export default ForecastNext12;

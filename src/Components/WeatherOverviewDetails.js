import React from "react";

const WeatherOverviewDetails = ({ emoji, dimension, value }) => {
  return (
    <section className="detailCard flex flex-col justify-center w-36 h-36 m-2 p-2 text-center glass lg:shadow-sm lg:w-24 lg:h-24 2xl:w-36 2xl:h-36 lg:m-2 lg:p-1">
      <div className="emoji text-5xl drop-shadow-xl lg:text-xl xl:text-5xl">
        {emoji}
      </div>
      <h1 className=" text-lg p-2 lg:text-xs 2xl:text-lg">{dimension}</h1>
      <div className="data font-bold lg:text-xs 2xl:text-lg">{value}</div>
    </section>
  );
};

export default WeatherOverviewDetails;

import React, { useContext } from "react";
import { dataContext } from "../States/DataContext";

const WeatherOverview = () => {
  const {
    countryName,
    currentConditions: { WeatherText, Temperature },
    // forecast5Days,
  } = useContext(dataContext);

  return (
    <section className="weatherOverview glass text-center text-xl text-neutral-900 p-4 m-4 2xl:h-1/2 2xl:w-96 2xl:flex 2xl:flex-col 2xl:justify-center ">
      <h1 className=" text-4xl lg:text-2xl 2xl:text-3xl">{countryName}</h1>
      <div className="temp text-5xl font-extralight p-4 lg:p-2 2xl:text-5xl">
        {Temperature}⛅
      </div>
      <div className="weatherText text-4xl lg:text-2xl 2xl:text-3xl">
        {WeatherText}
      </div>
      <div className="minmax mt-4">
        {/* MIN {forecast5Days[0].Temperature.Minimum.Value} | MAX{" "}
        {forecast5Days[0].Temperature.Maximum.Value} */}
      </div>
      <p className=" text-xs">(next 12 hours)</p>
    </section>
  );
};

export default WeatherOverview;

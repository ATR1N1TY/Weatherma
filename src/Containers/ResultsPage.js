import React, { useContext } from "react";
import { dataContext } from "../States/DataContext";

//components
import WeatherOverview from "../Components/WeatherOverview";
import WeatherOverviewDetails from "../Components/WeatherOverviewDetails";
import ForecastNext12 from "../Components/ForecastNext12hour";
import ForecastNext5 from "../Components/ForecastNext5day";

const ResultsPage = () => {
  const {
    currentConditions: { RelativeHumidity, Pressure, Visibility, WindSpeed },
    forecast12Hours,
    forecast5Days,
  } = useContext(dataContext);

  return (
    <div className="resultsPage lg:flex lg:bg-neutral-500 glass lg:bg-opacity-10 lg:backdrop-blur-sm lg:h-1/2 lg:absolute lg:items-center lg:justify-between 2xl:justify-around lg:bottom-0 lg:w-screen lg:px-8 lg:m-auto lg:rounded-tl-3xl lg:rounded-tr-3xl">
      {/* general current weather: Location, temperature, weatherIcon, weatherText */}
      <WeatherOverview />

      <div className="wrapper max-w-2xl lg:w-1/2">
        {/* forecast for next 12 hours */}
        <div className="HourlyForcast flex flex-row gap-2 mt-4 mb-4 overflow-x-auto overflow-y-hidden whitespace-nowrap border-t-2 border-b-2 lg:border-x-2 border-neutral-300 rounded-2xl p-2 lg:w-full 2xl:w-auto">
          {forecast12Hours.map((hour) => {
            return (
              <ForecastNext12
                key={hour.DateTime}
                time={hour.DateTime.substr(11, 5)}
                temp={hour.Temperature.Value + hour.Temperature.Unit}
              />
            );
          })}
        </div>

        {/* details about current weather: Humidity, wind speed, Visibility, Pressure */}
        <div className="weatherDetails flex mt-4 m-4 flex-wrap justify-center lg:items-center lg:justify-center lg:w-auto xl:w-auto 2xl:justify-around glass 2xl:h-40 lg:m-0 ">
          <WeatherOverviewDetails
            emoji="💧"
            dimension="Humidity"
            value={RelativeHumidity + "%"}
          />
          <WeatherOverviewDetails
            emoji="💨"
            dimension="Wind Speed"
            value={WindSpeed}
          />
          <WeatherOverviewDetails
            emoji="👁️"
            dimension="Visibility"
            value={Visibility}
          />
          <WeatherOverviewDetails
            emoji="🔷"
            dimension="Pressure"
            value={Pressure}
          />
        </div>
      </div>

      {/* forecast for next 5 days */}
      <div className="dailyForecast m-4 lg:overflow-x-hidden lg:overflow-y-auto lg:whitespace-nowrap">
        {forecast5Days.map((DAY, idx) => {
          return (
            <ForecastNext5
              key={idx}
              time={DAY.Date.substr(5, 5)}
              mintemp={DAY.Temperature.Minimum.Value}
              maxtemp={DAY.Temperature.Maximum.Value}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ResultsPage;

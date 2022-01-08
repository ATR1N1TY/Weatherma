import React, { useState, useEffect, useCallback, createContext } from "react";

export const dataContext = createContext(); //creating context to share data across app

const API = "zdgFbfyN3EFCNGU6mUx0ShBI5M9K3qfu"; //accuweather API key
const unsplashAPI = "IVjluzS2f-rcBODaAXt8EZqjUG55pYblqdb5ifJIyqM";

const URL = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${API}&q=`; // URL for getting city Key
//this function is wrapped arround components in App, in order to share data
export const DataContextProvider = (props) => {
  //this is cityName
  const [cityName, setCityName] = useState("tbilisi");

  //keyData contains other information like city name and country name with Key
  const [countryName, setCountryName] = useState("");

  //this data contains current information about weather
  const [currentConditions, setCurrentConditions] = useState([{}]);
  const [forecast12Hours, setForecast12Hours] = useState([]);
  const [forecast5Days, setForecast5Days] = useState([]);
  const [bgLink, setBgLink] = useState("");

  //with callBack we are getting user input from Search component
  const callBack = useCallback((city) => {
    setCityName(city);
  }, []);

  //when value of cityName updates it fetches data from different sources of Accuweather API
  useEffect(() => {
    //this function gets City Key from Accuweather Locations API in order to fetch other data
    const fetchStart = async () => {
      const res = await fetch(URL + cityName);
      const data = await res.json();
      const [
        {
          Key,
          LocalizedName,
          Country: { EnglishName },
        },
      ] = data;
      setCountryName(LocalizedName + ", " + EnglishName);

      fetchCurrentConditions(Key);
      fetch12HourForecast(Key);
      fetch5DayForecast(Key);
    };

    // fetching current conditions: temp, pressure, wind speed and other things
    const fetchCurrentConditions = async (KEY) => {
      const res = await fetch(
        `http://dataservice.accuweather.com/currentconditions/v1/${KEY}?apikey=${API}&details=true`
      );
      const data = await res.json();
      // console.log(data);
      const [
        {
          IsDayTime,
          WeatherText,
          WeatherIcon,
          RelativeHumidity,
          Temperature: {
            Metric: { Value: TempValue, Unit: TempUnit },
          },
          Pressure: {
            Metric: { Value: PressValue, Unit: PressUnit },
          },
          Visibility: {
            Metric: { Value: visibleValue, Unit: visibleUnit },
          },
          Wind: {
            Speed: {
              Metric: { Value: windValue, Unit: windUnit },
            },
          },
        },
      ] = data;

      fetchBackground(cityName, IsDayTime);

      setCurrentConditions({
        IsDayTime,

        Temperature: TempValue + TempUnit,
        WeatherIcon,
        WeatherText,

        RelativeHumidity,
        Pressure: PressValue + PressUnit,
        Visibility: visibleValue + visibleUnit,
        WindSpeed: windValue + windUnit,
      });
    };

    // this function gets forecast for next 12 hours
    const fetch12HourForecast = async (KEY) => {
      const res = await fetch(
        `http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/${KEY}?apikey=${API}&metric=true`
      );
      const data = await res.json();
      setForecast12Hours(data);
    };

    //fetching forecast for next 5 days
    const fetch5DayForecast = async (KEY) => {
      const res = await fetch(
        `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${KEY}?apikey=${API}&metric=true`
      );
      const data = await res.json();
      setForecast5Days(data.DailyForecasts);
    };

    //this function gets background from unsplash API
    const fetchBackground = async (city, isDay) => {
      const res = await fetch(
        `https://api.unsplash.com/search/photos?client_id=${unsplashAPI}&page=1&query=${city}&orientation=landscape`
      );
      const data = await res.json();
      console.log(data);
      setBgLink(data.results[3].urls.full);
    };

    fetchStart();
  }, [cityName]);

  //with .Provider we are passing data as a value prop to it's children
  return (
    <dataContext.Provider
      value={{
        callBack,
        countryName,
        currentConditions,
        forecast12Hours,
        forecast5Days,
        bgLink,
      }}
    >
      {props.children}
    </dataContext.Provider>
  );
};

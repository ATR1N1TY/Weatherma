import React, { useState, useEffect, useCallback, createContext } from "react";

export const dataContext = createContext(); //creating context to share data across app

const API = "yBBUqkSA15B0ytSMiK4HYUIlCE5NtfQa"; //accuweather API key
const URL = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${API}&q=`; // URL for getting city Key

//this function is wrapped arround components in App, in order to share data
export const DataContextProvider = (props) => {
  const [data, setData] = useState([]);
  const [cityKey, setCityKey] = useState("171705");
  const [cityName, setCityName] = useState("tbilisi");
  const [Country, setCountry] = useState("");
  //with callBack we are getting user input from Search component
  const callBack = useCallback((city) => {
    setCityName(city);
  }, []);

  //when value of cityName updates it fetches data from different sources of Accuweather API
  useEffect(() => {
    //getCityKey gets Key of city, in order to retrieve data from different endpoints of Accuweather API
    const getCityKey = async () => {
      fetch(URL + cityName)
        .then((res) => res.json())
        .then((data) => {
          // when data fetching is done we destructure data and hook them onto their useState hooks
          const [
            {
              Country: { LocalizedName },
              EnglishName,
              Key,
            },
          ] = data;

          console.log(EnglishName + ", " + LocalizedName + " " + Key);
        });
    };
    getCityKey();
  }, [cityName]);

  //with .Provider we are passing data as a value prop to it's children
  return (
    <dataContext.Provider value={{ data, callBack }}>
      {props.children}
    </dataContext.Provider>
  );
};

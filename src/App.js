import { useContext } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import SearchPage from "./Pages/SearchPage";
import { dataContext, DataContextProvider } from "./States/DataContext";

function App() {
  return (
    <div className="App">
      <DataContextProvider>
        {/* background: sets searched city bacground day or night */}

        {/* navbar: Weatherma */}
        <Navbar />

        {/* search city */}
        <SearchPage />

        {/* general current weather: Location, temperature, weatherIcon, weatherText */}
        {/* forecast for next 12 hours */}
        {/* details about current weather: Humidity, wind speed, Visibility, Pressure */}
        {/* forecast for next 5 days */}
      </DataContextProvider>
    </div>
  );
}

export default App;

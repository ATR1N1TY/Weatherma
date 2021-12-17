import "./App.css";
import Navbar from "./Components/Navbar";
import SearchPage from "./Pages/SearchPage";

function App() {
  return (
    <div className="App">
      {/* background: sets searched city bacground day or night */}

      {/* navbar: Weatherma */}
      <Navbar />

      {/* search city */}
      <SearchPage />

      {/* general current weather: Location, temperature, weatherIcon, weatherText */}
      {/* forecast for next 12 hours */}
      {/* details about current weather: Humidity, wind speed, Visibility, Pressure */}
      {/* forecast for next 5 days */}
    </div>
  );
}

export default App;

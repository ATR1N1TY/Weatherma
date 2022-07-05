//importing context from DataContext to share data accross App
import { useContext } from "react";
import { dataContext } from "./States/DataContext";

//components
import Navbar from "./Components/Navbar";
import SearchPage from "./Containers/SearchPage";
import ResultsPage from "./Containers/ResultsPage";

//well, this is CSS
import "./App.css";

function App() {
  const { bgLink } = useContext(dataContext);
  return (
    <div
      className="App 2xl:w-screen 2xl:h-screen"
      style={{
        background: `url(${bgLink})`,
      }}
    >
      <Navbar /> {/* navbar: Weatherma */}
      <SearchPage /> {/* search city */}
      <ResultsPage /> {/* results can be found here */}
    </div>
  );
}

export default App;

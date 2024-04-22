import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchPlaces from "./pages/SearchPlaces";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/search-places" element={<SearchPlaces />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

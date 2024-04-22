import { getPlacesApi } from "../../apis/places";
import "./SearchBox.css";

const SearchBox = ({
  setDataSource,
  searchText,
  setSearchText,
  setTotalCount,
  limit,
  setLoading,
}) => {
  const getPlacesData = async () => {

    if(!searchText) {
      alert("Please enter search text.");
      return;
    }

    setLoading(true);
    const response = await getPlacesApi(searchText, limit);
    
    if (response?.status === 200) {
      setDataSource(response.data?.data);
      setTotalCount(response.data?.metadata?.totalCount);
    } else {
      alert("Something went wrong!");
    }
    setLoading(false);
  };

  const handleShortcut = (event) => {
    if ((event.ctrlKey && event.key === "/") || event.key === "Enter") {
      if (limit > 0 && limit <= 10) {
        getPlacesData();
      } else {
        alert("Invalid limit");
      }
    }
  };

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
    setDataSource(null);
  };

  return (
    <div className="search-container">
      <input
        className="search-box"
        type="text"
        placeholder="Search places..."
        onChange={(e) => handleSearchChange(e)}
        onKeyDown={handleShortcut}
        value={searchText}
      />
      <div className="keyboard-shortcut" onClick={() => getPlacesData()}>
        Ctrl + /
      </div>
    </div>
  );
};

export default SearchBox;

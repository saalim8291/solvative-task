import { useState } from "react";
import "./SearchPlaces.css"
import InfoTable from "../../components/InfoTable";
import SearchBox from "../../components/SearchBox";

const SearchPlaces = () => {
  const [dataSource, setDataSource] = useState(null);
  const [limit, setLimit] = useState(5);
  const [searchText, setSearchText] = useState('');
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  
  return (
    <div className="search-places-page">
      <SearchBox
        setDataSource={setDataSource}
        searchText={searchText}
        setSearchText={setSearchText}
        setTotalCount={setTotalCount}
        limit={limit}
        loading={loading}
        setLoading={setLoading}
        setTotalPages={setTotalPages}
      />
      <InfoTable
        setDataSource={setDataSource}
        dataSource={dataSource}
        totalCount={totalCount}
        limit={limit}
        setLimit={setLimit}
        setLoading={setLoading}
        loading={loading}
        searchText={searchText}
        totalPages={totalPages}
        setTotalCount={setTotalCount}
        setTotalPages={setTotalPages}
      />
    </div>
  );
};

export default SearchPlaces;

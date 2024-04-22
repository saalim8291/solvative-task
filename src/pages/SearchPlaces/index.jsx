import { useState } from "react";
import "./SearchPlaces.css"
import InfoTable from "../../components/InfoTable";
import SearchBox from "../../components/SearchBox";

const SearchPlaces = () => {
  const [dataSource, setDataSource] = useState(null);
  const [pageSize, setPageSize] = useState(3);
  const [limit, setLimit] = useState(5);
  const [searchText, setSearchText] = useState('');
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(false);
  
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
      />
      <InfoTable
        dataSource={dataSource}
        pageSize={pageSize}
        totalCount={totalCount}
        limit={limit}
        setLimit={setLimit}
        loading={loading}
        searchText={searchText}
      />
    </div>
  );
};

export default SearchPlaces;

import { useState } from "react";
import "./InfoTable.css";
import { getPlacesApi } from "../../apis/places";

const InfoTable = ({
  dataSource,
  limit,
  setLimit,
  loading,
  setLoading,
  searchText,
  totalPages,
  setDataSource,
  setTotalCount,
  setTotalPages
}) => {

    const getPlacesData = async (page) => {

        if(!searchText) {
          alert("Please enter search text.");
          return;
        }
    
        setLoading(true);
        const response = await getPlacesApi(searchText, limit, page);
        
        if (response?.status === 200) {
          setDataSource(response.data?.data);
          setTotalCount(response.data?.metadata?.totalCount);
          setTotalPages(Math.ceil(response.data?.metadata?.totalCount / limit))
        } else {
          alert("Something went wrong!");
        }
        setLoading(false);
      };

  const goToPage = (page) => {
    console.log(page, "page");
    getPlacesData(page)
  };

  const limitChangeHandler = (e) => {
    setLimit(e.target.value);
  };

  return (
    <div>
      <div className="info-table-container">
        <table className="info-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Place Name</th>
              <th>Country</th>
            </tr>
          </thead>
          <tbody>
            {!searchText && (
              <tr>
                <td colSpan="3">Start searching</td>
              </tr>
            )}

            {dataSource && dataSource.length === 0 && (
              <tr>
                <td colSpan="3">No data found</td>
              </tr>
            )}

            {dataSource &&
              dataSource.length > 0 &&
              dataSource?.map((data, index) => (
                <tr key={data.id}>
                  <td>{index + 1}</td>
                  <td>{data.name}</td>
                  <td>{data.name}</td>
                </tr>
              ))}
          </tbody>
        </table>

        {loading && (
          <div class="loader-container">
            <div class="loader"></div>
          </div>
        )}

        {dataSource && dataSource.length > 0 && (
          <div className="pagination">
            <div>
              {dataSource &&
                dataSource.length > 0 &&
                Array.from(Array(totalPages).keys()).map((page) => (
                  <button key={page} onClick={() => goToPage(page + 1)}>
                    {page + 1}
                  </button>
                ))}
            </div>
            <div className="limit">
              <input
                type="number"
                placeholder="limit records (1 to 10)"
                onChange={limitChangeHandler}
                value={limit}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InfoTable;

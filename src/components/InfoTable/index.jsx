import { useState } from "react";
import "./InfoTable.css";

const InfoTable = ({
  dataSource,
  totalCount,
  limit,
  setLimit,
  loading,
  searchText,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(totalCount / limit);

  const goToPage = (page) => {
    console.log(page, "page");
  };

  const limitChangeHandler = (e) => {
    const value = Number(e.target.value);
    console.log(typeof value, "value");
    if (value > 0 && value <= 10) {
      setLimit(value);
    } else {
      alert("Limit can be 1 to 10 only");
    }
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
      </div>
    </div>
  );
};

export default InfoTable;

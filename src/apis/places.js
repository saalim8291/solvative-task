import axios from "axios";

export const getPlacesApi = async (searchText, limit, page) => {
  var options = {
    method: "GET",
    url: "https://wft-geo-db.p.rapidapi.com/v1/geo/cities",
    params: { 
        countryIds: "IN", 
        namePrefix: searchText, 
        limit: limit,
        offset: page || 1
    },
    headers: {
      "x-rapidapi-host": process.env.REACT_APP_API_HOST,
      "x-rapidapi-key": process.env.REACT_APP_API_KEY,
    },
  };

  try {
    const response = await axios.request(options);
    return response;
  } catch (error) {
    console.error(error);
  }
};

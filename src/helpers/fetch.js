import axios from "axios";

//get data from API
const fetchArtists = async (query) => {
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.get(
        `https://itunes.apple.com/search?term=${query}&limit=50`,
        config
      );
      //filtering and sort data 
      const filtredData = res.data.results
        .filter(
          (elem) =>
            elem.artistName === query.charAt(0).toUpperCase() + query.slice(1) // capitalize first letter to UpperCase
        )
        .map((elem) => elem.collectionName)
        .sort();
      const uniqueData = [...new Set(filtredData)]; //get array with unique names
      uniqueData.length = 5;
      return uniqueData;
    } catch (error) {
      throw new Error(error);
    }
  };
  export default fetchArtists;
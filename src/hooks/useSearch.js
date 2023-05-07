import { useState, useEffect, useReducer } from "react";
import axios from "axios";

export const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

const initialState = {
  data: null,
  loading: false,
  error: null,
};

const searchReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_INIT":
      return { ...state, loading: true, error: null };
    case "FETCH_SUCCESS":
      return { ...state, loading: false, data: action.payload };
    case "FETCH_FAILURE":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

// url - url used to fetch data, amount - amount of movies you will recieve 
export const useSearch = (url, amount) => {
  const [query, setQuery] = useState("");
  const [state, dispatch] = useReducer(searchReducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_INIT" });

      try {
        const response = await axios.get(url);

        // To ensure that data has a movie poster - to simplify.
        const filteredData = response.data.results.filter(
          (result) => !result.backdropPath && result.backdrop_path
        );

        dispatch({ type: "FETCH_SUCCESS", payload: filteredData.slice(0, amount) });
      } catch (error) {
        dispatch({ type: "FETCH_FAILURE", payload: error.message });
      }
    };

    fetchData();
  }, [query, url, amount]);

  return { ...state, loading: state.loading, error: state.error };
};


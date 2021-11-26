import { useState, useCallback } from "react";

export const useFetchListData = (url) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);

  const getData = useCallback(async () => {
    try {
      setLoading(true);
      setError(false);
      setData([]);

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("");
      }
      const result = await response.json();
      setData(result.data);
      console.log(result);
      console.log(result.data);
    } catch (e) {
      console.error(e);
      setError(true);
    }
    setLoading(false);
  }, [url]);

  return {
    loading,
    error,
    data,
    getData,
  };
};

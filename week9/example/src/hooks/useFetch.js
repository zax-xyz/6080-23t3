import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch(`http://localhost:8080/${url}`);
        if (!resp.ok) {
          throw new Error(resp.status);
        }
        const data = await resp.json();
        setData(data);
        setIsLoading(false);
      } catch (e) {
        setIsError(true);
        setErrorMsg(`Error: ${e.message}`);
      }
    };

    fetchData();
  }, [url]);

  return {
    data,
    isLoading,
    isError,
    errorMsg,
  };
};

import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMassage, setErrorMassage] = useState("");
  useEffect(() => {
    (async () => {
      const data = await fetchData(url);
      try {
        setData(data);
        setStatus(200);
        setIsLoading(false);
      } catch (error) {
        setStatus(404);
        setIsLoading(false);
        setErrorMassage(error);
      }
    })();
  }, [url]);
  return { data, status, isLoading, errorMassage };
};

const fetchData = async (url) => {
  const response = await fetch(url);
  if (response.ok) {
    return response.json();
  }
  throw new Error("HTTP Error");
};

export default useFetch;

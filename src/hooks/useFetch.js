import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [errorMassage, setErrorMassage] = useState("HTTP Error");
  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const data = await fetchData(url);
      try {
        setData(data);
        setStatus(200);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
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
  if (response.status === 200) {
    return response.json();
  }
  throw new Error("HTTP Error");
};

export default useFetch;

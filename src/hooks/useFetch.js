import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useFetch = (url) => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const response = await fetchData(url);
        setData(response);
        setIsLoading(false);
      } catch (error) {
        navigate("/err", { replace: true });
      }
    })();
  }, [navigate, url]);
  return { data, isLoading };
};

const fetchData = async (url) => {
  const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();
    return data;
  }
  throw new Error("HTTP Error");
};

export default useFetch;

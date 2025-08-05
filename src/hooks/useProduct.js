import { useEffect, useState } from "react";

const useProduct = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    async function dataFakeApi() {
      try {
        const response = await fetch("https://fakestoreapi.com/products", {
          signal,
        });

        if (!response.ok) {
          throw new Error("api not found");
        }

        const data = await response.json();
        setData(data);
      } catch (err) {
        if (err.name === "AbortError") {
          console.log("Fetch dibatalkan oleh AbortController");
        } else {
          setError(err);
        }
      } finally {
        setLoading(false);
      }
    }

    // run
    dataFakeApi();

    // clean
    return () => {
      controller.abort();
    };
  }, []);

  const object_api = {
    value: data,
    loading,
    error,
  };

  return object_api;
};

export { useProduct };

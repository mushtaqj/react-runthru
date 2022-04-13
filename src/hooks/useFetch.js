import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // cancels inflight fetches
    const abortController = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abortController.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error("Could not fetch the data for that resource");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch(({ name, message }) => {
          if (name !== "AbortError") {
            setError(message);
            setIsPending(false);
          }
        });
    }, 1000);

    return () => abortController.abort();
  }, [url]);

  return {
    data,
    isPending,
    error,
  };
};

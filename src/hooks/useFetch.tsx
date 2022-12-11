import { useState, useEffect } from 'react'

export const useFetch = (url: string) => {
      const [data, setData] = useState<any>(null);
      const [isPending, setIsPending] = useState<boolean>(false);
      const [error, setError] = useState<any>(null);

      useEffect(() => {
            const controller = new AbortController();

            const fetchData = async () => {
                  setIsPending(true);

                  try {
                        const res = await fetch(url, { signal: controller.signal });
                        if (!res.ok) {
                              throw new Error(res.statusText)
                        }
                        const json = await res.json();
                        setIsPending(false);
                        setData(json);
                        setError(null);
                  } catch (error: any) {
                        if (error.name === "AbortError") {
                              console.log("Fetch was aborted")
                        } else {
                              setError('Could not fetch the data');
                              console.log(error.message);
                              setIsPending(false);
                        }
                  }
            }

            fetchData();

            return () => {
                  controller.abort();
            }
      }, [url]);

      return { data, isPending, error }
};
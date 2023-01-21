import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export function useData(id) {
  const { data, error, isLoading } = useSWR(`https://restcountries.com/v3.1/name/${id}`, fetcher);

  return {
    user: data,
    isLoading,
    isError: error,
  };
}

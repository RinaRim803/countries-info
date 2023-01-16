import { useState } from "react";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function DataFetching() {
  const [searchText, setSearchText] = useState("");
  const [country, setCountry] = useState("korea");

  const { data, error, isLoading } = useSWR(
    `https://restcountries.com/v3.1/name/${country}`,
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  function searchCountry(e) {
    e.preventDefault();
    setCountry(searchText);
  }
  return (
    <div>
      <form onSubmit={searchCountry}>
        <input onChange={(e) => setSearchText(e.target.value)} />
      </form>

      <p> {country}</p>
      <p> {data.name}</p>
    </div>
  );
}

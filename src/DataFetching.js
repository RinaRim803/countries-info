import React from "react";
import { useData } from "./useData";

export default function DataFetching(param) {
  const { user, isLoading, isError } = useData(param.searchCountry);

  return (
    <div>
      {user &&
        user.map((items) => {
          return (
            <>
              <p>{items.name.official}</p>
              <img src={items.flags.png} />
            </>
          );
        })}
    </div>
  );
}

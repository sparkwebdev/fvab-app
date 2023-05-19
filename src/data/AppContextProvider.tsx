import React, { useEffect, useState } from "react";

import AppContext from "./app-context";

// const store = new Storage();
// await store.create();

const AppContextProvider: React.FC = (props:any) => {
  const [favourites, setFavourites] = useState<string[]>([]);

  const getFavourites = async () => {
    // const favouritesData = await store.get("favourites")
    //   .then((data: any) => {
    //     return data.value !== "undefined" && data.value
    //       ? JSON.parse(data.value)
    //       : null;
    //   })
    //   .catch((e: Error) => {
    //     console.log("No favourites data", e);
    //     return null;
    //   });
    // return favouritesData;
  };

  const initContext = async () => {
    // await getFavourites().then((favourites) => {
    //   if (favourites) {
    //     setFavourites(favourites);
    //   }
    // });
  };

  useEffect(() => {
    initContext();
  }, []);

  useEffect(() => {
    if (favourites) {
      // store.set("favourites", JSON.stringify(favourites));
    }
  }, [favourites]);

  const updateFavourites = (studioId: string, add: boolean) => {
    setFavourites((currentFavourites) => {
      if (add) {
        return [...currentFavourites, studioId];
      } else {
        return currentFavourites.filter((id) => studioId !== id);
      }
    });
  };

  return (
    <AppContext.Provider
      value={{
        favourites,
        updateFavourites,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;

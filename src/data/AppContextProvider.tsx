import React, { useEffect, useState } from "react";

import { Plugins } from "@capacitor/core";
import AppContext from "./app-context";
const { Storage } = Plugins;

const AppContextProvider: React.FC = (props) => {
  const [favourites, setFavourites] = useState<string[]>([]);

  const getFavourites = async () => {
    const favouritesData = await Storage.get({ key: "favourites" })
      .then((data) => {
        return data.value !== "undefined" && data.value
          ? JSON.parse(data.value)
          : null;
      })
      .catch((e) => {
        console.log("No favourites data", e);
        return null;
      });
    return favouritesData;
  };

  const initContext = async () => {
    await getFavourites().then((favourites) => {
      if (favourites) {
        setFavourites(favourites);
      }
    });
  };

  useEffect(() => {
    initContext();
  }, []);

  useEffect(() => {
    if (favourites) {
      Storage.set({
        key: "favourites",
        value: JSON.stringify(favourites),
      });
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

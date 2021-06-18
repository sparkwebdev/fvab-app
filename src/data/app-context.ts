import React from 'react';

interface Context {
  favourites: string[];
  updateFavourites: (studioId: string, add: boolean) => void;
}

const AppContext = React.createContext<Context>({
  favourites: [],
  updateFavourites: () => {},
});

export default AppContext;

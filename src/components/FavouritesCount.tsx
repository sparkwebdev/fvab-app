import { IonBadge } from "@ionic/react";
import { useContext } from "react";
import AppContext from "../data/app-context";

const FavouritesCount: React.FC = (props) => {
  const appCtx = useContext(AppContext);
  return <IonBadge color="secondary">{appCtx.favourites.length}</IonBadge>;
};

export default FavouritesCount;

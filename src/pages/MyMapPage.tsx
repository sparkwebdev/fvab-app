import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonIcon,
  IonList,
  IonPage,
} from "@ionic/react";
import PageHeader from "../components/PageHeader";
import "./MyMapPage.css";

import { heartOutline } from "ionicons/icons";
import { useContext, useEffect, useState } from "react";
import ListItemStudio from "../components/ListItemStudio";
import MapWithMarkers from "../components/MapWithMarkers";
import AppContext from "../data/app-context";
import { studios } from "../data/studios";

const MyMapPage: React.FC = () => {
  const appCtx = useContext(AppContext);
  const [favouriteStudios, setFavouriteStudios] = useState([]);

  useEffect(() => {
    const studiosFiltered: any = studios.filter((studio: any) => {
      return appCtx.favourites.includes(studio.st.toString());
    });
    setFavouriteStudios(studiosFiltered);
  }, [appCtx.favourites]);

  return (
    <IonPage>
      <PageHeader title="My Map" />
      <IonContent fullscreen>
        {favouriteStudios && favouriteStudios.length > 0 ? (
          <>
            <div className="studios-map-half">
              <MapWithMarkers studios={favouriteStudios} key={Math.random()} />
            </div>
            <IonList>
              {favouriteStudios.map((studio: any) => {
                if (studio.st) {
                  return (
                    <ListItemStudio
                      studioNumber={studio.st}
                      image={studio.img}
                      name={studio.name}
                      dis={studio.dis}
                      key={studio.st}
                    />
                  );
                }
              })}
            </IonList>
          </>
        ) : (
          <IonCard color="light" className="ion-text-center ion-no-margin">
            <IonCardHeader>
              <IonCardTitle>
                {" "}
                You haven’t added any studios&nbsp;yet!
              </IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <p>
                Tap the{" "}
                <IonIcon
                  icon={heartOutline}
                  color="secondary"
                  size="large"
                  style={{ marginBottom: "-0.25em" }}
                />{" "}
                in the artist pages to add to your My Map. A map will then be
                created to help you navigate between your chosen&nbsp;studios.
              </p>
              <hr />
              <p>
                Suggestions will also be made about other nearby studios that
                you may like to&nbsp;visit.
              </p>
            </IonCardContent>
          </IonCard>
        )}
      </IonContent>
    </IonPage>
  );
};

export default MyMapPage;

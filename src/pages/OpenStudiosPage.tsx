import {
  IonContent,
  IonPage,
  IonList,
  IonCard,
  IonCardContent,
  IonToolbar,
  IonSegment,
  IonSegmentButton,
  IonLabel,
  IonIcon,
  IonChip,
} from "@ionic/react";
import "./OpenStudiosPage.css";
import { mapOutline as mapIcon } from "ionicons/icons";

import { studios, studiosAdditional } from "../data/studios";
import ListItemStudio from "../components/ListItemStudio";
import PageHeader from "../components/PageHeader";
import MapWithMarkers from "../components/MapWithMarkers";
import { useEffect, useState } from "react";

const OpenStudiosPage: React.FC = () => {
  const [view, setView] = useState<string>("studios");
  const [additionalStudios, setAdditionalStudios] = useState<any>();

  useEffect(() => {
    const studiosAdditionalMapped = studiosAdditional.map((studio: any) => {
      return {
        st: studio[2],
        img: studio[5],
        name: studio[1],
        dis: studio[3],
      };
    });
    setAdditionalStudios(studiosAdditionalMapped);
  }, [studiosAdditional]);
  return (
    <IonPage>
      <PageHeader title="Open Studios" />
      <IonContent fullscreen>
        <div
          className={
            view === "map"
              ? "studios-container studios-container--map"
              : "studios-container"
          }
        >
          <IonCard color="light" className="studios-container__intro">
            <IonCardContent>
              <p>
                <strong>Welcome to the 2021 Artist Open Studios</strong> with a
                newly styled event this year focussed around sustainable travel
                and the outdoors. Visit the 46 artist studios across the Forth
                Valley participating in this year’s event, opening up their
                studios and gardens to the public, during 10th and 11th July,
                all open from 10am to 5pm.
              </p>
              {/* <IonButton
              className="ion-margin-top"
              size="small"
              color="secondary"
              fill="outline"
            >
              Dismiss
            </IonButton> */}
            </IonCardContent>
          </IonCard>
          <IonToolbar className="ion-margin-top studios-container__tabs">
            <IonSegment
              color="secondary"
              onIonChange={(e) => {
                setView(e.detail!.value!);
              }}
              value={view}
            >
              <IonSegmentButton value="studios">
                <IonChip color="primary">
                  <strong>{studios.length}</strong>
                </IonChip>
                <IonLabel>View Studios</IonLabel>
              </IonSegmentButton>
              <IonSegmentButton value="a-to-z">
                <IonChip color="primary">
                  <strong>{studiosAdditional.length}</strong>
                </IonChip>
                <IonLabel>View A to Z</IonLabel>
              </IonSegmentButton>
              <IonSegmentButton value="map">
                <IonIcon icon={mapIcon} /> <br />
                <IonLabel>View Map</IonLabel>
              </IonSegmentButton>
            </IonSegment>
          </IonToolbar>

          {studios.length > 0 && (
            <>
              {view === "studios" && (
                <IonList>
                  {studios.map((studio) => {
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
              )}
              {view === "a-to-z" && (
                <IonList>
                  {additionalStudios.map((studio: any, key: any) => {
                    return (
                      <ListItemStudio
                        studioNumber={studio.st}
                        image={studio.img}
                        name={studio.name}
                        dis={studio.dis}
                        key={key}
                      />
                    );
                  })}
                </IonList>
              )}
              {view === "map" && (
                <MapWithMarkers studios={studios} key={Math.random()} />
              )}
            </>
          )}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default OpenStudiosPage;

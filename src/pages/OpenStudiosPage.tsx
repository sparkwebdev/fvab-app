import {
  IonCard,
  IonCardContent, IonChip, IonContent, IonIcon, IonItemDivider, IonLabel, IonList, IonPage, IonSegment,
  IonSegmentButton, IonToolbar
} from "@ionic/react";
import { mapOutline as mapIcon } from "ionicons/icons";
import { useEffect, useState } from "react";
import ListItemStudio from "../components/ListItemStudio";
import MapWithMarkers from "../components/MapWithMarkers";
import PageHeader from "../components/PageHeader";
import { studios, studiosAdditional } from "../data/studios";
import "./OpenStudiosPage.css";


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
          <IonCard
            color="light"
            className="studios-container__intro ion-no-margin"
          >
            <IonCardContent>
              <p>
              We’re delighted to announce this year we return to a 9-day event (11 to 19 June) with many studios open by appointment during the week. Details of all artists participating in this year's event, as well as hosted artist-run workshops, is now available to view at this website. An exciting programme of participatory arts and cycling as part of the Art Beat is also announced, including an event at Callendar Park Falkirk on Sat 4th June, open to all.
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

          {studios && studios.length > 0 && (
            <>
              {view === "studios" && (
                <IonList>
                <IonItemDivider color="primary" className="ion-padding-top ion-padding-bottom" sticky={true} mode="ios">
                  <IonLabel>
                    Route 1
                  </IonLabel>
                </IonItemDivider>

                {studios.map((studio) => {
                  if (studio.st && parseInt(studio.st) < 30) {
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
                <IonItemDivider color="secondary" className="ion-padding-top ion-padding-bottom" sticky={true} mode="ios">
                  <IonLabel>
                    Route 2
                  </IonLabel>
                </IonItemDivider>
                {studios.map((studio) => {
                  if (studio.st && parseInt(studio.st) >= 30) {
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

import {
  IonCard,
  IonCardContent,
  IonChip,
  IonContent,
  IonIcon,
  IonItemDivider,
  IonLabel,
  IonList,
  IonPage,
  IonSegment,
  IonSegmentButton,
  IonToolbar,
} from "@ionic/react";
import { mapOutline as mapIcon } from "ionicons/icons";
import "./OpenStudiosPage.css";

import { useEffect, useState } from "react";
import ListItemStudio from "../components/ListItemStudio";
import MapWithMarkers from "../components/MapWithMarkers";
import PageHeader from "../components/PageHeader";
import { studios } from "../data/studios";

const OpenStudiosPage: React.FC = () => {
  const [view, setView] = useState<string>("studios");
  const [studiosAtoZ, setStudiosAtoZ] = useState<any[]>([]);

  useEffect(() => {
    const studiosAtoZ = [...studios];
    // let isDuplicate: any = undefined;
    studios.forEach((studio, index) => {
      studio.additionalArtists.forEach((artist: any) => {
        const additionalArtist = {...studio};
        additionalArtist.name = artist.name;
        additionalArtist.srt = artist.sortBy;
        additionalArtist.dis = artist.dis;
        // if (studio.name.indexOf(artist.name) > -1) {
        //   isDuplicate = true;
        // }
        studiosAtoZ.push(additionalArtist);
      });
      // if (isDuplicate) {
      //   studiosAtoZ.splice(index, 1);
      // }
    });

    studiosAtoZ.sort((a, b) => {
      const nameA = a.srt;
      const nameB = b.srt;
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    
    setStudiosAtoZ(studiosAtoZ);
  }, []);

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
                We look forward to welcoming you to the 2023 Forth Valley Art
                Beat event taking place from 10 to 18 June. This year 58 studios
                and venues are open across two routes around the Forth Valley.
                Please check each entry for full information on each artist
                together with individual opening times. Use the My Map facility
                on the App to help plan your visit. Many of the artists are also
                hosting events in their studios, please take a look to join in
                with some of the wonderful workshops, demonstrations and events
                taking place.
              </p>
            </IonCardContent>
          </IonCard>
          <IonToolbar className="studios-container__tabs">
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
                  <strong>{studiosAtoZ.length}</strong>
                </IonChip>
                <IonLabel>View A to Z</IonLabel>
              </IonSegmentButton>
              <IonSegmentButton value="map">
                <IonChip color="primary">
                  <IonIcon icon={mapIcon} className="ion-no-margin" />
                </IonChip>
                <IonLabel>View Map</IonLabel>
              </IonSegmentButton>
            </IonSegment>
          </IonToolbar>
          {studios && studios.length > 0 && (
            <>
              {view === "studios" && (
                <>
                  <IonItemDivider className="ion-no-padding" color="primary" sticky>
                    <IonSegment>Route 1</IonSegment>
                  </IonItemDivider>
                  <IonList>
                    {studios.slice(0, 34).map((studio) => {
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
                  <IonItemDivider className="ion-no-padding" color="secondary" sticky>
                    <IonSegment>Route 2</IonSegment>
                  </IonItemDivider>
                  <IonList>
                    {studios.slice(34, 999).map((studio) => {
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
              )}
              {view === "a-to-z" && (
                <IonList>
                  {studiosAtoZ.map((studio: any, key: any) => {
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

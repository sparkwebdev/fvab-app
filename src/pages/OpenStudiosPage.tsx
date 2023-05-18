import {
  IonCard,
  IonCardContent, IonChip, IonContent, IonIcon, IonItemDivider, IonLabel, IonList, IonPage,
  IonSegment,
  IonSegmentButton, IonToolbar
} from "@ionic/react";
import { mapOutline as mapIcon } from "ionicons/icons";
import { useEffect, useState } from "react";
import ListItemStudio from "../components/ListItemStudio";
import MapWithMarkers from "../components/MapWithMarkers";
import PageHeader from "../components/PageHeader";
import { studios } from "../data/studios";
import "./OpenStudiosPage.css";

const OpenStudiosPage: React.FC = () => {
  const [view, setView] = useState<string>("studios");
  const [additionalStudios, setAdditionalStudios] = useState<any>();

  useEffect(() => {
    const additionalStudios = [...studios];
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
        additionalStudios.push(additionalArtist);
      });
      // if (isDuplicate) {
      //   additionalStudios.splice(index, 1);
      // }
    });

    additionalStudios.sort((a, b) => {
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
    
    setAdditionalStudios(additionalStudios);
  }, [studios]);

  // useEffect(() => {
  //   const studiosAdditionalMapped = studiosAdditional.map((studio: any) => {
  //     return {
  //       st: studio[2],
  //       img: studio[5],
  //       name: studio[1],
  //       dis: studio[3],
  //     };
  //   });
  //   setAdditionalStudios(studiosAdditionalMapped);
  // }, [studiosAdditional]);
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
                  <strong>{additionalStudios?.length}</strong>
                </IonChip>
                <IonLabel>View A to Z</IonLabel>
              </IonSegmentButton>
              <IonSegmentButton value="map">
                <IonChip color="primary">
                  <IonIcon icon={mapIcon} style={{ marginLeft: 0, marginRight: 0 }} />
                </IonChip>
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
                  if (studio.st && parseInt(studio.st) <= 34) {
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
                  if (studio.st && parseInt(studio.st) >= 35) {
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

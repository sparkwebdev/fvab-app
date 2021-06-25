import React, { useEffect, useState } from "react";
import {
  IonContent,
  IonPage,
  IonText,
  IonCard,
  IonCardContent,
  IonButton,
} from "@ionic/react";
import { useParams } from "react-router";
import PageHeader from "../components/PageHeader";
import { artCycles } from "../data/art-cycles";
interface RouteParams {
  id: string;
}

const ArtCycleEntryPage: React.FC = () => {
  const [artCycle, setArtCycle] = useState<any>();

  const { id } = useParams<RouteParams>();

  const getDirectionsHandler = (location: string) => {
    // if (isPlatform("android")) {
    //   window.open(`geo:0,0?q=${studio.lat}+${studio.lon}_system`);
    // } else {
    window.open(`maps://?q=${location}`);
    // }
  };

  useEffect(() => {
    setArtCycle(
      artCycles.find((artCycle) => {
        return artCycle.id.toString() === id;
      })
    );
  }, [id]);

  return (
    <IonPage>
      <PageHeader title={`Studio ${artCycle?.artist}`} back={true} />
      <IonContent fullscreen className="ion-padding">
        {artCycle && (
          <>
            {artCycle.artist && (
              <h1>
                <IonText color="primary">
                  <strong>{artCycle.artist}</strong>
                </IonText>
              </h1>
            )}
            {artCycle.title && (
              <h2 className="ion-no-margin">
                <IonText color="secondary">
                  <strong>'{artCycle.title}'</strong>
                </IonText>
              </h2>
            )}
            {artCycle.location && <p>— {artCycle.location}</p>}
            {artCycle.image && (
              <p>
                <img
                  className="intro__panel"
                  src={`assets/img/art-cycles/${artCycle.image}`}
                  alt=""
                />
              </p>
            )}

            <div
              dangerouslySetInnerHTML={{
                __html: artCycle.description,
              }}
            ></div>
            {artCycle.mapImage && (
              <p>
                <img
                  className="intro__panel"
                  src={`assets/img/art-cycles/${artCycle.mapImage}`}
                  alt=""
                />
              </p>
            )}
            {artCycle.locations && artCycle.locations.length > 0 && (
              <>
                <h2>Get Directions:</h2>
                <p>
                  {artCycle.locations.map((location: any, index: number) => {
                    return (
                      <IonButton
                        key={index}
                        color={index % 2 ? "secondary" : "primary"}
                        onClick={() => {
                          getDirectionsHandler(
                            `${location.lat},${location.lng}`
                          );
                        }}
                      >
                        {location.description}
                      </IonButton>
                    );
                  })}
                </p>
              </>
            )}
            {artCycle.url && (
              <>
                <h2>Further information:</h2>

                <p>
                  More information on this commission can be{" "}
                  <a href={artCycle.url} target="_blank" rel="noreferrer">
                    <strong>found here</strong>
                  </a>
                  .
                </p>
              </>
            )}
          </>
        )}
        <hr />
        <IonCard color="light" className="ion-no-margin">
          <IonCardContent>
            <p>
              Also check out the various{" "}
              <a
                href="https://forthvalleyartbeat.com/cycling-walking-events/"
                target="_blank"
                rel="noreferrer"
              >
                <strong>cycling &amp; walking events</strong>
              </a>
              .
            </p>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default ArtCycleEntryPage;

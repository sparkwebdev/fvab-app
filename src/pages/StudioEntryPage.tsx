import React, { useEffect, useState } from "react";
import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonChip,
  IonCol,
  IonContent,
  IonGrid,
  IonIcon,
  IonLabel,
  IonPage,
  IonRow,
  IonSlides,
  IonSlide,
  IonButton,
  IonModal,
} from "@ionic/react";
import { useParams } from "react-router";
import { location, logoFacebook, logoTwitter } from "ionicons/icons";
import PageHeader from "../components/PageHeader";
import "./StudioEntryPage.css";
import MapWithMarkers from "../components/MapWithMarkers";
import { isPlatform } from "@ionic/react";

import { studios } from "../data/studios";
import Share from "../components/Share";

interface RouteParams {
  id: string;
}

const StudioEntryPage: React.FC = () => {
  const [studio, setStudio] = useState<any>();
  const [showMap, setShowMap] = useState<boolean>(false);
  const [mapKey, setMapKey] = useState<number>(Math.random());

  const { id } = useParams<RouteParams>();

  const slideOpts = {
    initialSlide: 0,
    slidesPerView: 1,
    speed: 400,
    spaceBetween: 10,
    centeredSlides: true,
  };

  const viewMapHandler = () => {
    setShowMap(true);
  };

  const getDirectionsHandler = () => {
    // if (isPlatform("android")) {
    //   window.open(`geo:0,0?q=${studio.lat}+${studio.lon}_system`);
    // } else {
    window.open(`maps://?q=${studio.add}`);
    // }
  };

  useEffect(() => {
    setStudio(
      studios.find((studio) => {
        return studio.st === id;
      })
    );
  }, [id]);

  return (
    <IonPage>
      <PageHeader title={`Studio ${studio?.st}`} back={true} />
      <IonContent fullscreen className="ion-padding">
        {studio && (
          <>
            <IonCard className="ion-no-margin" color="light">
              <IonCardHeader>
                <IonGrid className="ion-no-padding">
                  <IonRow>
                    <IonCol size="10">
                      {studio.st && (
                        <IonChip
                          color="primary"
                          className="studio-number studio-number--large"
                        >
                          <IonLabel>
                            <strong>{studio.st}</strong>
                          </IonLabel>
                        </IonChip>
                      )}
                    </IonCol>

                    {isPlatform("mobile") && (
                      <IonCol size="2" className="ion-text-end">
                        <Share
                          shareText={`@FVAB_ I\'ve just visited the '${studio.name}' studio...`}
                          shareImage={studio.img ? studio.img : ""}
                          shareUrl={`https://forthvalleyartbeat.com/routes/fvab-2021/?id=${studio.st}`}
                          triggerShare={true}
                        />
                      </IonCol>
                    )}
                  </IonRow>
                </IonGrid>

                {studio.name && <IonCardTitle>{studio.name}</IonCardTitle>}
                {studio.dis && (
                  <IonCardSubtitle>
                    <strong>{studio.dis}</strong>
                  </IonCardSubtitle>
                )}
                {studio.imgs && (
                  <div className="studio-images ion-margin-top ion-margin-bottom">
                    <IonSlides
                      pager={true}
                      options={slideOpts}
                      // ref={slides}
                      // onIonSlideReachEnd={(event: any) => setOnLastSlide(true)}
                    >
                      {studio.imgs
                        .split(",")
                        .map((image: string, index: number) => {
                          return (
                            <IonSlide key={index}>
                              <img
                                className="intro__panel"
                                src={`assets/img/studios/${image}`}
                                alt=""
                              />
                            </IonSlide>
                          );
                        })}
                    </IonSlides>
                  </div>
                )}
                {studio.add && (
                  <IonCardSubtitle>
                    <IonGrid>
                      <IonRow>
                        <IonCol size="2">
                          <IonIcon
                            icon={location}
                            color="secondary"
                            size="large"
                          />
                        </IonCol>
                        <IonCol>
                          <p
                            style={{
                              marginTop: 0,
                            }}
                          >
                            {studio.add}
                          </p>
                        </IonCol>
                      </IonRow>
                      <IonRow>
                        <IonCol size="6">
                          <IonButton
                            size="small"
                            color="primary"
                            fill="solid"
                            onClick={viewMapHandler}
                          >
                            View on map
                          </IonButton>
                        </IonCol>
                        <IonCol size="6">
                          <IonButton
                            size="small"
                            color="secondary"
                            fill="outline"
                            onClick={getDirectionsHandler}
                          >
                            Get Directions
                          </IonButton>
                        </IonCol>
                      </IonRow>
                    </IonGrid>
                  </IonCardSubtitle>
                )}
              </IonCardHeader>
            </IonCard>
            {studio?.desc && <p>{studio?.desc}</p>}
            {studio?.desc2 && <p>{studio?.desc2}</p>}
            {studio?.desc2 && (
              <>
                <h3>Directions</h3>
                <p>{studio?.dir}</p>
              </>
            )}
            {(studio?.mb || studio?.em || studio?.wb) && (
              <>
                <h3>Contact Details</h3>
                <IonGrid className="ion-no-padding">
                  {studio?.mb && (
                    <IonRow>
                      <IonCol size="2">
                        <div className="ion-margin-bottom">Mob:</div>
                      </IonCol>
                      <IonCol>
                        <div className="ion-margin-bottom">{studio?.mb}</div>
                      </IonCol>
                    </IonRow>
                  )}
                  {studio?.em && (
                    <IonRow>
                      <IonCol size="2">
                        <div className="ion-margin-bottom">Email:</div>
                      </IonCol>
                      <IonCol>
                        <div className="ion-margin-bottom">
                          <a
                            href={`mailto:${studio?.tw}`}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {studio?.em}
                          </a>
                        </div>
                      </IonCol>
                    </IonRow>
                  )}
                  {studio?.wb && (
                    <IonRow>
                      <IonCol size="2">
                        <div className="ion-margin-bottom">Web:</div>
                      </IonCol>
                      <IonCol>
                        <div className="ion-margin-bottom">
                          <a href={studio?.wb} target="_blank" rel="noreferrer">
                            Visit site
                          </a>
                        </div>
                      </IonCol>
                    </IonRow>
                  )}
                </IonGrid>
              </>
            )}
            {(studio?.fb || studio?.tw) && (
              <>
                <h3>Social Links</h3>
                <IonGrid className="ion-no-padding">
                  <IonRow className="ion-justify-content-start">
                    {studio?.fb && (
                      <IonCol size="2">
                        <a href={studio?.fb} target="_blank" rel="noreferrer">
                          <IonIcon
                            icon={logoFacebook}
                            color="secondary"
                            size="large"
                          />
                        </a>
                      </IonCol>
                    )}
                    {studio?.tw && (
                      <IonCol size="2">
                        <a href={studio?.tw} target="_blank" rel="noreferrer">
                          <IonIcon
                            icon={logoTwitter}
                            color="secondary"
                            size="large"
                          />
                        </a>
                      </IonCol>
                    )}
                  </IonRow>
                </IonGrid>
              </>
            )}
          </>
        )}
      </IonContent>
      <IonModal
        isOpen={showMap}
        onDidDismiss={() => {
          setShowMap(false);
        }}
        onWillPresent={() => {
          setMapKey(Math.random());
        }}
      >
        <MapWithMarkers
          studios={[studio]}
          isSingle={true}
          onDismiss={() => setShowMap(false)}
          key={mapKey}
        />
      </IonModal>
    </IonPage>
  );
};

export default StudioEntryPage;

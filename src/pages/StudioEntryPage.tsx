import React, { useContext, useEffect, useState } from "react";
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
  IonText,
} from "@ionic/react";
import { useParams } from "react-router";
import {
  location,
  logoFacebook,
  logoTwitter,
  heart,
  heartOutline,
} from "ionicons/icons";
import PageHeader from "../components/PageHeader";
import "./StudioEntryPage.css";
import MapWithMarkers from "../components/MapWithMarkers";
import { isPlatform } from "@ionic/react";
import { studios } from "../data/studios";
import Share from "../components/Share";
import AppContext from "../data/app-context";

interface RouteParams {
  id: string;
}

const StudioEntryPage: React.FC = () => {
  const appCtx = useContext(AppContext);
  const [studio, setStudio] = useState<any>();
  const [showMap, setShowMap] = useState<boolean>(false);
  const [mapKey, setMapKey] = useState<number>(Math.random());
  const [isFavourite, setIsFavourite] = useState<boolean | undefined>();

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

  const setFavouriteHandler = () => {
    appCtx.updateFavourites(id, !isFavourite);
  };

  useEffect(() => {
    setStudio(
      studios.find((studio) => {
        return studio.st === id;
      })
    );
  }, [id]);

  useEffect(() => {
    setIsFavourite(appCtx.favourites.includes(id));
  }, [appCtx.favourites]);

  return (
    <IonPage>
      <PageHeader title={`Studio ${studio?.st}`} back={true} />
      <IonContent fullscreen>
        {studio && (
          <>
            <IonCard className="ion-no-margin" color="light">
              <IonCardHeader>
                <IonGrid className="ion-no-padding">
                  <IonRow>
                    <IonCol size="9">
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

                    <IonCol size="3">
                      <IonGrid className="ion-no-padding ">
                        <IonRow className="ion-align-items-center">
                          {/* {isPlatform("mobile") && (
                            <IonCol className="ion-text-center">
                              <Share
                                shareText={`@FVAB_ I\'ve just visited the '${studio.name}' studio...`}
                                shareImage={studio.img ? studio.img : ""}
                                shareUrl={`https://forthvalleyartbeat.com/routes/fvab-2021/?id=${studio.st}`}
                              />
                            </IonCol>
                          )} */}
                          <IonCol className="ion-text-end">
                            <IonButton
                              className="ion-no-padding ion-no-margin"
                              fill="clear"
                              onClick={setFavouriteHandler}
                            >
                              <IonIcon
                                icon={isFavourite ? heart : heartOutline}
                                color={isFavourite ? "danger" : "secondary"}
                                size="large"
                              />
                            </IonButton>
                          </IonCol>
                        </IonRow>
                      </IonGrid>
                    </IonCol>
                  </IonRow>
                </IonGrid>
                {studio.name && (
                  <IonCardTitle>
                    <IonText color="primary" style={{ fontSize: "1rem" }}>
                      <strong>{studio.name}</strong>
                    </IonText>
                  </IonCardTitle>
                )}
                {studio.dis && (
                  <IonCardSubtitle className="ion-text-capitalize">
                    {studio.dis}
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
                                className="studio-images__image"
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
                )}
              </IonCardHeader>
            </IonCard>
            <div className="ion-padding">
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
                          <div className="ion-margin-bottom">
                            <a href={`tel:${studio?.mb}`}>{studio?.mb}</a>
                          </div>
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
                            <a
                              href={studio?.wb}
                              target="_blank"
                              rel="noreferrer"
                            >
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
            </div>
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

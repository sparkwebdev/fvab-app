import {
  IonButton, IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonChip,
  IonCol,
  IonContent,
  IonGrid,
  IonIcon,
  IonLabel, IonModal, IonPage,
  IonRow, IonSlide, IonSlides, IonText, isPlatform
} from "@ionic/react";
import {
  calendarOutline,
  chatbubblesOutline,
  heart,
  heartOutline, helpCircleOutline, location,
  logoFacebook,
  logoTwitter,
  navigateCircleOutline,
  timeOutline
} from "ionicons/icons";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import MapWithMarkers from "../components/MapWithMarkers";
import PageHeader from "../components/PageHeader";
import Share from "../components/Share";
import AppContext from "../data/app-context";
import { studios } from "../data/studios";
import "./StudioEntryPage.css";

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
    if (isPlatform("android")) {
      window.open(`geo:0,0?q=${studio.add}_system`);
    } else {
      window.open(`maps://?q=${studio.add}`);
    }
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
                          color={parseInt(studio.studioNumber) < 30 ? "primary" : "secondary"}
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
                          {isPlatform("mobile") && (
                            <IonCol className="ion-text-center">
                              <Share
                                shareText={`@FVAB_ I\'ve just visited the '${studio.name}' studio...`}
                                shareImage={
                                  studio.img
                                    ? `assets/img/studios/${studio.img}`
                                    : ""
                                }
                                shareUrl={`https://forthvalleyartbeat.com/routes/fvab-2021/?id=${studio.st}`}
                              />
                            </IonCol>
                          )}
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
                    <IonText color={parseInt(studio.studioNumber) < 30 ? "primary" : "secondary"} style={{ fontSize: "1rem" }}>
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
              {studio?.time && (
                <><hr />
                  <h3><IonIcon icon={timeOutline} /> Opening Times</h3>
                  <table className="opening-times">
                    <thead><tr><th>Sat</th><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thur</th><th>Fri</th><th>Sat</th><th>Sun</th></tr></thead>
                    <tbody><tr>
                    {[...studio?.time].map((day: string, key: any) => {
                      return <td key={key}>{day}</td>;
                    })}
                    </tr></tbody>
                  </table>
                </>
              )}
              {studio?.desc3 && (
                <><hr />
                  <h3><IonIcon icon={calendarOutline} /> Additional Events</h3>
                  <p>{studio?.desc3}</p>
                </>
              )}
              {studio?.dir && (
                <><hr />
                  <h3><IonIcon icon={navigateCircleOutline} /> Directions</h3>
                  <p>{studio?.dir}</p>
                </>
              )}
              {(studio?.mb || studio?.em || studio?.wb || studio?.fb || studio?.tw) && (
                <><hr />
                  <h3><IonIcon icon={chatbubblesOutline} /> Contact Details</h3>
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

                    {(studio?.fb || studio?.tw) && (
                      <IonRow>
                        <IonCol size="2">
                          <div className="ion-margin-bottom">Social Links:</div>
                        </IonCol>
                        <IonCol>
                          {studio?.fb && (
                              <a href={studio?.fb} target="_blank" rel="noreferrer">
                                <IonIcon
                                  icon={logoFacebook}
                                  color="secondary"
                                  size="large"
                                />
                              </a>
                          )}
                          {studio?.tw && (
                              <a href={studio?.tw} target="_blank" rel="noreferrer">
                                <IonIcon
                                  icon={logoTwitter}
                                  color="secondary"
                                  size="large"
                                />
                              </a>
                          )}
                        </IonCol>
                      </IonRow>
                    )}
                  </IonGrid>
                </>
              )}
              {studio?.fac && studio?.fac != "nnnnnnnn" && (
                <><hr />
                  <h3><IonIcon icon={helpCircleOutline} /> Facilities / Info <small>(see key below)</small></h3>
                  <ul className="studio__facilities">
                    <li>{studio?.fac[0] == "y" ? <img src="assets/img/artist-facilities-parking-2.gif" alt="Off Street Parking" /> : null}</li>
                    <li>{studio?.fac[1] == "y" ? <img src="assets/img/artist-facilities-access-2.gif" alt="Disabled Access" /> : null}</li>
                    <li>{studio?.fac[2] == "y" ? <img src="assets/img/artist-facilities-allyear-2.gif" alt="Working Studio" /> : null}</li>
                    <li>{studio?.fac[3] == "y" ? <img src="assets/img/artist-facilities-popup-2.gif" alt="Popup Exhibition" /> : null}</li>
                    <li>{studio?.fac[4] == "y" ? <img src="assets/img/artist-facilities-museum-2.gif" alt="Gallery/commercial" /> : null}</li>
                    <li>{studio?.fac[5] == "y" ? <img src="assets/img/artist-facilities-outdoor.png" alt="Outdoor artwork" /> : null}</li>
                    <li>{studio?.fac[6] == "y" ? <img src="assets/img/artist-facilities-additional-events.jpg" alt="Additional Event" /> : null}</li>
                    <li>{studio?.fac[7] == "y" ? <img src="assets/img/artist-facilities-clock.png" alt="Appointment Only" /> : null}</li>
                  </ul>
                  <img className="studio__facilities-key" src="assets/img/Symbols2022.png" alt="Key to symbols" />
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

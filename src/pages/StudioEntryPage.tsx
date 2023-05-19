import {
  IonButton,
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
  IonModal,
  IonPage,
  IonRow,
  IonSlide,
  IonSlides,
  IonText,
  isPlatform,
} from "@ionic/react";
import {
  heart,
  heartOutline,
  location,
  logoFacebook,
  logoInstagram,
  logoTwitter,
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
  }, [id, appCtx.favourites]);

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
                          color="dark"
                          className="studio-number studio-number--large"
                        >
                          <IonLabel color={
                            parseInt(studio.studioNumber) <= 34
                              ? "primary"
                              : "secondary"
                          }>
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
                                shareUrl={`https://forthvalleyartbeat.com/routes/route-${studio.rt}/?id=${studio.st}`}
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
                    <IonText
                      color={
                        parseInt(studio.studioNumber) <= 34
                          ? "primary"
                          : "secondary"
                      }
                    >
                      <h2 style={{ fontSize: "1.4rem", lineHeight: "1.25" }}>{studio.name}</h2>
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
                      {studio.imgs.map((image: string, index: number) => {
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
                    <IonCol size="12">
                      <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                        <IonIcon
                          icon={location}
                          color="secondary"
                          size="large"
                          style={{ verticalAlign: "middle" }}
                        />{" "}
                        {studio.add}
                      </div>
                    </IonCol>
                  </IonRow>

                <IonRow>
                <IonCol size="12">
                  <IonButton
                    color="primary"
                    fill="solid"
                    onClick={viewMapHandler}
                  >
                    View on map
                  </IonButton>
                  <IonButton
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

            <IonGrid>
              <IonRow>
                <IonCol size="12">
                  {studio?.desc && (
                    <div
                      dangerouslySetInnerHTML={{ __html: studio?.desc }}
                    ></div>
                  )}
                  {studio?.desc2 && (
                    <div
                      dangerouslySetInnerHTML={{ __html: studio?.desc2 }}
                    ></div>
                  )}
                  {studio?.time && (
                    <>
                      <hr />
                      <h3>Opening Times</h3>
                      <table className="opening-times">
                        <thead>
                          <tr>
                            <th>Sat</th>
                            <th>Sun</th>
                            <th>Mon</th>
                            <th>Tue</th>
                            <th>Wed</th>
                            <th>Thur</th>
                            <th>Fri</th>
                            <th>Sat</th>
                            <th>Sun</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            {[...studio?.time].map((day: string, key: any) => {
                              if (day === "Appointment only") {
                                return (
                                  <td key={key} className="studio-closed">
                                    <img
                                      src={`assets/icon/appointment.png`}
                                      title="Open by appointment only"
                                      alt="Open by appointment only"
                                      width={26}
                                      height={26}
                                    />
                                  </td>
                                );
                              } else {
                                return <td key={key}>{day ? day : "-"}</td>;
                              }
                            })}
                          </tr>
                        </tbody>
                      </table>
                    </>
                  )}
                  {studio?.dir && (
                    <>
                      <hr />
                      <h3>Directions</h3>
                      <p>{studio?.dir}</p>
                    </>
                  )}
                  {studio?.fac && (
                    <>
                      <h3>
                        Facilities <small>(See key below)</small>
                      </h3>
                      <IonGrid className="ion-no-padding">
                        <IonRow className="ion-justify-content-start">
                          {studio?.fac.parking === "Yes" && (
                            <img
                              src={`assets/icon/parking.png`}
                              alt="Parking available"
                              title="Parking available"
                              width={40}
                              height={40}
                            />
                          )}
                          {studio?.fac.disabledAccess === "Yes" && (
                            <img
                              src={`assets/icon/disabledAccess.png`}
                              alt="Disabled access available"
                              title="Disabled access available"
                              width={40}
                              height={40}
                            />
                          )}
                          {studio?.fac.additionalEvents === "Yes" && (
                            <img
                              src={`assets/icon/additionalEvents.png`}
                              alt="Additional events available"
                              title="Additional events available"
                              width={40}
                              height={40}
                            />
                          )}
                        </IonRow>
                      </IonGrid>
                    </>
                  )}
                  {studio?.event && studio?.event.title && (
                    <>
                      <h3>Additional Events</h3>

                      {studio?.event.title && (
                        <p>
                          <strong>{studio?.event.title}</strong>
                        </p>
                      )}
                      {studio?.event.dates && <p>{studio?.event.dates}</p>}
                      {studio?.event.eventDetails && (
                        <div
                          dangerouslySetInnerHTML={{
                            __html: studio?.event.eventDetails,
                          }}
                        ></div>
                      )}
                      {studio?.event.image && (
                        <img
                          src={`assets/img/studios_events/${studio?.event.image}`}
                          alt=""
                        />
                      )}
                    </>
                  )}

                  {(studio?.ph || studio?.mb || studio?.em || studio?.wb) && (
                    <>
                      <h3>Contact Details</h3>
                      <IonGrid className="ion-no-padding">
                        {studio?.ph && (
                          <IonRow>
                            <IonCol size="2">
                              <div className="ion-margin-bottom">Tel:</div>
                            </IonCol>
                            <IonCol>
                              <div className="ion-margin-bottom">
                                <a href={`tel:${studio?.ph}`}>{studio?.ph}</a>
                              </div>
                            </IonCol>
                          </IonRow>
                        )}
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
                                  href={`mailto:${studio?.em}`}
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

                  {(studio?.fb || studio?.tw || studio?.in) && (
                    <>
                      <h3>Social Links</h3>
                      <IonGrid className="ion-no-padding">
                        <IonRow className="ion-justify-content-start">
                          {studio?.fb && (
                            <IonCol size="2">
                              <a
                                href={studio?.fb}
                                target="_blank"
                                rel="noreferrer"
                              >
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
                              <a
                                href={studio?.tw}
                                target="_blank"
                                rel="noreferrer"
                              >
                                <IonIcon
                                  icon={logoTwitter}
                                  color="secondary"
                                  size="large"
                                />
                              </a>
                            </IonCol>
                          )}
                          {studio?.in && (
                            <IonCol size="2">
                              <a
                                href={studio?.in}
                                target="_blank"
                                rel="noreferrer"
                              >
                                <IonIcon
                                  icon={logoInstagram}
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
                  {studio?.fac && (
                    <>
                      <h3>Facilities Key</h3>
                      <IonGrid className="ion-no-padding">
                        <IonRow className="ion-justify-content-start">
                          <img
                            className="studio-symbols"
                            src={`assets/img/symbols.png`}
                            alt=""
                          />
                        </IonRow>
                      </IonGrid>
                    </>
                  )}
                </IonCol>
              </IonRow>
            </IonGrid>
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

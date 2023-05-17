import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonPage,
  IonRouterLink,
  IonRow,
  IonText,
} from "@ionic/react";
import PageHeader from "../components/PageHeader";
import { studios } from "../data/studios";
import "./EventsPage.css";

const EventsPage: React.FC = () => {
  return (
    <IonPage>
      <PageHeader title="Events" />
      <IonContent fullscreen>
        {studios
          .filter((studio) => studio.event)
          .map((studio: any) => {
            return (
              <IonCard key={studio.id}>
                <IonCardHeader color="light">
                  <IonGrid fixed={true} className="ion-no-padding">
                    <IonRow>
                      <IonCol size="12" className="ion-no-padding">
                        <IonCardTitle style={{ fontSize: "1.4rem" }}>{studio.event.title}</IonCardTitle>
                        <IonText color="dark" className="ion-margin-top" style={{ fontSize: "1rem" }}>
                          {studio.event.dates}
                        </IonText>
                      </IonCol>
                    </IonRow>
                  </IonGrid>
                </IonCardHeader>
                
                <IonCardContent className="ion-no-padding">
                  {studio?.event.image && (
                    <div className="event-image-container">
                      <img
                        src={`assets/img/studios_events/${studio.event.image}`}
                        alt=""
                        className="event-image"
                      />
                    </div>
                  )}
                  {studio?.event.details && (
                    <IonGrid>
                      <IonRow>
                        <IonCol>
                          <IonText color="dark">
                            <div
                              className="card-content"
                              dangerouslySetInnerHTML={{
                                __html: studio?.event.details,
                              }}
                            ></div>
                          </IonText>
                        </IonCol>
                      </IonRow>
                    </IonGrid>
                  )}
                  <IonCardHeader color="light">
                    <IonGrid fixed={true} className="ion-no-padding">
                      <IonRow>
                        <IonCol size="12" className="ion-no-padding">
                          <IonRouterLink href={`/studio/${studio.st}`}>
                            <IonButton
                              color={
                                Number(studio.st) <= 34
                                  ? "primary"
                                  : "secondary"
                              }
                              fill="solid"
                              expand="block"
                              // onClick={viewMapHandler}
                            >
                              View Studio {studio.st}
                            </IonButton>
                          </IonRouterLink>
                        </IonCol>
                      </IonRow>
                    </IonGrid>
                  </IonCardHeader>
                </IonCardContent>
              </IonCard>
            );
          })}
      </IonContent>
    </IonPage>
  );
};

export default EventsPage;

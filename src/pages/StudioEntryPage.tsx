import React, { useEffect, useState } from "react";
import {
  IonAvatar,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonChip,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonLabel,
  IonLoading,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useParams } from "react-router";
import { location } from "ionicons/icons";

import { studios } from "../data/studios";

interface RouteParams {
  id: string;
}

const StudioEntryPage: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [studio, setStudio] = useState<any>();

  const { id } = useParams<RouteParams>();

  useEffect(() => {
    setStudio(
      studios.find((studio) => {
        return studio.st === id;
      })
    );
  }, [id]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Studio {studio?.st}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Studio {studio?.st}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonCard className="ion-no-margin">
          <IonCardHeader>
            <IonChip>
              <IonLabel>{studio?.st}</IonLabel>
            </IonChip>
            <IonCardTitle>{studio?.name}</IonCardTitle>
            <IonCardSubtitle>
              <strong>{studio?.dis}</strong>
            </IonCardSubtitle>
            <IonCardSubtitle>
              <IonIcon icon={location} />
              <small>{studio?.add}</small>
            </IonCardSubtitle>
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
        {(studio?.mb || studio?.mb || studio?.mb) && (
          <>
            <h3>Contact Details</h3>
            <IonGrid className="ion-no-padding">
              {studio?.mb && (
                <IonRow>
                  <IonCol size="2">Mob:</IonCol>
                  <IonCol>{studio?.mb}</IonCol>
                </IonRow>
              )}
              {studio?.em && (
                <IonRow>
                  <IonCol size="2">Email:</IonCol>
                  <IonCol>{studio?.em}</IonCol>
                </IonRow>
              )}
              {studio?.wb && (
                <IonRow>
                  <IonCol size="2">Web:</IonCol>
                  <IonCol>{studio?.wb}</IonCol>
                </IonRow>
              )}
            </IonGrid>
          </>
        )}
      </IonContent>
      <IonLoading isOpen={loading} message={"Please wait..."} />
    </IonPage>
  );
};

export default StudioEntryPage;

import {
  IonAvatar,
  IonChip,
  IonContent,
  IonHeader,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./StudiosPage.css";

import { artists } from "../data/artists";

const StudiosPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Studios</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Studios</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
          {artists.map((artist) => {
            return (
              <IonItem
                detail
                routerLink={`/studio/${artist.st}`}
                key={artist.st}
              >
                <IonAvatar slot="start">
                  <IonChip>
                    <IonLabel>{artist.st}</IonLabel>
                  </IonChip>
                </IonAvatar>
                <IonAvatar slot="start">
                  <IonImg src="http://placehold.it/40x40" />
                </IonAvatar>
                <IonLabel>
                  <strong>{artist.name}</strong>
                  <br />
                  <small>{artist.dis}</small>
                </IonLabel>
              </IonItem>
            );
          })}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default StudiosPage;

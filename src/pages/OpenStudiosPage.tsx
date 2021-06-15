import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
} from "@ionic/react";
import "./OpenStudiosPage.css";

import { studios } from "../data/studios";
import ListItemStudio from "../components/ListItemStudio";

const OpenStudiosPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Open Studios</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Studios</IonTitle>
          </IonToolbar>
        </IonHeader>
        {studios.length > 0 && (
          <IonList>
            {studios.map((studio) => {
              if (studio.st) {
                return <ListItemStudio studioNumber={studio.st} />;
              }
            })}
          </IonList>
        )}
      </IonContent>
    </IonPage>
  );
};

export default OpenStudiosPage;

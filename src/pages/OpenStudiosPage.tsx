import { IonContent, IonPage, IonList } from "@ionic/react";
import "./OpenStudiosPage.css";

import { studios } from "../data/studios";
import ListItemStudio from "../components/ListItemStudio";
import PageHeader from "../components/PageHeader";

const OpenStudiosPage: React.FC = () => {
  return (
    <IonPage>
      <PageHeader title="Open Studios" />
      <IonContent fullscreen>
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

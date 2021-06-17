import { IonContent, IonPage } from "@ionic/react";
import "./EventsPage.css";
import PageHeader from "../components/PageHeader";

const EventsPage: React.FC = () => {
  return (
    <IonPage>
      <PageHeader title="Cycling and Walking Events" />
      <IonContent fullscreen></IonContent>
    </IonPage>
  );
};

export default EventsPage;

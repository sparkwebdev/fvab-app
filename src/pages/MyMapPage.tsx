import { IonContent, IonPage } from "@ionic/react";
import "./MyMapPage.css";
import PageHeader from "../components/PageHeader";

const MyMapPage: React.FC = () => {
  return (
    <IonPage>
      <PageHeader title="My Map" />
      <IonContent fullscreen></IonContent>
    </IonPage>
  );
};

export default MyMapPage;

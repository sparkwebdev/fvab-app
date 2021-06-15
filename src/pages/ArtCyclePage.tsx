import { IonContent, IonPage } from "@ionic/react";
import "./ArtCyclePage.css";
import PageHeader from "../components/PageHeader";

const ArtCyclePage: React.FC = () => {
  return (
    <IonPage>
      <PageHeader title="Art Cycle" />
      <IonContent fullscreen></IonContent>
    </IonPage>
  );
};

export default ArtCyclePage;

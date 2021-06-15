import { IonContent, IonPage } from "@ionic/react";
import "./NewsPage.css";
import PageHeader from "../components/PageHeader";

const NewsPage: React.FC = () => {
  return (
    <IonPage>
      <PageHeader title="My Map" />
      <IonContent fullscreen></IonContent>
    </IonPage>
  );
};

export default NewsPage;

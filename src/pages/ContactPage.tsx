import { IonContent, IonPage } from "@ionic/react";
import "./ContactPage.css";
import PageHeader from "../components/PageHeader";

const ContactPage: React.FC = () => {
  return (
    <IonPage>
      <PageHeader title="Contact" />
      <IonContent fullscreen></IonContent>
    </IonPage>
  );
};

export default ContactPage;

import {
  IonContent,
  IonPage,
  IonCard,
  IonCardContent,
  IonGrid,
  IonRow,
  IonCol,
  IonIcon,
} from "@ionic/react";
import "./ContactPage.css";
import PageHeader from "../components/PageHeader";
import { logoFacebook, logoTwitter } from "ionicons/icons";

const ContactPage: React.FC = () => {
  return (
    <IonPage>
      <PageHeader title="Contact" />
      <IonContent fullscreen>
        <IonCard color="light" className="ion-text-center ion-no-margin">
          <IonCardContent>
            <p>
              <strong>Email us:</strong>
              <br />
              <strong>
                <a href="mailto:info:avril@forthvalleyartbeat.com">
                  info@forthvalleyartbeat.com
                </a>
              </strong>
            </p>
            <hr />
            <IonGrid>
              <strong>Follow us:</strong>
              <IonRow className="ion-justify-content-center">
                <IonCol size="3">
                  <a
                    href="https://www.facebook.com/forthvalleyartbeat/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <IonIcon icon={logoFacebook} color="primary" size="large" />
                  </a>
                </IonCol>
                <IonCol size="3">
                  <a
                    href="https://twitter.com/fvab_"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <IonIcon icon={logoTwitter} color="primary" size="large" />
                  </a>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default ContactPage;

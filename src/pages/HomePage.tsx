import { IonContent, IonPage, IonText } from "@ionic/react";
import PageHeader from "../components/PageHeader";
import "./HomePage.css";

const HomePage: React.FC = () => {
  return (
    <IonPage>
      <PageHeader />
      <IonContent fullscreen scrollY={false}>
        <div className="home-content">
          <div className="home-content__block home-content__block--header">
          <img
            className="home-content__logo"
            src="assets/img/logo.svg"
            alt="Forth Valley Art Beat"
            width={376}
            height={310}
          />
          </div>
          <div className="home-content__block home-content__block--footer">
            <IonText color="light">
              10 to 18 June 2023
            </IonText>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default HomePage;

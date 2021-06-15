import { IonContent, IonPage, IonRouterLink } from "@ionic/react";
import "./HomePage.css";
import PageHeader from "../components/PageHeader";

const HomePage: React.FC = () => {
  return (
    <IonPage>
      <PageHeader />
      <IonContent fullscreen>
        <div className="home-content">
          <IonRouterLink
            href="/art-cycle"
            className="home-content__block home-content__block--artcycle"
          >
            <div className="home-content__block-content">
              <img
                className="home-content__block-logo"
                src="assets/img/logo-art-cycle.png"
                alt=""
              />
            </div>
          </IonRouterLink>
          <IonRouterLink
            className="home-content__block home-content__block--open-studios"
            href="/open-studios"
          >
            <div className="home-content__block-content">
              <img
                className="home-content__block-logo"
                src="assets/img/logo-fvab.png"
                alt=""
              />
            </div>
          </IonRouterLink>
          <IonRouterLink
            className="home-content__block home-content__block--events"
            href="/"
          >
            <div className="home-content__block-content">
              <h3>
                Cycling and <br />
                Walking Events
              </h3>
            </div>
          </IonRouterLink>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default HomePage;

import { IonContent, IonPage, IonRouterLink, IonText } from "@ionic/react";
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
                className="home-content__block-logo ion-margin-bottom"
                src="assets/img/logo-art-cycle.png"
                alt=""
              />
              <IonText color="dark">
                <strong>
                  3<sup>rd</sup> July — 31<sup>st</sup> Aug '21
                </strong>
              </IonText>
              <hr className="ion-margin" />
            </div>
          </IonRouterLink>
          <IonRouterLink
            className="home-content__block home-content__block--open-studios"
            href="/open-studios"
          >
            <div className="home-content__block-content">
              <img
                className="home-content__block-logo ion-margin-bottom"
                src="assets/img/logo-fvab.png"
                alt=""
              />
              <IonText color="dark">
                <strong>
                  10<sup>th</sup> &amp; 11<sup>th</sup> July '21
                </strong>
              </IonText>
            </div>
          </IonRouterLink>
          <IonRouterLink
            className="home-content__block home-content__block--events"
            href="/events"
          >
            <div className="home-content__block-content">
              <strong>
                <IonText color="primary">
                  Cycling and <br />
                  Walking Events...
                </IonText>
              </strong>
            </div>
          </IonRouterLink>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default HomePage;

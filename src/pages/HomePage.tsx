import { IonContent, IonPage, IonRouterLink, IonText } from "@ionic/react";
import "./HomePage.css";
import PageHeader from "../components/PageHeader";

const HomePage: React.FC = () => {
  return (
    <IonPage>
      <PageHeader />
      <IonContent fullscreen>
        <div className="home-content">
          <div className="home-content__block home-content__block--header">
            <img
              className="home-content__logo ion-margin-bottom"
              src="assets/img/logo-fvab-2021.png"
              alt=""
            />
          </div>
          <div className="home-content__block home-content__block--main">
            <div className="home-content__block-inner ion-padding-top">
              <IonRouterLink href="/art-cycle">
                <div className="home-content__block-content">
                  <img
                    className="home-content__art-cycle ion-margin-bottom"
                    src="assets/img/logo-art-cycle.png"
                    alt=""
                  />
                  <IonText color="dark">
                    <strong>3 July-31 Aug 2021</strong>
                  </IonText>
                </div>
              </IonRouterLink>
            </div>
            <div className="home-content__block-inner ion-padding-bottom">
              <IonRouterLink href="/open-studios">
                <div className="home-content__block-content">
                  <img
                    className="home-content__fvab ion-margin-bottom"
                    src="assets/img/logo-fvab-weekend.png"
                    alt=""
                  />
                  <IonText color="dark">
                    <strong>10-11&nbsp;July&nbsp;2021</strong>
                  </IonText>
                </div>
              </IonRouterLink>
            </div>
          </div>
          <div className="home-content__block home-content__block--footer ion-padding">
            <IonRouterLink href="/events">
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
        </div>
      </IonContent>
    </IonPage>
  );
};

export default HomePage;

import { IonContent, IonPage, IonRouterLink, IonText } from "@ionic/react";
import PageHeader from "../components/PageHeader";
import "./HomePage.css";

const HomePage: React.FC = () => {
  return (
    <IonPage>
      <PageHeader />
      <IonContent fullscreen>
        <div className="home-content">
          <div className="home-content__block home-content__block--header">
          </div>
          <div className="home-content__block home-content__block--main">
            <div className="home-content__block-inner ion-padding-bottom">
              <IonRouterLink href="/open-studios">
                <div className="home-content__block-content">
                  <img
                    className="home-content__logo ion-margin-bottom"
                    src="assets/img/logo-fvab-2022.png"
                    alt=""
                  />
                  <IonText color="dark">
                    <strong>11-19&nbsp;June&nbsp;2022</strong>
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

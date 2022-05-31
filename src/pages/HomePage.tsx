import { IonContent, IonIcon, IonPage, IonRouterLink, IonText } from "@ionic/react";
import { bicycle } from "ionicons/icons";
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
                  <h1 className="sr-only">Forth Valley Art Beat</h1>
                  <img
                    className="home-content__logo ion-margin-bottom"
                    src="assets/img/logo-fvab-2022.png"
                    alt=""
                  />
                  <div>
                    <h2 className="sr-only">Open Studios Exhibitions and Events</h2>
                    <img
                      className="home-content__logo home-content__logo--open-studios"
                      src="assets/img/open-studios-logo.png"
                      alt=""
                    />
                    <IonText color="dark">
                      <h3 className="ion-no-margin"><strong>11-19&nbsp;June&nbsp;2022</strong></h3>
                    </IonText>
                  </div>
                </div>
              </IonRouterLink>
            </div>
          </div>
          <div className="home-content__block home-content__block--footer ion-padding">
            <IonRouterLink href="/events">
              <div className="home-content__block-content">
                <strong>
                  <IonText color="primary">
                    <h2><IonIcon icon={bicycle} className="icon-x-large" color="secondary" /><br /><strong>Eco-arts &amp;<br />
                  Cycling Events...</strong></h2>
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

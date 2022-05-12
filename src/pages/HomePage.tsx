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
                  <IonText color="dark" className="ion-margin-top">
                    <h2><strong>11-19&nbsp;June&nbsp;2022</strong></h2>
                  </IonText>

                  <IonText color="dark" className="ion-padding">
                    <h3>Artists &amp; organisations across Central Scotland host a variety of events in open studios, installations, popup shows, and exhibitions in galleries and community spaces.</h3>
                  </IonText>
                  
                </div>
              </IonRouterLink>
            </div>
          </div>
          <div className="home-content__block home-content__block--footer ion-padding">
            <IonRouterLink href="/events">
              <div className="home-content__block-content">
                <strong>
                  <IonText color="secondary">
                    <h4><IonIcon icon={bicycle} size="large" /><br /><strong>Eco-arts &amp;<br />
                  Cycling Events...</strong></h4>
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

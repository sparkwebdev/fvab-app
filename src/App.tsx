import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { home, bicycle, heart, people, analytics } from "ionicons/icons";
import HomePage from "./pages/HomePage";
import MyMapPage from "./pages/MyMapPage";
import StudiosPage from "./pages/StudiosPage";
import ArtistsPage from "./pages/ArtistsPage";
import NewsPage from "./pages/NewsPage";
import AboutPage from "./pages/AboutPage";
import ArtCyclePage from "./pages/ArtCyclePage";
import StudioEntryPage from "./pages/StudioEntryPage";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import "./theme/custom-variables.css";

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/home">
            <HomePage />
          </Route>
          <Route exact path="/my-map">
            <MyMapPage />
          </Route>
          <Route exact path="/studios">
            <StudiosPage />
          </Route>
          <Route path="/artists">
            <ArtistsPage />
          </Route>
          <Route path="/art-cycle">
            <ArtCyclePage />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/news">
            <NewsPage />
          </Route>
          {/* Dynamic pages */}
          <Route exact path="/studio/:id">
            <StudioEntryPage />
          </Route>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/home">
            <IonIcon icon={home} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="studios" href="/studios">
            <IonIcon icon={analytics} />
            <IonLabel>Studios</IonLabel>
          </IonTabButton>
          <IonTabButton tab="artists" href="/artists">
            <IonIcon icon={people} />
            <IonLabel>Artists</IonLabel>
          </IonTabButton>
          <IonTabButton tab="mymap" href="/my-map">
            <IonIcon icon={heart} />
            <IonLabel>My Map</IonLabel>
          </IonTabButton>
          <IonTabButton tab="artcycle" href="/art-cycle">
            <IonIcon icon={bicycle} />
            <IonLabel>ArtCycle</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;

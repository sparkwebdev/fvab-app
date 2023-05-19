import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router-dom";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/display.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/padding.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";

/* Theme variables */
import { calendar, heart, home, people } from "ionicons/icons";
import SideMenu from "./components/SideMenu";
import AboutPage from "./pages/AboutPage";
import ArtCycleEntryPage from "./pages/ArtCycleEntryPage";
import ContactPage from "./pages/ContactPage";
import EventsPage from "./pages/EventsPage";
import HomePage from "./pages/HomePage";
import MyMapPage from "./pages/MyMapPage";
import NewsEntryPage from "./pages/NewsEntryPage";
import NewsPage from "./pages/NewsPage";
import OpenStudiosPage from "./pages/OpenStudiosPage";
import StudioEntryPage from "./pages/StudioEntryPage";
import "./theme/variables.css";

// /* Theme variables */
import FavouritesCount from "./components/FavouritesCount";
import AppContextProvider from "./data/AppContextProvider";
import "./theme/custom-variables.css";
import "./theme/theme.css";
import "./theme/variables.css";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <AppContextProvider>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet id="main">
            <Route exact path="/home">
              <HomePage />
            </Route>
            <Route path="/open-studios">
              <OpenStudiosPage />
            </Route>
            <Route path="/events">
              <EventsPage />
            </Route>
            <Route exact path="/my-map">
              <MyMapPage />
            </Route>
            <Route path="/news">
              <NewsPage />
            </Route>
            <Route path="/contact">
              <ContactPage />
            </Route>
            <Route path="/about">
              <AboutPage />
            </Route>
            {/* Dynamic pages */}
            <Route exact path="/studio/:id">
              <StudioEntryPage />
            </Route>
            <Route exact path="/event/:id">
              <ArtCycleEntryPage />
            </Route>
            <Route exact path="/entry/:id">
              <NewsEntryPage />
            </Route>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
          </IonRouterOutlet>
          <IonTabBar slot="bottom" color="tertiary">
            <IonTabButton tab="home" href="/home">
              <IonIcon icon={home} />
              <IonLabel>Home</IonLabel>
            </IonTabButton>
            <IonTabButton tab="open-studios" href="/open-studios">
              <IonIcon icon={people} />
              <IonLabel>Studios</IonLabel>
            </IonTabButton>
            <IonTabButton tab="events" href="/events">
              <IonIcon icon={calendar} />
              <IonLabel>Events</IonLabel>
            </IonTabButton>
            <IonTabButton tab="mymap" href="/my-map">
              <IonIcon icon={heart} />
              <IonLabel>My Map</IonLabel>
              <FavouritesCount />
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
        <SideMenu />
      </IonReactRouter>
    </AppContextProvider>
  </IonApp>
);

export default App;

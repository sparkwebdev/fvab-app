import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";
import "@ionic/react/css/display.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/float-elements.css";
/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/typography.css";
import { bicycle, calendar, heart, home, people, school } from "ionicons/icons";
import { Redirect, Route } from "react-router-dom";
import FavouritesCount from "./components/FavouritesCount";
import SideMenu from "./components/SideMenu";
import AppContextProvider from "./data/AppContextProvider";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import EcoArtsPage from "./pages/EcoArtsPage";
import HomePage from "./pages/HomePage";
import MyMapPage from "./pages/MyMapPage";
import NewsEntryPage from "./pages/NewsEntryPage";
import NewsPage from "./pages/NewsPage";
import OpenStudiosPage from "./pages/OpenStudiosPage";
import StudioEntryPage from "./pages/StudioEntryPage";
import EventsPage from "./pages/EventsPage";
import "./theme/custom-variables.css";
import "./theme/theme.css";
/* Theme variables */
import "./theme/variables.css";

const App: React.FC = () => {
  return (
    <IonApp>
      <AppContextProvider>
        <IonReactRouter>
          <IonTabs>
            <IonRouterOutlet id="main">
              <Route exact path="/home">
                <HomePage />
              </Route>
              <Route path="/eco-arts">
                <EcoArtsPage />
              </Route>
              <Route path="/open-studios">
                <OpenStudiosPage />
              </Route>
              <Route exact path="/my-map">
                <MyMapPage />
              </Route>
              <Route path="/events">
                <EventsPage />
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
              <Route exact path="/entry/:id">
                <NewsEntryPage />
              </Route>
              <Route exact path="/">
                <Redirect to="/home" />
              </Route>
            </IonRouterOutlet>
            <IonTabBar slot="bottom" color="primary">
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
              <IonTabButton tab="eco-arts" href="/eco-arts">
                <IonIcon icon={bicycle} />
                <IonLabel>Eco-Arts</IonLabel>
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
};

export default App;

import {
  IonContent,
  IonPage,
  IonCard,
  IonCardContent,
  IonList,
} from "@ionic/react";
import "./ArtCyclePage.css";
import PageHeader from "../components/PageHeader";
import { artCycles } from "../data/art-cycles";
import ListItemArtCycle from "../components/ListItemArtCycle";

const ArtCyclePage: React.FC = () => {
  return (
    <IonPage>
      <PageHeader title="Art Cycle" />
      <IonContent fullscreen>
        <IonCard color="light">
          <IonCardContent>
            <p>
              ‘ArtCycle’ is a new eco-arts project as part of FVAB 2021. Four
              artists have been commissioned to create new site responsive works
              exploring outdoor local habitats and environments across the Forth
              Valley which encourage cycling across the region. Open from 3 July
              to 31 Aug.
            </p>
          </IonCardContent>
        </IonCard>
        {artCycles && artCycles.length > 0 && (
          <IonList>
            {artCycles.map((artCycle) => {
              return (
                <ListItemArtCycle
                  id={artCycle.id}
                  artist={artCycle.artist}
                  image={artCycle.image || ""}
                  title={artCycle.title}
                  location={artCycle.location}
                  key={artCycle.id}
                />
              );
            })}
          </IonList>
        )}
        <IonCard color="light">
          <IonCardContent>
            <p>
              Also check out the various{" "}
              <a
                href="https://forthvalleyartbeat.com/cycling-walking-events/"
                target="_blank"
                rel="noreferrer"
              >
                <strong>cycling &amp; walking events</strong>
              </a>
              .
            </p>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default ArtCyclePage;

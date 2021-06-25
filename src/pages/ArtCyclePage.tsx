import {
  IonContent,
  IonPage,
  IonCard,
  IonCardContent,
  IonList,
  IonSpinner,
} from "@ionic/react";
import "./ArtCyclePage.css";
import PageHeader from "../components/PageHeader";
import { artCycles } from "../data/art-cycles";
import ListItemArtCycle from "../components/ListItemArtCycle";
import { useEffect, useState } from "react";

const ArtCyclePage: React.FC = () => {
  const [gallery, setGallery] = useState<any>({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("https://forthvalleyartbeat.com/wp-json/wp/v2/pages/6256")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setGallery(data);
        setLoading(false);
      })
      .catch((e) => {
        console.log("Error getting news", e);
        setLoading(false);
      });
  }, []);

  return (
    <IonPage>
      <PageHeader title="Art Cycle" />
      <IonContent fullscreen>
        <IonCard color="light" className="ion-no-margin">
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

        {loading ? (
          <IonSpinner
            color="secondary"
            className="loading-spinner"
            name="dots"
          />
        ) : (
          <div className="ion-padding">
            <h2>Latest 'ArtCycle' photos</h2>
            {gallery.content && (
              <div
                className="gallery"
                dangerouslySetInnerHTML={{
                  __html: gallery.content.rendered,
                }}
              ></div>
            )}
          </div>
        )}
      </IonContent>
    </IonPage>
  );
};

export default ArtCyclePage;

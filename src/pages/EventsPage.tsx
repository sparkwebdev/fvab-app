import { HTTP } from "@ionic-native/http";
import { IonContent, IonPage, IonSpinner, isPlatform } from "@ionic/react";
import { useEffect, useState } from "react";
import PageHeader from "../components/PageHeader";
import "./EventsPage.css";

const EventsPage: React.FC = () => {
  const [data, setData] = useState<any>({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isPlatform("ios") || isPlatform("android")) {
      HTTP.get(
        "https://forthvalleyartbeat.com/wp-json/wp/v2/pages/6816",
        {},
        {}
      )
        .then((data) => {
          setData(JSON.parse(data.data));
          setLoading(false);
        })
        .catch((error) => {
          console.log("Error getting news", error.error);
          setLoading(false);
        });
    } else {
      fetch("https://forthvalleyartbeat.com/wp-json/wp/v2/pages/6816")
        .then((res) => res.json())
        .then((data) => {
          setData(JSON.parse(data.data));
          setLoading(false);
        })
        .catch((e) => {
          console.log("Error getting news", e);
          setLoading(false);
        });
    }
  }, []);
  return (
    <IonPage>
      <PageHeader title="Eco-arts &amp; Cycling Events" />
      <IonContent fullscreen>

      {loading ? (
          <IonSpinner
            color="secondary"
            className="loading-spinner"
            name="dots"
          />
        ) : (
          <div className="ion-padding">
            {data.content && (
              <div
                dangerouslySetInnerHTML={{
                  __html: data.content.rendered,
                }}
              ></div>
            )}
          </div>
        )}
      </IonContent>
    </IonPage>
  );
};

export default EventsPage;

import { HTTP } from "@ionic-native/http";
import { IonContent, IonPage, IonSpinner, isPlatform } from "@ionic/react";
import { useEffect, useState } from "react";
import PageHeader from "../components/PageHeader";
import "./EcoArtsPage.css";

const EcoArtsPage: React.FC = () => {
  const [data, setData] = useState<any>({});
  const [loading, setLoading] = useState(true);

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
          console.log("Error getting data", error.error);
          setLoading(false);
        });
    } else {
      fetch("https://forthvalleyartbeat.com/wp-json/wp/v2/pages/6816")
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        })
        .catch((e) => {
          console.log("Error getting data", e);
          setLoading(false);
        });
    }
  }, []);

  return (
    <IonPage>
      <PageHeader title="Eco-Arts &amp; Cycling Events" />
      <IonContent fullscreen>
        <div className="ion-padding constrain constrain--wide">
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
          </div>
      </IonContent>
    </IonPage>
  );
};

export default EcoArtsPage;

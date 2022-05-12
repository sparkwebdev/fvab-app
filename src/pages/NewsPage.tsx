import { HTTP } from "@ionic-native/http";
import {
  IonCard, IonCardContent, IonCardHeader,
  IonCardTitle, IonContent, IonItem,
  IonLabel, IonList, IonPage, IonSpinner, isPlatform
} from "@ionic/react";
import { useEffect, useState } from "react";
import PageHeader from "../components/PageHeader";
import "./NewsPage.css";

const NewsPage: React.FC = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isPlatform("ios") || isPlatform("android")) {
      HTTP.get(
        "https://forthvalleyartbeat.com/wp-json/wp/v2/posts/?orderby=date&order=desc&after=2020-03-01T00:00:00",
        {},
        {}
      )
        .then((data) => {
          setNews(JSON.parse(data.data));
          setLoading(false);
        })
        .catch((error) => {
          console.log("Error getting news", error.error);
          setLoading(false);
        });
    } else {
      fetch(
        "https://forthvalleyartbeat.com/wp-json/wp/v2/posts/?orderby=date&order=desc&after=2020-03-01T00:00:00"
      )
        .then((res) => res.json())
        .then((data) => {
          setNews(data);
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
      <PageHeader title="News" />
      <IonContent fullscreen>
        {loading ? (
          <IonSpinner
            color="secondary"
            className="loading-spinner"
            name="dots"
          />
        ) : (
          <>
            {news ? (
              <div className="ion-padding constrain constrain--wide">
                <IonList>
                  {news.map((entry: any) => {
                    return (
                      <IonItem
                        detail={true}
                        key={entry.id}
                        routerLink={`/entry/${entry.id}`}
                      >
                        <IonLabel>
                          <h2
                            dangerouslySetInnerHTML={{
                              __html: entry.title.rendered,
                            }}
                          ></h2>
                          <p>{new Date(entry.date).toLocaleDateString()}</p>
                          <div
                            dangerouslySetInnerHTML={{
                              __html: entry.excerpt.rendered,
                            }}
                          ></div>
                        </IonLabel>
                      </IonItem>
                    );
                  })}
                </IonList>
              </div>
            ) : (
              <IonCard color="light" className="ion-text-center ion-no-margin">
                <IonCardHeader>
                  <IonCardTitle>Nothing found</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <p>Sorry, no news items yet.</p>
                </IonCardContent>
              </IonCard>
            )}
          </>
        )}
      </IonContent>
    </IonPage>
  );
};

export default NewsPage;

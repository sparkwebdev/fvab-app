import {
  IonContent,
  IonPage,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonList,
  IonItem,
  IonLabel,
  IonSpinner,
} from "@ionic/react";
import "./NewsPage.css";
import PageHeader from "../components/PageHeader";
import { useEffect, useState } from "react";

const NewsPage: React.FC = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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

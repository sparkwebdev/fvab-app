import {
  IonContent,
  IonPage,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonLoading,
  IonItem,
  IonList,
} from "@ionic/react";
import "./NewsPage.css";
import PageHeader from "../components/PageHeader";
import { useEffect, useState } from "react";

//

const NewsPage: React.FC = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://forthvalleyartbeat.com/?page_id=374&datatype=news")
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

  if (loading) {
    return <IonLoading isOpen message={"Please wait..."} />;
  }

  return (
    <IonPage>
      <PageHeader title="News" />
      <IonContent fullscreen>
        {news && news.length > 0 ? (
          <IonList>
            {news.map((entry: any) => {
              return (
                <IonItem key={entry.id}>
                  <h2>{entry.title}</h2>
                  <p>{entry.date}</p>
                  {entry.content}
                </IonItem>
              );
            })}
          </IonList>
        ) : (
          <IonCard color="light" className="ion-text-center">
            <IonCardHeader>
              <IonCardTitle>Nothing found</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <p>Sorry, no news items yet.</p>
            </IonCardContent>
          </IonCard>
        )}
      </IonContent>
    </IonPage>
  );
};

export default NewsPage;

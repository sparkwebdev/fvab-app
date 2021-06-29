import React, { useEffect, useState } from "react";
import { IonContent, IonPage, IonSpinner } from "@ionic/react";
import { useParams } from "react-router";
import PageHeader from "../components/PageHeader";
import { HTTP } from "@ionic-native/http";
import { isPlatform } from "@ionic/react";

interface RouteParams {
  id: string;
}

const NewsEntryPage: React.FC = () => {
  const { id } = useParams<RouteParams>();
  const [newsItem, setNewsItem] = useState<any>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isPlatform("ios")) {
      HTTP.get(
        `https://forthvalleyartbeat.com/wp-json/wp/v2/posts?include=${id}`,
        {},
        {}
      )
        .then((data) => {
          setNewsItem(JSON.parse(data.data)[0]);
          setLoading(false);
        })
        .catch((error) => {
          console.log("Error getting news", error.error);
          setLoading(false);
        });
    } else {
      fetch(`https://forthvalleyartbeat.com/wp-json/wp/v2/posts?include=${id}`)
        .then((res) => res.json())
        .then((data) => {
          setNewsItem(data[0]);
          setLoading(false);
        })
        .catch((e) => {
          console.log("Error getting news item", e);
          setLoading(false);
        });
    }
  }, []);

  return (
    <IonPage>
      <PageHeader title="" back={true} />
      <IonContent fullscreen>
        {loading ? (
          <IonSpinner
            color="secondary"
            className="loading-spinner"
            name="dots"
          />
        ) : (
          <>
            {newsItem && (
              <div className="ion-padding constrain constrain--wide">
                {newsItem.title.rendered && (
                  <h1
                    dangerouslySetInnerHTML={{
                      __html: newsItem.title.rendered,
                    }}
                  ></h1>
                )}
                {newsItem.date && (
                  <p>{new Date(newsItem.date).toLocaleDateString()}</p>
                )}
                {newsItem.content.rendered && (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: newsItem.content.rendered,
                    }}
                  ></div>
                )}
              </div>
            )}
          </>
        )}
      </IonContent>
    </IonPage>
  );
};

export default NewsEntryPage;

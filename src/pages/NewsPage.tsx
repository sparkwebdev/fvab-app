import { IonContent, IonPage } from "@ionic/react";
import "./NewsPage.css";
import PageHeader from "../components/PageHeader";
import { useEffect } from "react";

//

const NewsPage: React.FC = () => {
  useEffect(() => {
    fetch("https://forthvalleyartbeat.com/?page_id=374&datatype=news")
      .then((res) => res.json())
      .then((data) => {
        // this.setState({ todos: data });
        console.log(data);
      })
      .catch(console.log);
  }, []);

  return (
    <IonPage>
      <PageHeader title="My Map" />
      <IonContent fullscreen></IonContent>
    </IonPage>
  );
};

export default NewsPage;

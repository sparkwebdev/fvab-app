import {
  IonBackButton,
  IonButtons,
  IonHeader,
  IonMenuButton,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

interface ContainerProps {
  title?: string;
  back?: boolean;
  defaultHref?: string;
}

const PageHeader: React.FC<ContainerProps> = ({
  title,
  back = false,
  defaultHref = "/",
}) => {
  return (
    <IonHeader>
      <IonToolbar color="secondary">
        {back && (
          <IonButtons slot="start">
            <IonBackButton defaultHref={defaultHref} text="" />
          </IonButtons>
        )}
        {title && <IonTitle className="ion-text-center">{title}</IonTitle>}
        <IonButtons slot="end">
          <IonMenuButton style={{ color: "#fff" }} />
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  );
};
export default PageHeader;

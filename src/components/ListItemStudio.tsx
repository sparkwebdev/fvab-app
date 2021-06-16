import {
  IonAvatar,
  IonChip,
  IonImg,
  IonItem,
  IonText,
  IonLabel,
} from "@ionic/react";
import "./ListItemStudio.css";

interface ContainerProps {
  studioNumber: string;
  name: string;
  image?: string;
  dis?: string;
  mini?: boolean;
}

const ListItemStudio: React.FC<ContainerProps> = (props) => {
  return (
    <IonItem
      routerLink={`/studio/${props.studioNumber}`}
      key={props.studioNumber}
      lines={props.mini ? "none" : "inset"}
      className={props.mini ? "ion-no-padding" : ""}
      detail={!props.mini}
    >
      {props.studioNumber && (
        <IonAvatar
          slot="start"
          className="ion-text-center ion-justify-content-center"
        >
          <IonChip color="primary">
            <IonLabel>
              <strong>{props.studioNumber}</strong>
            </IonLabel>
          </IonChip>
        </IonAvatar>
      )}
      {props.image ? (
        <IonAvatar slot="start">
          <IonImg src={`assets/img/studios_sm/${props.image}`} alt="" />
        </IonAvatar>
      ) : (
        <IonAvatar slot="start">
          <IonImg src={"assets/img/placeholder-small.png"} alt="" />
        </IonAvatar>
      )}
      <IonLabel>
        <IonText color="primary">
          <strong>{props.name}</strong>
        </IonText>
        {props.dis && (
          <>
            <br />
            <small>{props.dis}</small>
          </>
        )}
      </IonLabel>
    </IonItem>
  );
};

export default ListItemStudio;

import {
  IonAvatar,
  IonChip,
  IonImg,
  IonItem,
  IonLabel,
  IonText,
} from "@ionic/react";

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
      routerLink={props.mini ? undefined : `/studio/${props.studioNumber}`}
      key={props.studioNumber}
      lines={props.mini ? "none" : "inset"}
      className={props.mini ? "ion-align-items-start" : ""}
      detail={!props.mini}
    >
      {props.studioNumber && !props.mini && (
        <IonAvatar
          slot="start"
          className="ion-text-center ion-justify-content-center"
        >
          <IonChip color="medium">
            <IonLabel color={Number(props.studioNumber) <= 34 ? "primary" : "secondary"}>
              <strong>{props.studioNumber}</strong>
            </IonLabel>
          </IonChip>
        </IonAvatar>
      )}
      {props.image && !props.mini ? (
        <IonAvatar slot="start" color={Number(props.studioNumber) <= 34 ? "primary" : "secondary"}>
          <IonImg src={`assets/img/studios_sm/${props.image}`} alt=""  color={Number(props.studioNumber) <= 34 ? "primary" : "secondary"} />
        </IonAvatar>
      ) : (
        <>
          {!props.mini && (
            <IonAvatar slot="start">
              <IonImg src={"assets/img/placeholder-small.png"} alt="" />
            </IonAvatar>
          )}
        </>
      )}
      <IonLabel className={props.mini ? "ion-text-wrap" : ""}>
        <IonText color={Number(props.studioNumber) <= 34 ? "primary" : "secondary"}>
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

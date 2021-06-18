import { IonAvatar, IonImg, IonItem, IonText, IonLabel } from "@ionic/react";

interface ContainerProps {
  id: number;
  artist: string;
  title: string;
  image?: string;
  location?: string;
}

const ListItemArtCycle: React.FC<ContainerProps> = (props) => {
  return (
    <IonItem
      routerLink={`/event/${props.id}`}
      key={props.id}
      lines="inset"
      detail={true}
    >
      {props.image ? (
        <IonAvatar slot="start">
          <IonImg src={`assets/img/art-cycles_sm/${props.image}`} alt="" />
        </IonAvatar>
      ) : (
        <IonAvatar slot="start">
          <IonImg src={"assets/img/placeholder-small.png"} alt="" />
        </IonAvatar>
      )}
      <IonLabel>
        <IonText color="primary">
          <strong>
            {props.artist} | {props.title}
          </strong>
        </IonText>
        <br />
        <IonText color="dark">{props.location}</IonText>
      </IonLabel>
    </IonItem>
  );
};

export default ListItemArtCycle;

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
        <IonAvatar slot="start" className="ion-avatar--large">
          <IonImg src={`assets/img/art-cycles_sm/${props.image}`} alt="" />
        </IonAvatar>
      ) : (
        <IonAvatar slot="start">
          <IonImg src={"assets/img/placeholder-small.png"} alt="" />
        </IonAvatar>
      )}
      <IonLabel>
        <strong>
          <IonText color="primary">{props.artist}</IonText>
          <br />
          <IonText color="secondary">
            <small>'{props.title}'</small>
          </IonText>
        </strong>
        <br />
        <IonText color="dark">
          <small>— {props.location}</small>
        </IonText>
      </IonLabel>
    </IonItem>
  );
};

export default ListItemArtCycle;

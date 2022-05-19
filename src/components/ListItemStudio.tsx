import {
  IonAvatar,
  IonChip,
  IonIcon,
  IonImg,
  IonItem, IonLabel, IonText
} from "@ionic/react";
import { heart } from "ionicons/icons";
import { useContext, useEffect, useState } from "react";
import AppContext from "../data/app-context";
import "./ListItemStudio.css";

interface ContainerProps {
  studioNumber: string;
  name: string;
  image?: string;
  dis?: string;
  mini?: boolean;
}

const ListItemStudio: React.FC<ContainerProps> = (props) => {
  const appCtx = useContext(AppContext);
  const brand = parseInt(props.studioNumber) < 30 ? "primary" : "secondary";
  const [isFavourite, setIsFavourite] = useState<boolean | undefined>();

  useEffect(() => {
    setIsFavourite(appCtx.favourites.includes(props.studioNumber));
  }, [appCtx.favourites]);

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
          className="studio-number ion-text-center ion-justify-content-center"
        >
          <IonChip color={brand}>
            <IonLabel>
              <strong>{props.studioNumber}</strong>
            </IonLabel>
          </IonChip>
          {isFavourite && (<IonIcon icon={heart} color="danger" className="studio-number__favourited" />)}
        </IonAvatar>
      )}
      {props.image && !props.mini ? (
        <IonAvatar slot="start">
          <IonImg src={`assets/img/studios_sm/${props.image}`} alt="" />
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
        <IonText color={brand}>
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

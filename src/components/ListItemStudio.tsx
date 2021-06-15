import { IonAvatar, IonChip, IonImg, IonItem, IonLabel } from "@ionic/react";
import "./ListItemStudio.css";

import { studios } from "../data/studios";
import { useEffect, useState } from "react";

interface ContainerProps {
  studioNumber: any;
}

const ListItemStudio: React.FC<ContainerProps> = ({ studioNumber }) => {
  const [studio, setStudio] = useState<any>();

  useEffect(() => {
    setStudio(
      studios.find((studio) => {
        return studio.st === studioNumber;
      })
    );
  }, [studioNumber]);

  return (
    <IonItem detail routerLink={`/studio/${studio.st}`} key={studio.st}>
      <IonAvatar slot="start">
        <IonChip>{studio.st && <IonLabel>{studio.st}</IonLabel>}</IonChip>
      </IonAvatar>
      <IonAvatar slot="start">
        <IonImg src="http://placehold.it/40x40" />
      </IonAvatar>
      <IonLabel>
        <strong>{studio.name}</strong>
        <br />
        <small>{studio.dis}</small>
      </IonLabel>
    </IonItem>
  );
};

export default ListItemStudio;

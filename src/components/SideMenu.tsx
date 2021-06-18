import {
  IonContent,
  IonIcon,
  IonItem,
  IonList,
  IonMenu,
  IonText,
  IonMenuToggle,
} from "@ionic/react";
import React from "react";
import {
  newspaperOutline as newsIcon,
  chatbubblesOutline as contactIcon,
  informationCircleOutline as aboutIcon,
} from "ionicons/icons";

const SideMenu: React.FC = () => {
  return (
    <IonMenu contentId="main" side="end">
      <IonText
        className="ion-padding"
        style={{
          background: "#00b0ef",
          color: "#fff",
        }}
      >
        <strong>Menu</strong>
      </IonText>
      <IonContent>
        <IonList color="dark">
          <IonMenuToggle>
            <IonItem button routerLink="/news">
              <IonIcon icon={newsIcon} slot="start" size="small" />
              News
            </IonItem>
            <IonItem button routerLink="/contact">
              <IonIcon icon={contactIcon} slot="start" size="small" />
              Contact and Social
            </IonItem>
            <IonItem button routerLink="/about">
              <IonIcon icon={aboutIcon} slot="start" size="small" />
              About this App
            </IonItem>
          </IonMenuToggle>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default SideMenu;

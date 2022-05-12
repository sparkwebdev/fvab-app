import {
    IonContent,
    IonIcon,
    IonItem,
    IonList,
    IonMenu, IonMenuToggle, IonText
} from "@ionic/react";
import {
    chatbubblesOutline as contactIcon,
    informationCircleOutline as aboutIcon, newspaperOutline as newsIcon
} from "ionicons/icons";
import React from "react";

const SideMenu: React.FC = () => {
  return (
    <IonMenu contentId="main" side="end">
      <IonText
        className="ion-padding"
        style={{
          background: "#00b1f0",
          color: "#fff",
          paddingTop: "75px",
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

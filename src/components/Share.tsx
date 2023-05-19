import { SocialSharing } from "@ionic-native/social-sharing";
import { IonButton, IonIcon } from "@ionic/react";
import { shareOutline as shareIcon } from "ionicons/icons";
import React from "react";

const Share: React.FC<{
  shareText?: string;
  shareImage?: string;
  shareUrl?: string;
}> = (props) => {
  const text = props.shareText || "";
  const image = props.shareImage || "";
  const url = props.shareUrl || "";

  const options = {
    message: text,
    subject: "Sharing from Forth Valley Art Beat.",
    files: [image],
    url: url,
  };

  const share = () => {
    SocialSharing.shareWithOptions(options)
      .then()
      .catch((msg) => {
        console.log("Sharing failed with message: " + msg);
      });
  };

  return (
    <>
      {(text || image || url) && (
        <IonButton
          onClick={share}
          fill="clear"
          size="large"
          className="ion-no-padding ion-no-margin"
          style={{ height: "2em" }}
        >
          <IonIcon icon={shareIcon} />
        </IonButton>
      )}
    </>
  );
};

export default Share;

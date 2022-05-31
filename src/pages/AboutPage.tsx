import { IonContent, IonPage } from "@ionic/react";
import PageHeader from "../components/PageHeader";
import "./AboutPage.css";

const AboutPage: React.FC = () => {
  return (
    <IonPage>
      <PageHeader title="About" />
      <IonContent fullscreen className="ion-padding">
        <p>
          Forth Valley Art Beat first began in 2010 as Forth Valley Open
          Studios, with it later forming as Forth Valley Art Beat to encompass
          its full range of activity. The event continues to be one of the
          largest cultural events celebrating creativity across the Forth
          Valley. The event was founded by a small group of artists with Ann
          Shaw being the driving force in getting the event off the ground and
          creating a wonderful annual opportunity for artists throughout the
          community to connect with each other and the wider community.
        </p>
        <p>
          <strong>Avril Nicol</strong> is a founding member of Forth Valley Art
          Beat and has been building and developing the project as Project
          Co-ordinator since its outset. As well as being event organiser Avril
          initially participated as an artist from her studio in Larbert, she
          later opened &Collective Art Gallery in Bridge of Allan before
          relocating the gallery to Dundas Street, Edinburgh and launching as
          &Gallery. From 2021 Avril will have a less active role in the
          day-to-day running of the event, though still being very much involved
          in her new role as Creative Director.
        </p>
        <p>
          <strong>Rosy Naylor</strong> is responsible for overall project
          organisational work. She has been designer for FVAB since its
          inception, working closely with Avril on the developing of the event
          each year. Now as Programme Producer/Curator she guides its future
          creative development and planning of the event working alongside Avril
          and other members of the group, with plans for a series of additional
          projects enhancing the main open studios event going forward, the
          first of which was the ‘ArtCycle’ programme introduced in 2021. She
          continues to work as designer, whilst being the main point of contact
          in all aspects of organising the event. Rosy’s own background founding
          the Art Walk Porty festival (Edinburgh) brings a wealth of experience
          to organising events which builds communities around local creativity,
          and particularly outdoor spaces.
        </p>
        <p>
          We both look forward to the future direction of FVAB and continuing to
          work with all artists and creative organisations across the Forth
          Valley to help strengthen the event going forward.
        </p>
        <p>
          The 2022 eco-arts & cycling programme is supported by funding from
          Paths for All COP26 Legacy Fund and Falkirk Council.
        </p>
        <p>
          <small>
            DISCLAIMER
            <br />
            Visitors to studios mentioned in this app and on the website visit
            entirely at their own risk. Adults are responsible for the
            supervision of any children in their care. Those involved in this
            app or the website cannot accept liability for any loss, damage or
            injury sustained by any of the public during their visits to the
            studios. Artists’ studios and makers’ workshops are working
            environments and may contain hazardous tools, machinery and
            materials, so care must be taken when visiting them.
          </small>
        </p>
        <p>
          <small>
            Whilst every care has been taken in compiling this guide, Forth
            Valley Art Beat cannot be held responsible for any variations,
            errors or omissions.
          </small>
        </p>
      </IonContent>
    </IonPage>
  );
};

export default AboutPage;

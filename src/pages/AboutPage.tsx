import { IonContent, IonPage } from "@ionic/react";
import "./AboutPage.css";
import PageHeader from "../components/PageHeader";

const AboutPage: React.FC = () => {
  return (
    <IonPage>
      <PageHeader title="About" />
      <IonContent fullscreen className="ion-padding">
        <p>
          Forth Valley Art Beat continues to be one of the largest cultural
          events celebrating creativity across the Forth Valley. First begun in
          2010, the event was first founded by a small group of artists seeking
          to create an opportunity for artists throughout the community to
          connect with each other and the wider community. Since then much has
          grown with an annual open studios and related events programme being
          showcased each year.
        </p>
        <p>
          This year the event shifts its focus to the outdoors, encouraging ways
          to explore the beautiful Forth Valley whilst viewing artworks in
          response to many unique sites. ‘ArtCycle’ brings site responsive works
          to Bothkennar Pools, nr Skinflats; Canada Wood, Falkirk; NCN routes
          between Stirling &amp; Dunblane; and the River Forth, near Stirling,
          with a series of associated cycling and walking events. Alongside, the
          regular Open Studios event this year sees 46 artist studios open to
          the public over the one weekend (10/11 July) with many artists opening
          up studios in their garden sheds and other outdoor spaces.
        </p>
        <p>
          Run by organisers Avril Nicol and Rosy Naylor, the event continues to
          be built around the strengthening of communities and the promoting of
          local creativity. The enhancing of the main open studios programme
          this year with the ‘ArtCycle’ programme is the first of what is hoped
          to be a series of additional projects devised to support the rest of
          the event inviting audiences into many unique sites.
        </p>
        <p>
          Both Avril &amp; Rosy look forward to the future direction of FVAB and
          continuing to work with all artists and creative organisations across
          the Forth Valley to help build the event going forward.
        </p>
        <p>
          Read more — 
          <br />
          <a
            href="https://forthvalleyartbeat.com/contact/"
            target="_blank"
            rel="noreferrer"
          >
            <small>https://forthvalleyartbeat.com/contact/</small>
          </a>
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

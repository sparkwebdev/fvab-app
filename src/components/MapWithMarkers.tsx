import { IonCol, IonContent, IonHeader, IonPage, IonRow, IonTitle, IonToolbar, useIonModal, useIonViewWillEnter } from '@ionic/react';
import { useRef, useState } from 'react';
import './MapWithMarkers.css';

import { GoogleMap } from '@capacitor/google-maps';
import { MarkerInfoWindow } from '../components/MarkerInfoWindow';
import mapStyles from "../theme/mapStyles";

const MapWithMarkers: React.FC<{
  studios?: any;
  isSingle?: boolean;
  onDismiss?: () => void;
}> = (props) => {

  //  Remember to secure key using env files or requesting from server!
  const key = "AIzaSyB2do_Zm1jyT-IugUTa9HfLo8a6EplMMY8";
  let newMap: any;
  const mapRef = useRef(null);

  const markers = props.studios.map((studio: any) => {
    return {
      studio: studio.st, 
      lat: studio.lat, 
      lng: studio.lon, 
      title: studio.name, 
      description: studio.dis, 
      address: studio.add, 
      website: studio.wb, 
      phone: studio.ph
    };
  });
  
  const [selectedMarker, setSelectedMarker] = useState({});

  const [present, dismiss] = useIonModal(MarkerInfoWindow, {
    marker: selectedMarker
  });

  const mapConfig = {
    zoom: 10,
    center: {
      lat: markers[0].lat,
      lng: markers[0].lng
    },
    // disableDefaultUI: true,
    streetViewControl: false,
    mapTypeControl: false,
    controls: {
      // compass: true,
      // myLocation: true,
      // myLocationButton: true,
      // mapToolbar: true,
      // indoorPicker: true,
      zoom: true,
      mapType: false,
      streetView: false


    },
    styles: mapStyles

  };

  const markerClick = (marker: any) => {
    setSelectedMarker(markers.filter((m: any) => (m.lat === marker.latitude && m.lng === marker.longitude))[0]);
    newMap.setCamera({
      coordinate: {
        lat: marker.latitude,
        lng: marker.longitude
      },
      zoom: 15
    });
    if (!props.isSingle) {
      present({
        initialBreakpoint: 0.4,
        breakpoints: [0, 0.4],
        backdropBreakpoint: 0,
        onDidDismiss: () => dismiss()
      });
    }
  }

  const addMapMarker = async (marker: any) => {
    await newMap.addMarker({
      coordinate: {
        lat: marker.lat,
        lng: marker.lng
      },
      title: "hello",
      snippet: "hello",
      iconUrl: `https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=${marker.studio}|${Number(props.studioNumber) <= 34 ? "01AFEE" : "EF59A2"}|000000`
    });
  }

  const addMapMarkers = () => markers.forEach((marker: any) => addMapMarker(marker));

  const createMap = async () => {

    if (!mapRef.current) return;

    newMap = await GoogleMap.create({
      id: "google-map",
      element: mapRef.current,
      apiKey: key,
      config: mapConfig
    });
    newMap.setOnMarkerClickListener((marker: any) => markerClick(marker, newMap));


// // Move the map programmatically
// await newMap.setCamera({
//   coordinate: {
//     lat: 33.6,
//     lng: -117.9
//   }
// });

// Enable marker clustering
await newMap.enableClustering();

    addMapMarkers();
  }

  useIonViewWillEnter(() => createMap());

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Capacitor Google Map</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Capacitor Google Map</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonRow>
          <IonCol size="12">
            <capacitor-google-map ref={mapRef} id="map"></capacitor-google-map>
          </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default MapWithMarkers;
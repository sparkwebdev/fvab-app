import { IonButton, IonLoading } from "@ionic/react";
import {
  GoogleMap, InfoWindow, Marker, useLoadScript
} from "@react-google-maps/api";
import React, { useCallback, useEffect, useRef, useState } from "react";
import mapStyles from "../theme/mapStyles";
import ListItemStudio from "./ListItemStudio";

declare const window: any;

const options = {
  styles: mapStyles,
  disableDefaultUI: true,
};

const MapWithMarkers: React.FC<{
  studios?: any;
  isSingle?: boolean;
  onDismiss?: () => void;
}> = (props) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyB2do_Zm1jyT-IugUTa9HfLo8a6EplMMY8",
  });

  const mapContainerStyle = {
    width: "100%",
    height: "100%",
    flex: "1 1 auto",
  };

  const [center, setCenter] = useState({
    lat: 56,
    lng: -4,
  });

  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (mapRef.current && props.studios) {
      fitBounds(mapRef.current);
    } else {
      return;
    }
  }, [props.studios]);

  const mapRef = useRef(null);
  const onMapLoad = useCallback(
    (map) => {
      mapRef.current = map;
      if (props.isSingle) {
        setCenter({
          lat: props.studios[0]!.lat,
          lng: props.studios[0]!.lon,
        });
        setZoom(16);
      } else {
        // fitBounds(map);
      }
    },
    [props.studios]
  );

  const [selected, setSelected] = useState<any>();

  const fitBounds = (map: any) => {
    const bounds = new window.google.maps.LatLngBounds();
    if (props.studios) {
      props.studios.forEach((location: any) => {
        var myLatLng = new window.google.maps.LatLng(
          location!.lat,
          location!.lon
        );
        bounds.extend(myLatLng);
      });
    }
    map.fitBounds(bounds);
  };

  if (loadError) return <div>Error loading maps.</div>;
  if (!isLoaded)
    return (
      <div
        style={{
          background: "#eee",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          height: "100%",
        }}
      >
        <IonLoading isOpen={!isLoaded} message="Loading map..." />
      </div>
    );

  return (
    <>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={zoom}
        center={center}
        options={options}
        onLoad={onMapLoad}
      >
        {props.studios.map((studio: any, index: number) => {
          return (
            <Marker
              key={index}
              position={{
                lat: studio!.lat,
                lng: studio!.lon,
              }}
              label={studio.st}
              icon={{
                url: `./assets/icon/map_marker_route_${parseInt(studio.st) < 30 ? "1" : "2"}.svg`,
                scaledSize: new window.google.maps.Size(40, 40),
                origin: new window.google.maps.Point(0, 0),
                // anchor: new window.google.maps.Point(15, 30),
              }}
              onClick={() => {
                setCenter({
                  lat: studio!.lat,
                  lng: studio!.lon,
                });
                setSelected(studio);
              }}
            />
          );
        })}

        {selected ? (
          <InfoWindow
            options={{
              pixelOffset: new window.google.maps.Size(0, -10),

              position: {
                lat: selected!.lat,
                lng: selected!.lon,
              },
            }}
            onCloseClick={() => {
              setSelected(null);
            }}
          >
            <div className="infowindow">
              <ListItemStudio
                studioNumber={selected.st}
                image={selected.img}
                name={selected.name}
                dis={selected.dis}
                mini={true}
              />
            </div>
          </InfoWindow>
        ) : null}
      </GoogleMap>
      <div className="ion-padding">
        {props.isSingle && (
          <IonButton onClick={props.onDismiss}>Close</IonButton>
        )}
      </div>
    </>
  );
};

export default MapWithMarkers;

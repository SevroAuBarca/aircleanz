import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import toast, { Toaster } from "react-hot-toast";
const Container = () => {
  const getToast = () =>
    toast.custom(() => (
      <div className="p-5">
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl p-5 flex gap-4">
          <div className="w-16 shadow-2xl flex justify-center items-center bg-transparent">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="3em"
              viewBox="0 0 24 24"
            >
              <path
                fill="#ffffff"
                d="M2 10q0-2.2.888-4.163T5.425 2.45l1.425 1.4Q5.5 5.025 4.75 6.613T4 10H2Zm18 0q0-1.8-.75-3.388t-2.1-2.762l1.425-1.4q1.65 1.425 2.538 3.388T22 10h-2ZM4 19v-2h2v-7q0-2.075 1.25-3.688T10.5 4.2V2h3v2.2q2 .5 3.25 2.113T18 10v7h2v2H4Zm8 3q-.825 0-1.413-.588T10 20h4q0 .825-.588 1.413T12 22Z"
              ></path>
            </svg>
          </div>
          <div>
            <p className="text-sm text-white italic">
              Tu Contenedor esta por llenarse!
            </p>
            <p className="text-sm text-white italic">Maximo capacidad: 80%</p>
          </div>
        </div>
      </div>
    ));

  return (
    <>
      <Toaster position="bottom-right" />
      <MapContainer
        center={[18.828734762646004, -98.92119998756075]}
        zoom={20}
        scrollWheelZoom={false}
        className="z-10"
        style={{ height: "100vh", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[18.828399656910193, -98.92040605378304]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        <Marker position={[18.828529, -98.920229]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </>
  );
};

export default Container;

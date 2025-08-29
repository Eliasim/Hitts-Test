/* eslint-disable jsx-a11y/alt-text */
import { useEffect, useState } from "react";

import logoSochi from "../src/img/logo-sochi-color.png";
import logoClaro from "../src/img/logo-claro-sports.png";
import imgTeamLatam from "../src/img/team-latam.png";
import imgTravelMeets from "../src/img/travel-meets-fashion.png";
import imgVelocidad from "../src/img/velocidad-riesgo.png";
import imgExperiencia from "../src/img/experiencia.png";
import icon from "../src/img/mobli-icon.png";
import background from "../src/img/background.jpg";
import FrameTrailer from "./Components/FrameVideo";
import VideoThumbnail from "../src/Components/Sports";
import Countdown from "../src/Components/CountDown";

import "./App.css";

function App() {
  const [showFrame] = useState(true);
  const [selectedVideo, setSelectedVideo] = useState(
    "https://www.youtube.com/embed/Icrk74Ku5Ow"
  );

  const handleSelect = (video) => {
    setSelectedVideo(video);
  };

  useEffect(() => {
    setSelectedVideo("https://www.youtube.com/embed/Icrk74Ku5Ow");
  }, []);

  return (
    <div className="App exo">
      <nav className="fixed top-0 w-full h-20 flex justify-around items-center shadow-xl px-2 py-1 bg-black border-b-8 border-red-500">
        <img src={logoSochi} className="h-[80%] sm:h-full" />
        <img src={logoClaro} className="h-[80%] sm:h-full" />
      </nav>
      <section
        id="Section"
        className="w-full h-full flex flex-col justify-center items-center bg-cover py-10 mt-20"
        style={{ backgroundImage: `url(${background})` }}
      >
        <label class="text-white text-center text-justify text-3xl font-bold">
          FALTAN
        </label>
        <Countdown />
        {showFrame && <FrameTrailer data={selectedVideo} />}
      </section>
      <section
        id="Section"
        className="w-full h-full flex flex-col justify-center items-center bg-[#222222] py-10"
      >
        <label className="text-white text-center text-justify text-xl sm:text-3xl font-semibold">
          CLARO SPORTS EN SOCHI 2014
        </label>
        <div className="w-full h-full flex flex-wrap justify-center items-center mt-10">
          <VideoThumbnail
            img={imgTeamLatam}
            label="TEAM LATAM"
            video="https://www.youtube.com/embed/Icrk74Ku5Ow"
            onSelect={handleSelect}
            isActive={
              selectedVideo === "https://www.youtube.com/embed/Icrk74Ku5Ow"
            }
          />
          <VideoThumbnail
            img={imgTravelMeets}
            label="TRAVEL MEETS FASHION"
            video="https://www.youtube.com/embed/OyIsUTIVQlQ"
            onSelect={handleSelect}
            isActive={
              selectedVideo === "https://www.youtube.com/embed/OyIsUTIVQlQ"
            }
          />
          <VideoThumbnail
            img={imgVelocidad}
            label="VELOCIDAD Y RIESGO"
            video="https://www.youtube.com/embed/SfX5Ar88_U0"
            onSelect={handleSelect}
            isActive={
              selectedVideo === "https://www.youtube.com/embed/SfX5Ar88_U0"
            }
          />
          <VideoThumbnail
            img={imgExperiencia}
            label="EXPERIENCIA MULTIMEDIA"
            video="https://www.youtube.com/embed/o3SftJsjrSI"
            onSelect={handleSelect}
            isActive={
              selectedVideo === "https://www.youtube.com/embed/o3SftJsjrSI"
            }
          />
        </div>
      </section>
      <footer class="w-full sm:h-20 flex max-sm:flex-col justify-evenly items-center bg-black py-3">
        <label class="text-white">Aviso de privacidad / Contacto</label>
        <img src={logoSochi} className="h-full max-sm:my-4" />
        <div className="flex flex-row justify-center items-center">
          <span className="flex flex-col justify-center items-center mx-2 bg-[#64abf3] p-2 rounded">
            <img src={icon} className="h-6" />
          </span>
          <span className="flex flex-col justify-center items-center mx-2 bg-[#57aceb] p-2 rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              class="bi bi-twitter h-6"
              viewBox="0 0 16 16"
            >
              <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15" />
            </svg>
          </span>
          <span className="flex flex-col justify-center items-center mx-2 bg-[#3a599c] p-2 rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              class="bi bi-facebook h-6"
              viewBox="0 0 16 16"
            >
              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
            </svg>
          </span>
          <span className="flex flex-col justify-center items-center mx-2 bg-[#a22a1f] p-2 rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              class="bi bi-youtube h-6"
              viewBox="0 0 16 16"
            >
              <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
            </svg>
          </span>
        </div>
      </footer>
    </div>
  );
}

export default App;

import { Canvas } from "@react-three/fiber";
import { ScrollControls, Loader } from "@react-three/drei";
import { Suspense, useState } from "react";
import Scene from "./Scene";
const nightSky = `linear-gradient(
        180deg,
        hsl(240deg 57% 3%) 0%,
        hsl(235deg 32% 6%) 11%,
        hsl(231deg 24% 8%) 22%,
        hsl(226deg 23% 10%) 33%,
        hsl(222deg 25% 11%) 44%,
        hsl(219deg 28% 13%) 56%,
        hsl(217deg 30% 15%) 67%,
        hsl(214deg 32% 16%) 78%,
        hsl(212deg 34% 18%) 89%,
        hsl(211, 36%, 19%) 100% 
      )`;
const daySky = `linear-gradient(
        180deg,
        hsl(216deg 46% 68%) 0%,
        hsl(234deg 38% 73%) 11%,
        hsl(263deg 33% 75%) 22%,
        hsl(295deg 27% 74%) 33%,
        hsl(324deg 38% 78%) 44%,
        hsl(341deg 50% 81%) 56%,
        hsl(355deg 58% 84%) 67%,
        hsl(7deg 65% 85%) 78%,
        hsl(17deg 67% 86%) 89%,
        hsl(26deg 65% 87%) 100%
      )`;
const containerStyles = {
  background: `linear-gradient(
        180deg,
        hsl(216deg 46% 68%) 0%,
        hsl(234deg 38% 73%) 11%,
        hsl(263deg 33% 75%) 22%,
        hsl(295deg 27% 74%) 33%,
        hsl(324deg 38% 78%) 44%,
        hsl(341deg 50% 81%) 56%,
        hsl(355deg 58% 84%) 67%,
        hsl(7deg 65% 85%) 78%,
        hsl(17deg 67% 86%) 89%,
        hsl(26deg 65% 87%) 100%
      )`,
};
const barStyles = {
  height: "10px",
  borderRadius: "7px",
  background: " rgb(255, 255, 255)",
  transition: "0.5s",
};

const innerStyles = {
  background: "rgba(236, 236, 238, 0.253)",
  borderRadius: "7px",
  height: "10px",
};
function App() {
  const [isNight, setIsNight] = useState(false);

  return (
    <>
      <div className="Overlay">
        <label className="switch">
          <span className="sun">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="58"
              height="58"
              viewBox="0 0 464 464"
            >
              <path
                fill="#ffe773"
                d="M449.66,196.55l-8.63-8.92c-10.94-11.31-16.04-27.02-13.84-42.59l1.74-12.3	c3.85-27.23-14.59-52.6-41.68-57.36l-12.23-2.14c-15.49-2.72-28.85-12.43-36.23-26.32l-5.81-10.97	c-12.89-24.29-42.73-33.99-67.43-21.91l-11.16,5.45c-14.13,6.91-30.65,6.91-44.78,0l-11.16-5.45c-24.7-12.08-54.54-2.38-67.43,21.91	l-5.81,10.97c-7.38,13.89-20.74,23.6-36.23,26.32l-12.23,2.14c-27.09,4.76-45.53,30.13-41.68,57.36l1.74,12.3	c2.2,15.57-2.9,31.28-13.84,42.59l-8.63,8.92c-19.12,19.771-19.12,51.13,0,70.9l8.63,8.92c10.94,11.31,16.04,27.02,13.84,42.59	l-1.74,12.3c-3.85,27.23,14.59,52.601,41.68,57.36l12.23,2.14c15.49,2.721,28.85,12.431,36.23,26.32l5.81,10.97	c12.89,24.29,42.73,33.99,67.43,21.91l11.16-5.45c14.13-6.91,30.65-6.91,44.78,0l11.16,5.45c24.7,12.08,54.54,2.38,67.43-21.91	l5.81-10.97c7.38-13.89,20.74-23.6,36.23-26.32l12.23-2.14c27.09-4.76,45.53-30.13,41.68-57.36l-1.74-12.3	c-2.2-15.57,2.9-31.28,13.84-42.59l8.63-8.92C468.78,247.68,468.78,216.32,449.66,196.55z"
              ></path>
              <circle cx="232" cy="232" r="157" fill="#fff0a6"></circle>
              <path
                fill="#fff8d6"
                d="M238.697,107.314c-74.668,16.998-129.396,91.737-123.851,168.186	c1.387,19.123-25.715,24.468-31.79,6.283C48.742,179.068,127.124,72.703,235.449,75.037	C254.78,75.454,257.55,103.022,238.697,107.314z"
              ></path>
              <path
                fill="#fff"
                d="M184.566,142.702c-2.962,0-5.809-1.652-7.195-4.493c-1.938-3.971-0.29-8.76,3.68-10.698l1.23-0.601	c3.971-1.938,8.76-0.29,10.699,3.681c1.938,3.971,0.29,8.76-3.68,10.698C187.761,142.04,186.606,142.702,184.566,142.702z"
              ></path>
              <path
                fill="#fff"
                d="M128.005,212.352c-5.217,0-9.065-4.928-7.75-10.007c5.043-19.479,15.186-37.43,29.331-51.915	c3.087-3.16,8.152-3.222,11.313-0.134c3.161,3.087,3.221,8.152,0.134,11.313c-12.199,12.491-20.944,27.964-25.289,44.745	C134.811,209.96,131.564,212.352,128.005,212.352z"
              ></path>
            </svg>
          </span>
          <span className="moon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <path d="m223.5 32c-123.5 0-223.5 100.3-223.5 224s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"></path>
            </svg>
          </span>
          <input
            type="checkbox"
            className="input"
            onClick={() => setIsNight((isNight) => !isNight)}
          />
          <span className="slider"></span>
        </label>
      </div>
      <div className="logo">
        <span>Designed by </span>
        <a href="https://vi-nguyen.vercel.app/" target="_blank">
          Vi Nguyen
        </a>
      </div>
      <Canvas
        camera={{ position: [0, -9, 30], fov: 45 }}
        style={{ background: isNight ? nightSky : daySky }}
      >
        <ambientLight
          intensity={!isNight ? 0.5 : 0.1}
          color={isNight ? "#92b0d0" : "white"}
        />
        <hemisphereLight
          intensity={!isNight ? 0.8 : 0.1}
          color={isNight ? "#92b0d0" : "white"}
        />
        <directionalLight intensity={!isNight ? 1 : 0} />
        <Suspense fallback={null}>
          <ScrollControls pages={6}>
            <Scene isNight={isNight} />
          </ScrollControls>
        </Suspense>
      </Canvas>
      <Loader
        containerStyles={containerStyles}
        barStyles={barStyles}
        innerStyles={innerStyles}
      />
    </>
  );
}

export default App;

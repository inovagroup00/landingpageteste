import React from "react";
import { Composition } from "remotion";
import { LandingPage } from "./LandingPage";

// Total duration: 3s hero + 4s features + 3s cta = 10s at 30fps = 300 frames
const TOTAL_FRAMES = 300;
const FPS = 30;
const WIDTH = 1920;
const HEIGHT = 1080;

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="LandingPage"
        component={LandingPage}
        durationInFrames={TOTAL_FRAMES}
        fps={FPS}
        width={WIDTH}
        height={HEIGHT}
      />
    </>
  );
};

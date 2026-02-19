import React from "react";
import {
  AbsoluteFill,
  interpolate,
  Sequence,
  useCurrentFrame,
} from "remotion";
import { Hero } from "./scenes/Hero";
import { Features } from "./scenes/Features";
import { AppShowcase } from "./scenes/AppShowcase";
import { CTA } from "./scenes/CTA";

// Total: 900 frames = 30 seconds at 30fps
const HERO_DURATION     = 220; // 7.3s
const FEATURES_DURATION = 240; // 8s
const APP_DURATION      = 240; // 8s
const CTA_DURATION      = 200; // 6.7s
const FADE              = 20;  // 0.7s fade

const Fade: React.FC<{ startAt: number; children: React.ReactNode }> = ({ startAt, children }) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [startAt, startAt + FADE], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  return <AbsoluteFill style={{ opacity }}>{children}</AbsoluteFill>;
};

export const Hub360Video: React.FC = () => {
  const f1 = 0;
  const f2 = HERO_DURATION;
  const f3 = f2 + FEATURES_DURATION;
  const f4 = f3 + APP_DURATION;

  return (
    <AbsoluteFill>
      {/* Scene 1 — Hero */}
      <Sequence from={f1} durationInFrames={HERO_DURATION + FADE}>
        <Fade startAt={0}>
          <Hero />
        </Fade>
      </Sequence>

      {/* Scene 2 — Features */}
      <Sequence from={f2} durationInFrames={FEATURES_DURATION + FADE}>
        <Fade startAt={0}>
          <Features />
        </Fade>
      </Sequence>

      {/* Scene 3 — App Showcase */}
      <Sequence from={f3} durationInFrames={APP_DURATION + FADE}>
        <Fade startAt={0}>
          <AppShowcase />
        </Fade>
      </Sequence>

      {/* Scene 4 — CTA */}
      <Sequence from={f4} durationInFrames={CTA_DURATION}>
        <Fade startAt={0}>
          <CTA />
        </Fade>
      </Sequence>
    </AbsoluteFill>
  );
};

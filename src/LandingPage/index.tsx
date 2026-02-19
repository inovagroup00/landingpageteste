import React from "react";
import {
  AbsoluteFill,
  interpolate,
  Sequence,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { CTA } from "./components/CTA";
import { Features } from "./components/Features";
import { Hero } from "./components/Hero";

// Duration of each scene in frames (at 30fps)
const HERO_DURATION = 90;      // 3s
const FEATURES_DURATION = 120; // 4s
const CTA_DURATION = 90;       // 3s
const TRANSITION_DURATION = 15; // 0.5s fade

const FadeTransition: React.FC<{
  startAt: number;
  children: React.ReactNode;
}> = ({ startAt, children }) => {
  const frame = useCurrentFrame();

  const opacity = interpolate(
    frame,
    [startAt, startAt + TRANSITION_DURATION],
    [0, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  return (
    <AbsoluteFill style={{ opacity }}>
      {children}
    </AbsoluteFill>
  );
};

export const LandingPage: React.FC = () => {
  return (
    <AbsoluteFill>
      {/* Hero Scene */}
      <Sequence from={0} durationInFrames={HERO_DURATION + TRANSITION_DURATION}>
        <FadeTransition startAt={0}>
          <Hero />
        </FadeTransition>
      </Sequence>

      {/* Features Scene */}
      <Sequence
        from={HERO_DURATION}
        durationInFrames={FEATURES_DURATION + TRANSITION_DURATION}
      >
        <FadeTransition startAt={0}>
          <Features />
        </FadeTransition>
      </Sequence>

      {/* CTA Scene */}
      <Sequence from={HERO_DURATION + FEATURES_DURATION}>
        <FadeTransition startAt={0}>
          <CTA />
        </FadeTransition>
      </Sequence>
    </AbsoluteFill>
  );
};

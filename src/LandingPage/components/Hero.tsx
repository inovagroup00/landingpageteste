import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

export const Hero: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleProgress = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 80 },
    durationInFrames: 40,
  });

  const subtitleProgress = spring({
    frame: frame - 20,
    fps,
    config: { damping: 12, stiffness: 80 },
    durationInFrames: 40,
  });

  const badgeProgress = spring({
    frame: frame - 5,
    fps,
    config: { damping: 15, stiffness: 100 },
    durationInFrames: 30,
  });

  const titleY = interpolate(titleProgress, [0, 1], [60, 0]);
  const subtitleY = interpolate(subtitleProgress, [0, 1], [40, 0]);

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px",
        fontFamily: "'Inter', 'Segoe UI', sans-serif",
      }}
    >
      {/* Badge */}
      <div
        style={{
          opacity: badgeProgress,
          transform: `scale(${badgeProgress})`,
          marginBottom: "32px",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            background: "rgba(255, 255, 255, 0.1)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            borderRadius: "100px",
            padding: "8px 24px",
            gap: "8px",
          }}
        >
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#4ade80",
            }}
          />
          <span
            style={{
              color: "rgba(255, 255, 255, 0.9)",
              fontSize: "22px",
              fontWeight: 500,
              letterSpacing: "0.5px",
            }}
          >
            Novo produto disponível
          </span>
        </div>
      </div>

      {/* Title */}
      <div
        style={{
          opacity: titleProgress,
          transform: `translateY(${titleY}px)`,
          textAlign: "center",
          marginBottom: "32px",
        }}
      >
        <h1
          style={{
            margin: 0,
            fontSize: "96px",
            fontWeight: 800,
            lineHeight: 1.1,
            background: "linear-gradient(135deg, #ffffff 0%, #a78bfa 50%, #60a5fa 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            letterSpacing: "-2px",
          }}
        >
          Transforme sua
          <br />
          presença digital
        </h1>
      </div>

      {/* Subtitle */}
      <div
        style={{
          opacity: subtitleProgress,
          transform: `translateY(${subtitleY}px)`,
          textAlign: "center",
          maxWidth: "800px",
        }}
      >
        <p
          style={{
            margin: 0,
            fontSize: "36px",
            fontWeight: 400,
            color: "rgba(255, 255, 255, 0.6)",
            lineHeight: 1.5,
          }}
        >
          Criamos experiências digitais que encantam seus clientes
          e fazem seu negócio crescer exponencialmente.
        </p>
      </div>

      {/* Decorative circles */}
      <div
        style={{
          position: "absolute",
          top: "-100px",
          right: "-100px",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(167, 139, 250, 0.15) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-150px",
          left: "-100px",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(96, 165, 250, 0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
    </AbsoluteFill>
  );
};

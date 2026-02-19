import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

export const CTA: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const containerProgress = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 80 },
    durationInFrames: 40,
  });

  const titleProgress = spring({
    frame: frame - 10,
    fps,
    config: { damping: 12, stiffness: 80 },
    durationInFrames: 40,
  });

  const buttonProgress = spring({
    frame: frame - 25,
    fps,
    config: { damping: 14, stiffness: 100 },
    durationInFrames: 30,
  });

  const titleY = interpolate(titleProgress, [0, 1], [50, 0]);
  const buttonY = interpolate(buttonProgress, [0, 1], [30, 0]);

  const glowOpacity = interpolate(frame, [0, 30, 60], [0, 0.6, 1], {
    extrapolateRight: "clamp",
  });

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
      {/* Glow background */}
      <div
        style={{
          position: "absolute",
          width: "700px",
          height: "700px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(139, 92, 246, 0.2) 0%, transparent 70%)",
          opacity: glowOpacity,
          pointerEvents: "none",
        }}
      />

      {/* Card */}
      <div
        style={{
          opacity: containerProgress,
          background: "linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(96, 165, 250, 0.1))",
          border: "1px solid rgba(139, 92, 246, 0.3)",
          borderRadius: "32px",
          padding: "80px 100px",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "40px",
          maxWidth: "1000px",
          width: "100%",
        }}
      >
        <div
          style={{
            opacity: titleProgress,
            transform: `translateY(${titleY}px)`,
          }}
        >
          <p
            style={{
              margin: "0 0 20px 0",
              fontSize: "22px",
              fontWeight: 600,
              color: "#a78bfa",
              letterSpacing: "3px",
              textTransform: "uppercase",
            }}
          >
            Comece hoje mesmo
          </p>
          <h2
            style={{
              margin: 0,
              fontSize: "72px",
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.15,
              letterSpacing: "-1px",
            }}
          >
            Pronto para
            <br />
            decolar?
          </h2>
          <p
            style={{
              margin: "24px 0 0 0",
              fontSize: "28px",
              color: "rgba(255, 255, 255, 0.6)",
              lineHeight: 1.5,
            }}
          >
            Junte-se a mais de 10.000 empresas que já transformaram
            seu negócio com nossa plataforma.
          </p>
        </div>

        {/* Buttons */}
        <div
          style={{
            opacity: buttonProgress,
            transform: `translateY(${buttonY}px)`,
            display: "flex",
            gap: "20px",
          }}
        >
          <div
            style={{
              background: "linear-gradient(135deg, #8b5cf6, #6366f1)",
              borderRadius: "100px",
              padding: "22px 56px",
              fontSize: "28px",
              fontWeight: 700,
              color: "#ffffff",
              boxShadow: "0 0 40px rgba(139, 92, 246, 0.5)",
            }}
          >
            Começar grátis
          </div>
          <div
            style={{
              background: "transparent",
              border: "2px solid rgba(255, 255, 255, 0.3)",
              borderRadius: "100px",
              padding: "22px 56px",
              fontSize: "28px",
              fontWeight: 600,
              color: "rgba(255, 255, 255, 0.8)",
            }}
          >
            Falar com vendas
          </div>
        </div>

        {/* Social proof */}
        <div
          style={{
            opacity: buttonProgress,
            display: "flex",
            alignItems: "center",
            gap: "16px",
            color: "rgba(255, 255, 255, 0.5)",
            fontSize: "22px",
          }}
        >
          <span>✓ Sem cartão de crédito</span>
          <span style={{ opacity: 0.4 }}>•</span>
          <span>✓ 14 dias grátis</span>
          <span style={{ opacity: 0.4 }}>•</span>
          <span>✓ Cancele quando quiser</span>
        </div>
      </div>
    </AbsoluteFill>
  );
};

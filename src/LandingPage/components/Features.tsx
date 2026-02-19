import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

interface Feature {
  icon: string;
  title: string;
  description: string;
  color: string;
}

const features: Feature[] = [
  {
    icon: "⚡",
    title: "Ultra Rápido",
    description: "Performance otimizada para carregar em menos de 1 segundo",
    color: "linear-gradient(135deg, #f59e0b, #ef4444)",
  },
  {
    icon: "🎨",
    title: "Design Moderno",
    description: "Interfaces bonitas e intuitivas que encantam os usuários",
    color: "linear-gradient(135deg, #8b5cf6, #ec4899)",
  },
  {
    icon: "📈",
    title: "Alta Conversão",
    description: "Estratégias comprovadas para converter visitantes em clientes",
    color: "linear-gradient(135deg, #10b981, #06b6d4)",
  },
];

const FeatureCard: React.FC<{ feature: Feature; delay: number }> = ({
  feature,
  delay,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const progress = spring({
    frame: frame - delay,
    fps,
    config: { damping: 14, stiffness: 90 },
    durationInFrames: 40,
  });

  const y = interpolate(progress, [0, 1], [80, 0]);

  return (
    <div
      style={{
        opacity: progress,
        transform: `translateY(${y}px)`,
        flex: 1,
        background: "rgba(255, 255, 255, 0.05)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        borderRadius: "24px",
        padding: "48px 40px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <div
        style={{
          width: "72px",
          height: "72px",
          borderRadius: "18px",
          background: feature.color,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "36px",
        }}
      >
        {feature.icon}
      </div>
      <h3
        style={{
          margin: 0,
          fontSize: "36px",
          fontWeight: 700,
          color: "#ffffff",
        }}
      >
        {feature.title}
      </h3>
      <p
        style={{
          margin: 0,
          fontSize: "26px",
          fontWeight: 400,
          color: "rgba(255, 255, 255, 0.55)",
          lineHeight: 1.5,
        }}
      >
        {feature.description}
      </p>
    </div>
  );
};

export const Features: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleProgress = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 80 },
    durationInFrames: 40,
  });

  const titleY = interpolate(titleProgress, [0, 1], [40, 0]);

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(135deg, #0f0c29, #1a1040, #0f0c29)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px",
        fontFamily: "'Inter', 'Segoe UI', sans-serif",
        gap: "60px",
      }}
    >
      <div
        style={{
          opacity: titleProgress,
          transform: `translateY(${titleY}px)`,
          textAlign: "center",
        }}
      >
        <p
          style={{
            margin: "0 0 16px 0",
            fontSize: "22px",
            fontWeight: 600,
            color: "#a78bfa",
            letterSpacing: "3px",
            textTransform: "uppercase",
          }}
        >
          Por que nos escolher
        </p>
        <h2
          style={{
            margin: 0,
            fontSize: "72px",
            fontWeight: 800,
            color: "#ffffff",
            letterSpacing: "-1px",
          }}
        >
          Tudo que você precisa
        </h2>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "32px",
          width: "100%",
        }}
      >
        {features.map((feature, index) => (
          <FeatureCard
            key={feature.title}
            feature={feature}
            delay={index * 15}
          />
        ))}
      </div>
    </AbsoluteFill>
  );
};

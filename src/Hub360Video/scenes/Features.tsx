import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

const services = [
  {
    icon: "🏦",
    title: "Conta Digital",
    desc: "Conta completa com extrato, saldo e movimentações em tempo real",
    color: "#25acfa",
    bg: "rgba(37,172,250,0.12)",
    border: "rgba(37,172,250,0.25)",
  },
  {
    icon: "💳",
    title: "Cartão Virtual",
    desc: "Emissão de cartão pré-pago e crédito com sua marca",
    color: "#f6c855",
    bg: "rgba(246,200,85,0.12)",
    border: "rgba(246,200,85,0.25)",
  },
  {
    icon: "⚡",
    title: "PIX Instantâneo",
    desc: "Transferências e cobranças via PIX 24h por dia, 7 dias por semana",
    color: "#00c805",
    bg: "rgba(0,200,5,0.1)",
    border: "rgba(0,200,5,0.25)",
  },
  {
    icon: "📊",
    title: "Dashboard Completo",
    desc: "Gestão financeira com relatórios e análises em tempo real",
    color: "#e4187d",
    bg: "rgba(228,24,125,0.1)",
    border: "rgba(228,24,125,0.25)",
  },
];

const Card: React.FC<{ service: typeof services[0]; delay: number }> = ({ service, delay }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const progress = spring({
    frame: frame - delay,
    fps,
    config: { damping: 14, stiffness: 85 },
    durationInFrames: 45,
  });

  const y = interpolate(progress, [0, 1], [90, 0]);

  return (
    <div style={{
      opacity: progress,
      transform: `translateY(${y}px)`,
      background: service.bg,
      border: `1.5px solid ${service.border}`,
      borderRadius: "28px",
      padding: "44px 40px",
      display: "flex",
      flexDirection: "column",
      gap: "18px",
      flex: 1,
    }}>
      <div style={{
        width: "68px", height: "68px", borderRadius: "20px",
        background: `${service.color}22`,
        border: `1.5px solid ${service.color}44`,
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: "34px",
      }}>
        {service.icon}
      </div>
      <h3 style={{
        margin: 0, fontSize: "32px", fontWeight: 800,
        color: "#ffffff", letterSpacing: "-0.5px",
      }}>
        {service.title}
      </h3>
      <p style={{
        margin: 0, fontSize: "22px",
        color: "rgba(255,255,255,0.5)", lineHeight: 1.55,
      }}>
        {service.desc}
      </p>
      <div style={{
        display: "inline-flex", alignItems: "center", gap: "8px",
        marginTop: "auto",
      }}>
        <span style={{ color: service.color, fontSize: "20px", fontWeight: 600 }}>
          Saiba mais →
        </span>
      </div>
    </div>
  );
};

export const Features: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleProgress = spring({ frame, fps, config: { damping: 13, stiffness: 80 }, durationInFrames: 40 });
  const titleY = interpolate(titleProgress, [0, 1], [40, 0]);

  return (
    <AbsoluteFill style={{
      background: "#030302",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "70px 80px",
      fontFamily: "'Inter', 'Segoe UI', sans-serif",
      gap: "52px",
      overflow: "hidden",
    }}>
      {/* Subtle grid background */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "linear-gradient(rgba(37,172,250,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(37,172,250,0.05) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
        pointerEvents: "none",
      }} />

      {/* Title */}
      <div style={{
        opacity: titleProgress,
        transform: `translateY(${titleY}px)`,
        textAlign: "center",
        position: "relative",
      }}>
        <p style={{
          margin: "0 0 14px",
          fontSize: "20px", fontWeight: 700,
          color: "#f6c855",
          letterSpacing: "4px",
          textTransform: "uppercase",
        }}>
          Tudo em uma plataforma
        </p>
        <h2 style={{
          margin: 0,
          fontSize: "72px", fontWeight: 900,
          color: "#ffffff", letterSpacing: "-2px",
        }}>
          Soluções financeiras{" "}
          <span style={{
            background: "linear-gradient(90deg, #25acfa, #0540d0)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>completas</span>
        </h2>
      </div>

      {/* Cards */}
      <div style={{
        display: "flex",
        flexDirection: "row",
        gap: "24px",
        width: "100%",
      }}>
        {services.map((service, i) => (
          <Card key={service.title} service={service} delay={i * 18} />
        ))}
      </div>
    </AbsoluteFill>
  );
};

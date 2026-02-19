import React from "react";
import {
  AbsoluteFill,
  Img,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

// App screenshots from Hub360 CDN
const appImages = [
  "https://framerusercontent.com/images/0DiMi5PU18AYQCX96RccOfQcL4.png",
  "https://framerusercontent.com/images/0jIJVpbHKN9qqGILrFqPlyD3Q.png",
  "https://framerusercontent.com/images/0pV3YEAumHmZ2B0EiuxYtPbVfE.png",
  "https://framerusercontent.com/images/180aOHwTC6KUVIWrDOmL9BjCPg.png",
  "https://framerusercontent.com/images/1Pu4NO75GrUIeVJqSp3My526qY.png",
  "https://framerusercontent.com/images/CBpLjavJLKGEdfr5sndIr5uRQY.png",
];

const stats = [
  { value: "10K+", label: "Clientes ativos", color: "#25acfa" },
  { value: "R$50M+", label: "Processados/mês", color: "#f6c855" },
  { value: "99.9%", label: "Uptime garantido", color: "#00c805" },
];

const StatCard: React.FC<{ stat: typeof stats[0]; delay: number }> = ({ stat, delay }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const progress = spring({ frame: frame - delay, fps, config: { damping: 14, stiffness: 90 }, durationInFrames: 35 });
  return (
    <div style={{
      opacity: progress,
      transform: `scale(${interpolate(progress, [0, 1], [0.8, 1])})`,
      background: "rgba(255,255,255,0.04)",
      border: "1px solid rgba(255,255,255,0.08)",
      borderRadius: "20px",
      padding: "32px 40px",
      textAlign: "center",
      flex: 1,
    }}>
      <div style={{ fontSize: "60px", fontWeight: 900, color: stat.color, letterSpacing: "-2px" }}>
        {stat.value}
      </div>
      <div style={{ fontSize: "22px", color: "rgba(255,255,255,0.5)", marginTop: "8px" }}>
        {stat.label}
      </div>
    </div>
  );
};

export const AppShowcase: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleProgress = spring({ frame, fps, config: { damping: 13, stiffness: 80 }, durationInFrames: 40 });
  const leftProgress = spring({ frame: frame - 10, fps, config: { damping: 13, stiffness: 70 }, durationInFrames: 50 });
  const rightProgress = spring({ frame: frame - 20, fps, config: { damping: 13, stiffness: 70 }, durationInFrames: 50 });

  // Slow pan on images
  const panOffset = interpolate(frame, [0, 210], [0, -40], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{
      background: "#030302",
      display: "flex",
      flexDirection: "row",
      fontFamily: "'Inter', 'Segoe UI', sans-serif",
      overflow: "hidden",
    }}>
      {/* Left: App screenshots grid */}
      <div style={{
        flex: 1.1,
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "16px",
        padding: "60px 32px 60px 80px",
        opacity: leftProgress,
        transform: `translateX(${interpolate(leftProgress, [0, 1], [-60, 0])}px) translateY(${panOffset}px)`,
      }}>
        {appImages.map((url, i) => (
          <div key={url} style={{
            borderRadius: "16px",
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.08)",
            background: "#111",
            aspectRatio: "9/16",
            boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
          }}>
            <Img
              src={url}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        ))}
      </div>

      {/* Right: Text + Stats */}
      <div style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px 80px 80px 48px",
        gap: "40px",
        opacity: rightProgress,
        transform: `translateX(${interpolate(rightProgress, [0, 1], [60, 0])}px)`,
      }}>
        <div>
          <p style={{
            margin: "0 0 16px",
            fontSize: "18px", fontWeight: 700,
            color: "#f6c855", letterSpacing: "4px",
            textTransform: "uppercase",
          }}>
            App completo
          </p>
          <h2 style={{
            margin: "0 0 24px",
            fontSize: "62px", fontWeight: 900,
            color: "#ffffff", lineHeight: 1.1, letterSpacing: "-1.5px",
          }}>
            Seu banco no
            <br />
            <span style={{
              background: "linear-gradient(135deg, #25acfa, #0540d0)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>bolso do cliente</span>
          </h2>
          <p style={{
            margin: 0, fontSize: "24px",
            color: "rgba(255,255,255,0.5)", lineHeight: 1.6,
          }}>
            App com sua marca, suas cores e sua identidade.
            Experiência financeira premium para seus clientes.
          </p>
        </div>

        {/* Stats */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} delay={30 + i * 15} />
          ))}
        </div>
      </div>
    </AbsoluteFill>
  );
};

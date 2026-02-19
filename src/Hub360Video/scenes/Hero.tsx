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

  const logoProgress = spring({ frame, fps, config: { damping: 15, stiffness: 80 }, durationInFrames: 35 });
  const line1Progress = spring({ frame: frame - 12, fps, config: { damping: 14, stiffness: 75 }, durationInFrames: 40 });
  const line2Progress = spring({ frame: frame - 22, fps, config: { damping: 14, stiffness: 75 }, durationInFrames: 40 });
  const line3Progress = spring({ frame: frame - 32, fps, config: { damping: 14, stiffness: 75 }, durationInFrames: 40 });
  const subProgress = spring({ frame: frame - 50, fps, config: { damping: 14, stiffness: 80 }, durationInFrames: 35 });
  const badgeProgress = spring({ frame: frame - 65, fps, config: { damping: 14, stiffness: 90 }, durationInFrames: 30 });

  const pulseScale = 1 + Math.sin(frame * 0.04) * 0.015;
  const glowOpacity = interpolate(frame, [40, 80], [0, 1], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{
      background: "#030302",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "'Inter', 'Segoe UI', sans-serif",
      overflow: "hidden",
    }}>
      {/* Background glow blobs */}
      <div style={{
        position: "absolute", top: "-200px", left: "50%",
        transform: "translateX(-50%)",
        width: "900px", height: "600px", borderRadius: "50%",
        background: "radial-gradient(ellipse, rgba(5,64,208,0.35) 0%, transparent 70%)",
        opacity: glowOpacity, pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "-200px", left: "-100px",
        width: "600px", height: "600px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(246,200,85,0.12) 0%, transparent 70%)",
        opacity: glowOpacity, pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "-100px", right: "-100px",
        width: "500px", height: "500px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(37,172,250,0.12) 0%, transparent 70%)",
        opacity: glowOpacity, pointerEvents: "none",
      }} />

      {/* Logo */}
      <div style={{
        opacity: logoProgress,
        transform: `scale(${interpolate(logoProgress, [0, 1], [0.7, 1])})`,
        marginBottom: "48px",
        display: "flex",
        alignItems: "center",
        gap: "16px",
      }}>
        {/* Hub360 logo icon */}
        <div style={{
          width: "64px", height: "64px", borderRadius: "18px",
          background: "linear-gradient(135deg, #0540d0, #25acfa)",
          display: "flex", alignItems: "center", justifyContent: "center",
          transform: `scale(${pulseScale})`,
          boxShadow: "0 0 40px rgba(37,172,250,0.5)",
        }}>
          <span style={{ color: "#fff", fontSize: "28px", fontWeight: 900 }}>H</span>
        </div>
        <span style={{
          color: "#ffffff",
          fontSize: "42px",
          fontWeight: 800,
          letterSpacing: "-1px",
        }}>
          Hub<span style={{ color: "#f6c855" }}>360</span>
        </span>
      </div>

      {/* Headline */}
      <div style={{ textAlign: "center", display: "flex", flexDirection: "column", gap: "8px", marginBottom: "40px" }}>
        <div style={{
          opacity: line1Progress,
          transform: `translateY(${interpolate(line1Progress, [0, 1], [50, 0])}px)`,
        }}>
          <span style={{ color: "rgba(255,255,255,0.55)", fontSize: "42px", fontWeight: 500 }}>
            Seja dono do
          </span>
        </div>
        <div style={{
          opacity: line2Progress,
          transform: `translateY(${interpolate(line2Progress, [0, 1], [50, 0])}px)`,
        }}>
          <span style={{
            fontSize: "108px",
            fontWeight: 900,
            lineHeight: 1.0,
            letterSpacing: "-3px",
            background: "linear-gradient(135deg, #f6c855 0%, #fde68a 40%, #f6c855 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
            Banco Digital
          </span>
        </div>
        <div style={{
          opacity: line3Progress,
          transform: `translateY(${interpolate(line3Progress, [0, 1], [50, 0])}px)`,
        }}>
          <span style={{ color: "#ffffff", fontSize: "72px", fontWeight: 800, letterSpacing: "-2px" }}>
            do Seu Nicho
          </span>
        </div>
      </div>

      {/* Subtitle */}
      <div style={{
        opacity: subProgress,
        transform: `translateY(${interpolate(subProgress, [0, 1], [30, 0])}px)`,
        textAlign: "center",
        maxWidth: "800px",
        marginBottom: "48px",
      }}>
        <p style={{
          margin: 0, fontSize: "30px",
          color: "rgba(255,255,255,0.5)",
          lineHeight: 1.55,
          fontWeight: 400,
        }}>
          Crie sua própria plataforma financeira com tecnologia de ponta,
          sem precisar ser um banco tradicional.
        </p>
      </div>

      {/* Badge */}
      <div style={{
        opacity: badgeProgress,
        transform: `scale(${interpolate(badgeProgress, [0, 1], [0.8, 1])})`,
        display: "inline-flex",
        alignItems: "center",
        gap: "12px",
        background: "rgba(246,200,85,0.12)",
        border: "1px solid rgba(246,200,85,0.3)",
        borderRadius: "100px",
        padding: "12px 32px",
      }}>
        <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#00c805" }} />
        <span style={{ color: "#f6c855", fontSize: "24px", fontWeight: 600 }}>
          hub360digital.com
        </span>
      </div>
    </AbsoluteFill>
  );
};

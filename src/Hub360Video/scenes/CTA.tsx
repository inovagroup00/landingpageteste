import React from "react";
import {
  AbsoluteFill,
  Img,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

// Hub360 logo and featured app image
const HUB360_LOGO = "https://framerusercontent.com/images/rTjmkyMUjjqCjKrzEaxzJTLtTQ8.png";
const FEATURED_IMG = "https://framerusercontent.com/images/CcVmotEUrw3zP2ebTXXgv2QSTik.png";
const FEATURED_IMG2 = "https://framerusercontent.com/images/DSbfSCp8DwpW6imUBQ6j30nzIJU.png";

export const CTA: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const bgProgress = interpolate(frame, [0, 40], [0, 1], { extrapolateRight: "clamp" });
  const logoProgress = spring({ frame, fps, config: { damping: 14, stiffness: 80 }, durationInFrames: 35 });
  const titleProgress = spring({ frame: frame - 15, fps, config: { damping: 13, stiffness: 75 }, durationInFrames: 45 });
  const subProgress = spring({ frame: frame - 30, fps, config: { damping: 14, stiffness: 80 }, durationInFrames: 40 });
  const btnProgress = spring({ frame: frame - 50, fps, config: { damping: 14, stiffness: 90 }, durationInFrames: 35 });
  const imgProgress = spring({ frame: frame - 20, fps, config: { damping: 12, stiffness: 65 }, durationInFrames: 55 });

  const floatY = Math.sin(frame * 0.05) * 12;
  const floatY2 = Math.sin(frame * 0.04 + 1.5) * 10;

  const glowSize = 1 + Math.sin(frame * 0.06) * 0.08;

  return (
    <AbsoluteFill style={{
      background: `radial-gradient(ellipse at 50% 0%, rgba(246,200,85,${0.18 * bgProgress}) 0%, transparent 60%), #030302`,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      fontFamily: "'Inter', 'Segoe UI', sans-serif",
      overflow: "hidden",
    }}>
      {/* Gold glow */}
      <div style={{
        position: "absolute", top: "-300px", left: "50%", transform: `translateX(-50%) scale(${glowSize})`,
        width: "1000px", height: "700px", borderRadius: "50%",
        background: "radial-gradient(ellipse, rgba(246,200,85,0.12) 0%, transparent 70%)",
        opacity: bgProgress, pointerEvents: "none",
      }} />

      {/* Left content */}
      <div style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: "80px 60px 80px 100px",
        gap: "36px",
      }}>
        {/* Logo */}
        <div style={{
          opacity: logoProgress,
          transform: `scale(${interpolate(logoProgress, [0, 1], [0.7, 1])})`,
          display: "flex", alignItems: "center", gap: "14px",
        }}>
          <div style={{
            width: "52px", height: "52px", borderRadius: "14px",
            background: "linear-gradient(135deg, #0540d0, #25acfa)",
            display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: "0 0 30px rgba(37,172,250,0.4)",
          }}>
            <Img src={HUB360_LOGO} style={{ width: "36px", height: "36px", objectFit: "contain" }} />
          </div>
          <span style={{ color: "#ffffff", fontSize: "36px", fontWeight: 800 }}>
            Hub<span style={{ color: "#f6c855" }}>360</span>
          </span>
        </div>

        {/* Headline */}
        <div style={{
          opacity: titleProgress,
          transform: `translateY(${interpolate(titleProgress, [0, 1], [50, 0])}px)`,
        }}>
          <h2 style={{
            margin: 0, fontSize: "80px", fontWeight: 900,
            lineHeight: 1.05, letterSpacing: "-2.5px",
            color: "#ffffff",
          }}>
            Comece a
            <br />
            construir seu
            <br />
            <span style={{
              background: "linear-gradient(135deg, #f6c855 0%, #fde68a 50%, #f6c855 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>banco digital</span>
          </h2>
        </div>

        {/* Sub */}
        <div style={{
          opacity: subProgress,
          transform: `translateY(${interpolate(subProgress, [0, 1], [30, 0])}px)`,
        }}>
          <p style={{
            margin: 0, fontSize: "26px",
            color: "rgba(255,255,255,0.5)", lineHeight: 1.6, maxWidth: "560px",
          }}>
            Infraestrutura financeira completa. Sua marca, suas regras,
            seu nicho. Em menos de 24 horas no ar.
          </p>
        </div>

        {/* CTA button */}
        <div style={{
          opacity: btnProgress,
          transform: `translateY(${interpolate(btnProgress, [0, 1], [25, 0])}px)`,
          display: "flex", flexDirection: "column", gap: "20px",
        }}>
          <div style={{
            display: "inline-flex",
            background: "linear-gradient(135deg, #f6c855, #f59e0b)",
            borderRadius: "100px",
            padding: "22px 56px",
            fontSize: "28px", fontWeight: 800,
            color: "#030302",
            boxShadow: "0 0 60px rgba(246,200,85,0.4)",
          }}>
            Quero meu banco digital
          </div>

          <div style={{
            display: "flex", alignItems: "center", gap: "24px",
            color: "rgba(255,255,255,0.35)", fontSize: "20px",
          }}>
            <span>✓ Setup em 24h</span>
            <span>✓ Suporte dedicado</span>
            <span>✓ Sua marca</span>
          </div>
        </div>

        {/* URL */}
        <div style={{
          opacity: btnProgress,
          display: "flex", alignItems: "center", gap: "12px",
          marginTop: "8px",
        }}>
          <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#00c805" }} />
          <span style={{ color: "#f6c855", fontSize: "26px", fontWeight: 700, letterSpacing: "0.5px" }}>
            hub360digital.com
          </span>
        </div>
      </div>

      {/* Right: App images floating */}
      <div style={{
        flex: 0.85,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "24px",
        padding: "60px 80px 60px 0",
        opacity: imgProgress,
        transform: `translateX(${interpolate(imgProgress, [0, 1], [80, 0])}px)`,
      }}>
        <div style={{
          borderRadius: "24px", overflow: "hidden",
          border: "1.5px solid rgba(246,200,85,0.2)",
          boxShadow: "0 24px 80px rgba(0,0,0,0.5)",
          transform: `translateY(${floatY}px)`,
          width: "360px",
        }}>
          <Img src={FEATURED_IMG} style={{ width: "100%", display: "block" }} />
        </div>
        <div style={{
          borderRadius: "24px", overflow: "hidden",
          border: "1.5px solid rgba(37,172,250,0.2)",
          boxShadow: "0 24px 80px rgba(0,0,0,0.5)",
          transform: `translateY(${floatY2}px)`,
          width: "280px",
          marginLeft: "80px",
        }}>
          <Img src={FEATURED_IMG2} style={{ width: "100%", display: "block" }} />
        </div>
      </div>
    </AbsoluteFill>
  );
};

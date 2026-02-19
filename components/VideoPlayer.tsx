import { Player } from "@remotion/player";
import { LandingPage } from "../src/LandingPage";

export default function VideoPlayer() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "24px",
      padding: "40px 20px",
    }}>
      <h1 style={{
        margin: 0,
        color: "white",
        fontFamily: "'Segoe UI', sans-serif",
        fontSize: "28px",
        fontWeight: 700,
        textAlign: "center",
      }}>
        🎬 Landing Page Video
      </h1>
      <Player
        component={LandingPage}
        durationInFrames={300}
        fps={30}
        compositionWidth={1920}
        compositionHeight={1080}
        style={{
          width: "100%",
          maxWidth: "960px",
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 24px 80px rgba(0,0,0,0.6)",
        }}
        controls
        autoPlay
        loop
      />
      <p style={{
        margin: 0,
        color: "rgba(255,255,255,0.5)",
        fontFamily: "sans-serif",
        fontSize: "14px",
      }}>
        Criado com Remotion • 10 segundos • 1920×1080
      </p>
    </div>
  );
}

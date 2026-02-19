import { Player } from "@remotion/player";
import { Hub360Video } from "../src/Hub360Video";

export default function VideoPlayer() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "20px",
      padding: "0 20px",
    }}>
      <Player
        component={Hub360Video}
        durationInFrames={900}
        fps={30}
        compositionWidth={1920}
        compositionHeight={1080}
        style={{
          width: "100%",
          maxWidth: "1000px",
          borderRadius: "16px",
          overflow: "hidden",
          boxShadow: "0 32px 100px rgba(0,0,0,0.7)",
          border: "1px solid rgba(246,200,85,0.15)",
        }}
        controls
        autoPlay
        loop
      />
      <p style={{
        margin: 0,
        color: "rgba(255,255,255,0.3)",
        fontFamily: "sans-serif",
        fontSize: "14px",
      }}>
        Hub360 • 30 segundos • 1920×1080 • 30fps
      </p>
    </div>
  );
}

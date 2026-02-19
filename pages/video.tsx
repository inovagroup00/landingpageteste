import dynamic from "next/dynamic";
import Head from "next/head";
import Link from "next/link";

const VideoPlayer = dynamic(() => import("../components/VideoPlayer"), {
  ssr: false,
  loading: () => (
    <div style={{
      display: "flex", alignItems: "center", justifyContent: "center",
      height: "60vh", color: "rgba(255,255,255,0.5)",
      fontFamily: "sans-serif", fontSize: "18px",
    }}>
      Carregando player…
    </div>
  ),
});

export default function VideoPage() {
  return (
    <>
      <Head>
        <title>Hub360 — Vídeo Institucional</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main style={{
        margin: 0, padding: 0,
        background: "linear-gradient(135deg, #0f0c29, #1a1040)",
        minHeight: "100vh",
        fontFamily: "'Segoe UI', sans-serif",
      }}>
        {/* Nav */}
        <nav style={{
          padding: "20px 40px",
          display: "flex", alignItems: "center", gap: "16px",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}>
          <Link href="/" style={{
            color: "rgba(255,255,255,0.5)", textDecoration: "none",
            fontSize: "14px", display: "flex", alignItems: "center", gap: "6px",
          }}>
            ← Voltar
          </Link>
          <span style={{ color: "rgba(255,255,255,0.15)" }}>|</span>
          <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "15px", fontWeight: 600 }}>
            🎬 Hub360 — Banco Digital do Seu Nicho
          </span>
        </nav>

        {/* Player */}
        <div style={{ padding: "40px 24px 80px" }}>
          <VideoPlayer />
        </div>
      </main>
    </>
  );
}

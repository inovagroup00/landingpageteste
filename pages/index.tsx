import dynamic from "next/dynamic";
import Head from "next/head";

const VideoPlayer = dynamic(() => import("../components/VideoPlayer"), {
  ssr: false,
  loading: () => (
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      background: "#0f0c29",
      color: "white",
      fontFamily: "sans-serif",
      fontSize: "24px",
    }}>
      Carregando vídeo...
    </div>
  ),
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Landing Page Video</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main style={{
        margin: 0,
        padding: 0,
        background: "#0f0c29",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}>
        <VideoPlayer />
      </main>
    </>
  );
}

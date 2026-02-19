import Head from "next/head";
import Link from "next/link";

const features = [
  {
    icon: "⚡",
    title: "Ultra Rápido",
    description: "Performance otimizada para carregar em menos de 1 segundo",
    gradient: "linear-gradient(135deg, #f59e0b, #ef4444)",
  },
  {
    icon: "🎨",
    title: "Design Moderno",
    description: "Interfaces bonitas e intuitivas que encantam os usuários",
    gradient: "linear-gradient(135deg, #8b5cf6, #ec4899)",
  },
  {
    icon: "📈",
    title: "Alta Conversão",
    description: "Estratégias comprovadas para converter visitantes em clientes",
    gradient: "linear-gradient(135deg, #10b981, #06b6d4)",
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Transforme sua presença digital</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Criamos experiências digitais que encantam seus clientes e fazem seu negócio crescer exponencialmente."
        />
      </Head>

      <main
        style={{
          fontFamily: "'Segoe UI', 'Inter', sans-serif",
          margin: 0,
          padding: 0,
          background: "#0f0c29",
          color: "#ffffff",
          overflowX: "hidden",
        }}
      >
        {/* NAV */}
        <nav
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 100,
            padding: "20px 40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            background: "rgba(15, 12, 41, 0.8)",
            backdropFilter: "blur(12px)",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <span style={{ fontWeight: 800, fontSize: "22px", letterSpacing: "-0.5px" }}>
            ✦ Inova
          </span>
          <div style={{ display: "flex", gap: "32px", alignItems: "center" }}>
            <a href="#features" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none", fontSize: "15px" }}>
              Funcionalidades
            </a>
            <a href="#cta" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none", fontSize: "15px" }}>
              Preços
            </a>
            <Link href="/video"
              style={{
                color: "rgba(255,255,255,0.7)",
                textDecoration: "none",
                fontSize: "14px",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: "100px",
                padding: "8px 18px",
              }}
            >
              🎬 Ver vídeo
            </Link>
          </div>
        </nav>

        {/* HERO */}
        <section
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "140px 24px 80px",
            background: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Decorative blobs */}
          <div style={{
            position: "absolute", top: "-100px", right: "-100px",
            width: "500px", height: "500px", borderRadius: "50%",
            background: "radial-gradient(circle, rgba(167,139,250,0.18) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />
          <div style={{
            position: "absolute", bottom: "-150px", left: "-100px",
            width: "600px", height: "600px", borderRadius: "50%",
            background: "radial-gradient(circle, rgba(96,165,250,0.14) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />

          {/* Badge */}
          <div style={{
            display: "inline-flex", alignItems: "center",
            background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: "100px", padding: "8px 24px", gap: "10px",
            marginBottom: "36px",
          }}>
            <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#4ade80" }} />
            <span style={{ color: "rgba(255,255,255,0.85)", fontSize: "15px", fontWeight: 500 }}>
              Novo produto disponível
            </span>
          </div>

          {/* Title */}
          <h1 style={{
            margin: "0 0 28px",
            fontSize: "clamp(48px, 8vw, 88px)",
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-2px",
            background: "linear-gradient(135deg, #ffffff 0%, #a78bfa 50%, #60a5fa 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
            Transforme sua<br />presença digital
          </h1>

          {/* Subtitle */}
          <p style={{
            margin: "0 0 52px",
            fontSize: "clamp(18px, 2.5vw, 24px)",
            color: "rgba(255,255,255,0.55)",
            lineHeight: 1.6,
            maxWidth: "640px",
          }}>
            Criamos experiências digitais que encantam seus clientes
            e fazem seu negócio crescer exponencialmente.
          </p>

          {/* Buttons */}
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}>
            <a href="#cta" style={{
              background: "linear-gradient(135deg, #8b5cf6, #6366f1)",
              borderRadius: "100px", padding: "16px 40px",
              fontSize: "17px", fontWeight: 700, color: "#fff",
              textDecoration: "none",
              boxShadow: "0 0 40px rgba(139,92,246,0.45)",
            }}>
              Começar grátis
            </a>
            <Link href="/video" style={{
              background: "transparent",
              border: "2px solid rgba(255,255,255,0.2)",
              borderRadius: "100px", padding: "16px 40px",
              fontSize: "17px", fontWeight: 600,
              color: "rgba(255,255,255,0.8)",
              textDecoration: "none",
            }}>
              🎬 Ver demonstração
            </Link>
          </div>

          {/* Social proof mini */}
          <p style={{ marginTop: "40px", color: "rgba(255,255,255,0.35)", fontSize: "14px" }}>
            ✓ Sem cartão de crédito &nbsp;·&nbsp; ✓ 14 dias grátis &nbsp;·&nbsp; ✓ Cancele quando quiser
          </p>
        </section>

        {/* FEATURES */}
        <section
          id="features"
          style={{
            padding: "100px 24px",
            background: "linear-gradient(135deg, #0f0c29, #1a1040, #0f0c29)",
          }}
        >
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "64px" }}>
              <p style={{
                margin: "0 0 12px",
                fontSize: "13px", fontWeight: 600, color: "#a78bfa",
                letterSpacing: "3px", textTransform: "uppercase",
              }}>
                Por que nos escolher
              </p>
              <h2 style={{
                margin: 0, fontSize: "clamp(36px, 5vw, 56px)",
                fontWeight: 800, color: "#fff", letterSpacing: "-1px",
              }}>
                Tudo que você precisa
              </h2>
            </div>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "24px",
            }}>
              {features.map((f) => (
                <div key={f.title} style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.09)",
                  borderRadius: "20px", padding: "40px 32px",
                  display: "flex", flexDirection: "column", gap: "16px",
                  transition: "border-color 0.2s",
                }}>
                  <div style={{
                    width: "56px", height: "56px", borderRadius: "14px",
                    background: f.gradient,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "28px",
                  }}>
                    {f.icon}
                  </div>
                  <h3 style={{ margin: 0, fontSize: "22px", fontWeight: 700, color: "#fff" }}>
                    {f.title}
                  </h3>
                  <p style={{ margin: 0, fontSize: "16px", color: "rgba(255,255,255,0.5)", lineHeight: 1.6 }}>
                    {f.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          id="cta"
          style={{
            padding: "100px 24px",
            background: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)",
            display: "flex", alignItems: "center", justifyContent: "center",
            position: "relative", overflow: "hidden",
          }}
        >
          <div style={{
            position: "absolute", width: "600px", height: "600px", borderRadius: "50%",
            background: "radial-gradient(circle, rgba(139,92,246,0.18) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />
          <div style={{
            background: "linear-gradient(135deg, rgba(139,92,246,0.12), rgba(96,165,250,0.08))",
            border: "1px solid rgba(139,92,246,0.25)",
            borderRadius: "28px",
            padding: "clamp(48px, 8vw, 80px) clamp(32px, 6vw, 96px)",
            textAlign: "center",
            maxWidth: "760px",
            width: "100%",
            position: "relative",
          }}>
            <p style={{
              margin: "0 0 16px",
              fontSize: "13px", fontWeight: 600, color: "#a78bfa",
              letterSpacing: "3px", textTransform: "uppercase",
            }}>
              Comece hoje mesmo
            </p>
            <h2 style={{
              margin: "0 0 20px",
              fontSize: "clamp(36px, 5vw, 64px)",
              fontWeight: 800, color: "#fff", lineHeight: 1.15, letterSpacing: "-1px",
            }}>
              Pronto para<br />decolar?
            </h2>
            <p style={{
              margin: "0 0 40px",
              fontSize: "18px", color: "rgba(255,255,255,0.55)", lineHeight: 1.6,
            }}>
              Junte-se a mais de 10.000 empresas que já transformaram
              seu negócio com nossa plataforma.
            </p>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}>
              <a href="#" style={{
                background: "linear-gradient(135deg, #8b5cf6, #6366f1)",
                borderRadius: "100px", padding: "16px 44px",
                fontSize: "17px", fontWeight: 700, color: "#fff",
                textDecoration: "none",
                boxShadow: "0 0 40px rgba(139,92,246,0.45)",
              }}>
                Começar grátis
              </a>
              <a href="#" style={{
                background: "transparent",
                border: "2px solid rgba(255,255,255,0.2)",
                borderRadius: "100px", padding: "16px 44px",
                fontSize: "17px", fontWeight: 600,
                color: "rgba(255,255,255,0.8)",
                textDecoration: "none",
              }}>
                Falar com vendas
              </a>
            </div>
            <p style={{ marginTop: "28px", color: "rgba(255,255,255,0.35)", fontSize: "14px" }}>
              ✓ Sem cartão de crédito &nbsp;·&nbsp; ✓ 14 dias grátis &nbsp;·&nbsp; ✓ Cancele quando quiser
            </p>
          </div>
        </section>

        {/* FOOTER */}
        <footer style={{
          padding: "32px 40px",
          background: "#0a0818",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "16px",
        }}>
          <span style={{ fontWeight: 700, fontSize: "18px" }}>✦ Inova</span>
          <p style={{ margin: 0, color: "rgba(255,255,255,0.3)", fontSize: "14px" }}>
            © 2026 Inova. Todos os direitos reservados.
          </p>
          <Link href="/video" style={{
            color: "rgba(255,255,255,0.4)", fontSize: "14px",
            textDecoration: "none",
          }}>
            🎬 Ver vídeo
          </Link>
        </footer>
      </main>
    </>
  );
}

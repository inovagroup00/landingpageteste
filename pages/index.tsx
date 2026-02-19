import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

// ─── All 31 images from Hub360 CDN ──────────────────────────────────────────
const CDN = "https://framerusercontent.com/images/";
const IMG = {
  logo:    CDN + "MrB3BrVCdv71tkl9DPPMhFc5I.png",
  logoDark:CDN + "rTjmkyMUjjqCjKrzEaxzJTLtTQ8.png",
  hero1:   CDN + "0DiMi5PU18AYQCX96RccOfQcL4.png",
  hero2:   CDN + "0jIJVpbHKN9qqGILrFqPlyD3Q.png",
  hero3:   CDN + "0pV3YEAumHmZ2B0EiuxYtPbVfE.png",
  feat1:   CDN + "180aOHwTC6KUVIWrDOmL9BjCPg.png",
  feat2:   CDN + "1Pu4NO75GrUIeVJqSp3My526qY.png",
  feat3:   CDN + "CBpLjavJLKGEdfr5sndIr5uRQY.png",
  app1:    CDN + "CcVmotEUrw3zP2ebTXXgv2QSTik.png",
  app2:    CDN + "DSbfSCp8DwpW6imUBQ6j30nzIJU.png",
  app3:    CDN + "EnK7GkwvudQg6fjhNjzbUVQ3DUs.png",
  app4:    CDN + "HbKr1rKDJFZgaQxVFus8IOG0Wlo.png",
  app5:    CDN + "MqgbYr9y7KydXUeEQTblhF4BOLA.png",
  bank1:   CDN + "RIaGBSYEKhGfSUHWA9GNppH30Y.png",
  bank2:   CDN + "RpjLsDnmXrJg73o4vNbyDJp9xzU.png",
  bank3:   CDN + "S09sFfOzkJJww8PJ2PYjs9Qkur0.png",
  bank4:   CDN + "Sej9G0V9c1q64aT1LD6fOwabJ4.png",
  impl1:   CDN + "TW8Q2qxBaLTTO3NMxX6ZN8zPYRA.png",
  impl2:   CDN + "Y59hQtOen87qDQOmhpdk6LJ4Y.png",
  impl3:   CDN + "Y5pnUFhqNExuGhFXHv8qxL4cgk.png",
  why1:    CDN + "gJ1CvqfSYoWZ3PD1XL0fur9ZudI.png",
  why2:    CDN + "jh3dHiyb9DXGghsaj52e7p8cM.png",
  why3:    CDN + "kLI6QIAJ1X4AOiUioaZNhRthyY.png",
  cta1:    CDN + "nuKdm8OosafQuUFdk50E9gFRQA.png",
  cta2:    CDN + "poMbSZUohdiVv63c6m48SGmhM.png",
  cta3:    CDN + "tOMz3MbkrdE2pQzFwyiL0zBmo.png",
  extra1:  CDN + "wNcwfhbhYY5qXjsaKVhXSc8vg.png",
  svg1:    CDN + "HJKlVpL252A4hrDeLCWblay6GRE.svg",
  svg2:    CDN + "Jecxmuh9TxYGTiFpjaFxSZm6k.svg",
  svg3:    CDN + "XDLbWs6SMgIISMtPuF3qxLAdYk.svg",
  svg4:    CDN + "kurDC7PfTdXQsEUPcYoxStmRbQ.svg",
};

const WA_LINK = "https://wa.me/5511979528972?text=Olá%21%20Preciso%20de%20ajuda%20e%20gostaria%20de%20falar%20com%20a%20equipe%20da%20Hub360.";

// ─── Shared styles ───────────────────────────────────────────────────────────
const BLUE   = "#0540d0";
const LBLUE  = "#25acfa";
const GOLD   = "#f6c855";
const GREEN  = "#00c805";
const DARK   = "#030302";
const PINK   = "#e4187d";

const btnPrimary: React.CSSProperties = {
  display: "inline-flex", alignItems: "center", justifyContent: "center",
  background: BLUE, color: "#fff",
  borderRadius: "100px", padding: "14px 32px",
  fontSize: "16px", fontWeight: 700,
  textDecoration: "none", cursor: "pointer",
  border: "none", whiteSpace: "nowrap",
};
const btnOutline: React.CSSProperties = {
  display: "inline-flex", alignItems: "center", justifyContent: "center",
  background: "transparent", color: BLUE,
  border: `2px solid ${BLUE}`,
  borderRadius: "100px", padding: "12px 30px",
  fontSize: "16px", fontWeight: 700,
  textDecoration: "none", cursor: "pointer", whiteSpace: "nowrap",
};

const card: React.CSSProperties = {
  background: "#fff",
  borderRadius: "20px",
  padding: "32px",
  boxShadow: "0 4px 24px rgba(5,64,208,0.08)",
  border: "1px solid rgba(5,64,208,0.07)",
};

const sectionBase: React.CSSProperties = {
  padding: "96px 24px",
  maxWidth: "1280px",
  margin: "0 auto",
};

// ─── FAQ Item ────────────────────────────────────────────────────────────────
function FaqItem({ q, a }: { q: string; a?: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{
      borderBottom: "1px solid rgba(5,64,208,0.1)",
      padding: "20px 0",
    }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          width: "100%", background: "none", border: "none",
          cursor: "pointer", textAlign: "left", gap: "16px",
        }}
      >
        <span style={{ fontSize: "18px", fontWeight: 600, color: DARK, lineHeight: 1.4 }}>{q}</span>
        <span style={{ fontSize: "24px", color: BLUE, flexShrink: 0, transform: open ? "rotate(45deg)" : "none", transition: "transform 0.2s" }}>+</span>
      </button>
      {open && a && (
        <p style={{ margin: "12px 0 0", fontSize: "16px", color: "#555", lineHeight: 1.7 }}>{a}</p>
      )}
    </div>
  );
}

// ─── Step card ───────────────────────────────────────────────────────────────
function StepCard({ n, title, img }: { n: number; title: string; img?: string }) {
  return (
    <div style={{
      ...card,
      display: "flex", alignItems: "flex-start", gap: "20px",
      borderLeft: `4px solid ${BLUE}`,
    }}>
      <div style={{
        width: "44px", height: "44px", borderRadius: "12px",
        background: BLUE, color: "#fff",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: "20px", fontWeight: 800, flexShrink: 0,
      }}>{n}</div>
      <div style={{ flex: 1 }}>
        <p style={{ margin: 0, fontSize: "16px", fontWeight: 600, color: DARK, lineHeight: 1.5 }}>{title}</p>
      </div>
      {img && <img src={img} style={{ width: "60px", height: "60px", objectFit: "contain", borderRadius: "8px" }} alt="" />}
    </div>
  );
}

// ─── Main page ───────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      <Head>
        <title>Hub360 - Seja dono do Banco Digital do Seu Nicho</title>
        <meta name="description" content="A Hub360 conecta marcas ao seu próprio banco digital: conta white-label, cartão, Pix, crédito, KYC e muito mais." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={IMG.logo} />
      </Head>

      <div style={{ fontFamily: "'Inter', 'Segoe UI', sans-serif", background: "#fff", color: DARK, margin: 0, padding: 0 }}>

        {/* ── NAV ─────────────────────────────────────────────────────────── */}
        <nav style={{
          position: "sticky", top: 0, zIndex: 100,
          background: "rgba(255,255,255,0.92)", backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(5,64,208,0.08)",
          padding: "0 40px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          height: "68px",
        }}>
          <img src={IMG.logo} alt="Hub360" style={{ height: "36px", objectFit: "contain" }} onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
          }} />
          <div style={{ display: "none" }}>
            {/* fallback logo text if image fails */}
            <span style={{ fontWeight: 900, fontSize: "22px", color: BLUE }}>
              Hub<span style={{ color: GOLD }}>360</span>
            </span>
          </div>
          <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
            <a href="#faq" style={{ color: "#555", textDecoration: "none", fontSize: "15px", padding: "8px 12px" }}>FAQ</a>
            <a href="#sobre" style={{ color: "#555", textDecoration: "none", fontSize: "15px", padding: "8px 12px" }}>Sobre nós</a>
            <Link href="/video" style={{ color: "#555", textDecoration: "none", fontSize: "15px", padding: "8px 12px" }}>🎬 Vídeo</Link>
            <a href={WA_LINK} target="_blank" rel="noreferrer" style={btnPrimary}>Fale Conosco!</a>
          </div>
        </nav>

        {/* ── HERO ────────────────────────────────────────────────────────── */}
        <section style={{
          background: `linear-gradient(135deg, #f0f4ff 0%, #e8f0fe 50%, #f5f0ff 100%)`,
          padding: "80px 24px 0",
          overflow: "hidden",
        }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center" }}>
            {/* Badge */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              background: `${BLUE}15`, border: `1px solid ${BLUE}30`,
              borderRadius: "100px", padding: "6px 20px", marginBottom: "32px",
            }}>
              <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: GREEN }} />
              <span style={{ fontSize: "14px", fontWeight: 600, color: BLUE }}>Tecnologia bancária white-label</span>
            </div>

            <h1 style={{
              margin: "0 0 24px",
              fontSize: "clamp(40px, 6vw, 72px)",
              fontWeight: 900,
              textAlign: "center",
              lineHeight: 1.1,
              letterSpacing: "-2px",
              color: DARK,
              maxWidth: "900px",
            }}>
              Seja Dono do Banco Digital do seu <span style={{ color: BLUE }}>Ecossistema</span>
            </h1>

            <p style={{
              margin: "0 0 40px",
              fontSize: "clamp(17px, 2vw, 22px)",
              color: "#555",
              textAlign: "center",
              lineHeight: 1.65,
              maxWidth: "680px",
            }}>
              Seus colaboradores, clientes e parceiros são seus primeiros correntistas. A Hub 360 desenvolve e opera seu banco digital, pronto em semanas, não meses.
            </p>

            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center", marginBottom: "64px" }}>
              <a href="#app" style={btnPrimary}>Veja o Visual do App do seu Banco</a>
              <a href={WA_LINK} target="_blank" rel="noreferrer" style={btnOutline}>Fale com a Hub360</a>
            </div>

            {/* Hero images */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "1.4fr 1fr 1fr",
              gap: "16px",
              width: "100%",
              maxWidth: "1100px",
              alignItems: "flex-end",
            }}>
              <img src={IMG.hero1} alt="App Hub360" style={{ width: "100%", borderRadius: "20px 20px 0 0", objectFit: "cover", boxShadow: "0 16px 64px rgba(5,64,208,0.15)" }} />
              <img src={IMG.hero2} alt="App Hub360" style={{ width: "100%", borderRadius: "20px 20px 0 0", objectFit: "cover", boxShadow: "0 16px 64px rgba(5,64,208,0.12)" }} />
              <img src={IMG.hero3} alt="Dashboard Hub360" style={{ width: "100%", borderRadius: "20px 20px 0 0", objectFit: "cover", boxShadow: "0 16px 64px rgba(5,64,208,0.12)" }} />
            </div>
          </div>
        </section>

        {/* ── VALUE PROP ──────────────────────────────────────────────────── */}
        <section style={{ background: "#fff", padding: "96px 24px" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "64px" }}>
              <h2 style={{ margin: "0 0 20px", fontSize: "clamp(30px, 4vw, 52px)", fontWeight: 900, letterSpacing: "-1px" }}>
                Imagine sua empresa lucrando como um <span style={{ color: BLUE }}>Banco</span>
              </h2>
              <p style={{ margin: "0 auto", maxWidth: "720px", fontSize: "18px", color: "#555", lineHeight: 1.7 }}>
                Gere novas linhas de receitas para você e sua empresa com um Banco Digital Completo para clientes, fornecedores, parceiros, colaboradores e público em geral. Ofereça crédito, lucre com taxas, fortaleça sua marca, ganhe escala!
              </p>
            </div>

            <h3 style={{ textAlign: "center", fontSize: "24px", fontWeight: 700, color: "#333", marginBottom: "48px" }}>
              Como você e sua empresa lucram com um banco digital?
            </h3>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "32px" }}>
              {/* Card PF */}
              <div style={{ ...card, borderTop: `4px solid ${BLUE}` }}>
                <img src={IMG.feat1} alt="Pessoas Físicas" style={{ width: "100%", borderRadius: "12px", marginBottom: "24px", objectFit: "cover", maxHeight: "200px" }} />
                <h4 style={{ margin: "0 0 20px", fontSize: "20px", fontWeight: 800, color: BLUE }}>
                  Atenda Colaboradores / Pessoas Físicas
                </h4>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {[
                    { icon: "💰", text: "Gerencie Antecipação Salarial de Colaboradores", sub: "Cobre até R$97 por antecipação, cerca de 40% da base pega 2 adiantamentos por mês" },
                    { icon: "🏦", text: "Ofereça Crédito com Garantia de Salário", sub: "Libere crédito usando o salário como garantia e reduzindo a inadimplência." },
                    { icon: "📈", text: "Ganhe percentual ou taxa fixa sobre transações", sub: "Gere receita recorrente com participação nas taxas de cada operação realizada no banco." },
                    { icon: "🎯", text: "Aumente a exposição de sua marca empresarial", sub: "Fortaleça sua marca ao oferecer um benefício financeiro real, aumentando sua reputação." },
                    { icon: "🤖", text: "Folha de Pagamento em Lote com IA", sub: "Nosso sistema Exclusivo com Inteligência Artificial auxilia no Pagamento de Folha em Lote." },
                    { icon: "⚙️", text: "Gestão de Adiantamentos", sub: "Defina quanto usuários podem antecipar, fonte pagadora e taxa cobrada." },
                  ].map(({ icon, text, sub }) => (
                    <div key={text} style={{ display: "flex", gap: "12px", padding: "12px", background: "#f8f9ff", borderRadius: "12px" }}>
                      <span style={{ fontSize: "24px", flexShrink: 0 }}>{icon}</span>
                      <div>
                        <p style={{ margin: "0 0 4px", fontWeight: 700, fontSize: "14px", color: DARK }}>{text}</p>
                        <p style={{ margin: 0, fontSize: "13px", color: "#666", lineHeight: 1.5 }}>{sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: "24px", padding: "16px", background: `${GOLD}20`, borderRadius: "12px", border: `1px solid ${GOLD}50` }}>
                  <p style={{ margin: 0, fontWeight: 700, fontSize: "15px", color: "#7a5f00" }}>💼 Lucre com Pessoas Físicas</p>
                  <p style={{ margin: "4px 0 0", fontSize: "13px", color: "#7a5f00" }}>
                    Ofereça Adiantamento Salarial; Empréstimos com Garantia; Conta Digital Completa; PIX; Pagamentos de Boletos e muito mais.
                  </p>
                </div>
              </div>

              {/* Card PJ */}
              <div style={{ ...card, borderTop: `4px solid ${PINK}` }}>
                <img src={IMG.feat2} alt="Empresas Parceiras" style={{ width: "100%", borderRadius: "12px", marginBottom: "24px", objectFit: "cover", maxHeight: "200px" }} />
                <h4 style={{ margin: "0 0 20px", fontSize: "20px", fontWeight: 800, color: PINK }}>
                  Atenda Empresas Próprias / Parceiros Estratégicos
                </h4>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {[
                    { icon: "🤝", text: "Atraia PJ Parceiras", sub: "Seja o Fundador do Banco do seu Ecossistema. Monetize com crédito e taxas para Clientes, Parceiros e Colaboradores." },
                    { icon: "🏗️", text: "Seja o Fundador do seu Banco", sub: "Atraia empresas parceiras com nosso Sistema de Pagamento de Folha em Lote com IA Exclusivo e monetize de forma recorrente." },
                    { icon: "💳", text: "Um Banco Empresarial Completo", sub: "Para seus Parceiros, com Crédito, Pix, Pagamentos e muito mais." },
                    { icon: "🤖", text: "Ofereça Pagamento de Folha com IA Integrada", sub: "Negocie parte da receita gerada com adiantamentos e empréstimos com garantia." },
                  ].map(({ icon, text, sub }) => (
                    <div key={text} style={{ display: "flex", gap: "12px", padding: "12px", background: "#fff5fb", borderRadius: "12px" }}>
                      <span style={{ fontSize: "24px", flexShrink: 0 }}>{icon}</span>
                      <div>
                        <p style={{ margin: "0 0 4px", fontWeight: 700, fontSize: "14px", color: DARK }}>{text}</p>
                        <p style={{ margin: 0, fontSize: "13px", color: "#666", lineHeight: 1.5 }}>{sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <img src={IMG.feat3} alt="Dashboard empresarial" style={{ width: "100%", borderRadius: "12px", marginTop: "24px", objectFit: "cover" }} />
              </div>
            </div>
          </div>
        </section>

        {/* ── APP FEATURES ─────────────────────────────────────────────────── */}
        <section id="app" style={{ background: "#f7f9ff", padding: "96px 24px" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "64px" }}>
              <p style={{ margin: "0 0 12px", fontSize: "13px", fontWeight: 700, color: BLUE, letterSpacing: "3px", textTransform: "uppercase" }}>
                Tenha um Banco Digital Completo para Seu Ecossistema
              </p>
              <h2 style={{ margin: "0 0 20px", fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 900, letterSpacing: "-1px" }}>
                Funcionalidades dos Apps e Painel de Gestão do seu Banco
              </h2>
              <p style={{ margin: "0 auto", maxWidth: "720px", fontSize: "18px", color: "#555", lineHeight: 1.7 }}>
                Um app completo para usuários finais e um painel de gestão / internet Banking para sua empresa e seus parceiros comerciais. Tudo o que seu banco digital precisa para operar e monetizar.
              </p>
            </div>

            {/* App screens showcase */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px", marginBottom: "64px" }}>
              {[IMG.app1, IMG.app2, IMG.app3, IMG.app4, IMG.app5].map((src, i) => (
                <div key={src} style={{
                  borderRadius: "16px", overflow: "hidden",
                  boxShadow: "0 8px 32px rgba(5,64,208,0.12)",
                  border: "1px solid rgba(5,64,208,0.08)",
                  background: "#fff",
                }}>
                  <img src={src} alt={`App screenshot ${i + 1}`} style={{ width: "100%", display: "block", objectFit: "cover" }} />
                </div>
              ))}
            </div>

            {/* Feature cards */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
              {[
                {
                  icon: "⚡", color: LBLUE, bg: `${LBLUE}15`,
                  title: "Conta Digital com Pix Integrado",
                  desc: "Monetize com taxas por transação, pacotes de conta e com o engajamento diário",
                },
                {
                  icon: "💳", color: PINK, bg: `${PINK}12`,
                  title: "Ofereça Crédito inteligente",
                  desc: "Ganhe com Juros e Spread bancário tendo baixo risco, fazendo desconto em folha",
                },
                {
                  icon: "💰", color: GOLD, bg: `${GOLD}25`,
                  title: "Antecipação Salarial",
                  desc: "Cobre taxa fixa por antecipação de até R$97. Cerca de 40% da base toma 2 adiantamentos/mês.",
                },
                {
                  icon: "🏧", color: GREEN, bg: `${GREEN}15`,
                  title: "Boletos, TED, Transferências",
                  desc: "Ofereça a seus usuários Pix, Transferências internas, TED, pagamento de boletos e mais.",
                },
              ].map(({ icon, color, bg, title, desc }) => (
                <div key={title} style={{ ...card }}>
                  <div style={{
                    width: "52px", height: "52px", borderRadius: "14px",
                    background: bg, display: "flex", alignItems: "center",
                    justifyContent: "center", fontSize: "26px",
                    marginBottom: "16px",
                  }}>{icon}</div>
                  <h3 style={{ margin: "0 0 10px", fontSize: "18px", fontWeight: 800, color: DARK }}>{title}</h3>
                  <p style={{ margin: 0, fontSize: "15px", color: "#555", lineHeight: 1.6 }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── INTERNET BANKING ─────────────────────────────────────────────── */}
        <section style={{ background: "#fff", padding: "96px 24px" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>
              <div>
                <p style={{ margin: "0 0 12px", fontSize: "13px", fontWeight: 700, color: BLUE, letterSpacing: "3px", textTransform: "uppercase" }}>
                  Painel completo
                </p>
                <h2 style={{ margin: "0 0 20px", fontSize: "clamp(28px, 3.5vw, 48px)", fontWeight: 900, letterSpacing: "-1px", lineHeight: 1.15 }}>
                  Internet Banking para <span style={{ color: BLUE }}>Empresas</span>
                </h2>
                <p style={{ margin: "0 0 32px", fontSize: "18px", color: "#555", lineHeight: 1.7 }}>
                  Um Banco Empresarial Completo para seus Parceiros, com Crédito, Pix, Pagamentos e muito mais.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "36px" }}>
                  {[
                    { color: BLUE, text: "Funcionalidades dos Apps e Painel do Internet Banking" },
                    { color: GREEN, text: "Gestão completa de contas e transações" },
                    { color: PINK, text: "Relatórios e dashboards em tempo real" },
                    { color: GOLD, text: "Controle de crédito e antecipações" },
                  ].map(({ color, text }) => (
                    <div key={text} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: color, flexShrink: 0 }} />
                      <span style={{ fontSize: "16px", color: "#444" }}>{text}</span>
                    </div>
                  ))}
                </div>
                <a href={WA_LINK} target="_blank" rel="noreferrer" style={btnPrimary}>
                  Agende uma Demonstração com um Consultor
                </a>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                {[IMG.bank1, IMG.bank2, IMG.bank3, IMG.bank4].map((src, i) => (
                  <img key={src} src={src} alt={`Internet banking ${i + 1}`}
                    style={{ width: "100%", borderRadius: "12px", objectFit: "cover", boxShadow: "0 8px 32px rgba(5,64,208,0.1)" }} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── ABOUT HUB360 ─────────────────────────────────────────────────── */}
        <section id="sobre" style={{ background: "linear-gradient(135deg, #0540d0, #0a2aaa)", padding: "96px 24px" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                {[IMG.why1, IMG.why2, IMG.why3, IMG.impl1].map((src, i) => (
                  <img key={src} src={src} alt={`Hub360 ${i + 1}`}
                    style={{ width: "100%", borderRadius: "16px", objectFit: "cover", boxShadow: "0 12px 48px rgba(0,0,0,0.3)" }} />
                ))}
              </div>
              <div>
                <p style={{ margin: "0 0 12px", fontSize: "13px", fontWeight: 700, color: GOLD, letterSpacing: "3px", textTransform: "uppercase" }}>
                  Hub360 - A operadora do seu Banco
                </p>
                <h2 style={{ margin: "0 0 24px", fontSize: "clamp(28px, 3.5vw, 48px)", fontWeight: 900, letterSpacing: "-1px", color: "#fff", lineHeight: 1.15 }}>
                  Hub 360: A parceira estratégica por trás do seu Banco Digital
                </h2>
                <p style={{ margin: "0 0 40px", fontSize: "18px", color: "rgba(255,255,255,0.8)", lineHeight: 1.7 }}>
                  A Hub360 é especialista na estruturação e implementação de bancos digitais. Mais do que tecnologia, entregamos arquitetura, estratégia e execução, conectando você e sua empresa a uma infraestrutura bancária completa com segurança, compliance e visão de crescimento.
                </p>
                <a href={WA_LINK} target="_blank" rel="noreferrer" style={{
                  ...btnPrimary,
                  background: GOLD, color: DARK,
                }}>
                  Conhecer a plataforma
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── IMPLEMENTATION ───────────────────────────────────────────────── */}
        <section style={{ background: "#f7f9ff", padding: "96px 24px" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "64px" }}>
              <p style={{ margin: "0 0 12px", fontSize: "13px", fontWeight: 700, color: BLUE, letterSpacing: "3px", textTransform: "uppercase" }}>
                Desenvolvemos e Operamos
              </p>
              <h2 style={{ margin: "0 0 20px", fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 900, letterSpacing: "-1px" }}>
                Implementação guiada, do zero à escala
              </h2>
              <p style={{ margin: "0 auto", maxWidth: "600px", fontSize: "18px", color: "#555", lineHeight: 1.7 }}>
                Confira o Layout do App do seu Banco. Vamos Operar e Escalar seu Banco Digital.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px", alignItems: "start" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {[
                  "Planejamento e Definição do Modelo de Monetização",
                  "Desenvolvimento do Internet Banking e Apps IOs e Android",
                  "Indicação e Integração com parceiros regulados",
                  "Evolução contínua da plataforma",
                  "Suporte a Usuários durante toda Operação",
                ].map((title, i) => (
                  <StepCard key={title} n={i + 1} title={title} img={[IMG.impl1, IMG.impl2, IMG.impl3, IMG.svg1, IMG.svg2][i]} />
                ))}
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", position: "sticky", top: "80px" }}>
                {[IMG.impl2, IMG.impl3, IMG.cta1, IMG.cta2].map((src, i) => (
                  <img key={src} src={src} alt={`Implementação ${i + 1}`}
                    style={{ width: "100%", borderRadius: "14px", objectFit: "cover", boxShadow: "0 8px 32px rgba(5,64,208,0.1)" }} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── WHY HUB360 ───────────────────────────────────────────────────── */}
        <section style={{ background: "#fff", padding: "96px 24px" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "64px" }}>
              <h2 style={{ margin: "0 0 20px", fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 900, letterSpacing: "-1px" }}>
                Por que empresas escolhem a <span style={{ color: BLUE }}>Hub360</span>
              </h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px", marginBottom: "48px" }}>
              {[
                { icon: "🏆", color: BLUE,  bg: `${BLUE}12`,  title: "Especialização em Bancos Digitais para Ecossistemas", img: IMG.why1 },
                { icon: "🚀", color: GREEN, bg: `${GREEN}12`, title: "Tecnologia modular e escalável Pronta para Operar em Semanas", img: IMG.why2 },
                { icon: "🔗", color: PINK,  bg: `${PINK}12`,  title: "Integrações prontas para Pix, contas, pagamentos e crédito", img: IMG.why3 },
                { icon: "🤝", color: GOLD,  bg: `${GOLD}25`,  title: "Suporte próximo e acompanhamento estratégico", img: IMG.cta3 },
                { icon: "💡", color: LBLUE, bg: `${LBLUE}15`, title: "Visão de negócio, não apenas desenvolvimento", img: IMG.extra1 },
              ].map(({ icon, color, bg, title, img }) => (
                <div key={title} style={{ ...card, textAlign: "center" }}>
                  <img src={img} alt={title} style={{ width: "100%", borderRadius: "12px", marginBottom: "20px", objectFit: "cover", maxHeight: "160px" }} />
                  <div style={{
                    width: "52px", height: "52px", borderRadius: "14px",
                    background: bg, display: "flex", alignItems: "center",
                    justifyContent: "center", fontSize: "26px",
                    margin: "0 auto 16px",
                  }}>{icon}</div>
                  <h3 style={{ margin: 0, fontSize: "16px", fontWeight: 700, color: DARK, lineHeight: 1.4 }}>{title}</h3>
                </div>
              ))}
            </div>

            <div style={{ textAlign: "center" }}>
              <a href={WA_LINK} target="_blank" rel="noreferrer" style={btnPrimary}>
                Agende uma Demonstração
              </a>
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────────────────── */}
        <section id="faq" style={{ background: "#f7f9ff", padding: "96px 24px" }}>
          <div style={{ maxWidth: "860px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "64px" }}>
              <p style={{ margin: "0 0 12px", fontSize: "13px", fontWeight: 700, color: BLUE, letterSpacing: "3px", textTransform: "uppercase" }}>
                Dúvidas?
              </p>
              <h2 style={{ margin: "0 0 20px", fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 900, letterSpacing: "-1px" }}>
                Perguntas Frequentes
              </h2>
              <p style={{ margin: "0 auto", fontSize: "17px", color: "#555", lineHeight: 1.7 }}>
                Precisa de ajuda? Encontre respostas rápidas sobre os serviços e soluções da Hub360, sua plataforma de tecnologia para bancos digitais.
              </p>
            </div>

            <div style={card}>
              <FaqItem
                q="Minha empresa precisa ser um banco para ter um banco digital?"
                a="Não. A Hub360 estrutura sua operação financeira conectando sua empresa a parceiros regulados, permitindo operar um banco digital sem se tornar uma instituição financeira."
              />
              <FaqItem q="A operação é regularizada e segue as normas do Banco Central?" />
              <FaqItem q="Quanto tempo leva para lançar um banco digital?" />
              <FaqItem q="Posso começar pequeno e escalar depois?" />
              <FaqItem q="Como começo o projeto com a Hub360?" />
              <FaqItem q="Quais formas de monetização estão disponíveis?" />
              <FaqItem q="Quem assume o risco das operações de crédito?" />
              <FaqItem q="A Hub360 cuida da tecnologia e da operação?" />
              <FaqItem q="É possível personalizar o app com a marca da minha empresa?" />
              <FaqItem q="A Hub360 é um white label?" />
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ────────────────────────────────────────────────────── */}
        <section style={{
          background: `linear-gradient(135deg, #030302 0%, #0a0a2e 50%, #030302 100%)`,
          padding: "96px 24px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}>
          <div style={{
            position: "absolute", top: "-200px", left: "50%", transform: "translateX(-50%)",
            width: "800px", height: "600px", borderRadius: "50%",
            background: `radial-gradient(ellipse, ${GOLD}25 0%, transparent 70%)`,
            pointerEvents: "none",
          }} />

          {/* Image strip */}
          <div style={{
            display: "flex", gap: "16px", justifyContent: "center",
            marginBottom: "64px", overflow: "hidden",
          }}>
            {[IMG.cta1, IMG.cta2, IMG.cta3, IMG.impl3, IMG.extra1].map((src, i) => (
              <img key={src} src={src} alt="" style={{
                height: "120px", width: "180px",
                objectFit: "cover", borderRadius: "12px",
                opacity: 0.7, flexShrink: 0,
                boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
              }} />
            ))}
          </div>

          <div style={{ position: "relative" }}>
            <img src={IMG.logo} alt="Hub360" style={{ height: "48px", objectFit: "contain", marginBottom: "32px" }} />

            <h2 style={{
              margin: "0 0 24px",
              fontSize: "clamp(32px, 5vw, 64px)",
              fontWeight: 900, color: "#fff",
              letterSpacing: "-2px", lineHeight: 1.1,
            }}>
              Do projeto ao sucesso<br />da sua operação
            </h2>

            <p style={{ margin: "0 auto 48px", maxWidth: "600px", fontSize: "20px", color: "rgba(255,255,255,0.65)", lineHeight: 1.7 }}>
              Suporte especializado Hub360. Conte com nossa equipe em todas as etapas: planejamento, integração, compliance e escala do seu banco digital.
            </p>

            <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
              <a href={WA_LINK} target="_blank" rel="noreferrer" style={{
                ...btnPrimary,
                background: GOLD, color: DARK,
                fontSize: "18px", padding: "18px 48px",
                boxShadow: `0 0 60px ${GOLD}50`,
              }}>
                Quero Ser Dono do Banco do meu Ecossistema
              </a>
              <a href={WA_LINK} target="_blank" rel="noreferrer" style={{
                ...btnOutline,
                borderColor: "rgba(255,255,255,0.3)",
                color: "#fff",
                fontSize: "18px", padding: "18px 48px",
              }}>
                Falar com um especialista
              </a>
            </div>

            <div style={{ display: "flex", justifyContent: "center", gap: "8px", marginTop: "32px", alignItems: "center" }}>
              <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: GREEN }} />
              <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "14px" }}>Comece hoje com apoio estratégico</span>
            </div>
          </div>
        </section>

        {/* ── FOOTER ───────────────────────────────────────────────────────── */}
        <footer style={{
          background: "#000",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          padding: "40px 40px",
          display: "flex", alignItems: "center",
          justifyContent: "space-between", flexWrap: "wrap", gap: "24px",
        }}>
          <img src={IMG.logo} alt="Hub360" style={{ height: "32px", objectFit: "contain" }} />
          <div style={{ display: "flex", gap: "32px", flexWrap: "wrap" }}>
            <a href="#sobre" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none", fontSize: "14px" }}>Sobre nós</a>
            <a href="#faq" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none", fontSize: "14px" }}>FAQs</a>
            <a href={WA_LINK} target="_blank" rel="noreferrer" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none", fontSize: "14px" }}>Fale Conosco</a>
            <Link href="/video" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none", fontSize: "14px" }}>🎬 Vídeo</Link>
          </div>
          <p style={{ margin: 0, color: "rgba(255,255,255,0.3)", fontSize: "13px" }}>
            Copyright © Hub360 Digital 2026
          </p>
        </footer>
      </div>
    </>
  );
}

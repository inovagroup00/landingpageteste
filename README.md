# Landing Page Video - Remotion

Vídeo animado de landing page criado com [Remotion](https://remotion.dev).

## Estrutura do vídeo

O vídeo tem duração de **10 segundos** (300 frames a 30fps) em resolução **1920x1080**, dividido em 3 cenas:

| Cena | Duração | Descrição |
|------|---------|-----------|
| Hero | 3s | Título principal com animações de entrada |
| Features | 4s | Cards de funcionalidades com entrada escalonada |
| CTA | 3s | Call-to-action com botões e prova social |

## Começar

### Instalar dependências

```bash
npm install
```

### Abrir o Remotion Studio (preview interativo)

```bash
npm start
```

### Renderizar o vídeo

```bash
npm run render
```

O arquivo de saída será salvo em `out/video.mp4`.

## Personalizar

- **Hero**: edite `src/LandingPage/components/Hero.tsx`
- **Features**: edite `src/LandingPage/components/Features.tsx`
- **CTA**: edite `src/LandingPage/components/CTA.tsx`
- **Duração das cenas**: edite `src/LandingPage/index.tsx`
- **Resolução/FPS**: edite `src/Root.tsx`

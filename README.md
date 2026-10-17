# 🦢 Odette’s Magical Birthday Gift Room for Elza

A personalized, interactive digital birthday surprise for Elza, inspired by Odette, the Swan Lake ballet, magical winter palaces, graceful swans, and dreamy pastel aesthetics.

---

## 🌐 Live Website

The live site is published on GitHub Pages:

👉 **[https://mypngtuber.github.io/-Odette-s-Gift-Room/](https://mypngtuber.github.io/-Odette-s-Gift-Room/)**

### To enable GitHub Pages in the repository:
1. Go to **[Repository Settings → Pages](https://github.com/mypngtuber/-Odette-s-Gift-Room/settings/pages)**.
2. Under **Build and deployment > Source**, select:
   * **Deploy from a branch**
   * Branch: **`gh-pages`**, Folder: **`/ (root)`**
   * Click **Save** (or choose **GitHub Actions** to deploy automatically via the included workflow).

---

## ✨ Features

- **Magical Opening Prologue**: Atmospheric opening screen with floating snowflakes, twinkling stars, and a call-to-action button to enter the gift room.
- **Sequential 7-Gift Discovery**:
  1. 🖼️ **Royal Birthday Greeting Card** in an elegant silver frame.
  2. 📱 **Magical Phone Wallpaper I** showcased in a vertical smartphone preview with full-res view & download.
  3. ✨ **Magical Phone Wallpaper II** with uncropped phone preview and save action.
  4. 💌 **Heartfelt Birthday Letter** revealed like an unfolding royal message with wax seal motif.
  5. 🎬 **Odette's Birthday Video** embedded via responsive YouTube player with safe `youtube-nocookie.com` embed.
  6. 🎶 **Fairytale Birthday Song** decorated with musical notes and delicate star ornaments.
  7. 👑 **Grand Finale Double Surprise**:
     - **Part I**: Playful Birthday Meme with pop animation & celebratory confetti burst.
     - **Part II**: Official Friendship Certificate with gentle royal glow and direct download.
- **The Moonlit Lake Scene**: An atmospheric final screen featuring Odette on a moonlit lake with personal birthday wishes, "Relive the Magic", and "Back to the Beginning" navigation.
- **The Royal Treasury (All Gifts Modal)**: Allows exploring and jumping to any gift in the collection anytime without losing progress.
- **Interactive Lightbox**: Accessible modal viewer with aspect ratio preservation, direct image download, Escape key support, and focus trapping.
- **Gentle Ambient Music Box**: Synthesized Web Audio celesta playing Swan Lake themes **strictly on explicit user interaction** with an accessible mute/unmute toggle.
- **Mobile-First & Responsive**: Built for Android and iOS mobile devices up to large desktop screens, with reduced-motion support.

---

## 🛠️ Tech Stack

- **Framework**: Vite + Vanilla JavaScript (ES Modules)
- **Styling**: Vanilla CSS (Custom design system with tokens, glassmorphism, responsive layouts)
- **Typography**: Google Fonts (*Cormorant Garamond*, *Montserrat*, *Pinyon Script*)
- **Animation & Audio**: HTML5 Canvas snowflakes, celebratory confetti, and Web Audio API synthesizer.

---

## 🚀 Running Locally

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the local dev server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173/` in your browser.

3. **Build for production**:
   ```bash
   npm run build
   ```

---

## 📹 Updating Video Links

The two video gifts are dynamically loaded from `public/video-links.txt`:

```ini
[ODETTE_BIRTHDAY_VIDEO]
https://youtube.com/shorts/0mBLYpKQxkA?feature=share

[BIRTHDAY_SONG_VIDEO]
https://youtube.com/shorts/6w3Uy9w0n_Y
```

You can update either link with:
- Standard YouTube watch links (`https://www.youtube.com/watch?v=...`)
- YouTube Shorts links (`https://youtube.com/shorts/...`)
- Short links (`https://youtu.be/...`)
- Embed links (`https://www.youtube.com/embed/...`)

Changes take effect immediately upon page reload without rebuilding the site!

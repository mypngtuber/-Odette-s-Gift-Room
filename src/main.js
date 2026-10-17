import { GIFT_DEFINITIONS, FINAL_SCREEN_CONTENT } from './config/gifts.js';
import { loadVideoLinks } from './utils/videoParser.js';
import { SnowfallEffect } from './utils/snowflakes.js';
import { launchConfetti } from './utils/confetti.js';
import { fairytaleAudio } from './utils/audio.js';
import { lightbox } from './components/Lightbox.js';
import { AllGiftsModal } from './components/AllGiftsModal.js';

// Application State
const state = {
  view: 'OPENING', // 'OPENING' | 'GIFT_ROOM' | 'FINAL'
  currentGiftIndex: 0,
  videoData: null,
  allGiftsModal: null
};

// DOM Elements
const mainContent = document.getElementById('main-content');
const btnMusicToggle = document.getElementById('btn-music-toggle');
const musicBtnText = document.getElementById('music-btn-text');
const btnHeaderViewAll = document.getElementById('btn-header-view-all');
const brandLink = document.getElementById('brand-link');

/**
 * Initialize Application
 */
async function initApp() {
  // Initialize Snowfall Canvas
  const canvas = document.getElementById('snowfall-canvas');
  if (canvas) {
    new SnowfallEffect(canvas);
  }

  // Load Video Links from public/video-links.txt
  state.videoData = await loadVideoLinks();

  // Initialize "All Gifts" modal
  state.allGiftsModal = new AllGiftsModal(GIFT_DEFINITIONS, (selectedIdx) => {
    goToGift(selectedIdx);
  });

  // Setup Global Header Controls
  setupHeaderEvents();

  // Render Initial View (Opening Screen)
  renderOpeningScreen();
}

/**
 * Header Controls Setup
 */
function setupHeaderEvents() {
  // Music Toggle
  btnMusicToggle.addEventListener('click', () => {
    const isPlaying = fairytaleAudio.toggle();
    btnMusicToggle.setAttribute('aria-pressed', isPlaying ? 'true' : 'false');
    btnMusicToggle.classList.toggle('audio-playing', isPlaying);
    musicBtnText.textContent = isPlaying ? 'Music: Playing' : 'Music: Off';
  });

  // Header "View All Gifts" Button
  btnHeaderViewAll.addEventListener('click', () => {
    state.allGiftsModal.open();
  });

  // Brand Link returns to Opening Screen or Gift Room
  brandLink.addEventListener('click', (e) => {
    e.preventDefault();
    if (state.view !== 'OPENING') {
      renderGiftRoom();
    }
  });
}

/**
 * VIEW 1: Render Opening Screen
 */
function renderOpeningScreen() {
  state.view = 'OPENING';
  btnHeaderViewAll.style.display = 'none';

  mainContent.innerHTML = `
    <section class="view-opening" aria-label="Welcome screen">
      <div class="opening-card">
        <div class="opening-swan-crest" aria-hidden="true">🦢</div>
        <p class="opening-prologue">“Somewhere between a dream and a fairytale…”</p>
        <h1 class="opening-main-title">Happy Birthday, Elza! 🦢</h1>
        <p class="opening-subtitle">A little world of magic, made just for you.</p>
        <div class="opening-action-wrap">
          <button id="btn-enter-room" class="fairytale-btn fairytale-btn-primary" type="button" aria-label="Enter gift room and open your birthday gifts">
            <span>Open Your Birthday Gifts</span>
            <span aria-hidden="true">✨</span>
          </button>
        </div>
      </div>
    </section>
  `;

  const btnEnter = document.getElementById('btn-enter-room');
  btnEnter.addEventListener('click', () => {
    // Transition into Gift Room
    renderGiftRoom();
    // Launch a celebratory sparkle burst
    launchConfetti(window.innerWidth / 2, window.innerHeight * 0.45, 40);
  });
}

/**
 * VIEW 2: Render Gift Room
 */
function renderGiftRoom() {
  state.view = 'GIFT_ROOM';
  btnHeaderViewAll.style.display = 'inline-flex';

  const gift = GIFT_DEFINITIONS[state.currentGiftIndex];
  state.allGiftsModal.setCurrentIndex(state.currentGiftIndex);

  const totalGifts = GIFT_DEFINITIONS.length;
  const progressPercent = Math.round(((state.currentGiftIndex + 1) / totalGifts) * 100);

  mainContent.innerHTML = `
    <section class="view-gift-room" aria-label="Birthday Gift Room">
      <!-- Progress Bar & Indicator -->
      <div class="gift-room-progress-bar-wrap">
        <div class="progress-header">
          <span class="progress-label">
            <span class="progress-star-icon" aria-hidden="true">⭐</span>
            <span>Gift ${state.currentGiftIndex + 1} of ${totalGifts}</span>
          </span>
          <button id="btn-room-view-all" class="header-btn" type="button" aria-label="View all gifts in collection">
            <span aria-hidden="true">🎁</span>
            <span>All Gifts (${state.currentGiftIndex + 1}/${totalGifts})</span>
          </button>
        </div>
        <div class="progress-track" role="progressbar" aria-valuenow="${progressPercent}" aria-valuemin="0" aria-valuemax="100" aria-label="Gifts discovered progress">
          <div class="progress-fill" style="width: ${progressPercent}%;"></div>
        </div>
        <div class="progress-stars-row" aria-hidden="true">
          ${GIFT_DEFINITIONS.map((_, i) => `
            <span class="star-step ${i <= state.currentGiftIndex ? 'is-reached' : ''}">${i + 1}</span>
          `).join('')}
        </div>
      </div>

      <!-- Main Stage for Current Gift -->
      <article class="gift-stage" id="current-gift-stage">
        <header class="gift-stage-header">
          <div class="gift-badge">
            <span aria-hidden="true">${gift.boxIcon}</span>
            <span>${gift.numberLabel}</span>
          </div>
          <h2 class="gift-main-title">${gift.title}</h2>
          <p class="gift-main-message">${gift.message}</p>
        </header>

        <div class="gift-content-body">
          ${renderGiftBody(gift)}
        </div>

        <!-- Navigation Controls -->
        <footer class="gift-stage-footer">
          <div class="nav-buttons-left">
            <button id="btn-prev-gift" class="fairytale-btn fairytale-btn-secondary" type="button" ${state.currentGiftIndex === 0 ? 'disabled' : ''} aria-label="Go to previous gift">
              <span aria-hidden="true">←</span>
              <span>Previous Gift</span>
            </button>
          </div>
          <div class="nav-buttons-right">
            <button id="btn-next-gift" class="fairytale-btn fairytale-btn-primary" type="button" aria-label="${state.currentGiftIndex === totalGifts - 1 ? 'Finish and see final birthday fairytale' : 'Continue to next gift'}">
              <span>${state.currentGiftIndex === totalGifts - 1 ? 'Open Final Fairytale 👑' : 'Next Gift ✨'}</span>
              <span aria-hidden="true">${state.currentGiftIndex === totalGifts - 1 ? '→' : '→'}</span>
            </button>
          </div>
        </footer>
      </article>
    </section>
  `;

  // Attach Gift Stage Event Listeners
  attachGiftStageEvents(gift);
}

/**
 * Generate specific gift HTML based on its type
 */
function renderGiftBody(gift) {
  switch (gift.type) {
    case 'image':
      // Gift 1: Greeting Card in Silver Frame
      return `
        <div class="silver-picture-frame">
          <div class="frame-inner-mat">
            <img 
              id="gift-img-main" 
              class="frame-image" 
              src="${gift.asset}" 
              alt="${gift.alt}" 
              loading="eager"
            />
          </div>
          <div class="frame-interactive-badge" aria-hidden="true">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            <span>Click to Enlarge</span>
          </div>
        </div>
      `;

    case 'wallpaper':
      // Gift 2 & 3: Smartphone Wallpapers
      return `
        <div class="phone-showcase-container">
          <div class="phone-mockup-frame">
            <div class="phone-speaker-island" aria-hidden="true"></div>
            <div class="phone-screen">
              <img 
                id="gift-wallpaper-img" 
                class="phone-wallpaper-img" 
                src="${gift.asset}" 
                alt="${gift.alt}" 
                loading="eager"
              />
              <div class="phone-glare-overlay" aria-hidden="true"></div>
            </div>
          </div>
          <div class="wallpaper-actions">
            <button id="btn-view-full-wallpaper" class="fairytale-btn fairytale-btn-secondary" type="button">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
              <span>View Full Image</span>
            </button>
            <button id="btn-save-wallpaper" class="fairytale-btn fairytale-btn-primary" type="button">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
              <span>Save Wallpaper</span>
            </button>
          </div>
        </div>
      `;

    case 'letter':
      // Gift 4: Royal Unfolding Letter
      return `
        <div class="royal-letter-envelope">
          <div class="wax-seal-motif" aria-hidden="true">🦢</div>
          <img 
            id="gift-letter-img" 
            class="royal-letter-img" 
            src="${gift.asset}" 
            alt="${gift.alt}" 
            loading="eager"
          />
          <div class="frame-interactive-badge" style="bottom: 24px; right: 24px;" aria-hidden="true">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            <span>Read in Full Size</span>
          </div>
        </div>
      `;

    case 'video': {
      // Gift 5 & 6: YouTube Videos
      const videoInfo = state.videoData ? state.videoData[gift.videoKey] : null;
      const isValid = videoInfo && videoInfo.isValid && videoInfo.embedUrl;

      return `
        <div class="video-stage-frame">
          <div class="video-musical-ornaments" aria-hidden="true">
            <span>✨ ♩ ♪ ♫</span>
            <span>Swan Princess Odette</span>
            <span>♬ ♩ ✨</span>
          </div>
          <div class="video-inner-container">
            ${isValid ? `
              <iframe 
                class="video-iframe"
                src="${videoInfo.embedUrl}" 
                title="${gift.title}"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen
                loading="eager"
              ></iframe>
            ` : `
              <div class="video-placeholder-box">
                <div class="video-placeholder-icon" aria-hidden="true">🦢🎬</div>
                <h3 class="video-placeholder-title">${gift.placeholderTitle}</h3>
                <p class="video-placeholder-msg">${gift.placeholderMessage}</p>
              </div>
            `}
          </div>
        </div>
        ${gift.postVideoMessage ? `<p class="video-post-note">${gift.postVideoMessage}</p>` : ''}
      `;
    }

    case 'double':
      // Gift 7: Birthday Meme + Friendship Certificate
      return `
        <div class="double-surprise-container">
          <!-- Part A: Birthday Meme -->
          <div class="double-surprise-part meme-wrapper">
            <span class="part-badge">${gift.partA.subtitle}</span>
            <h3 class="part-title">${gift.partA.title}</h3>
            <p class="part-desc">${gift.partA.message}</p>
            <div class="silver-picture-frame">
              <div class="frame-inner-mat">
                <img 
                  id="gift-meme-img" 
                  class="frame-image" 
                  src="${gift.partA.asset}" 
                  alt="${gift.partA.alt}" 
                  loading="eager"
                />
              </div>
              <div class="frame-interactive-badge" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                <span>Click to Enlarge</span>
              </div>
            </div>
          </div>

          <!-- Part B: Friendship Certificate -->
          <div class="double-surprise-part certificate-wrapper">
            <span class="part-badge">${gift.partB.subtitle}</span>
            <h3 class="part-title">${gift.partB.title}</h3>
            <p class="part-desc">${gift.partB.message}</p>
            <div class="silver-picture-frame">
              <div class="frame-inner-mat">
                <img 
                  id="gift-cert-img" 
                  class="frame-image" 
                  src="${gift.partB.asset}" 
                  alt="${gift.partB.alt}" 
                  loading="eager"
                />
              </div>
              <div class="frame-interactive-badge" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                <span>Click to Enlarge & Save</span>
              </div>
            </div>
            <div style="display: flex; justify-content: center; margin-top: 1.5rem;">
              <button id="btn-save-cert" class="fairytale-btn fairytale-btn-royal" type="button">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                <span>Save Friendship Certificate</span>
              </button>
            </div>
          </div>
        </div>
      `;

    default:
      return '';
  }
}

/**
 * Attach Event Listeners to Gift Stage Controls
 */
function attachGiftStageEvents(gift) {
  // Previous & Next Gift Buttons
  const btnPrev = document.getElementById('btn-prev-gift');
  const btnNext = document.getElementById('btn-next-gift');
  const btnRoomViewAll = document.getElementById('btn-room-view-all');

  if (btnPrev) {
    btnPrev.addEventListener('click', () => {
      if (state.currentGiftIndex > 0) {
        goToGift(state.currentGiftIndex - 1);
      }
    });
  }

  if (btnNext) {
    btnNext.addEventListener('click', () => {
      if (state.currentGiftIndex < GIFT_DEFINITIONS.length - 1) {
        goToGift(state.currentGiftIndex + 1);
      } else {
        // After Gift 7, transition to Final Screen!
        renderFinalScreen();
      }
    });
  }

  if (btnRoomViewAll) {
    btnRoomViewAll.addEventListener('click', () => {
      state.allGiftsModal.open();
    });
  }

  // Gift 1: Greeting Lightbox
  const imgMain = document.getElementById('gift-img-main');
  if (imgMain) {
    imgMain.addEventListener('click', () => {
      lightbox.open({
        asset: gift.asset,
        alt: gift.alt,
        title: gift.lightboxTitle,
        downloadFilename: gift.downloadFilename
      });
    });
  }

  // Gift 2 & 3: Wallpaper Lightbox & Save
  const btnViewFull = document.getElementById('btn-view-full-wallpaper');
  const btnSaveWallpaper = document.getElementById('btn-save-wallpaper');
  const imgWallpaper = document.getElementById('gift-wallpaper-img');

  if (imgWallpaper) {
    imgWallpaper.addEventListener('click', () => {
      lightbox.open({
        asset: gift.asset,
        alt: gift.alt,
        title: gift.lightboxTitle,
        downloadFilename: gift.downloadFilename
      });
    });
  }

  if (btnViewFull) {
    btnViewFull.addEventListener('click', () => {
      lightbox.open({
        asset: gift.asset,
        alt: gift.alt,
        title: gift.lightboxTitle,
        downloadFilename: gift.downloadFilename
      });
    });
  }

  if (btnSaveWallpaper) {
    btnSaveWallpaper.addEventListener('click', () => {
      lightbox.triggerDownload(gift.asset, gift.downloadFilename);
    });
  }

  // Gift 4: Letter Lightbox
  const imgLetter = document.getElementById('gift-letter-img');
  if (imgLetter) {
    imgLetter.addEventListener('click', () => {
      lightbox.open({
        asset: gift.asset,
        alt: gift.alt,
        title: gift.lightboxTitle,
        downloadFilename: gift.downloadFilename
      });
    });
  }

  // Gift 7: Meme & Certificate Lightbox & Save
  if (gift.type === 'double') {
    // Confetti pop for Gift 7 Part A!
    launchConfetti(window.innerWidth / 2, window.innerHeight * 0.35, 60);

    const imgMeme = document.getElementById('gift-meme-img');
    if (imgMeme) {
      imgMeme.addEventListener('click', () => {
        lightbox.open({
          asset: gift.partA.asset,
          alt: gift.partA.alt,
          title: gift.partA.lightboxTitle,
          downloadFilename: gift.partA.downloadFilename
        });
      });
    }

    const imgCert = document.getElementById('gift-cert-img');
    const btnSaveCert = document.getElementById('btn-save-cert');

    if (imgCert) {
      imgCert.addEventListener('click', () => {
        lightbox.open({
          asset: gift.partB.asset,
          alt: gift.partB.alt,
          title: gift.partB.lightboxTitle,
          downloadFilename: gift.partB.downloadFilename
        });
      });
    }

    if (btnSaveCert) {
      btnSaveCert.addEventListener('click', () => {
        lightbox.triggerDownload(gift.partB.asset, gift.partB.downloadFilename);
      });
    }
  }
}

/**
 * Change current gift and update room
 */
function goToGift(index) {
  state.currentGiftIndex = Math.max(0, Math.min(index, GIFT_DEFINITIONS.length - 1));
  renderGiftRoom();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * VIEW 3: Final Birthday Fairytale Screen
 */
function renderFinalScreen() {
  state.view = 'FINAL';
  btnHeaderViewAll.style.display = 'inline-flex';

  // Grand celebratory confetti burst!
  launchConfetti(window.innerWidth / 2, window.innerHeight * 0.4, 90);

  mainContent.innerHTML = `
    <section class="view-final" aria-label="Final Fairytale Lake">
      <div class="final-card">
        <div class="final-lake-illustration" aria-hidden="true">
          <svg class="moon-swan-svg" viewBox="0 0 100 100">
            <!-- Full Moon -->
            <circle cx="50" cy="50" r="38" fill="url(#moonGrad)" />
            <defs>
              <linearGradient id="moonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#FFFFFF" />
                <stop offset="60%" stop-color="#E8F4FD" />
                <stop offset="100%" stop-color="#D0E3F7" />
              </linearGradient>
            </defs>
            <!-- Moonlit ripples -->
            <ellipse cx="50" cy="78" rx="28" ry="4" fill="rgba(255,255,255,0.7)" />
            <ellipse cx="50" cy="85" rx="18" ry="2.5" fill="rgba(255,255,255,0.5)" />
            <!-- Swan Silhouette -->
            <path d="M42 66 C46 67 54 66 60 61 C63 58 64 54 61 51 C59 49 57 49 54 51 C51 52 48 55 44 57 C41 58 37 60 42 66 Z" fill="#FAFCFF" />
            <path d="M43 64 C41 62 40 58 41 54 C42 49 45 45 47 41 C47.8 39.5 49.5 39.5 50.2 41 C50.6 42 49.5 43.5 48.7 45 C46.5 50 46.5 54 47.2 56 Z" fill="#FAFCFF" />
            <polygon points="50.2,41 53,42 50.2,43" fill="#F8C8A9" />
          </svg>
        </div>

        <h1 class="final-title">${FINAL_SCREEN_CONTENT.title}</h1>
        <h2 class="final-recipient">${FINAL_SCREEN_CONTENT.recipient}</h2>

        <div class="final-body-text">
          ${FINAL_SCREEN_CONTENT.paragraphs.map(p => `<p>${p}</p>`).join('')}
        </div>

        <div class="final-signoff">
          <p>${FINAL_SCREEN_CONTENT.signoff}</p>
          <span class="final-sender">${FINAL_SCREEN_CONTENT.sender}</span>
        </div>

        <div class="final-actions-row">
          <button id="btn-relive-magic" class="fairytale-btn fairytale-btn-primary" type="button" aria-label="Relive the magic and revisit gifts">
            <span aria-hidden="true">🦢</span>
            <span>Relive the Magic</span>
          </button>
          <button id="btn-back-to-start" class="fairytale-btn fairytale-btn-secondary" type="button" aria-label="Return to the opening screen">
            <span>Back to the Beginning</span>
          </button>
        </div>
      </div>
    </section>
  `;

  // Attach Final Screen Buttons
  const btnRelive = document.getElementById('btn-relive-magic');
  const btnStart = document.getElementById('btn-back-to-start');

  if (btnRelive) {
    btnRelive.addEventListener('click', () => {
      // Return to Gift Room and open the collection drawer
      goToGift(0);
      setTimeout(() => {
        state.allGiftsModal.open();
      }, 400);
    });
  }

  if (btnStart) {
    btnStart.addEventListener('click', () => {
      renderOpeningScreen();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Kick off when DOM is ready
document.addEventListener('DOMContentLoaded', initApp);

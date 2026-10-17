/**
 * "View All Gifts" modal dialog.
 * Shows the magical collection of 7 wrapped/unwrapped presents.
 * Visitors can easily jump to any gift or revisit earlier ones without losing progress.
 */

export class AllGiftsModal {
  constructor(gifts, onSelectGift) {
    this.gifts = gifts;
    this.onSelectGift = onSelectGift;
    this.modal = null;
    this.openedGifts = new Set([1]); // First gift starts unlocked
    this.currentGiftIndex = 0;
    this.lastFocusedElement = null;

    this.init();
  }

  init() {
    this.modal = document.createElement('div');
    this.modal.id = 'all-gifts-modal';
    this.modal.className = 'all-gifts-backdrop';
    this.modal.setAttribute('role', 'dialog');
    this.modal.setAttribute('aria-modal', 'true');
    this.modal.setAttribute('aria-label', 'All Birthday Gifts Collection');
    this.modal.style.display = 'none';

    this.modal.innerHTML = `
      <div class="all-gifts-overlay" data-close="true"></div>
      <div class="all-gifts-container" role="document">
        <header class="all-gifts-header">
          <div class="all-gifts-header-text">
            <span class="collection-badge">🦢 The Royal Treasury</span>
            <h2 class="all-gifts-title">Elza’s Gift Collection</h2>
            <p class="all-gifts-subtitle">Select any gift to open it or revisit the memories.</p>
          </div>
          <button id="all-gifts-close" class="all-gifts-close-btn" type="button" aria-label="Close gift collection">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </header>

        <div id="all-gifts-grid" class="all-gifts-grid" role="list">
          <!-- Rendered dynamically -->
        </div>

        <footer class="all-gifts-footer">
          <button id="all-gifts-resume-btn" class="fairytale-btn fairytale-btn-secondary" type="button">
            <span>Return to Current Gift</span>
          </button>
        </footer>
      </div>
    `;

    document.body.appendChild(this.modal);

    this.closeBtn = this.modal.querySelector('#all-gifts-close');
    this.resumeBtn = this.modal.querySelector('#all-gifts-resume-btn');
    this.gridContainer = this.modal.querySelector('#all-gifts-grid');

    this.attachEvents();
  }

  attachEvents() {
    this.closeBtn.addEventListener('click', () => this.close());
    this.resumeBtn.addEventListener('click', () => this.close());

    this.modal.addEventListener('click', (e) => {
      if (e.target.getAttribute('data-close') === 'true') {
        this.close();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (this.modal.style.display !== 'flex') return;
      if (e.key === 'Escape') {
        e.preventDefault();
        this.close();
      }
    });
  }

  markGiftOpened(giftId) {
    this.openedGifts.add(giftId);
  }

  setCurrentIndex(index) {
    this.currentGiftIndex = index;
    this.markGiftOpened(this.gifts[index].id);
  }

  renderGrid() {
    this.gridContainer.innerHTML = '';

    this.gifts.forEach((gift, index) => {
      const isCurrent = index === this.currentGiftIndex;
      const isOpened = this.openedGifts.has(gift.id);

      const card = document.createElement('div');
      card.className = `gift-card-item ${isCurrent ? 'is-current' : ''} ${isOpened ? 'is-opened' : 'is-ready'}`;
      card.setAttribute('role', 'listitem');

      card.innerHTML = `
        <button class="gift-card-btn" type="button" aria-label="Open ${gift.numberLabel}: ${gift.boxLabel}">
          <div class="gift-card-box">
            <div class="gift-card-ribbon-v"></div>
            <div class="gift-card-ribbon-h"></div>
            <div class="gift-card-icon">${gift.boxIcon || '🎁'}</div>
            <span class="gift-card-status">${isCurrent ? 'Viewing Now' : isOpened ? 'Opened ✨' : 'Waiting 🎀'}</span>
          </div>
          <div class="gift-card-details">
            <span class="gift-card-num">${gift.numberLabel}</span>
            <h3 class="gift-card-title">${gift.boxLabel}</h3>
            <p class="gift-card-desc">${gift.title}</p>
          </div>
        </button>
      `;

      const btn = card.querySelector('.gift-card-btn');
      btn.addEventListener('click', () => {
        this.close();
        if (typeof this.onSelectGift === 'function') {
          this.onSelectGift(index);
        }
      });

      this.gridContainer.appendChild(card);
    });
  }

  open() {
    this.lastFocusedElement = document.activeElement;
    this.renderGrid();
    this.modal.style.display = 'flex';
    document.body.classList.add('all-gifts-open');
    setTimeout(() => {
      this.closeBtn.focus();
    }, 50);
  }

  close() {
    this.modal.style.display = 'none';
    document.body.classList.remove('all-gifts-open');
    if (this.lastFocusedElement && typeof this.lastFocusedElement.focus === 'function') {
      this.lastFocusedElement.focus();
    }
  }
}

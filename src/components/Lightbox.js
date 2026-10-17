/**
 * Accessible, reusable Lightbox component for viewing and saving gifts.
 * Preserves aspect ratios, supports keyboard traps, Esc key, backdrop click,
 * and reliable asset download.
 */

export class Lightbox {
  constructor() {
    this.modal = null;
    this.imgElement = null;
    this.titleElement = null;
    this.downloadBtn = null;
    this.closeBtn = null;
    this.loadingSpinner = null;
    this.errorNotice = null;
    this.lastFocusedElement = null;
    this.currentData = null;

    this.init();
  }

  init() {
    // Create lightbox DOM elements
    this.modal = document.createElement('div');
    this.modal.id = 'fairytale-lightbox';
    this.modal.className = 'lightbox-backdrop';
    this.modal.setAttribute('role', 'dialog');
    this.modal.setAttribute('aria-modal', 'true');
    this.modal.setAttribute('aria-label', 'Image preview');
    this.modal.setAttribute('tabindex', '-1');
    this.modal.style.display = 'none';

    this.modal.innerHTML = `
      <div class="lightbox-overlay" data-close="true"></div>
      <div class="lightbox-container" role="document">
        <header class="lightbox-header">
          <div class="lightbox-title-wrap">
            <span class="lightbox-swan-icon" aria-hidden="true">🦢</span>
            <h2 id="lightbox-title" class="lightbox-title">Image View</h2>
          </div>
          <div class="lightbox-actions">
            <a id="lightbox-download" class="lightbox-btn lightbox-btn-save" download href="#" role="button" aria-label="Download high resolution image">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              <span>Save Image</span>
            </a>
            <button id="lightbox-close" class="lightbox-btn lightbox-btn-close" aria-label="Close image viewer" type="button">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </header>

        <div class="lightbox-body">
          <div id="lightbox-spinner" class="lightbox-spinner" aria-label="Loading image...">
            <div class="spinner-swan"></div>
            <p>Unfolding the magic…</p>
          </div>
          
          <div id="lightbox-error" class="lightbox-error" style="display: none;">
            <p>Could not load the original image.</p>
          </div>

          <div class="lightbox-image-wrapper">
            <img id="lightbox-img" class="lightbox-img" src="" alt="" />
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(this.modal);

    this.imgElement = this.modal.querySelector('#lightbox-img');
    this.titleElement = this.modal.querySelector('#lightbox-title');
    this.downloadBtn = this.modal.querySelector('#lightbox-download');
    this.closeBtn = this.modal.querySelector('#lightbox-close');
    this.loadingSpinner = this.modal.querySelector('#lightbox-spinner');
    this.errorNotice = this.modal.querySelector('#lightbox-error');

    this.attachEvents();
  }

  attachEvents() {
    // Close on Close Button
    this.closeBtn.addEventListener('click', () => this.close());

    // Close on backdrop overlay click
    this.modal.addEventListener('click', (e) => {
      if (e.target.getAttribute('data-close') === 'true') {
        this.close();
      }
    });

    // Keyboard handlers: Esc to close, Tab trapping
    document.addEventListener('keydown', (e) => {
      if (this.modal.style.display !== 'flex') return;

      if (e.key === 'Escape') {
        e.preventDefault();
        this.close();
      } else if (e.key === 'Tab') {
        this.trapFocus(e);
      }
    });

    // Image load / error handlers
    this.imgElement.addEventListener('load', () => {
      this.loadingSpinner.style.display = 'none';
      this.imgElement.style.display = 'block';
      this.errorNotice.style.display = 'none';
    });

    this.imgElement.addEventListener('error', () => {
      this.loadingSpinner.style.display = 'none';
      this.imgElement.style.display = 'none';
      this.errorNotice.style.display = 'block';
    });

    // Download button click handler (uses fetch blob to guarantee direct download)
    this.downloadBtn.addEventListener('click', (e) => {
      if (!this.currentData || !this.currentData.asset) return;
      e.preventDefault();
      this.triggerDownload(this.currentData.asset, this.currentData.downloadFilename || 'elza-birthday-gift.jpg');
    });
  }

  trapFocus(e) {
    const focusable = this.modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    if (!focusable.length) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (e.shiftKey) {
      if (document.activeElement === first) {
        last.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === last) {
        first.focus();
        e.preventDefault();
      }
    }
  }

  async triggerDownload(assetUrl, filename) {
    try {
      const response = await fetch(assetUrl);
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      const tempLink = document.createElement('a');
      tempLink.href = blobUrl;
      tempLink.download = filename;
      document.body.appendChild(tempLink);
      tempLink.click();
      document.body.removeChild(tempLink);
      setTimeout(() => URL.revokeObjectURL(blobUrl), 1000);
    } catch {
      // Fallback to standard anchor navigation
      const tempLink = document.createElement('a');
      tempLink.href = assetUrl;
      tempLink.download = filename;
      tempLink.target = '_blank';
      document.body.appendChild(tempLink);
      tempLink.click();
      document.body.removeChild(tempLink);
    }
  }

  open({ asset, alt, title, downloadFilename }) {
    this.lastFocusedElement = document.activeElement;
    this.currentData = { asset, alt, title, downloadFilename };

    this.titleElement.textContent = title || 'Magical Birthday Gift';
    this.imgElement.alt = alt || 'Birthday present';
    this.imgElement.style.display = 'none';
    this.errorNotice.style.display = 'none';
    this.loadingSpinner.style.display = 'flex';

    this.downloadBtn.setAttribute('download', downloadFilename || 'elza-gift.jpg');
    this.downloadBtn.setAttribute('href', asset);

    this.imgElement.src = asset;

    this.modal.style.display = 'flex';
    document.body.classList.add('lightbox-open');

    // Focus close button for accessibility
    setTimeout(() => {
      this.closeBtn.focus();
    }, 50);
  }

  close() {
    this.modal.style.display = 'none';
    document.body.classList.remove('lightbox-open');
    this.imgElement.src = '';

    if (this.lastFocusedElement && typeof this.lastFocusedElement.focus === 'function') {
      this.lastFocusedElement.focus();
    }
  }
}

export const lightbox = new Lightbox();

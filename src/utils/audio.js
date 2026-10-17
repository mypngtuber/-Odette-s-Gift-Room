/**
 * Gentle fairytale music-box / celesta synthesizer using Web Audio API.
 * 100% royalty-free, zero external audio asset dependencies.
 * STRICTLY complies with non-autoplay rules: starts ONLY upon explicit user interaction.
 */

class FairytaleAudioController {
  constructor() {
    this.audioCtx = null;
    this.isPlaying = false;
    this.isMuted = true;
    this.timer = null;
    this.gainNode = null;
    this.noteIndex = 0;

    // Melody: dreamy Odette music box arpeggios (in B minor / D major fairytale cadence)
    // Notes represented as frequencies in Hz
    this.melody = [
      { f: 587.33, d: 0.5 }, // D5
      { f: 739.99, d: 0.5 }, // F#5
      { f: 880.00, d: 0.5 }, // A5
      { f: 1174.66, d: 0.75 },// D6
      { f: 1046.50, d: 0.5 }, // C6
      { f: 880.00, d: 0.5 }, // A5
      { f: 739.99, d: 0.75 },// F#5
      { f: 659.25, d: 0.5 }, // E5
      { f: 739.99, d: 0.5 }, // F#5
      { f: 880.00, d: 0.5 }, // A5
      { f: 987.77, d: 0.75 },// B5
      { f: 880.00, d: 0.5 }, // A5
      { f: 739.99, d: 0.5 }, // F#5
      { f: 587.33, d: 1.0 }, // D5
      { f: 493.88, d: 0.5 }, // B4
      { f: 587.33, d: 0.5 }, // D5
      { f: 659.25, d: 0.5 }, // E5
      { f: 739.99, d: 0.75 },// F#5
      { f: 587.33, d: 1.2 }  // D5
    ];
  }

  ensureContext() {
    if (!this.audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.audioCtx = new AudioContext();
      this.gainNode = this.audioCtx.createGain();
      this.gainNode.gain.setValueAtTime(0.12, this.audioCtx.currentTime); // Soft, gentle volume
      this.gainNode.connect(this.audioCtx.destination);
    }
    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  playNote(frequency, duration) {
    if (!this.audioCtx || this.isMuted) return;

    const t = this.audioCtx.currentTime;

    // Primary bell oscillator
    const osc = this.audioCtx.createOscillator();
    const oscGain = this.audioCtx.createGain();

    // Secondary overtone for celesta/music box sparkle
    const overtone = this.audioCtx.createOscillator();
    const overtoneGain = this.audioCtx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(frequency, t);

    overtone.type = 'triangle';
    overtone.frequency.setValueAtTime(frequency * 2.01, t); // Slight detune for shimmer

    // Bell envelope: instant attack, exponential decay
    oscGain.gain.setValueAtTime(0.2, t);
    oscGain.gain.exponentialRampToValueAtTime(0.0001, t + duration * 1.5);

    overtoneGain.gain.setValueAtTime(0.08, t);
    overtoneGain.gain.exponentialRampToValueAtTime(0.0001, t + duration * 0.8);

    osc.connect(oscGain);
    overtone.connect(overtoneGain);

    oscGain.connect(this.gainNode);
    overtoneGain.connect(this.gainNode);

    osc.start(t);
    overtone.start(t);

    osc.stop(t + duration * 1.6);
    overtone.stop(t + duration * 0.9);
  }

  step() {
    if (!this.isPlaying || this.isMuted) return;

    const current = this.melody[this.noteIndex];
    this.playNote(current.f, current.d);

    this.noteIndex = (this.noteIndex + 1) % this.melody.length;
    const interval = current.d * 750; // tempo adjustment

    this.timer = setTimeout(() => this.step(), interval);
  }

  toggle() {
    this.ensureContext();

    if (this.isMuted) {
      this.isMuted = false;
      this.isPlaying = true;
      this.step();
      return true; // Now playing
    } else {
      this.isMuted = true;
      this.isPlaying = false;
      if (this.timer) {
        clearTimeout(this.timer);
        this.timer = null;
      }
      return false; // Now muted
    }
  }

  getState() {
    return {
      isPlaying: this.isPlaying,
      isMuted: this.isMuted
    };
  }
}

export const fairytaleAudio = new FairytaleAudioController();

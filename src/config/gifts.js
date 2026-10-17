/**
 * Central configuration module for "Odette's Magical Birthday Gift Room".
 * All gift assets, titles, messages, and placeholders can be customized here.
 */

const base = import.meta.env.BASE_URL || './';
const cleanBase = base.endsWith('/') ? base : base + '/';
export const getAssetUrl = (path) => `${cleanBase}${path.replace(/^\//, '')}`;

export const GIFT_DEFINITIONS = [
  {
    id: 1,
    key: 'greeting',
    type: 'image',
    numberLabel: 'Gift 1 of 7',
    boxLabel: 'A Royal Greeting',
    boxIcon: '🦢',
    title: 'A Little Birthday Magic',
    message: 'Every fairytale deserves a beautiful beginning. And today, this little fairytale is all about you!',
    asset: getAssetUrl('assets/birthday-greeting.jpg'),
    alt: 'Odette Swan Princess Birthday Greeting for Elza',
    aspectRatio: '928 / 1152',
    lightboxTitle: 'Birthday Greeting Card',
    canDownload: true,
    downloadFilename: 'elza-birthday-greeting.jpg'
  },
  {
    id: 2,
    key: 'wallpaper-1',
    type: 'wallpaper',
    numberLabel: 'Gift 2 of 7',
    boxLabel: 'Swan Lake Wallpaper I',
    boxIcon: '📱',
    title: 'A Little Piece of Magic',
    message: 'A little winter magic to keep close, even when you leave this page. ✨',
    asset: getAssetUrl('assets/wallpaper-01.jpg'),
    alt: 'Magical Winter Swan Phone Wallpaper 1 for Elza',
    aspectRatio: '714 / 1280',
    lightboxTitle: 'Magical Phone Wallpaper I',
    canDownload: true,
    downloadFilename: 'odette-fairytale-wallpaper-01.jpg'
  },
  {
    id: 3,
    key: 'wallpaper-2',
    type: 'wallpaper',
    numberLabel: 'Gift 3 of 7',
    boxLabel: 'Swan Lake Wallpaper II',
    boxIcon: '✨',
    title: 'Another Little Dream',
    message: 'Another tiny piece of this fairytale, made to bring a little sparkle to your everyday moments. 🩵',
    asset: getAssetUrl('assets/wallpaper-02.jpg'),
    alt: 'Magical Winter Swan Phone Wallpaper 2 for Elza',
    aspectRatio: '714 / 1280',
    lightboxTitle: 'Magical Phone Wallpaper II',
    canDownload: true,
    downloadFilename: 'odette-fairytale-wallpaper-02.jpg'
  },
  {
    id: 4,
    key: 'heartfelt-letter',
    type: 'letter',
    numberLabel: 'Gift 4 of 7',
    boxLabel: 'A Royal Letter',
    boxIcon: '💌',
    title: 'A Little Note from the Heart',
    message: 'Some gifts are made of pictures and melodies. Others are made of words that come straight from the heart.',
    asset: getAssetUrl('assets/heartfelt-message.jpg'),
    alt: 'Heartfelt handwritten birthday letter for Elza',
    aspectRatio: '928 / 1152',
    lightboxTitle: 'Heartfelt Birthday Letter',
    canDownload: true,
    downloadFilename: 'elza-heartfelt-birthday-letter.jpg'
  },
  {
    id: 5,
    key: 'odette-video',
    type: 'video',
    videoKey: 'odetteVideo',
    numberLabel: 'Gift 5 of 7',
    boxLabel: 'Odette’s Video Wish',
    boxIcon: '🎬',
    title: 'A Special Birthday Wish',
    message: 'Someone very graceful has a little something to tell you…',
    postVideoMessage: 'I hope your wish comes true. 🦢✨',
    placeholderTitle: 'A Little Surprise Is Waiting Here…',
    placeholderMessage: 'The magical video wish is getting ready. You can update the link anytime in public/video-links.txt under [ODETTE_BIRTHDAY_VIDEO].'
  },
  {
    id: 6,
    key: 'birthday-song',
    type: 'video',
    videoKey: 'birthdaySongVideo',
    numberLabel: 'Gift 6 of 7',
    boxLabel: 'Fairytale Birthday Song',
    boxIcon: '🎶',
    title: 'Your Own Little Fairytale',
    message: 'This melody was made to bring a little more magic to your special day. Press play and let the music carry you into a fairytale.',
    placeholderTitle: 'A Melody Is Preparing Its Wings…',
    placeholderMessage: 'The birthday melody is waiting for its link. Update public/video-links.txt under [BIRTHDAY_SONG_VIDEO] to hear it sing.'
  },
  {
    id: 7,
    key: 'double-surprise',
    type: 'double',
    numberLabel: 'Gift 7 of 7',
    boxLabel: 'The Grand Finale',
    boxIcon: '👑',
    title: 'One Last Surprise!',
    partA: {
      subtitle: 'Part I • A Dash of Birthday Chaos',
      title: 'Birthday Meme',
      message: 'Even the most elegant swan princess has a silly side. No birthday is complete without a little chaos!',
      asset: getAssetUrl('assets/birthday-meme.jpg'),
      alt: 'Playful Swan Princess Birthday Meme for Elza',
      aspectRatio: '928 / 1152',
      lightboxTitle: 'Birthday Meme',
      canDownload: true,
      downloadFilename: 'elza-birthday-meme.jpg'
    },
    partB: {
      subtitle: 'Part II • Officially Crowned',
      title: 'Friendship Certificate',
      message: 'Officially certified: one wonderful human, an unforgettable friendship, and a lifetime supply of magical memories.',
      asset: getAssetUrl('assets/friendship-certificate.jpg'),
      alt: 'Official Friendship Certificate for Elza',
      aspectRatio: '1200 / 896',
      lightboxTitle: 'Friendship Certificate',
      canDownload: true,
      downloadFilename: 'elza-friendship-certificate.jpg'
    }
  }
];

export const FINAL_SCREEN_CONTENT = {
  title: 'And So, This Little Fairytale Is Yours…',
  recipient: 'Happy Birthday, Elza! 🩵',
  paragraphs: [
    'I hope this new chapter of your life brings you beautiful memories, lovely surprises, countless reasons to smile, and dreams that slowly turn into reality.',
    'Thank you for being part of this little fairytale.',
    'May your wishes find their way to you, just like a swan finding its way across a moonlit lake.'
  ],
  signoff: 'With lots of birthday magic,',
  sender: 'Your Friend 🦢✨'
};

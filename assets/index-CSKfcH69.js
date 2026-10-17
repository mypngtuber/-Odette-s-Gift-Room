(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function i(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerPolicy&&(n.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?n.credentials="include":a.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(a){if(a.ep)return;a.ep=!0;const n=i(a);fetch(a.href,n)}})();const B={},v=typeof import.meta<"u"&&B?"/-Odette-s-Gift-Room/":"./",G=v.endsWith("/")?v:v+"/",u=t=>`${G}${t.replace(/^\//,"")}`,m=[{id:1,key:"greeting",type:"image",numberLabel:"Gift 1 of 7",boxLabel:"A Royal Greeting",boxIcon:"🦢",title:"A Little Birthday Magic",message:"Every fairytale deserves a beautiful beginning. And today, this little fairytale is all about you!",asset:u("assets/birthday-greeting.jpg"),alt:"Odette Swan Princess Birthday Greeting for Elza",aspectRatio:"928 / 1152",lightboxTitle:"Birthday Greeting Card",canDownload:!0,downloadFilename:"elza-birthday-greeting.jpg"},{id:2,key:"wallpaper-1",type:"wallpaper",numberLabel:"Gift 2 of 7",boxLabel:"Swan Lake Wallpaper I",boxIcon:"📱",title:"A Little Piece of Magic",message:"A little winter magic to keep close, even when you leave this page. ✨",asset:u("assets/wallpaper-01.jpg"),alt:"Magical Winter Swan Phone Wallpaper 1 for Elza",aspectRatio:"714 / 1280",lightboxTitle:"Magical Phone Wallpaper I",canDownload:!0,downloadFilename:"odette-fairytale-wallpaper-01.jpg"},{id:3,key:"wallpaper-2",type:"wallpaper",numberLabel:"Gift 3 of 7",boxLabel:"Swan Lake Wallpaper II",boxIcon:"✨",title:"Another Little Dream",message:"Another tiny piece of this fairytale, made to bring a little sparkle to your everyday moments. 🩵",asset:u("assets/wallpaper-02.jpg"),alt:"Magical Winter Swan Phone Wallpaper 2 for Elza",aspectRatio:"714 / 1280",lightboxTitle:"Magical Phone Wallpaper II",canDownload:!0,downloadFilename:"odette-fairytale-wallpaper-02.jpg"},{id:4,key:"heartfelt-letter",type:"letter",numberLabel:"Gift 4 of 7",boxLabel:"A Royal Letter",boxIcon:"💌",title:"A Little Note from the Heart",message:"Some gifts are made of pictures and melodies. Others are made of words that come straight from the heart.",asset:u("assets/heartfelt-message.jpg"),alt:"Heartfelt handwritten birthday letter for Elza",aspectRatio:"928 / 1152",lightboxTitle:"Heartfelt Birthday Letter",canDownload:!0,downloadFilename:"elza-heartfelt-birthday-letter.jpg"},{id:5,key:"odette-video",type:"video",videoKey:"odetteVideo",numberLabel:"Gift 5 of 7",boxLabel:"Odette’s Video Wish",boxIcon:"🎬",title:"A Special Birthday Wish",message:"Someone very graceful has a little something to tell you…",postVideoMessage:"I hope your wish comes true. 🦢✨",placeholderTitle:"A Little Surprise Is Waiting Here…",placeholderMessage:"The magical video wish is getting ready. You can update the link anytime in public/video-links.txt under [ODETTE_BIRTHDAY_VIDEO]."},{id:6,key:"birthday-song",type:"video",videoKey:"birthdaySongVideo",numberLabel:"Gift 6 of 7",boxLabel:"Fairytale Birthday Song",boxIcon:"🎶",title:"Your Own Little Fairytale",message:"This melody was made to bring a little more magic to your special day. Press play and let the music carry you into a fairytale.",placeholderTitle:"A Melody Is Preparing Its Wings…",placeholderMessage:"The birthday melody is waiting for its link. Update public/video-links.txt under [BIRTHDAY_SONG_VIDEO] to hear it sing."},{id:7,key:"double-surprise",type:"double",numberLabel:"Gift 7 of 7",boxLabel:"The Grand Finale",boxIcon:"👑",title:"One Last Surprise!",partA:{subtitle:"Part I • A Dash of Birthday Chaos",title:"Birthday Meme",message:"Even the most elegant swan princess has a silly side. No birthday is complete without a little chaos!",asset:u("assets/birthday-meme.jpg"),alt:"Playful Swan Princess Birthday Meme for Elza",aspectRatio:"928 / 1152",lightboxTitle:"Birthday Meme",canDownload:!0,downloadFilename:"elza-birthday-meme.jpg"},partB:{subtitle:"Part II • Officially Crowned",title:"Friendship Certificate",message:"Officially certified: one wonderful human, an unforgettable friendship, and a lifetime supply of magical memories.",asset:u("assets/friendship-certificate.jpg"),alt:"Official Friendship Certificate for Elza",aspectRatio:"1200 / 896",lightboxTitle:"Friendship Certificate",canDownload:!0,downloadFilename:"elza-friendship-certificate.jpg"}}],g={title:"And So, This Little Fairytale Is Yours…",recipient:"Happy Birthday, Elza! 🩵",paragraphs:["I hope this new chapter of your life brings you beautiful memories, lovely surprises, countless reasons to smile, and dreams that slowly turn into reality.","Thank you for being part of this little fairytale.","May your wishes find their way to you, just like a swan finding its way across a moonlit lake."],signoff:"With lots of birthday magic,",sender:"Your Friend 🦢✨"},A={};function F(t){if(!t||typeof t!="string")return null;const e=t.trim();if(!e||e.includes("VIDEO_ID")||e.includes("YOUR_ID")||e.includes("PLACEHOLDER")||e.toLowerCase().includes("example"))return null;const i=[/(?:youtube\.com\/watch\?.*v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/shorts\/)([a-zA-Z0-9_-]{10,12})/i,/youtube-nocookie\.com\/embed\/([a-zA-Z0-9_-]{10,12})/i];for(const s of i){const a=e.match(s);if(a&&a[1])return a[1]}return null}function C(t){return t?`https://www.youtube-nocookie.com/embed/${encodeURIComponent(t)}?rel=0&modestbranding=1`:null}function M(t){const e={odetteVideo:{raw:"",id:null,embedUrl:null,isValid:!1},birthdaySongVideo:{raw:"",id:null,embedUrl:null,isValid:!1}};if(!t||typeof t!="string")return e;const i=t.split(/\r?\n/);let s=null;for(const a of i){const n=a.trim();if(n){if(n.startsWith("[")&&n.endsWith("]")){const l=n.slice(1,-1).trim().toUpperCase();l==="ODETTE_BIRTHDAY_VIDEO"?s="ODETTE_BIRTHDAY_VIDEO":l==="BIRTHDAY_SONG_VIDEO"?s="BIRTHDAY_SONG_VIDEO":s=null;continue}if(s==="ODETTE_BIRTHDAY_VIDEO"&&!e.odetteVideo.raw){e.odetteVideo.raw=n;const l=F(n);l&&(e.odetteVideo.id=l,e.odetteVideo.embedUrl=C(l),e.odetteVideo.isValid=!0)}else if(s==="BIRTHDAY_SONG_VIDEO"&&!e.birthdaySongVideo.raw){e.birthdaySongVideo.raw=n;const l=F(n);l&&(e.birthdaySongVideo.id=l,e.birthdaySongVideo.embedUrl=C(l),e.birthdaySongVideo.isValid=!0)}}}return e}async function T(){const t=typeof import.meta<"u"&&A?"/-Odette-s-Gift-Room/":"./",e=t.endsWith("/")?t:t+"/",i=[`${e}video-links.txt`,`${e}assets/video-links.txt`,"/video-links.txt","/assets/video-links.txt","video-links.txt","assets/video-links.txt"];for(const a of i)try{const n=await fetch(a);if(n.ok){const l=await n.text();return M(l)}}catch{}return M(`[ODETTE_BIRTHDAY_VIDEO]
https://youtube.com/shorts/0mBLYpKQxkA?feature=share

[BIRTHDAY_SONG_VIDEO]
https://youtube.com/shorts/6w3Uy9w0n_Y`)}class S{constructor(e){this.canvas=e,this.ctx=e.getContext("2d"),this.particles=[],this.animationFrameId=null,this.isRunning=!1,this.width=window.innerWidth,this.height=window.innerHeight,this.reducedMotion=window.matchMedia("(prefers-reduced-motion: reduce)").matches,this.init()}init(){this.resize(),window.addEventListener("resize",()=>this.resize(),{passive:!0}),document.addEventListener("visibilitychange",()=>{document.hidden?this.stop():this.start()}),this.createParticles(),this.start()}resize(){this.width=window.innerWidth,this.height=window.innerHeight,this.canvas.width=this.width*window.devicePixelRatio,this.canvas.height=this.height*window.devicePixelRatio,this.ctx.scale(window.devicePixelRatio,window.devicePixelRatio)}createParticles(){const e=this.width<768,i=this.reducedMotion?15:e?35:75;this.particles=[];for(let s=0;s<i;s++)this.particles.push({x:Math.random()*this.width,y:Math.random()*this.height,radius:Math.random()*2.5+.8,density:Math.random()*1,speedY:Math.random()*.8+.3,speedX:Math.random()*.5-.25,opacity:Math.random()*.6+.25,twinkleSpeed:Math.random()*.02+.005,twinklePhase:Math.random()*Math.PI*2,isStar:Math.random()>.65})}draw(){this.ctx.clearRect(0,0,this.width,this.height);for(let e=0;e<this.particles.length;e++){const i=this.particles[e];i.twinklePhase+=i.twinkleSpeed;const s=i.opacity*(.6+.4*Math.sin(i.twinklePhase));if(this.ctx.save(),this.ctx.globalAlpha=Math.max(.1,Math.min(1,s)),i.isStar){this.ctx.fillStyle="#FFFFFF",this.ctx.shadowBlur=6,this.ctx.shadowColor="#CDEBFA";const a=i.radius*1.5;this.ctx.beginPath(),this.ctx.moveTo(i.x,i.y-a),this.ctx.quadraticCurveTo(i.x,i.y,i.x+a,i.y),this.ctx.quadraticCurveTo(i.x,i.y,i.x,i.y+a),this.ctx.quadraticCurveTo(i.x,i.y,i.x-a,i.y),this.ctx.quadraticCurveTo(i.x,i.y,i.x,i.y-a),this.ctx.fill()}else{const a=this.ctx.createRadialGradient(i.x,i.y,0,i.x,i.y,i.radius*1.8);a.addColorStop(0,"#FFFFFF"),a.addColorStop(.5,"rgba(230, 221, 248, 0.8)"),a.addColorStop(1,"rgba(205, 235, 250, 0)"),this.ctx.fillStyle=a,this.ctx.beginPath(),this.ctx.arc(i.x,i.y,i.radius*1.8,0,Math.PI*2),this.ctx.fill()}this.ctx.restore(),this.reducedMotion||(i.y+=i.speedY,i.x+=i.speedX+Math.sin(i.twinklePhase)*.2,i.y>this.height+10&&(i.y=-10,i.x=Math.random()*this.width),i.x>this.width+10?i.x=-10:i.x<-10&&(i.x=this.width+10))}this.isRunning&&(this.animationFrameId=requestAnimationFrame(()=>this.draw()))}start(){this.isRunning||(this.isRunning=!0,this.draw())}stop(){this.isRunning=!1,this.animationFrameId&&(cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null)}}function x(t=window.innerWidth/2,e=window.innerHeight*.4,i=65){if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const s=document.createElement("canvas");s.style.position="fixed",s.style.top="0",s.style.left="0",s.style.width="100vw",s.style.height="100vh",s.style.pointerEvents="none",s.style.zIndex="9999",document.body.appendChild(s);const a=s.getContext("2d"),n=window.devicePixelRatio||1;s.width=window.innerWidth*n,s.height=window.innerHeight*n,a.scale(n,n);const l=["#CDEBFA","#E6DDF8","#F8E3EC","#D9E0EB","#FFFFFF","#F6D55C"],d=[];for(let c=0;c<i;c++){const o=Math.random()*Math.PI*2,k=Math.random()*9+4;d.push({x:t,y:e,vx:Math.cos(o)*k,vy:Math.sin(o)*k-3,size:Math.random()*8+5,color:l[Math.floor(Math.random()*l.length)],rotation:Math.random()*360,rotationSpeed:(Math.random()-.5)*12,opacity:1,shape:Math.random()>.4?"rect":"circle",gravity:.18,drag:.96})}let p;function f(){a.clearRect(0,0,window.innerWidth,window.innerHeight);let c=0;for(const o of d)o.vx*=o.drag,o.vy=o.vy*o.drag+o.gravity,o.x+=o.vx,o.y+=o.vy,o.rotation+=o.rotationSpeed,o.opacity-=.012,o.opacity>0&&o.y<window.innerHeight+20&&(c++,a.save(),a.translate(o.x,o.y),a.rotate(o.rotation*Math.PI/180),a.globalAlpha=Math.max(0,o.opacity),a.fillStyle=o.color,o.shape==="rect"?a.fillRect(-o.size/2,-o.size/4,o.size,o.size/2):(a.beginPath(),a.arc(0,0,o.size/3,0,Math.PI*2),a.fill()),a.restore());c>0?p=requestAnimationFrame(f):(cancelAnimationFrame(p),s.parentNode&&s.parentNode.removeChild(s))}p=requestAnimationFrame(f)}class D{constructor(){this.audioCtx=null,this.isPlaying=!1,this.isMuted=!0,this.timer=null,this.gainNode=null,this.noteIndex=0,this.melody=[{f:587.33,d:.5},{f:739.99,d:.5},{f:880,d:.5},{f:1174.66,d:.75},{f:1046.5,d:.5},{f:880,d:.5},{f:739.99,d:.75},{f:659.25,d:.5},{f:739.99,d:.5},{f:880,d:.5},{f:987.77,d:.75},{f:880,d:.5},{f:739.99,d:.5},{f:587.33,d:1},{f:493.88,d:.5},{f:587.33,d:.5},{f:659.25,d:.5},{f:739.99,d:.75},{f:587.33,d:1.2}]}ensureContext(){if(!this.audioCtx){const e=window.AudioContext||window.webkitAudioContext;this.audioCtx=new e,this.gainNode=this.audioCtx.createGain(),this.gainNode.gain.setValueAtTime(.12,this.audioCtx.currentTime),this.gainNode.connect(this.audioCtx.destination)}this.audioCtx.state==="suspended"&&this.audioCtx.resume()}playNote(e,i){if(!this.audioCtx||this.isMuted)return;const s=this.audioCtx.currentTime,a=this.audioCtx.createOscillator(),n=this.audioCtx.createGain(),l=this.audioCtx.createOscillator(),d=this.audioCtx.createGain();a.type="sine",a.frequency.setValueAtTime(e,s),l.type="triangle",l.frequency.setValueAtTime(e*2.01,s),n.gain.setValueAtTime(.2,s),n.gain.exponentialRampToValueAtTime(1e-4,s+i*1.5),d.gain.setValueAtTime(.08,s),d.gain.exponentialRampToValueAtTime(1e-4,s+i*.8),a.connect(n),l.connect(d),n.connect(this.gainNode),d.connect(this.gainNode),a.start(s),l.start(s),a.stop(s+i*1.6),l.stop(s+i*.9)}step(){if(!this.isPlaying||this.isMuted)return;const e=this.melody[this.noteIndex];this.playNote(e.f,e.d),this.noteIndex=(this.noteIndex+1)%this.melody.length;const i=e.d*750;this.timer=setTimeout(()=>this.step(),i)}toggle(){return this.ensureContext(),this.isMuted?(this.isMuted=!1,this.isPlaying=!0,this.step(),!0):(this.isMuted=!0,this.isPlaying=!1,this.timer&&(clearTimeout(this.timer),this.timer=null),!1)}getState(){return{isPlaying:this.isPlaying,isMuted:this.isMuted}}}const O=new D;class ${constructor(){this.modal=null,this.imgElement=null,this.titleElement=null,this.downloadBtn=null,this.closeBtn=null,this.loadingSpinner=null,this.errorNotice=null,this.lastFocusedElement=null,this.currentData=null,this.init()}init(){this.modal=document.createElement("div"),this.modal.id="fairytale-lightbox",this.modal.className="lightbox-backdrop",this.modal.setAttribute("role","dialog"),this.modal.setAttribute("aria-modal","true"),this.modal.setAttribute("aria-label","Image preview"),this.modal.setAttribute("tabindex","-1"),this.modal.style.display="none",this.modal.innerHTML=`
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
    `,document.body.appendChild(this.modal),this.imgElement=this.modal.querySelector("#lightbox-img"),this.titleElement=this.modal.querySelector("#lightbox-title"),this.downloadBtn=this.modal.querySelector("#lightbox-download"),this.closeBtn=this.modal.querySelector("#lightbox-close"),this.loadingSpinner=this.modal.querySelector("#lightbox-spinner"),this.errorNotice=this.modal.querySelector("#lightbox-error"),this.attachEvents()}attachEvents(){this.closeBtn.addEventListener("click",()=>this.close()),this.modal.addEventListener("click",e=>{e.target.getAttribute("data-close")==="true"&&this.close()}),document.addEventListener("keydown",e=>{this.modal.style.display==="flex"&&(e.key==="Escape"?(e.preventDefault(),this.close()):e.key==="Tab"&&this.trapFocus(e))}),this.imgElement.addEventListener("load",()=>{this.loadingSpinner.style.display="none",this.imgElement.style.display="block",this.errorNotice.style.display="none"}),this.imgElement.addEventListener("error",()=>{this.loadingSpinner.style.display="none",this.imgElement.style.display="none",this.errorNotice.style.display="block"}),this.downloadBtn.addEventListener("click",e=>{!this.currentData||!this.currentData.asset||(e.preventDefault(),this.triggerDownload(this.currentData.asset,this.currentData.downloadFilename||"elza-birthday-gift.jpg"))})}trapFocus(e){const i=this.modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');if(!i.length)return;const s=i[0],a=i[i.length-1];e.shiftKey?document.activeElement===s&&(a.focus(),e.preventDefault()):document.activeElement===a&&(s.focus(),e.preventDefault())}async triggerDownload(e,i){try{const a=await(await fetch(e)).blob(),n=URL.createObjectURL(a),l=document.createElement("a");l.href=n,l.download=i,document.body.appendChild(l),l.click(),document.body.removeChild(l),setTimeout(()=>URL.revokeObjectURL(n),1e3)}catch{const s=document.createElement("a");s.href=e,s.download=i,s.target="_blank",document.body.appendChild(s),s.click(),document.body.removeChild(s)}}open({asset:e,alt:i,title:s,downloadFilename:a}){this.lastFocusedElement=document.activeElement,this.currentData={asset:e,alt:i,title:s,downloadFilename:a},this.titleElement.textContent=s||"Magical Birthday Gift",this.imgElement.alt=i||"Birthday present",this.imgElement.style.display="none",this.errorNotice.style.display="none",this.loadingSpinner.style.display="flex",this.downloadBtn.setAttribute("download",a||"elza-gift.jpg"),this.downloadBtn.setAttribute("href",e),this.imgElement.src=e,this.modal.style.display="flex",document.body.classList.add("lightbox-open"),setTimeout(()=>{this.closeBtn.focus()},50)}close(){this.modal.style.display="none",document.body.classList.remove("lightbox-open"),this.imgElement.src="",this.lastFocusedElement&&typeof this.lastFocusedElement.focus=="function"&&this.lastFocusedElement.focus()}}const h=new $;class R{constructor(e,i){this.gifts=e,this.onSelectGift=i,this.modal=null,this.openedGifts=new Set([1]),this.currentGiftIndex=0,this.lastFocusedElement=null,this.init()}init(){this.modal=document.createElement("div"),this.modal.id="all-gifts-modal",this.modal.className="all-gifts-backdrop",this.modal.setAttribute("role","dialog"),this.modal.setAttribute("aria-modal","true"),this.modal.setAttribute("aria-label","All Birthday Gifts Collection"),this.modal.style.display="none",this.modal.innerHTML=`
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
    `,document.body.appendChild(this.modal),this.closeBtn=this.modal.querySelector("#all-gifts-close"),this.resumeBtn=this.modal.querySelector("#all-gifts-resume-btn"),this.gridContainer=this.modal.querySelector("#all-gifts-grid"),this.attachEvents()}attachEvents(){this.closeBtn.addEventListener("click",()=>this.close()),this.resumeBtn.addEventListener("click",()=>this.close()),this.modal.addEventListener("click",e=>{e.target.getAttribute("data-close")==="true"&&this.close()}),document.addEventListener("keydown",e=>{this.modal.style.display==="flex"&&e.key==="Escape"&&(e.preventDefault(),this.close())})}markGiftOpened(e){this.openedGifts.add(e)}setCurrentIndex(e){this.currentGiftIndex=e,this.markGiftOpened(this.gifts[e].id)}renderGrid(){this.gridContainer.innerHTML="",this.gifts.forEach((e,i)=>{const s=i===this.currentGiftIndex,a=this.openedGifts.has(e.id),n=document.createElement("div");n.className=`gift-card-item ${s?"is-current":""} ${a?"is-opened":"is-ready"}`,n.setAttribute("role","listitem"),n.innerHTML=`
        <button class="gift-card-btn" type="button" aria-label="Open ${e.numberLabel}: ${e.boxLabel}">
          <div class="gift-card-box">
            <div class="gift-card-ribbon-v"></div>
            <div class="gift-card-ribbon-h"></div>
            <div class="gift-card-icon">${e.boxIcon||"🎁"}</div>
            <span class="gift-card-status">${s?"Viewing Now":a?"Opened ✨":"Waiting 🎀"}</span>
          </div>
          <div class="gift-card-details">
            <span class="gift-card-num">${e.numberLabel}</span>
            <h3 class="gift-card-title">${e.boxLabel}</h3>
            <p class="gift-card-desc">${e.title}</p>
          </div>
        </button>
      `,n.querySelector(".gift-card-btn").addEventListener("click",()=>{this.close(),typeof this.onSelectGift=="function"&&this.onSelectGift(i)}),this.gridContainer.appendChild(n)})}open(){this.lastFocusedElement=document.activeElement,this.renderGrid(),this.modal.style.display="flex",document.body.classList.add("all-gifts-open"),setTimeout(()=>{this.closeBtn.focus()},50)}close(){this.modal.style.display="none",document.body.classList.remove("all-gifts-open"),this.lastFocusedElement&&typeof this.lastFocusedElement.focus=="function"&&this.lastFocusedElement.focus()}}const r={view:"OPENING",currentGiftIndex:0,videoData:null,allGiftsModal:null},E=document.getElementById("main-content"),w=document.getElementById("btn-music-toggle"),P=document.getElementById("music-btn-text"),b=document.getElementById("btn-header-view-all"),V=document.getElementById("brand-link");async function N(){const t=document.getElementById("snowfall-canvas");t&&new S(t),r.videoData=await T(),r.allGiftsModal=new R(m,e=>{y(e)}),_(),L()}function _(){w.addEventListener("click",()=>{const t=O.toggle();w.setAttribute("aria-pressed",t?"true":"false"),w.classList.toggle("audio-playing",t),P.textContent=t?"Music: Playing":"Music: Off"}),b.addEventListener("click",()=>{r.allGiftsModal.open()}),V.addEventListener("click",t=>{t.preventDefault(),r.view!=="OPENING"&&I()})}function L(){r.view="OPENING",b.style.display="none",E.innerHTML=`
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
  `,document.getElementById("btn-enter-room").addEventListener("click",()=>{I(),x(window.innerWidth/2,window.innerHeight*.45,40)})}function I(){r.view="GIFT_ROOM",b.style.display="inline-flex";const t=m[r.currentGiftIndex];r.allGiftsModal.setCurrentIndex(r.currentGiftIndex);const e=m.length,i=Math.round((r.currentGiftIndex+1)/e*100);E.innerHTML=`
    <section class="view-gift-room" aria-label="Birthday Gift Room">
      <!-- Progress Bar & Indicator -->
      <div class="gift-room-progress-bar-wrap">
        <div class="progress-header">
          <span class="progress-label">
            <span class="progress-star-icon" aria-hidden="true">⭐</span>
            <span>Gift ${r.currentGiftIndex+1} of ${e}</span>
          </span>
          <button id="btn-room-view-all" class="header-btn" type="button" aria-label="View all gifts in collection">
            <span aria-hidden="true">🎁</span>
            <span>All Gifts (${r.currentGiftIndex+1}/${e})</span>
          </button>
        </div>
        <div class="progress-track" role="progressbar" aria-valuenow="${i}" aria-valuemin="0" aria-valuemax="100" aria-label="Gifts discovered progress">
          <div class="progress-fill" style="width: ${i}%;"></div>
        </div>
        <div class="progress-stars-row" aria-hidden="true">
          ${m.map((s,a)=>`
            <span class="star-step ${a<=r.currentGiftIndex?"is-reached":""}">${a+1}</span>
          `).join("")}
        </div>
      </div>

      <!-- Main Stage for Current Gift -->
      <article class="gift-stage" id="current-gift-stage">
        <header class="gift-stage-header">
          <div class="gift-badge">
            <span aria-hidden="true">${t.boxIcon}</span>
            <span>${t.numberLabel}</span>
          </div>
          <h2 class="gift-main-title">${t.title}</h2>
          <p class="gift-main-message">${t.message}</p>
        </header>

        <div class="gift-content-body">
          ${H(t)}
        </div>

        <!-- Navigation Controls -->
        <footer class="gift-stage-footer">
          <div class="nav-buttons-left">
            <button id="btn-prev-gift" class="fairytale-btn fairytale-btn-secondary" type="button" ${r.currentGiftIndex===0?"disabled":""} aria-label="Go to previous gift">
              <span aria-hidden="true">←</span>
              <span>Previous Gift</span>
            </button>
          </div>
          <div class="nav-buttons-right">
            <button id="btn-next-gift" class="fairytale-btn fairytale-btn-primary" type="button" aria-label="${r.currentGiftIndex===e-1?"Finish and see final birthday fairytale":"Continue to next gift"}">
              <span>${r.currentGiftIndex===e-1?"Open Final Fairytale 👑":"Next Gift ✨"}</span>
              <span aria-hidden="true">${r.currentGiftIndex===e-1,"→"}</span>
            </button>
          </div>
        </footer>
      </article>
    </section>
  `,z(t)}function H(t){switch(t.type){case"image":return`
        <div class="silver-picture-frame">
          <div class="frame-inner-mat">
            <img 
              id="gift-img-main" 
              class="frame-image" 
              src="${t.asset}" 
              alt="${t.alt}" 
              loading="eager"
            />
          </div>
          <div class="frame-interactive-badge" aria-hidden="true">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            <span>Click to Enlarge</span>
          </div>
        </div>
      `;case"wallpaper":return`
        <div class="phone-showcase-container">
          <div class="phone-mockup-frame">
            <div class="phone-speaker-island" aria-hidden="true"></div>
            <div class="phone-screen">
              <img 
                id="gift-wallpaper-img" 
                class="phone-wallpaper-img" 
                src="${t.asset}" 
                alt="${t.alt}" 
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
      `;case"letter":return`
        <div class="royal-letter-envelope">
          <div class="wax-seal-motif" aria-hidden="true">🦢</div>
          <img 
            id="gift-letter-img" 
            class="royal-letter-img" 
            src="${t.asset}" 
            alt="${t.alt}" 
            loading="eager"
          />
          <div class="frame-interactive-badge" style="bottom: 24px; right: 24px;" aria-hidden="true">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            <span>Read in Full Size</span>
          </div>
        </div>
      `;case"video":{const e=r.videoData?r.videoData[t.videoKey]:null;return`
        <div class="video-stage-frame">
          <div class="video-musical-ornaments" aria-hidden="true">
            <span>✨ ♩ ♪ ♫</span>
            <span>Swan Princess Odette</span>
            <span>♬ ♩ ✨</span>
          </div>
          <div class="video-inner-container">
            ${e&&e.isValid&&e.embedUrl?`
              <iframe 
                class="video-iframe"
                src="${e.embedUrl}" 
                title="${t.title}"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen
                loading="eager"
              ></iframe>
            `:`
              <div class="video-placeholder-box">
                <div class="video-placeholder-icon" aria-hidden="true">🦢🎬</div>
                <h3 class="video-placeholder-title">${t.placeholderTitle}</h3>
                <p class="video-placeholder-msg">${t.placeholderMessage}</p>
              </div>
            `}
          </div>
        </div>
        ${t.postVideoMessage?`<p class="video-post-note">${t.postVideoMessage}</p>`:""}
      `}case"double":return`
        <div class="double-surprise-container">
          <!-- Part A: Birthday Meme -->
          <div class="double-surprise-part meme-wrapper">
            <span class="part-badge">${t.partA.subtitle}</span>
            <h3 class="part-title">${t.partA.title}</h3>
            <p class="part-desc">${t.partA.message}</p>
            <div class="silver-picture-frame">
              <div class="frame-inner-mat">
                <img 
                  id="gift-meme-img" 
                  class="frame-image" 
                  src="${t.partA.asset}" 
                  alt="${t.partA.alt}" 
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
            <span class="part-badge">${t.partB.subtitle}</span>
            <h3 class="part-title">${t.partB.title}</h3>
            <p class="part-desc">${t.partB.message}</p>
            <div class="silver-picture-frame">
              <div class="frame-inner-mat">
                <img 
                  id="gift-cert-img" 
                  class="frame-image" 
                  src="${t.partB.asset}" 
                  alt="${t.partB.alt}" 
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
      `;default:return""}}function z(t){const e=document.getElementById("btn-prev-gift"),i=document.getElementById("btn-next-gift"),s=document.getElementById("btn-room-view-all");e&&e.addEventListener("click",()=>{r.currentGiftIndex>0&&y(r.currentGiftIndex-1)}),i&&i.addEventListener("click",()=>{r.currentGiftIndex<m.length-1?y(r.currentGiftIndex+1):W()}),s&&s.addEventListener("click",()=>{r.allGiftsModal.open()});const a=document.getElementById("gift-img-main");a&&a.addEventListener("click",()=>{h.open({asset:t.asset,alt:t.alt,title:t.lightboxTitle,downloadFilename:t.downloadFilename})});const n=document.getElementById("btn-view-full-wallpaper"),l=document.getElementById("btn-save-wallpaper"),d=document.getElementById("gift-wallpaper-img");d&&d.addEventListener("click",()=>{h.open({asset:t.asset,alt:t.alt,title:t.lightboxTitle,downloadFilename:t.downloadFilename})}),n&&n.addEventListener("click",()=>{h.open({asset:t.asset,alt:t.alt,title:t.lightboxTitle,downloadFilename:t.downloadFilename})}),l&&l.addEventListener("click",()=>{h.triggerDownload(t.asset,t.downloadFilename)});const p=document.getElementById("gift-letter-img");if(p&&p.addEventListener("click",()=>{h.open({asset:t.asset,alt:t.alt,title:t.lightboxTitle,downloadFilename:t.downloadFilename})}),t.type==="double"){x(window.innerWidth/2,window.innerHeight*.35,60);const f=document.getElementById("gift-meme-img");f&&f.addEventListener("click",()=>{h.open({asset:t.partA.asset,alt:t.partA.alt,title:t.partA.lightboxTitle,downloadFilename:t.partA.downloadFilename})});const c=document.getElementById("gift-cert-img"),o=document.getElementById("btn-save-cert");c&&c.addEventListener("click",()=>{h.open({asset:t.partB.asset,alt:t.partB.alt,title:t.partB.lightboxTitle,downloadFilename:t.partB.downloadFilename})}),o&&o.addEventListener("click",()=>{h.triggerDownload(t.partB.asset,t.partB.downloadFilename)})}}function y(t){r.currentGiftIndex=Math.max(0,Math.min(t,m.length-1)),I(),window.scrollTo({top:0,behavior:"smooth"})}function W(){r.view="FINAL",b.style.display="inline-flex",x(window.innerWidth/2,window.innerHeight*.4,90),E.innerHTML=`
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

        <h1 class="final-title">${g.title}</h1>
        <h2 class="final-recipient">${g.recipient}</h2>

        <div class="final-body-text">
          ${g.paragraphs.map(i=>`<p>${i}</p>`).join("")}
        </div>

        <div class="final-signoff">
          <p>${g.signoff}</p>
          <span class="final-sender">${g.sender}</span>
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
  `;const t=document.getElementById("btn-relive-magic"),e=document.getElementById("btn-back-to-start");t&&t.addEventListener("click",()=>{y(0),setTimeout(()=>{r.allGiftsModal.open()},400)}),e&&e.addEventListener("click",()=>{L(),window.scrollTo({top:0,behavior:"smooth"})}),window.scrollTo({top:0,behavior:"smooth"})}document.addEventListener("DOMContentLoaded",N);

// Particles
var c = document.getElementById('particles');
for (var i = 0; i < 30; i++) {
  var p = document.createElement('div');
  p.className = 'particle';
  p.style.left = Math.random() * 100 + '%';
  p.style.animationDelay = Math.random() * 6 + 's';
  p.style.animationDuration = (4 + Math.random() * 4) + 's';
  p.style.width = p.style.height = (2 + Math.random() * 4) + 'px';
  c.appendChild(p);
}

// Nav scroll
window.addEventListener('scroll', function() {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 50);
});

// Reveal on scroll
var revEls = document.querySelectorAll('.reveal');
var obs = new IntersectionObserver(function(entries) {
  entries.forEach(function(e) { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.15 });
revEls.forEach(function(el) { obs.observe(el); });

// Countdown
function startCountdown() {
  var target = new Date(2026, 4, 1, 11, 6, 0).getTime();
  var dE = document.getElementById('days');
  var hE = document.getElementById('hours');
  var mE = document.getElementById('minutes');
  var sE = document.getElementById('seconds');
  function tick() {
    var diff = target - Date.now();
    if (diff <= 0) {
      document.getElementById('countdown').innerHTML = '<div style="font-family:Playfair Display,serif;font-size:1.5rem;color:#e8d48b;">The celebration has begun!</div>';
      return;
    }
    var d = Math.floor(diff / 86400000);
    var h = Math.floor((diff % 86400000) / 3600000);
    var m = Math.floor((diff % 3600000) / 60000);
    var s = Math.floor((diff % 60000) / 1000);
    dE.textContent = d < 10 ? '0' + d : d;
    hE.textContent = h < 10 ? '0' + h : h;
    mE.textContent = m < 10 ? '0' + m : m;
    sE.textContent = s < 10 ? '0' + s : s;
  }
  tick();
  setInterval(tick, 1000);
}
startCountdown();

// RSVP
function submitRSVP() {
  var first = document.getElementById('firstName').value.trim();
  var last = document.getElementById('lastName').value.trim();
  if (!first || !last) { alert('Please enter your name.'); return; }
  var events = [];
  if (document.getElementById('evtSangeet').checked) events.push('Sangeet');
  if (document.getElementById('evtWedding').checked) events.push('Wedding');
  if (events.length === 0) { alert('Please select at least one event.'); return; }
  var data = {
    name: first + ' ' + last,
    email: document.getElementById('email').value.trim(),
    events: events,
    guests: document.getElementById('guestCount').value
  };
  // TODO: Replace with your backend endpoint
  console.log('RSVP Data:', JSON.stringify(data, null, 2));
  document.getElementById('rsvpForm').style.display = 'none';
  document.getElementById('rsvpSuccess').classList.add('show');
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(function(a) {
  a.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(a.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});

// Music control - Chrome-friendly autoplay
var music = document.getElementById('bgMusic');
var musicBtn = document.getElementById('musicToggle');
var volumeIcon = musicBtn.querySelector('.volume-icon');
var muteIcon = musicBtn.querySelector('.mute-icon');

// Music starts muted (Chrome allows this), click to unmute
musicBtn.addEventListener('click', function() {
  if (music.muted) {
    music.muted = false;
    volumeIcon.style.display = 'block';
    muteIcon.style.display = 'none';
    music.play(); // Ensure it plays
  } else {
    music.muted = true;
    volumeIcon.style.display = 'none';
    muteIcon.style.display = 'block';
  }
});

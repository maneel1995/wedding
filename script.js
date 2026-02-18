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

  // Replace 'YOUR_GOOGLE_SCRIPT_URL' with your actual Google Apps Script Web App URL
  var scriptURL = 'https://script.google.com/macros/s/AKfycbzV8K8I6vgwfkiqERlXC8RMTs7FzWd7XBNHkFdCUMVAt4wW79DDUQzGRhvO2B72_fg-YA/exec';

  // Send data to Google Sheets
  fetch(scriptURL, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
  .then(function() {
    console.log('RSVP submitted successfully');
    document.getElementById('rsvpForm').style.display = 'none';
    document.getElementById('rsvpSuccess').classList.add('show');
  })
  .catch(function(error) {
    console.error('Error:', error);
    alert('There was an error submitting your RSVP. Please try again.');
  });
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

// Let's Begin button
var letsBeginBtn = document.getElementById('letsBeginBtn');
letsBeginBtn.addEventListener('click', function() {
  // Fade out the button
  letsBeginBtn.classList.add('fade-out');

  // Start the mushika animation
  var mushikaWrap = document.querySelector('.mushika-wrap');
  mushikaWrap.classList.add('animate');

  // Start other hero animations
  var ganpatiContainer = document.querySelector('.ganpati-container');
  ganpatiContainer.classList.add('animate');

  var heroNames = document.querySelector('.hero-names');
  heroNames.classList.add('animate');

  var heroDate = document.querySelector('.hero-date');
  heroDate.classList.add('animate');

  var countdown = document.getElementById('countdown');
  countdown.classList.add('animate');

  var scrollIndicator = document.querySelector('.scroll-indicator');
  scrollIndicator.classList.add('animate');

  // Unmute and play music
  music.muted = false;
  music.play();
  volumeIcon.style.display = 'block';
  muteIcon.style.display = 'none';

  // Remove the button after fade out completes
  setTimeout(function() {
    letsBeginBtn.style.display = 'none';
  }, 1000);
});

// Scroll indicator click
var scrollIndicator = document.querySelector('.scroll-indicator');
scrollIndicator.addEventListener('click', function() {
  document.getElementById('events').scrollIntoView({ behavior: 'smooth' });
});

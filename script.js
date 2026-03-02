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
      document.getElementById('countdown').innerHTML = '<div style="font-family:Lora,serif;font-size:1.5rem;color:var(--primary);">The celebration has begun!</div>';
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

// Scroll indicator click
var scrollIndicator = document.querySelector('.scroll-indicator');
if (scrollIndicator) {
    scrollIndicator.addEventListener('click', function() {
        document.getElementById('events').scrollIntoView({ behavior: 'smooth' });
    });
}

// Autoplay music on user interaction
document.body.addEventListener('click', function() {
    var music = document.getElementById('bgMusic');
    if (music.paused) {
        music.play();
    }
}, { once: true });

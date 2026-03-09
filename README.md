# Maneel & Manaswini Wedding Website

A beautiful, animated wedding invitation website celebrating the union of Maneel and Manaswini under the Flower Moon.

## Features

- **Animated Hero Section**: Features a delightful Ganesha animation with a scurrying mouse (Mushika), elegant name reveals, and floating gold particles
- **Live Countdown Timer**: Real-time countdown to the wedding ceremony (May 1, 2026, 11:06 AM)
- **Event Details**: Information about the Sangeet and Wedding Ceremony
- **Custom Venue Illustration**: Hand-crafted SVG illustration of the Aristide venue in Mansfield, TX
- **RSVP Form**: Interactive form for guests to confirm attendance
- **Responsive Design**: Works beautifully on desktop, tablet, and mobile devices
- **Smooth Animations**: Scroll-triggered reveals and elegant transitions throughout

## How to Run

This is a completely self-contained static HTML website with no dependencies. Simply:

### Option 1: Open Directly
Double-click `index.html` to open it in your default web browser.

### Option 2: Local Web Server
For the best experience (especially if you plan to add backend functionality), serve it using a local web server:

```bash
# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using PHP
php -S localhost:8000
```

Then open your browser and navigate to `http://localhost:8000`

### Option 3: Live Server (VS Code)
If you're using VS Code, install the "Live Server" extension and click "Go Live" in the bottom right corner.

## Customization

### Wedding Details
All wedding information is contained in the single `index.html` file. To customize:
- **Names**: Update the hero section (lines 598-602)
- **Dates**: Modify event dates in the Events section (lines 712, 811)
- **Venue**: Update venue details in the Venue section (lines 975-977)
- **Countdown**: Change the target date in the JavaScript (line 1070)

### Colors
The color scheme uses CSS variables defined at the top of the `<style>` section (lines 10-20):
```css
--gold: #c9a84c;
--maroon: #7a1f3d;
--cream: #fdf6ec;
```

### RSVP Backend
Currently, the RSVP form logs data to the browser console. To connect it to a backend:

1. Replace the TODO comment at line 1110 with your backend endpoint
2. Example implementation:
```javascript
fetch('YOUR_BACKEND_URL/rsvp', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data)
})
.then(response => response.json())
.then(() => {
  document.getElementById('rsvpForm').style.display = 'none';
  document.getElementById('rsvpSuccess').classList.add('show');
})
.catch(error => console.error('Error:', error));
```

## Technologies Used

- Pure HTML5
- CSS3 with custom animations and gradients
- Vanilla JavaScript (no frameworks or libraries)
- Custom SVG illustrations (Ganesha, venue, event icons)
- Google Fonts (Playfair Display, Cormorant Garamond, Poppins)

## Browser Compatibility

Works on all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Project Structure

```
maneel_wedding/
├── index.html          # HTML structure
├── styles.css          # All CSS styling and animations
├── script.js           # All JavaScript functionality
├── output.mp3          # Background music (add your own)
└── README.md           # This file
```

The code is now organized into separate files for better maintainability:
- **index.html** - Clean HTML structure with semantic markup
- **styles.css** - All styling, animations, and responsive design
- **script.js** - Interactive features (countdown, music, RSVP, smooth scroll)

## Wedding Details

**Date**: April 30 - May 1, 2026
**Venue**: Aristide, Mckinney, TX

### Events
- **Sangeet**: Wednesday, April 30, 2026 at 6:00 PM
- **Wedding Ceremony**: Friday, May 1, 2026 at 11:06 AM

## License

Personal project for Maneel & Manaswini's wedding celebration.

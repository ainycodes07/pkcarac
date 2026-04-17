# Pakistan Car AC Workshop Website

## 🚗 Complete Professional Website - Ready to Deploy

This is a fully functional, responsive website for Pakistan Car AC Workshop in Rawalpindi. The website features modern design, smooth animations, and is optimized for all devices.

---

## 📁 Files Included

1. **index.html** - Main HTML structure
2. **styles.css** - Complete styling with animations
3. **script.js** - All JavaScript functionality

---

## 🎨 Features

### Design & Aesthetics
- **Modern Industrial-Technical Design** inspired by your logo
- **Color Scheme**: Navy blue (#1e3a5f), Red (#e63946), Yellow/Orange (#f9a826)
- **Typography**: 
  - Rajdhani (headings) - Bold, technical feel
  - Outfit (body text) - Clean, modern
- **NO SVGs** - All graphics use FontAwesome icons and images
- **Professional animations** throughout the site

### Functionality
✅ Fully responsive (mobile, tablet, desktop)
✅ Hamburger menu for mobile devices
✅ Smooth scroll animations
✅ Counter animations for statistics
✅ Loading screen on page load
✅ Sticky header with scroll effects
✅ WhatsApp floating button (bottom right)
✅ Back to top button (bottom left)
✅ Google Maps integration
✅ Call button CTAs
✅ Active navigation highlighting
✅ Lazy loading for performance
✅ SEO optimized

### Sections Included
1. **Hero Section** - Eye-catching introduction with stats
2. **Services Section** - 6 detailed service cards
3. **About Section** - Why choose us with features
4. **Process Section** - 5-step workflow
5. **Reviews Section** - Customer testimonials
6. **Contact Section** - Map, info cards, social links
7. **Footer** - Complete site navigation

---

## 🖼️ Adding Your Images

The website has **empty `src=""` attributes** for images. Replace them with your image URLs:

### Logo Images (2 locations)
```html
<!-- Header Logo -->
<img src="YOUR_LOGO_URL_HERE" alt="Pakistan Car AC Logo" class="logo-img">

<!-- Footer Logo -->
<img src="YOUR_LOGO_URL_HERE" alt="Pakistan Car AC">
```

### Hero Background
```html
<!-- Hero section background -->
<img src="YOUR_HERO_BACKGROUND_URL" alt="Car AC Service" class="hero-bg-img">
```
**Recommended**: A professional photo of your workshop or a car being serviced

### About Section Image
```html
<!-- About section image -->
<img src="YOUR_ABOUT_IMAGE_URL" alt="Professional Car AC Service">
```
**Recommended**: Technician working on a car AC or workshop interior

---

## 📝 Customization Guide

### 1. Update Contact Information
The contact info is already filled in, but verify these details:

**Phone Number**: 0300 5502931
- Update in header call button
- Update in hero section
- Update in contact section
- Update in footer
- Update WhatsApp link: `https://wa.me/923005502931`

**Address**: Shop 2, DD-4 Murree Rd, near PSO Pump, Ojary Camp, Rawalpindi, 46300

**Hours**: 10:00 AM - 10:00 PM (Daily)

### 2. Google Maps Embed
Replace the map embed URL in the contact section:
1. Go to [Google Maps](https://maps.google.com)
2. Search for your location
3. Click "Share" → "Embed a map"
4. Copy the iframe code
5. Replace the existing iframe in `index.html`

### 3. Social Media Links
Update social media URLs in the contact section:
```html
<a href="YOUR_FACEBOOK_URL" class="social-icon">
<a href="YOUR_YOUTUBE_URL" class="social-icon">
<a href="YOUR_TIKTOK_URL" class="social-icon">
<a href="YOUR_INSTAGRAM_URL" class="social-icon">
```

### 4. Reviews/Testimonials
Update the customer reviews with real testimonials:
- Customer name
- Car model
- Review text

---

## 🚀 Deployment Instructions

### Option 1: Simple Hosting (Recommended for Beginners)

**Using Netlify (Free):**
1. Go to [netlify.com](https://www.netlify.com)
2. Sign up for free account
3. Drag and drop all 3 files (index.html, styles.css, script.js)
4. Your site is live instantly!
5. Get a free domain: yoursite.netlify.app

**Using GitHub Pages (Free):**
1. Create a GitHub account
2. Create a new repository named "pakistan-car-ac"
3. Upload all 3 files
4. Go to Settings → Pages
5. Enable GitHub Pages
6. Your site is live at: yourusername.github.io/pakistan-car-ac

**Using Vercel (Free):**
1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub/Google
3. Import your project
4. Deploy instantly

### Option 2: Traditional Web Hosting

**Using cPanel/Shared Hosting:**
1. Purchase hosting (e.g., HostGator, Bluehost)
2. Log into cPanel
3. Go to File Manager
4. Upload all 3 files to `public_html` folder
5. Your site is live at your domain!

**Using FTP:**
1. Download FileZilla (free FTP client)
2. Get FTP credentials from your host
3. Connect to your server
4. Upload all files to the root directory
5. Done!

---

## 📱 Testing Checklist

Before going live, test:
- [ ] All images load correctly
- [ ] Phone number links work on mobile
- [ ] WhatsApp button opens correctly
- [ ] Google Maps shows correct location
- [ ] All menu links navigate properly
- [ ] Mobile menu works on small screens
- [ ] Forms submit correctly (if added)
- [ ] Site loads fast on mobile data

---

## 🎨 Color Scheme (CSS Variables)

All colors can be easily changed in `styles.css`:

```css
:root {
    --primary-color: #1e3a5f;      /* Navy blue - main brand color */
    --secondary-color: #e63946;    /* Red - accent/CTA buttons */
    --accent-color: #f9a826;       /* Yellow/Orange - highlights */
    --success-color: #198754;      /* Green - checkmarks */
    --dark-color: #0f1419;         /* Dark text */
    --light-color: #f8f9fa;        /* Light backgrounds */
}
```

---

## 📊 Performance Features

- **Optimized animations** - CSS-only, no heavy libraries
- **Lazy loading** - Images load as needed
- **Debounced scroll** - Smooth performance
- **Minification ready** - Code is clean and organized
- **Mobile-first** - Starts fast on slow connections

---

## 🔧 Advanced Customization

### Adding More Services
Copy a service card in the HTML and modify:
```html
<div class="service-card fade-in-up" style="animation-delay: 0.7s;">
    <div class="service-icon">
        <i class="fas fa-YOUR-ICON"></i>
    </div>
    <h3 class="service-title">Your Service Name</h3>
    <p class="service-description">Description here</p>
    <ul class="service-features">
        <li><i class="fas fa-check"></i> Feature 1</li>
        <li><i class="fas fa-check"></i> Feature 2</li>
    </ul>
</div>
```

### FontAwesome Icons
Browse icons at: [fontawesome.com/icons](https://fontawesome.com/icons)
Replace icon classes: `fas fa-ICON-NAME`

### Adding a Contact Form
Insert before the map in contact section:
```html
<form class="contact-form" action="YOUR_FORM_HANDLER" method="POST">
    <input type="text" name="name" placeholder="Your Name" required>
    <input type="tel" name="phone" placeholder="Phone Number" required>
    <input type="email" name="email" placeholder="Email">
    <textarea name="message" placeholder="Message" rows="5"></textarea>
    <button type="submit" class="btn btn-primary">Send Message</button>
</form>
```

---

## 🐛 Troubleshooting

**Images not showing?**
- Check image URLs are correct
- Ensure images are accessible (not blocked by permissions)
- Use absolute URLs (https://...) not relative paths

**Mobile menu not working?**
- Clear browser cache
- Check JavaScript file is loaded
- Open browser console (F12) for errors

**Animations not playing?**
- Some browsers may have motion preferences disabled
- Ensure CSS file is properly linked
- Check browser compatibility

**Map not showing?**
- Update the Google Maps embed URL
- Check if maps are blocked by ad blockers

---

## 📞 Support

For any issues or customization help:
- Phone: 0300 5502931
- Location: Shop 2, DD-4 Murree Rd, Rawalpindi

---

## 📄 License

This website template is created specifically for Pakistan Car AC Workshop. Feel free to modify and use as needed for your business.

---

## 🎯 Next Steps

1. **Add your images** - Replace all empty `src=""` with your image URLs
2. **Test everything** - Click all buttons, links, and features
3. **Choose hosting** - Select from options above
4. **Deploy** - Upload files and go live!
5. **Promote** - Share your new website on social media

---

## 💡 Pro Tips

- **Image optimization**: Compress images before uploading (use tinypng.com)
- **Custom domain**: Register yourcompanyname.com for professionalism
- **SSL certificate**: Enable HTTPS (most hosts offer free SSL)
- **Google Analytics**: Add tracking code to monitor visitors
- **SEO**: Submit sitemap to Google Search Console
- **Backup**: Keep copies of all files

---

**Built with ❤️ for Pakistan Car AC Workshop**

Good luck with your new website! 🚗💨

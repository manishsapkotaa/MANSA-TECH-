# Mansa Technology Website - Quick Start Guide

## 📦 What You've Received

A complete, professional static website with:
- ✅ Modern, clean design
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ All sections implemented
- ✅ Interactive features
- ✅ No dependencies required

## 🎯 Files Structure

```
static-website/
├── index.html      (Main HTML file - 26KB)
├── styles.css      (All styling - 18KB)
├── script.js       (JavaScript functionality - 15KB)
└── README.md       (Documentation)
```

## 🚀 Quick Start (3 Steps)

### Step 1: Extract the Files
Unzip `mansa-technology-website.zip` to your desired location.

### Step 2: Open the Website
Double-click `index.html` or right-click → "Open with" → Your browser

### Step 3: Done!
The website is now running locally on your computer.

## 🌐 For Online Hosting

### Free Hosting Options:
1. **Netlify** (Recommended)
   - Visit: netlify.com
   - Drag and drop your folder
   - Get free HTTPS URL instantly

2. **GitHub Pages**
   - Create GitHub repo
   - Upload files
   - Enable Pages in settings

3. **Vercel**
   - Visit: vercel.com
   - Import your project
   - Deploy in seconds

### Paid Hosting:
- Any web hosting with HTML support
- Upload files via FTP/cPanel
- Point your domain

## 📝 Current Content

### Services (6 items):
1. CCTV Installation & Maintenance
2. Electrical Services
3. Computer & Printer Services
4. Audio System Setup
5. Network Infrastructure
6. IT Consultation

### Products (12 items):
- Cat6 Ethernet Cable (NPR 45/meter)
- RJ45 Connectors (NPR 15/piece)
- RJ11 Connectors (NPR 10/piece)
- Multi-Plug Extension (NPR 850)
- Hikvision 4-Channel NVR (NPR 18,500)
- Dahua 8-Channel NVR (NPR 28,000)
- Wireless Keyboard & Mouse (NPR 2,200)
- 24-Port PoE Switch (NPR 32,000)
- Hikvision 2MP IP Camera (NPR 8,500)
- 8-Port Gigabit Switch (NPR 3,500)
- Gaming Mouse (NPR 1,800)
- Mechanical Keyboard (NPR 4,500)

## 🎨 Customization Guide

### Update Prices
Open `script.js` → Find `products` array → Change `price` values

### Add New Product
```javascript
{
  id: 13,
  name: 'Your Product',
  category: 'Networking',
  price: 1000,
  unit: 'per unit',
  description: 'Product description',
  specifications: ['Spec 1', 'Spec 2'],
  inStock: true,
  image: 'image-url'
}
```

### Change Colors
Open `styles.css` → Top section has color variables:
```css
--color-primary: #2563eb;  /* Change this for main color */
```

### Update Contact Info
Open `index.html` → Search for:
- Phone: +977 9841234567
- Email: info@mansatech.com.np
- Address: Jorpati Sundarijal...

Replace with your actual details.

## 📱 Features Included

✅ **Navigation**
- Smooth scrolling between sections
- Mobile hamburger menu
- Fixed header on scroll

✅ **Products**
- Category filtering (All, Networking, CCTV, etc.)
- Expandable specifications
- Stock status indicators
- Professional product cards

✅ **Contact Form**
- Form validation
- Success notification (toast)
- Currently shows success message (no email sending)

✅ **Responsive Design**
- Desktop: Full layout
- Tablet: Optimized grid
- Mobile: Stacked layout with mobile menu

## 🔧 Known Limitations (Static Version)

❌ Contact form doesn't send emails (shows success message only)
❌ No product search functionality
❌ No admin panel to manage products
❌ No database integration
❌ No user accounts/login

**Need these features?**
Consider upgrading to a full-stack version with backend (FastAPI + MongoDB).

## 💡 Tips

1. **Test on Multiple Devices**: Open on phone, tablet, laptop
2. **Backup Regularly**: Keep copies of customizations
3. **Use Browser Dev Tools**: F12 to inspect and customize
4. **Images**: Use high-quality, optimized images (under 200KB each)

## 🆘 Troubleshooting

**Problem**: Styles not loading
**Solution**: Make sure all files are in the same folder

**Problem**: Images not showing
**Solution**: Check internet connection (images load from URLs)

**Problem**: Mobile menu not working
**Solution**: Make sure script.js is loaded

## 📊 Website Sections Overview

1. **Header** (Fixed)
   - Logo + Company name
   - Navigation menu
   - Contact button

2. **Hero** (Home)
   - Main headline
   - Call-to-action buttons
   - 3 feature highlights

3. **Services**
   - 6 service cards
   - Icons + descriptions

4. **Products**
   - Category filters
   - 12 product cards
   - Specifications
   - Pricing in NPR

5. **About Us**
   - Company description
   - Why choose us (4 points)
   - Statistics (500+ clients, 1000+ projects, etc.)

6. **Contact**
   - 4 info cards (location, phone, email, hours)
   - Contact form
   - Business hours

7. **Footer**
   - Company info
   - Contact details
   - Service areas
   - Copyright

## 🎓 Next Steps

1. ✅ Review the website locally
2. ✅ Customize contact information
3. ✅ Update product prices if needed
4. ✅ Test on mobile device
5. ✅ Choose hosting provider
6. ✅ Upload and launch!

## 📞 Need Help?

The website is ready to use as-is or customize further. All code is clean, well-commented, and easy to modify.

**Files Location**: `/app/static-website/`
**ZIP File**: `/app/mansa-technology-website.zip`

---

**Congratulations!** 🎉 Your professional website is ready to launch!

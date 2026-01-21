# Mansa Technology Website

A professional, modern website for Mansa Technology Pvt. Ltd. - Complete IT Solutions provider in Kathmandu, Nepal.

## 📁 Files Included

- **index.html** - Main HTML file with all sections
- **styles.css** - Complete styling with responsive design
- **script.js** - JavaScript for interactivity and functionality

## 🎨 Features

### Sections
1. **Header** - Fixed navigation with logo and mobile menu
2. **Hero Section** - Eye-catching introduction with CTAs
3. **Services** - 6 service offerings with icons
4. **Products** - 12 products with category filters, specifications, and pricing
5. **About Us** - Company information and statistics
6. **Contact** - Contact form and information cards
7. **Footer** - Comprehensive footer with all details

### Functionality
- ✅ Smooth scroll navigation
- ✅ Mobile responsive design
- ✅ Product category filtering
- ✅ Expandable product specifications
- ✅ Working contact form with validation
- ✅ Toast notifications
- ✅ Mobile hamburger menu
- ✅ Hover effects and animations

## 🚀 How to Use

### Option 1: Open Directly
Simply open `index.html` in any modern web browser.

### Option 2: Local Server
For best experience, use a local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (http-server)
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit: `http://localhost:8000`

## 📱 Browser Compatibility

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers

## 🎯 Customization

### Update Logo
Replace the logo URL in `index.html`:
```html
<img src="YOUR_LOGO_URL" alt="Mansa Technology">
```

### Update Contact Information
Edit contact details in the footer and contact section of `index.html`.

### Add/Edit Products
Modify the `products` array in `script.js`:
```javascript
const products = [
  {
    id: 1,
    name: 'Product Name',
    category: 'Category',
    price: 1000,
    // ... more fields
  }
];
```

### Add/Edit Services
Modify the `services` array in `script.js`:
```javascript
const services = [
  {
    id: 1,
    title: 'Service Name',
    description: 'Description',
    icon: 'iconName'
  }
];
```

### Change Colors
Update CSS variables in `styles.css`:
```css
:root {
    --color-primary: #2563eb;
    --color-primary-dark: #1d4ed8;
    /* ... more colors */
}
```

## 📊 Key Highlights

- **Clean & Modern Design** - Professional appearance
- **Fully Responsive** - Works on all devices
- **Fast Loading** - Optimized performance
- **SEO Friendly** - Semantic HTML structure
- **Easy to Customize** - Well-organized code
- **No Dependencies** - Pure HTML, CSS, JavaScript

## 📞 Support

For any questions or customization needs, contact:
- **Location:** Jorpati Sundarijal Bus Stop, Kathmandu, Nepal
- **Phone:** +977 9841234567
- **Email:** info@mansatech.com.np

## 📄 License

© 2025 Mansa Technology Pvt. Ltd. All rights reserved.

---

**Note:** This is a static website. For a fully functional website with database integration and backend features (contact form email sending, product management, etc.), consider upgrading to a full-stack solution with backend integration.

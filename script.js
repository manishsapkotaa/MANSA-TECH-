// Mock Data
const services = [
  {
    id: 1,
    title: 'CCTV Installation & Maintenance',
    description: 'Professional CCTV camera installation, configuration, and ongoing maintenance services for homes and businesses across Kathmandu valley.',
    icon: 'camera'
  },
  {
    id: 2,
    title: 'Electrical Services',
    description: 'Complete electrical solutions including wiring, repairs, installations, and electrical system maintenance for residential and commercial properties.',
    icon: 'zap'
  },
  {
    id: 3,
    title: 'Computer & Printer Services',
    description: 'Expert computer repair, maintenance, upgrades, and printer installation/repair services. We handle all major brands and models.',
    icon: 'monitor'
  },
  {
    id: 4,
    title: 'Audio System Setup',
    description: 'Professional audio system installation and configuration for offices, homes, and commercial spaces with optimal sound quality.',
    icon: 'volume'
  },
  {
    id: 5,
    title: 'Network Infrastructure',
    description: 'Complete network setup including structured cabling, router configuration, and network security solutions for seamless connectivity.',
    icon: 'network'
  },
  {
    id: 6,
    title: 'IT Consultation',
    description: 'Expert IT consultation services to help businesses choose the right technology solutions and optimize their IT infrastructure.',
    icon: 'headphones'
  }
];

const products = [
  {
    id: 1,
    name: 'Cat6 Ethernet Cable',
    category: 'Networking',
    price: 45,
    unit: 'per meter',
    description: 'High-quality Cat6 UTP cable for reliable network connectivity, suitable for Gigabit Ethernet.',
    specifications: [
      'Speed: Up to 10 Gbps',
      'Bandwidth: 250 MHz',
      'Length: Available in various lengths',
      'Type: Unshielded Twisted Pair (UTP)'
    ],
    inStock: true,
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400'
  },
  {
    id: 2,
    name: 'RJ45 Connectors',
    category: 'Networking',
    price: 15,
    unit: 'per piece',
    description: 'Premium quality RJ45 connectors for Cat5e/Cat6 cables, gold-plated contacts for better connectivity.',
    specifications: [
      'Material: Gold-plated copper',
      'Compatible: Cat5e, Cat6',
      'Type: 8P8C modular',
      'Package: 100 pieces'
    ],
    inStock: true,
    image: 'https://tse3.mm.bing.net/th/id/OIP.74117ighbWAjEJgjSNM0MQHaHa?w=400'
  },
  {
    id: 3,
    name: 'RJ11 Connectors',
    category: 'Networking',
    price: 10,
    unit: 'per piece',
    description: 'Standard RJ11 telephone connectors, suitable for phone lines and DSL connections.',
    specifications: [
      'Type: 6P4C/6P2C',
      'Use: Telephone/DSL',
      'Material: High-quality plastic',
      'Package: 100 pieces'
    ],
    inStock: true,
    image: 'https://th.bing.com/th/id/OIP.8BDEsAnnYsvQI-FSqvRIywHaHa?w=400'
  },
  {
    id: 4,
    name: 'Multi-Plug Extension',
    category: 'Electrical',
    price: 850,
    unit: 'per unit',
    description: 'Heavy-duty multi-plug extension with surge protection, ideal for computer setups and office use.',
    specifications: [
      'Sockets: 6 outlets',
      'Cable Length: 3 meters',
      'Surge Protection: Yes',
      'Rating: 13A, 250V'
    ],
    inStock: true,
    image: 'https://tse2.mm.bing.net/th/id/OIP.NB0Uvr6AJ9wmxq9PpOdkIQHaHa?w=400'
  },
  {
    id: 5,
    name: 'Hikvision 4-Channel NVR',
    category: 'CCTV',
    price: 18500,
    unit: 'per unit',
    description: 'Professional 4-channel Network Video Recorder with H.265+ compression, supports up to 6MP resolution.',
    specifications: [
      'Channels: 4',
      'Resolution: Up to 6MP',
      'Storage: 1 HDD up to 6TB',
      'Compression: H.265+/H.265/H.264+',
      'Remote Access: Mobile/PC'
    ],
    inStock: true,
    image: 'https://tse2.mm.bing.net/th/id/OIP.4yzTLpDjbThghC7RsLYS-wHaF7?w=400'
  },
  {
    id: 6,
    name: 'Dahua 8-Channel NVR',
    category: 'CCTV',
    price: 28000,
    unit: 'per unit',
    description: 'Advanced 8-channel NVR with AI features, smart search, and 4K resolution support.',
    specifications: [
      'Channels: 8',
      'Resolution: Up to 4K',
      'Storage: 2 HDD up to 16TB',
      'AI Features: Face detection, intrusion',
      'Network: Gigabit Ethernet'
    ],
    inStock: true,
    image: 'https://tse3.mm.bing.net/th/id/OIP.Vy0g8OQEkxii5qYi2fc8TwHaDs?=400'
  },
  {
    id: 7,
    name: 'Wireless Keyboard & Mouse Combo',
    category: 'Computer Accessories',
    price: 2200,
    unit: 'per set',
    description: 'Ergonomic wireless keyboard and mouse combo with long battery life and reliable connectivity.',
    specifications: [
      'Type: 2.4GHz Wireless',
      'Range: Up to 10 meters',
      'Battery Life: 12 months',
      'Compatibility: Windows, Mac, Linux'
    ],
    inStock: true,
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400'
  },
  {
    id: 8,
    name: '4-Port PoE Switch',
    category: 'Networking',
    price: 3751,
    unit: 'per unit',
    description: 'Managed PoE switch with 24 ports, ideal for IP camera installations and VoIP systems.',
    specifications: [
      'Ports: 4 x Gigabit PoE+',
      'PoE Budget: 370W',
      'Uplink: 2 x SFP',
      'Standard: IEEE 802.3af/at',
      'Management: Web-based'
    ],
    inStock: true,
    image: 'https://th.bing.com/th/id/OIP.xvLP7paa8tf-lcl3oQpGLAHaE9?w=400'
  },
  {
    id: 9,
    name: 'Hikvision 2MP IP Camera',
    category: 'CCTV',
    price: 3200,
    unit: 'per unit',
    description: 'Professional 2MP outdoor IP camera with night vision, weatherproof design, and PoE support.',
    specifications: [
      'Resolution: 1920x1080',
      'Night Vision: Up to 30m',
      'Rating: IP67 weatherproof',
      'Power: PoE/12V DC',
      'Lens: 2.8mm fixed'
    ],
    inStock: true,
    image: 'https://th.bing.com/th/id/OIP.zdhWi1Efqcrq9W-oC0MfwAHaHa?w=400'
  },
  {
    id: 10,
    name: '8-Port Gigabit Switch',
    category: 'Networking',
    price: 3800,
    unit: 'per unit',
    description: 'Compact 8-port Gigabit Ethernet switch for small office and home network expansion.',
    specifications: [
      'Ports: 8 x Gigabit Ethernet',
      'Speed: 10/100/1000 Mbps',
      'Type: Unmanaged',
      'Design: Desktop/wall-mount',
      'Power: External adapter'
    ],
    inStock: true,
    image: 'https://th.bing.com/th/id/OIP.hxaR6Hquo2w3ASePe5lIvgHaFj?w=400'
  },
  {
    id: 11,
    name: 'Gaming Mouse',
    category: 'Computer Accessories',
    price: 1800,
    unit: 'per unit',
    description: 'High-precision gaming mouse with RGB lighting and programmable buttons.',
    specifications: [
      'DPI: Up to 16000',
      'Buttons: 6 programmable',
      'Connection: USB wired',
      'RGB: 16.8 million colors',
      'Polling Rate: 1000Hz'
    ],
    inStock: true,
    image: 'https://th.bing.com/th/id/OIP.yraC1nwYg-qa7CBLgki_wQHaHa?w=400'
  },
  {
    id: 12,
    name: 'Mechanical Keyboard',
    category: 'Computer Accessories',
    price: 4500,
    unit: 'per unit',
    description: 'Professional mechanical keyboard with blue switches and customizable RGB backlighting.',
    specifications: [
      'Switch Type: Blue mechanical',
      'Layout: Full-size 104 keys',
      'RGB: Per-key backlighting',
      'Connection: USB Type-C',
      'Build: Aluminum frame'
    ],
    inStock: true,
    image: 'https://images.unsplash.com/photo-1595225476474-87563907a212?w=400'
  }
];

// SVG Icons
const icons = {
  camera: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>',
  zap: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>',
  monitor: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>',
  volume: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>',
  network: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="16" y="16" width="6" height="6" rx="1"></rect><rect x="2" y="16" width="6" height="6" rx="1"></rect><rect x="9" y="2" width="6" height="6" rx="1"></rect><path d="M21 16V8a2 2 0 0 0-2-2h-3"></path><path d="M5 16V8a2 2 0 0 1 2-2h3"></path></svg>',
  headphones: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path></svg>',
  chevronDown: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>'
};

// Utility Functions
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
    // Close mobile menu if open
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.remove('active');
  }
}

function showToast(title, description) {
  const toast = document.getElementById('toast');
  toast.innerHTML = `
    <div class="toast-title">${title}</div>
    <div class="toast-description">${description}</div>
  `;
  toast.classList.add('show');
  
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

// Initialize Services
function initServices() {
  const servicesGrid = document.getElementById('servicesGrid');
  servicesGrid.innerHTML = services.map(service => `
    <div class="service-card">
      <div class="service-icon">
        ${icons[service.icon]}
      </div>
      <h3 class="service-title">${service.title}</h3>
      <p class="service-desc">${service.description}</p>
    </div>
  `).join('');
}

// Initialize Products
let currentCategory = 'All';

function initProducts() {
  const categories = ['All', ...new Set(products.map(p => p.category))];
  const categoryFilter = document.getElementById('categoryFilter');
  
  // Render category buttons
  categoryFilter.innerHTML = categories.map(category => `
    <button 
      class="category-btn ${category === currentCategory ? 'active' : ''}" 
      onclick="filterProducts('${category}')"
    >
      ${category}
    </button>
  `).join('');
  
  renderProducts();
}

function filterProducts(category) {
  currentCategory = category;
  initProducts();
}

function renderProducts() {
  const filteredProducts = currentCategory === 'All' 
    ? products 
    : products.filter(p => p.category === currentCategory);
  
  const productsGrid = document.getElementById('productsGrid');
  productsGrid.innerHTML = filteredProducts.map(product => `
    <div class="product-card">
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}">
      </div>
      <div class="product-body">
        <div class="product-header">
          <div>
            <h3 class="product-name">${product.name}</h3>
            <span class="product-category">${product.category}</span>
          </div>
        </div>
        <div>
          <div class="product-price">NPR ${product.price}</div>
          <div class="product-unit">${product.unit}</div>
        </div>
        <p class="product-desc">${product.description}</p>
        
        <button class="product-specs-toggle" onclick="toggleSpecs(${product.id})">
          <span>View Specifications</span>
          <span class="chevron" id="chevron-${product.id}">${icons.chevronDown}</span>
        </button>
        
        <ul class="product-specs" id="specs-${product.id}">
          ${product.specifications.map(spec => `<li>${spec}</li>`).join('')}
        </ul>
        
        <div class="product-footer">
          <span class="badge ${product.inStock ? 'badge-success' : 'badge-danger'}">
            ${product.inStock ? 'In Stock' : 'Out of Stock'}
          </span>
        </div>
      </div>
    </div>
  `).join('');
}

function toggleSpecs(productId) {
  const specs = document.getElementById(`specs-${productId}`);
  const chevron = document.getElementById(`chevron-${productId}`);
  
  specs.classList.toggle('active');
  chevron.classList.toggle('active');
}

// Mobile Menu Toggle
function initMobileMenu() {
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
  });
  
  // Close menu when clicking on links
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
    });
  });
}

// Header Scroll Effect
function initHeaderScroll() {
  const header = document.getElementById('header');
  let lastScroll = 0;
  
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
      header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
      header.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
  });
}

// Contact Form
function initContactForm() {
  const form = document.getElementById('contactForm');
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      subject: form.subject.value,
      message: form.message.value
    };
    
    // Simulate form submission
    console.log('Form submitted:', formData);
    
    // Show success message
    showToast('Message Sent!', "Thank you for contacting us. We'll get back to you soon.");
    
    // Reset form
    form.reset();
  });
}

// Initialize Navigation Links
function initNavigation() {
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
  
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const href = link.getAttribute('href');
      if (href.startsWith('#')) {
        const sectionId = href.substring(1);
        scrollToSection(sectionId);
      }
    });
  });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  initServices();
  initProducts();
  initMobileMenu();
  initHeaderScroll();
  initContactForm();
  initNavigation();
});

// Make functions available globally
window.scrollToSection = scrollToSection;
window.filterProducts = filterProducts;
window.toggleSpecs = toggleSpecs;

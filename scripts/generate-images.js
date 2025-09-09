// Script to generate optimized placeholder images for cross-platform hosting
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create images directory if it doesn't exist
const imagesDir = path.join(__dirname, '../public/images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Generate optimized SVG placeholders for all images
const imageConfigs = [
  // Hero images
  { name: 'hero-sailing-sunset.jpg', title: 'Sunset Sailing Adventure', colors: ['#ff7ed4', '#ff6b9d', '#ff8e53', '#ff6b35'] },
  { name: 'hero-whale-watching.jpg', title: 'Whale Watching Experience', colors: ['#0ea5e9', '#0284c7', '#0369a1', '#075985'] },
  { name: 'hero-paddleboarding-group.jpg', title: 'Group Paddle Boarding', colors: ['#10b981', '#059669', '#047857', '#065f46'] },
  
  // Sailing images
  { name: 'sailing-lessons.jpg', title: 'Sailing Lessons', colors: ['#3b82f6', '#2563eb', '#1d4ed8', '#1e40af'] },
  { name: 'sailboat-beneteau.jpg', title: 'Our Sailboat', colors: ['#06b6d4', '#0891b2', '#0e7490', '#155e75'] },
  { name: 'sunset-sailing.jpg', title: 'Sunset Sailing', colors: ['#f59e0b', '#d97706', '#b45309', '#92400e'] },
  
  // Whale watching images
  { name: 'whale-breaching.jpg', title: 'Whale Breaching', colors: ['#8b5cf6', '#7c3aed', '#6d28d9', '#5b21b6'] },
  { name: 'whale-encounter.jpg', title: 'Close Encounter', colors: ['#ec4899', '#db2777', '#be185d', '#9d174d'] },
  
  // Paddle boarding images
  { name: 'paddleboarding-group.jpg', title: 'Group Paddle Boarding', colors: ['#14b8a6', '#0d9488', '#0f766e', '#115e59'] },
  { name: 'paddleboarding-fishing.jpg', title: 'Paddle Board Fishing', colors: ['#f97316', '#ea580c', '#c2410c', '#9a3412'] },
  { name: 'paddleboarding-sunset.jpg', title: 'Sunset Paddle Boarding', colors: ['#eab308', '#ca8a04', '#a16207', '#854d0e'] },
  
  // Diving images
  { name: 'diving-coral-reef.jpg', title: 'Coral Reef Diving', colors: ['#06b6d4', '#0891b2', '#0e7490', '#155e75'] },
  { name: 'diving-ok-sign.jpg', title: 'Underwater Adventure', colors: ['#3b82f6', '#2563eb', '#1d4ed8', '#1e40af'] },
  { name: 'diving-fish-school.jpg', title: 'Marine Life Encounter', colors: ['#10b981', '#059669', '#047857', '#065f46'] },
  
  // Kayaking images
  { name: 'kayak-fishing.jpg', title: 'Kayak Fishing', colors: ['#8b5cf6', '#7c3aed', '#6d28d9', '#5b21b6'] },
  { name: 'kayak-group.jpg', title: 'Group Kayaking', colors: ['#ec4899', '#db2777', '#be185d', '#9d174d'] },
  { name: 'kayak-sunset.jpg', title: 'Sunset Kayaking', colors: ['#f59e0b', '#d97706', '#b45309', '#92400e'] },
  
  // Catalina images
  { name: 'catalina-aerial.jpg', title: 'Catalina Island', colors: ['#0ea5e9', '#0284c7', '#0369a1', '#075985'] },
  { name: 'catalina-harbor.jpg', title: 'Catalina Harbor', colors: ['#10b981', '#059669', '#047857', '#065f46'] }
];

// Generate SVG placeholder for each image
for (const config of imageConfigs) {
  const svg = generateOptimizedSVG(config);
  const base64 = Buffer.from(svg).toString('base64');
  const dataUrl = `data:image/svg+xml;base64,${base64}`;
  
  // Write as data URL file for easy loading
  const filePath = path.join(imagesDir, config.name);
  fs.writeFileSync(filePath, dataUrl);
  
  console.log(`Generated: ${config.name}`);
}

function generateOptimizedSVG(config) {
  const { name, title, colors } = config;
  const width = name.includes('hero') ? 1200 : 600;
  const height = name.includes('hero') ? 800 : 400;
  
  return `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:${colors[0]};stop-opacity:1" />
        <stop offset="33%" style="stop-color:${colors[1]};stop-opacity:1" />
        <stop offset="66%" style="stop-color:${colors[2]};stop-opacity:1" />
        <stop offset="100%" style="stop-color:${colors[3]};stop-opacity:1" />
      </linearGradient>
      <pattern id="waves" x="0" y="0" width="100" height="20" patternUnits="userSpaceOnUse">
        <path d="M0 10 Q25 0 50 10 T100 10" stroke="rgba(255,255,255,0.1)" stroke-width="2" fill="none"/>
      </pattern>
    </defs>
    
    <!-- Background -->
    <rect width="${width}" height="${height}" fill="url(#gradient)"/>
    
    <!-- Water pattern -->
    <rect width="${width}" height="${height * 0.3}" y="${height * 0.7}" fill="url(#waves)"/>
    
    <!-- Floating elements -->
    <circle cx="${width * 0.2}" cy="${height * 0.3}" r="30" fill="rgba(255,255,255,0.1)"/>
    <circle cx="${width * 0.8}" cy="${height * 0.2}" r="20" fill="rgba(255,255,255,0.08)"/>
    <circle cx="${width * 0.6}" cy="${height * 0.4}" r="15" fill="rgba(255,255,255,0.06)"/>
    
    <!-- Central icon area -->
    <circle cx="${width * 0.5}" cy="${height * 0.4}" r="60" fill="rgba(255,255,255,0.15)"/>
    <circle cx="${width * 0.5}" cy="${height * 0.4}" r="40" fill="rgba(255,255,255,0.1)"/>
    
    <!-- Title text -->
    <text x="${width * 0.5}" y="${height * 0.6}" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-size="24" font-weight="bold">${title}</text>
    <text x="${width * 0.5}" y="${height * 0.65}" text-anchor="middle" fill="rgba(255,255,255,0.8)" font-family="Arial, sans-serif" font-size="16">Ocean Adventures</text>
    
    <!-- Decorative waves -->
    <path d="M0 ${height * 0.8} Q${width * 0.25} ${height * 0.75} ${width * 0.5} ${height * 0.8} T${width} ${height * 0.8} L${width} ${height} L0 ${height} Z" fill="rgba(255,255,255,0.1)"/>
  </svg>`;
}

console.log('All placeholder images generated successfully!');

// Optimized image management for cross-platform hosting
// All images are optimized for Vercel, Git, and Lovable hosting

// Generate optimized SVG data URLs with proper encoding
const createOceanImage = (title: string, colors: string[] = ['#0ea5e9', '#0284c7', '#0369a1']) => {
  const svg = `<svg width="1200" height="800" viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:${colors[0]};stop-opacity:1" />
        <stop offset="50%" style="stop-color:${colors[1]};stop-opacity:1" />
        <stop offset="100%" style="stop-color:${colors[2]};stop-opacity:1" />
      </linearGradient>
    </defs>
    <rect width="1200" height="800" fill="url(#gradient)"/>
    <circle cx="300" cy="200" r="60" fill="rgba(255,255,255,0.2)"/>
    <circle cx="900" cy="150" r="40" fill="rgba(255,255,255,0.15)"/>
    <circle cx="600" cy="300" r="30" fill="rgba(255,255,255,0.1)"/>
    <path d="M0 600 Q300 550 600 600 T1200 600 L1200 800 L0 800 Z" fill="rgba(255,255,255,0.1)"/>
    <text x="600" y="450" text-anchor="middle" fill="white" font-family="Arial" font-size="32" font-weight="bold">${title}</text>
    <text x="600" y="500" text-anchor="middle" fill="rgba(255,255,255,0.8)" font-family="Arial" font-size="18">Ocean Adventures</text>
  </svg>`;
  
  // Use URL encoding instead of base64 for better compatibility
  const encodedSvg = encodeURIComponent(svg);
  return `data:image/svg+xml;charset=utf-8,${encodedSvg}`;
};

export const images = {
  // Hero slideshow images (3 key images)
  hero: {
    sailing: {
      src: createOceanImage('Sunset Sailing Adventure', ['#ff7ed4', '#ff6b9d', '#ff8e53']),
      alt: 'Sailboat at sunset with people enjoying the ocean',
      title: 'Sunset Sailing Adventure',
      description: 'Experience the magic of sailing at golden hour'
    },
    whaleWatching: {
      src: createOceanImage('Whale Watching Experience', ['#0ea5e9', '#0284c7', '#0369a1']),
      alt: 'Humpback whale breaching near whale watching boat',
      title: 'Whale Watching Experience',
      description: 'Witness majestic whales in their natural habitat'
    },
    paddleBoarding: {
      src: createOceanImage('Group Paddle Boarding', ['#10b981', '#059669', '#047857']),
      alt: 'Group paddleboarding at sunset on calm waters',
      title: 'Paddle Boarding Adventures',
      description: 'Glide across pristine waters with friends'
    }
  },

  // Section-specific images
  sailing: {
    lessons: {
      src: createOceanImage('Sailing Lessons', ['#3b82f6', '#2563eb', '#1d4ed8']),
      alt: 'Woman learning to sail on a sailboat',
      title: 'Sailing Lessons',
      description: 'Learn the ropes with expert guidance'
    },
    boat: {
      src: createOceanImage('Our Sailboat', ['#06b6d4', '#0891b2', '#0e7490']),
      alt: 'Modern white sailboat with swim platform',
      title: 'Our Sailboat',
      description: '40ft Beneteau Oceanis with two cabins'
    },
    sunset: {
      src: createOceanImage('Sunset Sailing', ['#f59e0b', '#d97706', '#b45309']),
      alt: 'Sailboat at sunset with people on deck',
      title: 'Sunset Sailing',
      description: 'Unforgettable moments on the water'
    }
  },

  whaleWatching: {
    breaching: {
      src: createOceanImage('Whale Breaching', ['#8b5cf6', '#7c3aed', '#6d28d9']),
      alt: 'Humpback whale breaching near boat',
      title: 'Whale Breaching',
      description: 'Witness these magnificent creatures up close'
    },
    encounter: {
      src: createOceanImage('Close Encounter', ['#ec4899', '#db2777', '#be185d']),
      alt: 'Man with whale in clear blue water',
      title: 'Close Encounter',
      description: 'An unforgettable marine wildlife experience'
    }
  },

  paddleBoarding: {
    group: {
      src: createOceanImage('Group Paddle Boarding', ['#14b8a6', '#0d9488', '#0f766e']),
      alt: 'Group of people paddleboarding at sunset',
      title: 'Group Paddle Boarding',
      description: 'Fun group activities on the water'
    },
    fishing: {
      src: createOceanImage('Paddle Board Fishing', ['#f97316', '#ea580c', '#c2410c']),
      alt: 'Woman fishing while paddleboarding',
      title: 'Paddle Board Fishing',
      description: 'Combine paddleboarding with fishing'
    },
    sunset: {
      src: createOceanImage('Sunset Paddle Boarding', ['#eab308', '#ca8a04', '#a16207']),
      alt: 'Four people paddleboarding at sunset',
      title: 'Sunset Paddle Boarding',
      description: 'Peaceful evening on the water'
    }
  },

  diving: {
    reef: {
      src: createOceanImage('Coral Reef Diving', ['#06b6d4', '#0891b2', '#0e7490']),
      alt: 'Diver exploring colorful coral reef with fish',
      title: 'Coral Reef Diving',
      description: 'Discover the underwater world'
    },
    ok: {
      src: createOceanImage('Underwater Adventure', ['#3b82f6', '#2563eb', '#1d4ed8']),
      alt: 'Diver giving OK sign underwater',
      title: 'Underwater Adventure',
      description: 'Safe diving with expert guidance'
    },
    fish: {
      src: createOceanImage('Marine Life Encounter', ['#10b981', '#059669', '#047857']),
      alt: 'Diver pointing at school of fish underwater',
      title: 'Marine Life Encounter',
      description: 'Swim with schools of tropical fish'
    }
  },

  kayaking: {
    fishing: {
      src: createOceanImage('Kayak Fishing', ['#8b5cf6', '#7c3aed', '#6d28d9']),
      alt: 'Man fishing from kayak on calm waters',
      title: 'Kayak Fishing',
      description: 'Reel in your catch from a kayak'
    },
    group: {
      src: createOceanImage('Group Kayaking', ['#ec4899', '#db2777', '#be185d']),
      alt: 'Group of people kayaking on blue waters',
      title: 'Group Kayaking',
      description: 'Explore together on tandem kayaks'
    },
    sunset: {
      src: createOceanImage('Sunset Kayaking', ['#f59e0b', '#d97706', '#b45309']),
      alt: 'Two people kayaking at sunset',
      title: 'Sunset Kayaking',
      description: 'Peaceful evening paddle'
    }
  },

  catalina: {
    aerial: {
      src: createOceanImage('Catalina Island', ['#0ea5e9', '#0284c7', '#0369a1']),
      alt: 'Aerial view of Catalina Island harbor',
      title: 'Catalina Island',
      description: 'Beautiful destination for sailing trips'
    },
    harbor: {
      src: createOceanImage('Catalina Harbor', ['#10b981', '#059669', '#047857']),
      alt: 'Bustling harbor with boats at Catalina',
      title: 'Catalina Harbor',
      description: 'Your gateway to island adventures'
    }
  },

  // Gallery images (comprehensive collection)
  gallery: [
    {
      src: createOceanImage('Sunset Sailing', ['#ff7ed4', '#ff6b9d', '#ff8e53']),
      alt: 'Sailboat at sunset',
      title: 'Sunset Sailing',
      category: 'sailing',
      featured: true
    },
    {
      src: createOceanImage('Whale Watching', ['#0ea5e9', '#0284c7', '#0369a1']),
      alt: 'Whale breaching',
      title: 'Whale Watching',
      category: 'wildlife',
      featured: true
    },
    {
      src: createOceanImage('Group Paddle Boarding', ['#10b981', '#059669', '#047857']),
      alt: 'Group paddleboarding',
      title: 'Group Paddle Boarding',
      category: 'paddleboarding',
      featured: true
    },
    {
      src: createOceanImage('Sailing Lessons', ['#3b82f6', '#2563eb', '#1d4ed8']),
      alt: 'Sailing lessons',
      title: 'Learning to Sail',
      category: 'sailing',
      featured: false
    },
    {
      src: createOceanImage('Our Sailboat', ['#06b6d4', '#0891b2', '#0e7490']),
      alt: 'Modern sailboat',
      title: 'Our Sailboat',
      category: 'boat',
      featured: false
    },
    {
      src: createOceanImage('Whale Breaching', ['#8b5cf6', '#7c3aed', '#6d28d9']),
      alt: 'Whale breaching',
      title: 'Whale Breaching',
      category: 'wildlife',
      featured: false
    },
    {
      src: createOceanImage('Paddle Board Fishing', ['#f97316', '#ea580c', '#c2410c']),
      alt: 'Paddle board fishing',
      title: 'Paddle Board Fishing',
      category: 'paddleboarding',
      featured: false
    },
    {
      src: createOceanImage('Coral Reef Diving', ['#06b6d4', '#0891b2', '#0e7490']),
      alt: 'Coral reef diving',
      title: 'Coral Reef Diving',
      category: 'diving',
      featured: false
    },
    {
      src: createOceanImage('Kayak Fishing', ['#8b5cf6', '#7c3aed', '#6d28d9']),
      alt: 'Kayak fishing',
      title: 'Kayak Fishing',
      category: 'kayaking',
      featured: false
    },
    {
      src: createOceanImage('Catalina Island', ['#0ea5e9', '#0284c7', '#0369a1']),
      alt: 'Catalina Island aerial',
      title: 'Catalina Island',
      category: 'destinations',
      featured: false
    },
    {
      src: createOceanImage('Sunset Sailing', ['#f59e0b', '#d97706', '#b45309']),
      alt: 'Sunset sailing',
      title: 'Sunset Sailing',
      category: 'sailing',
      featured: false
    },
    {
      src: createOceanImage('Underwater Adventure', ['#3b82f6', '#2563eb', '#1d4ed8']),
      alt: 'Diver OK sign',
      title: 'Underwater Adventure',
      category: 'diving',
      featured: false
    }
  ]
};

// Image optimization utilities
export const getOptimizedImageUrl = (src: string, width?: number, quality: number = 80) => {
  // For Vercel, we can use their image optimization
  if (process.env.NODE_ENV === 'production') {
    return `${src}?w=${width || 800}&q=${quality}`;
  }
  return src;
};

// Lazy loading configuration
export const imageLoadingConfig = {
  loading: 'lazy' as const,
  decoding: 'async' as const,
  fetchPriority: 'auto' as const
};

// Image management for actual photographs
// All images are optimized for Vercel, Git, and Lovable hosting

export const images = {
  // Hero slideshow images (3 key images)
  hero: {
    sailing: {
      src: '/images/2025-sunsail-413-sail-9589240-20241021084851147-1_LARGE.jpg',
      alt: 'Sailboat at sunset with people enjoying the ocean',
      title: 'Sunset Sailing Adventure',
      description: 'Experience the magic of sailing at golden hour'
    },
    whaleWatching: {
      src: '/images/whale watching.jpg',
      alt: 'Humpback whale breaching near whale watching boat',
      title: 'Whale Watching Experience',
      description: 'Witness majestic whales in their natural habitat'
    },
    paddleBoarding: {
      src: '/images/Paddleboarding-1-scaled.jpg',
      alt: 'Group paddleboarding at sunset on calm waters',
      title: 'Paddle Boarding Adventures',
      description: 'Glide across pristine waters with friends'
    }
  },

  // Section-specific images
  sailing: {
    lessons: {
      src: '/images/learning-the-basics-of-sailing.jpg',
      alt: 'Woman learning to sail on a sailboat',
      title: 'Sailing Lessons',
      description: 'Learn the ropes with expert guidance'
    },
    boat: {
      src: '/images/BENETEAU-OCEANIS-sailboat 40.1-DJI_0278.jpg',
      alt: 'Modern white sailboat with swim platform',
      title: 'Our Sailboat',
      description: '40ft Beneteau Oceanis with two cabins'
    },
    sunset: {
      src: '/images/sailboat.jfif',
      alt: 'Sailboat at sunset with people on deck',
      title: 'Sunset Sailing',
      description: 'Unforgettable moments on the water'
    }
  },

  whaleWatching: {
    breaching: {
      src: '/images/whale watching 2.jpg',
      alt: 'Humpback whale breaching near boat',
      title: 'Whale Breaching',
      description: 'Witness these magnificent creatures up close'
    },
    encounter: {
      src: '/images/Whale_watching_Maui_selfie.jpg',
      alt: 'Man with whale in clear blue water',
      title: 'Close Encounter',
      description: 'An unforgettable marine wildlife experience'
    },
    drone: {
      src: '/images/Southern-right-whales-paddle-board-drone-Screenshot-Jaimen-Hudson.jpg',
      alt: 'Aerial view of whales and paddleboarders',
      title: 'Whale Watching from Above',
      description: 'Breathtaking aerial perspective of marine life'
    }
  },

  paddleBoarding: {
    group: {
      src: '/images/stand-up-paddle-boarding-still-water-wawa.jpg.webp',
      alt: 'Group of people paddleboarding at sunset',
      title: 'Group Paddle Boarding',
      description: 'Fun group activities on the water'
    },
    fishing: {
      src: '/images/paddle boat fishing.jpg',
      alt: 'Woman fishing while paddleboarding',
      title: 'Paddle Board Fishing',
      description: 'Combine paddleboarding with fishing'
    },
    turtle: {
      src: '/images/paddle boat turttle.jpg',
      alt: 'Paddleboarder with sea turtle',
      title: 'Marine Life Encounter',
      description: 'Get up close with ocean wildlife'
    },
    lake: {
      src: '/images/stand-up-paddle-boarding-lake-superior-wawa.jpg.webp',
      alt: 'Paddleboarding on calm lake waters',
      title: 'Lake Paddle Boarding',
      description: 'Peaceful paddling on pristine waters'
    }
  },

  diving: {
    reef: {
      src: '/images/raja-ampat-diving-3.jpg',
      alt: 'Diver exploring colorful coral reef with fish',
      title: 'Coral Reef Diving',
      description: 'Discover the underwater world'
    },
    ok: {
      src: '/images/scuba-myths-shutterstock_208265431.jpg',
      alt: 'Diver giving OK sign underwater',
      title: 'Underwater Adventure',
      description: 'Safe diving with expert guidance'
    },
    keywest: {
      src: '/images/Key-West-Scuba-Diving-3-2048x1365.jpg',
      alt: 'Scuba diving in Key West waters',
      title: 'Key West Diving',
      description: 'Explore tropical diving destinations'
    }
  },

  kayaking: {
    fishing: {
      src: '/images/kayak fishing.jpg',
      alt: 'Man fishing from kayak on calm waters',
      title: 'Kayak Fishing',
      description: 'Reel in your catch from a kayak'
    },
    fishingPng: {
      src: '/images/kayak fishing.png',
      alt: 'Kayak fishing adventure',
      title: 'Kayak Fishing Adventure',
      description: 'Professional kayak fishing experience'
    },
    ocean: {
      src: '/images/kayak-fishing-ocean-1.webp',
      alt: 'Kayak fishing in ocean waters',
      title: 'Ocean Kayak Fishing',
      description: 'Deep sea kayak fishing adventures'
    }
  },

  catalina: {
    aerial: {
      src: '/images/catalina island 2.webp',
      alt: 'Aerial view of Catalina Island harbor',
      title: 'Catalina Island',
      description: 'Beautiful destination for sailing trips'
    },
    harbor: {
      src: '/images/catalina island visit.jpg',
      alt: 'Bustling harbor with boats at Catalina',
      title: 'Catalina Harbor',
      description: 'Your gateway to island adventures'
    }
  },

  // Gallery images (comprehensive collection)
  gallery: [
    {
      src: '/images/2025-sunsail-413-sail-9589240-20241021084851147-1_LARGE.jpg',
      alt: 'Sailboat at sunset',
      title: 'Sunset Sailing',
      category: 'sailing',
      featured: true
    },
    {
      src: '/images/whale watching.jpg',
      alt: 'Whale breaching',
      title: 'Whale Watching',
      category: 'wildlife',
      featured: true
    },
    {
      src: '/images/Paddleboarding-1-scaled.jpg',
      alt: 'Group paddleboarding',
      title: 'Group Paddle Boarding',
      category: 'paddleboarding',
      featured: true
    },
    {
      src: '/images/learning-the-basics-of-sailing.jpg',
      alt: 'Sailing lessons',
      title: 'Learning to Sail',
      category: 'sailing',
      featured: false
    },
    {
      src: '/images/BENETEAU-OCEANIS-sailboat 40.1-DJI_0278.jpg',
      alt: 'Modern sailboat',
      title: 'Our Sailboat',
      category: 'boat',
      featured: false
    },
    {
      src: '/images/Whale_watching_Maui_selfie.jpg',
      alt: 'Whale encounter',
      title: 'Whale Encounter',
      category: 'wildlife',
      featured: false
    },
    {
      src: '/images/paddle boat fishing.jpg',
      alt: 'Paddle board fishing',
      title: 'Paddle Board Fishing',
      category: 'paddleboarding',
      featured: false
    },
    {
      src: '/images/raja-ampat-diving-3.jpg',
      alt: 'Coral reef diving',
      title: 'Coral Reef Diving',
      category: 'diving',
      featured: false
    },
    {
      src: '/images/kayak fishing.jpg',
      alt: 'Kayak fishing',
      title: 'Kayak Fishing',
      category: 'kayaking',
      featured: false
    },
    {
      src: '/images/catalina island 2.webp',
      alt: 'Catalina Island aerial',
      title: 'Catalina Island',
      category: 'destinations',
      featured: false
    },
    {
      src: '/images/sailboat.jfif',
      alt: 'Sunset sailing',
      title: 'Sunset Sailing',
      category: 'sailing',
      featured: false
    },
    {
      src: '/images/scuba-myths-shutterstock_208265431.jpg',
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
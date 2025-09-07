// Image management for actual photographs
// All images are optimized for Vercel, Git, and Lovable hosting

export const images = {
  // Hero slideshow images (3 key images)
  hero: {
    sailing: {
      src: '/images/hero-sailing-sunset.jpg',
      alt: 'Sailboat at sunset with people enjoying the ocean',
      title: 'Sunset Sailing Adventure',
      description: 'Experience the magic of sailing at golden hour'
    },
    whaleWatching: {
      src: '/images/hero-whale-watching.jpg',
      alt: 'Humpback whale breaching near whale watching boat',
      title: 'Whale Watching Experience',
      description: 'Witness majestic whales in their natural habitat'
    },
    paddleBoarding: {
      src: '/images/hero-paddleboarding-group.jpg',
      alt: 'Group paddleboarding at sunset on calm waters',
      title: 'Paddle Boarding Adventures',
      description: 'Glide across pristine waters with friends'
    }
  },

  // Section-specific images
  sailing: {
    lessons: {
      src: '/images/sailing-lessons.jpg',
      alt: 'Woman learning to sail on a sailboat',
      title: 'Sailing Lessons',
      description: 'Learn the ropes with expert guidance'
    },
    boat: {
      src: '/images/sailboat-beneteau.jpg',
      alt: 'Modern white sailboat with swim platform',
      title: 'Our Sailboat',
      description: '40ft Beneteau Oceanis with two cabins'
    },
    sunset: {
      src: '/images/sunset-sailing.jpg',
      alt: 'Sailboat at sunset with people on deck',
      title: 'Sunset Sailing',
      description: 'Unforgettable moments on the water'
    }
  },

  whaleWatching: {
    breaching: {
      src: '/images/whale-breaching.jpg',
      alt: 'Humpback whale breaching near boat',
      title: 'Whale Breaching',
      description: 'Witness these magnificent creatures up close'
    },
    encounter: {
      src: '/images/whale-encounter.jpg',
      alt: 'Man with whale in clear blue water',
      title: 'Close Encounter',
      description: 'An unforgettable marine wildlife experience'
    }
  },

  paddleBoarding: {
    group: {
      src: '/images/paddleboarding-group.jpg',
      alt: 'Group of people paddleboarding at sunset',
      title: 'Group Paddle Boarding',
      description: 'Fun group activities on the water'
    },
    fishing: {
      src: '/images/paddleboarding-fishing.jpg',
      alt: 'Woman fishing while paddleboarding',
      title: 'Paddle Board Fishing',
      description: 'Combine paddleboarding with fishing'
    },
    sunset: {
      src: '/images/paddleboarding-sunset.jpg',
      alt: 'Four people paddleboarding at sunset',
      title: 'Sunset Paddle Boarding',
      description: 'Peaceful evening on the water'
    }
  },

  diving: {
    reef: {
      src: '/images/diving-coral-reef.jpg',
      alt: 'Diver exploring colorful coral reef with fish',
      title: 'Coral Reef Diving',
      description: 'Discover the underwater world'
    },
    ok: {
      src: '/images/diving-ok-sign.jpg',
      alt: 'Diver giving OK sign underwater',
      title: 'Underwater Adventure',
      description: 'Safe diving with expert guidance'
    },
    fish: {
      src: '/images/diving-fish-school.jpg',
      alt: 'Diver pointing at school of fish underwater',
      title: 'Marine Life Encounter',
      description: 'Swim with schools of tropical fish'
    }
  },

  kayaking: {
    fishing: {
      src: '/images/kayak-fishing.jpg',
      alt: 'Man fishing from kayak on calm waters',
      title: 'Kayak Fishing',
      description: 'Reel in your catch from a kayak'
    },
    group: {
      src: '/images/kayak-group.jpg',
      alt: 'Group of people kayaking on blue waters',
      title: 'Group Kayaking',
      description: 'Explore together on tandem kayaks'
    },
    sunset: {
      src: '/images/kayak-sunset.jpg',
      alt: 'Two people kayaking at sunset',
      title: 'Sunset Kayaking',
      description: 'Peaceful evening paddle'
    }
  },

  catalina: {
    aerial: {
      src: '/images/catalina-aerial.jpg',
      alt: 'Aerial view of Catalina Island harbor',
      title: 'Catalina Island',
      description: 'Beautiful destination for sailing trips'
    },
    harbor: {
      src: '/images/catalina-harbor.jpg',
      alt: 'Bustling harbor with boats at Catalina',
      title: 'Catalina Harbor',
      description: 'Your gateway to island adventures'
    }
  },

  // Gallery images (comprehensive collection)
  gallery: [
    {
      src: '/images/sunset-sailing.jpg',
      alt: 'Sailboat at sunset',
      title: 'Sunset Sailing',
      category: 'sailing',
      featured: true
    },
    {
      src: '/images/whale-breaching.jpg',
      alt: 'Whale breaching',
      title: 'Whale Watching',
      category: 'wildlife',
      featured: true
    },
    {
      src: '/images/paddleboarding-group.jpg',
      alt: 'Group paddleboarding',
      title: 'Group Paddle Boarding',
      category: 'paddleboarding',
      featured: true
    },
    {
      src: '/images/sailing-lessons.jpg',
      alt: 'Sailing lessons',
      title: 'Learning to Sail',
      category: 'sailing',
      featured: false
    },
    {
      src: '/images/sailboat-beneteau.jpg',
      alt: 'Modern sailboat',
      title: 'Our Sailboat',
      category: 'boat',
      featured: false
    },
    {
      src: '/images/whale-encounter.jpg',
      alt: 'Whale encounter',
      title: 'Whale Encounter',
      category: 'wildlife',
      featured: false
    },
    {
      src: '/images/paddleboarding-fishing.jpg',
      alt: 'Paddle board fishing',
      title: 'Paddle Board Fishing',
      category: 'paddleboarding',
      featured: false
    },
    {
      src: '/images/diving-coral-reef.jpg',
      alt: 'Coral reef diving',
      title: 'Coral Reef Diving',
      category: 'diving',
      featured: false
    },
    {
      src: '/images/kayak-fishing.jpg',
      alt: 'Kayak fishing',
      title: 'Kayak Fishing',
      category: 'kayaking',
      featured: false
    },
    {
      src: '/images/catalina-aerial.jpg',
      alt: 'Catalina Island aerial',
      title: 'Catalina Island',
      category: 'destinations',
      featured: false
    },
    {
      src: '/images/sunset-sailing.jpg',
      alt: 'Sunset sailing',
      title: 'Sunset Sailing',
      category: 'sailing',
      featured: false
    },
    {
      src: '/images/diving-ok-sign.jpg',
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
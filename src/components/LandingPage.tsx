"use client";

import React from "react";
import { 
  Phone, 
  Ship, 
  Waves, 
  Compass, 
  Fish, 
  Navigation, 
  Camera, 
  Anchor, 
  MapPin, 
  Clock, 
  Info, 
  Star,
  ChevronDown,
  Users,
  Shield,
  Heart,
  Sun,
  Moon,
  Droplets,
  Wind,
  CloudRain,
  Zap,
  Sparkles,
  Play,
  Pause,
  Volume2,
  Eye,
  EyeOff,
  Calendar
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import OptimizedImage from "./OptimizedImage";
import HeroSlideshow from "./HeroSlideshow";
import { images } from "@/lib/images";
import LocationMap from "./LocationMap";

const LandingPage = () => {
  // Always scroll to top on mount (especially for mobile)
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);
  const phone = "424-339-9008";

  const formatPhone = (phone: string) => {
    return phone.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-white text-slate-800 overflow-x-hidden">
      <Header phone={phone} formatPhone={formatPhone} />
      <main className="overflow-x-hidden">
        <Hero phone={phone} formatPhone={formatPhone} />
        <Journey />
        <Offerings phone={phone} formatPhone={formatPhone} />
        <BoatSection />
        <WhyUs />
        <GalleryPlaceholder />
        <Testimonial />
        <FAQ />
        <Booking phone={phone} formatPhone={formatPhone} />
        <LocationMap />
      </main>
      <Footer phone={phone} formatPhone={formatPhone} />
      <CallNowFloating phone={phone} formatPhone={formatPhone} />
    </div>
  );
};

function Header({ phone, formatPhone }: { phone: string; formatPhone: (phone: string) => string }) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [menuAnimating, setMenuAnimating] = React.useState(false);

  // Open menu instantly
  const openMenu = () => {
    setMobileMenuOpen(true);
    setMenuAnimating(false);
  };
  // Close menu instantly
  const closeMenu = () => {
    setMobileMenuOpen(false);
    setMenuAnimating(false);
  };
  // Close menu on background click
  const handleMenuBgClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) closeMenu();
  };
  return (
  <header className="sticky top-0 z-50 backdrop-blur bg-gradient-to-r from-sky-100 via-blue-100 to-cyan-100 border-b border-sky-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        {/* Logo: desktop and mobile */}
        <a href="#top" className="flex items-center gap-3 font-semibold hover:scale-105 transition-transform md:static fixed top-2 left-4 z-50">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-sky-600 text-white shadow-sm">
            <Ship className="h-5 w-5" />
          </span>
          <span className="text-slate-900 hidden md:block">Sail Long Beach</span>
          <span className="text-slate-900 md:hidden font-bold text-base">SLB</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
          <a href="#offerings" className="hover:text-sky-600 font-semibold transition-colors">Offerings</a>
          <a href="#journey" className="hover:text-sky-600 font-semibold transition-colors">The Journey</a>
          <a href="#boat" className="hover:text-sky-600 font-semibold transition-colors">The Boat</a>
          <a href="#faq" className="hover:text-sky-600 font-semibold transition-colors">FAQ</a>
          <a href="#booking" className="hover:text-sky-600 font-semibold transition-colors">Book</a>
          <a href="#location" className="hover:text-sky-600 font-semibold transition-colors">Location</a>
        </nav>
        {/* Mobile: only nav icon, styled */}
        <button
          className="md:hidden fixed top-2 right-4 h-9 w-9 flex items-center justify-center rounded-full bg-gradient-to-br from-sky-400 via-blue-500 to-cyan-400 shadow-md border border-sky-300 hover:scale-105 active:scale-95 transition-all duration-200"
          style={{ boxShadow: '0 2px 8px rgba(0, 180, 255, 0.10)' }}
          onClick={openMenu}
          aria-label="Open navigation menu"
        >
          {/* Water-themed nav icon */}
          <svg className="h-5 w-5" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="6" y="9" width="20" height="2.5" rx="1.25" fill="url(#blue1)" />
            <rect x="6" y="15" width="20" height="2.5" rx="1.25" fill="url(#blue2)" />
            <rect x="6" y="21" width="20" height="2.5" rx="1.25" fill="url(#blue3)" />
            <defs>
              <linearGradient id="blue1" x1="6" y1="10" x2="26" y2="10" gradientUnits="userSpaceOnUse">
                <stop stopColor="#38bdf8" />
                <stop offset="1" stopColor="#0ea5e9" />
              </linearGradient>
              <linearGradient id="blue2" x1="6" y1="16" x2="26" y2="16" gradientUnits="userSpaceOnUse">
                <stop stopColor="#0ea5e9" />
                <stop offset="1" stopColor="#06b6d4" />
              </linearGradient>
              <linearGradient id="blue3" x1="6" y1="22" x2="26" y2="22" gradientUnits="userSpaceOnUse">
                <stop stopColor="#06b6d4" />
                <stop offset="1" stopColor="#38bdf8" />
              </linearGradient>
            </defs>
          </svg>
        </button>
        {mobileMenuOpen && (
          <div
            className="fixed inset-0 z-50 bg-gradient-to-br from-sky-100/80 via-white/90 to-blue-100/80 backdrop-blur-sm flex flex-col"
            onClick={handleMenuBgClick}
            role="presentation"
          >
            <div
              className="bg-white rounded-b-3xl shadow-2xl mx-2 mt-2 p-8 flex flex-col gap-8 animate-fade-in"
              style={{ boxShadow: '0 8px 32px rgba(0, 180, 255, 0.12)' }}
            >
              <button className="self-end text-3xl text-sky-600 hover:text-sky-800 transition-colors" onClick={closeMenu} aria-label="Close menu">&times;</button>
              <a href="#offerings" className="text-xl font-bold text-slate-700 hover:text-sky-600 transition-colors py-2 rounded-xl" onClick={closeMenu}>Offerings</a>
              <a href="#journey" className="text-xl font-bold text-slate-700 hover:text-sky-600 transition-colors py-2 rounded-xl" onClick={closeMenu}>The Journey</a>
              <a href="#boat" className="text-xl font-bold text-slate-700 hover:text-sky-600 transition-colors py-2 rounded-xl" onClick={closeMenu}>The Boat</a>
              <a href="#faq" className="text-xl font-bold text-slate-700 hover:text-sky-600 transition-colors py-2 rounded-xl" onClick={closeMenu}>FAQ</a>
              <a href="#booking" className="text-xl font-bold text-slate-700 hover:text-sky-600 transition-colors py-2 rounded-xl" onClick={closeMenu}>Book</a>
              <a href="#location" className="text-xl font-bold text-slate-700 hover:text-sky-600 transition-colors py-2 rounded-xl" onClick={closeMenu}>Location</a>
            </div>
          </div>
        )}
        
        {/* Desktop Call Button */}
        <a 
          href={`tel:${phone}`} 
          className="hidden md:inline-flex items-center gap-2 rounded-xl bg-sky-600 px-4 py-2 text-white shadow-sm hover:bg-sky-700 transition-colors hover:scale-105"
        >
          <Phone className="h-4 w-4" /> {formatPhone(phone)}
        </a>
      </div>
    </header>
  );
}

function Hero({ phone, formatPhone }: { phone: string; formatPhone: (phone: string) => string }) {
  return (
    <section id="top" className="relative overflow-hidden min-h-screen flex items-center">
      {/* Enhanced animated background with multiple water layers */}
      <div className="absolute inset-0 -z-10">
        <div className="h-full w-full bg-gradient-to-br from-sky-100 via-sky-50 to-white" />
        <div className="absolute inset-0 opacity-30 bg-gradient-to-r from-blue-200/40 to-cyan-200/40" />
        {/* Floating water droplets */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-blue-300/60 rounded-full float-animation" style={{ animationDelay: '0s' }} />
        <div className="absolute top-40 right-20 w-6 h-6 bg-cyan-300/50 rounded-full float-animation" style={{ animationDelay: '2s' }} />
        <div className="absolute top-60 left-1/4 w-3 h-3 bg-sky-300/70 rounded-full float-animation" style={{ animationDelay: '4s' }} />
        <div className="absolute top-80 right-1/3 w-5 h-5 bg-blue-200/60 rounded-full float-animation" style={{ animationDelay: '1s' }} />
        {/* Wave patterns */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-blue-400/20 to-transparent rounded-t-full" />
        <div className="absolute bottom-0 right-0 w-full h-24 bg-gradient-to-t from-cyan-400/15 to-transparent rounded-t-full" style={{ transform: 'translateX(20px)' }} />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 w-full">
        {/* Desktop: hero content and slideshow side-by-side */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {/* Enhanced tag with rounded design */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-sky-100 to-blue-100 border border-sky-200">
              <Droplets className="h-4 w-4 text-sky-600" />
              <p className="text-sm font-medium text-sky-700">
                Long Beach • Private & Small‑Group
              </p>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
              Sailing Lessons, Catalina Trips,
              <span className="block bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
                Whale Watching & More
              </span>
            </h1>
            <p className="text-lg lg:text-xl text-slate-600 max-w-prose leading-relaxed">
              Learn the ropes, set a course to Catalina, glide on paddle boards, or meet migrating giants. Crafted experiences from the Long Beach waterfront—designed for learning, adventure, and pure ocean joy.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Button size="lg" className="ripple-effect bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-700 hover:to-blue-700 text-white px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95">
                <Sparkles className="h-5 w-5 mr-2" />
                Book your spot
              </Button>
              <Button size="lg" variant="outline" className="ripple-effect border-2 border-sky-600 text-sky-600 hover:bg-sky-50 px-8 py-4 rounded-2xl hover:scale-105 active:scale-95 transition-all duration-300">
                <Play className="h-5 w-5 mr-2" />
                Watch Video
              </Button>
            </div>
            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <Shield className="h-4 w-4 text-green-500" />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <Star className="h-4 w-4 text-yellow-500" />
                <span>5.0 Rating</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <Users className="h-4 w-4 text-blue-500" />
                <span>500+ Happy Sailors</span>
              </div>
            </div>
          </div>
          {/* Slideshow for desktop */}
          <div className="relative">
            <HeroSlideshow />
          </div>
        </div>
        {/* Mobile: slideshow under title, no duplicate content */}
        <div className="lg:hidden space-y-4 text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight mt-0 pt-0" style={{marginTop: 0}}>
            Sailing Lessons, Catalina Trips,
            <span className="block bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
              Whale Watching & More
            </span>
          </h1>
          <div className="w-full max-w-2xl mx-auto">
            <HeroSlideshow />
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-sky-100 to-blue-100 border border-sky-200 justify-center mt-6">
            <Droplets className="h-4 w-4 text-sky-600" />
            <p className="text-sm font-medium text-sky-700">
              Long Beach • Private & Small‑Group
            </p>
          </div>
          <p className="text-lg text-slate-600 max-w-md mx-auto leading-relaxed mb-4">
            Learn the ropes, set a course to Catalina, glide on paddle boards, or meet migrating giants. Crafted experiences from the Long Beach waterfront—designed for learning, adventure, and pure ocean joy.
          </p>
          <div className="flex flex-col items-center gap-4 pt-4">
            <Button size="lg" className="ripple-effect bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-700 hover:to-blue-700 text-white px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95">
              <Sparkles className="h-5 w-5 mr-2" />
              Book your spot
            </Button>
            <Button size="lg" variant="outline" className="ripple-effect border-2 border-sky-600 text-sky-600 hover:bg-sky-50 px-8 py-4 rounded-2xl hover:scale-105 active:scale-95 transition-all duration-300">
              <Play className="h-5 w-5 mr-2" />
              Watch Video
            </Button>
          </div>
          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-4">
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <Shield className="h-4 w-4 text-green-500" />
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <Star className="h-4 w-4 text-yellow-500" />
              <span>5.0 Rating</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <Users className="h-4 w-4 text-blue-500" />
              <span>500+ Happy Sailors</span>
            </div>
          </div>
          {/* Add spacing before scroll to explore for mobile */}
          <div className="mt-8" />
        </div>
        {/* Enhanced scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-sm text-slate-500 font-medium">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-sky-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-sky-400 rounded-full mt-2 float-animation" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Journey() {
  const journeySteps = [
    {
      icon: <Compass className="h-10 w-10" />,
      title: "Learn",
      description: "Master the basics of sailing in Long Beach's calm waters",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
      borderColor: "border-blue-200",
      number: "01"
    },
    {
      icon: <Navigation className="h-10 w-10" />,
      title: "Explore", 
      description: "Set sail to Catalina Island and discover hidden coves",
      color: "from-cyan-500 to-teal-500",
      bgColor: "from-cyan-50 to-teal-50",
      borderColor: "border-cyan-200",
      number: "02"
    },
    {
      icon: <Waves className="h-10 w-10" />,
      title: "Glide",
      description: "Paddle board across pristine waters and feel the ocean's rhythm",
      color: "from-teal-500 to-green-500",
      bgColor: "from-teal-50 to-green-50",
      borderColor: "border-teal-200",
      number: "03"
    },
    {
      icon: <Fish className="h-10 w-10" />,
      title: "Play",
      description: "Fish, kayak, and dive into Long Beach's marine playground",
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
      borderColor: "border-green-200",
      number: "04"
    },
    {
      icon: <Camera className="h-10 w-10" />,
      title: "Encounter",
      description: "Meet majestic whales and dolphins in their natural habitat",
      color: "from-emerald-500 to-lime-500",
      bgColor: "from-emerald-50 to-lime-50",
      borderColor: "border-emerald-200",
      number: "05"
    },
    {
      icon: <Anchor className="h-10 w-10" />,
      title: "Unwind",
      description: "Relax in our comfortable two-cabin sailboat",
      color: "from-lime-500 to-yellow-500",
      bgColor: "from-lime-50 to-yellow-50",
      borderColor: "border-lime-200",
      number: "06"
    }
  ];

  return (
    <section id="journey" className="py-24 bg-gradient-to-b from-white via-sky-50/30 to-slate-50 relative overflow-hidden">
      {/* Water-themed background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-100/20 rounded-full blur-xl" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-cyan-100/30 rounded-full blur-lg" />
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-sky-100/25 rounded-full blur-2xl" />
        <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-teal-100/20 rounded-full blur-lg" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-sky-100 to-blue-100 border border-sky-200 mb-6">
            <Sparkles className="h-4 w-4 text-sky-600" />
            <span className="text-sm font-medium text-sky-700">The Journey</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Your Day, As a 
            <span className="block bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
              Story
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            From novice to explorer—a journey that unfolds like chapters in an ocean tale. 
            Each step builds upon the last, creating an unforgettable adventure.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {journeySteps.map((step, index) => (
            <div key={step.title} className="relative group w-full max-w-xs mx-auto">
              {/* Connection line for desktop */}
              {index < journeySteps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-sky-200 to-transparent z-0" />
              )}
              <Card className={`h-full p-4 sm:p-8 text-center group-hover:shadow-2xl transition-all duration-500 bg-gradient-to-br ${step.bgColor} border-2 ${step.borderColor} rounded-3xl relative overflow-hidden`}>
                {/* Step number */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center text-sm font-bold text-slate-600">
                  {step.number}
                </div>
                {/* Icon container with enhanced design and increased image visibility */}
                <div className={`inline-flex p-6 rounded-3xl bg-gradient-to-r ${step.color} text-white mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg brightness-110 opacity-95`} style={{ filter: 'brightness(1.2)' }}>
                  {step.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed text-lg">{step.description}</p>
                {/* Decorative elements */}
                <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-sm" />
                <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-gradient-to-tr from-white/10 to-transparent rounded-full blur-sm" />
              </Card>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-sky-600 to-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <Wind className="h-5 w-5" />
            <span className="font-semibold">Ready to start your journey?</span>
            <ChevronDown className="h-4 w-4" />
          </div>
        </div>
      </div>
    </section>
  );
}

// Helper function to get offering images
const getOfferingImage = (title: string) => {
  const imageMap: { [key: string]: string } = {
    'Sailing Lessons': images.sailing.lessons.src,
    'Catalina Trips': images.catalina.aerial.src,
    'Whale Watching': images.whaleWatching.breaching.src,
    'Paddle Boarding': images.paddleBoarding.group.src,
    'Fishing & Kayaking': images.kayaking.fishing.src,
    'Diving Adventures': images.diving.reef.src
  };
  return imageMap[title] || images.sailing.lessons.src;
};

function Offerings({ phone, formatPhone }: { phone: string; formatPhone: (phone: string) => string }) {
  const offerings = [
    {
      icon: <Ship className="h-14 w-14" />,
      title: "Sailing Lessons",
      description: "Learn to sail in Long Beach's protected waters. Private or group sessions tailored to your pace.",
      features: ["All skill levels", "Safety first", "2-4 hour sessions", "Gear included"],
      price: "Starting at $120/person",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
      borderColor: "border-blue-200",
      duration: "2-4 hours",
      difficulty: "Beginner",
      popular: true
    },
    {
      icon: <Waves className="h-14 w-14" />,
      title: "Catalina Trips",
      description: "Adventure to Catalina Island aboard our comfortable sailboat. Full-day or overnight options.",
      features: ["26-mile journey", "Snorkeling gear", "Hiking trails", "Two-cabin comfort"],
      price: "Starting at $200/person",
      color: "from-cyan-500 to-teal-500",
      bgColor: "from-cyan-50 to-teal-50",
      borderColor: "border-cyan-200",
      duration: "Full day",
      difficulty: "Intermediate",
      popular: true
    },
    {
      icon: <Fish className="h-14 w-14" />,
      title: "Whale Watching",
      description: "Spot majestic whales year-round. Gray, Humpback, Blue, and Minke whales in their natural habitat.",
      features: ["Expert guides", "Seasonal migrations", "Eco-friendly", "2-3 hour tours"],
      price: "Starting at $80/person",
      color: "from-teal-500 to-green-500",
      bgColor: "from-teal-50 to-green-50",
      borderColor: "border-teal-200",
      duration: "2-3 hours",
      difficulty: "All levels",
      popular: false
    },
    {
      icon: <Navigation className="h-14 w-14" />,
      title: "Paddle Boarding",
      description: "Stand-up paddleboarding lessons in calm bays. Perfect for beginners and families.",
      features: ["SUP lessons", "Core strengthening", "Marine life spotting", "All equipment"],
      price: "Starting at $60/person",
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
      borderColor: "border-green-200",
      duration: "1-2 hours",
      difficulty: "Beginner",
      popular: false
    },
    {
      icon: <Anchor className="h-14 w-14" />,
      title: "Fishing & Kayaking",
      description: "Reel in halibut or sea bass while paddling tandem kayaks in Long Beach's rich waters.",
      features: ["Fishing gear", "Tandem kayaks", "Guided spots", "Sustainable catches"],
      price: "Starting at $90/person",
      color: "from-emerald-500 to-lime-500",
      bgColor: "from-emerald-50 to-lime-50",
      borderColor: "border-emerald-200",
      duration: "2-3 hours",
      difficulty: "All levels",
      popular: false
    },
    {
      icon: <Camera className="h-14 w-14" />,
      title: "Diving Adventures",
      description: "Scuba or snorkel dives to kelp forests teeming with marine life and underwater treasures.",
      features: ["Beginner certs", "60+ dive sites", "Kelp forests", "Marine life"],
      price: "Starting at $100/person",
      color: "from-lime-500 to-yellow-500",
      bgColor: "from-lime-50 to-yellow-50",
      borderColor: "border-lime-200",
      duration: "1-2 hours",
      difficulty: "Intermediate",
      popular: false
    }
  ];

  return (
    <section id="offerings" className="py-24 bg-gradient-to-b from-slate-50 via-white to-sky-50/30 relative overflow-hidden">
      {/* Water-themed background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 right-10 w-40 h-40 bg-blue-100/20 rounded-full blur-2xl" />
        <div className="absolute top-32 left-20 w-32 h-32 bg-cyan-100/25 rounded-full blur-xl" />
        <div className="absolute bottom-20 right-1/4 w-36 h-36 bg-teal-100/20 rounded-full blur-2xl" />
        <div className="absolute bottom-40 left-10 w-28 h-28 bg-green-100/25 rounded-full blur-lg" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-sky-100 to-blue-100 border border-sky-200 mb-6">
            <Sparkles className="h-4 w-4 text-sky-600" />
            <span className="text-sm font-medium text-sky-700">Our Adventures</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Choose Your 
            <span className="block bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
              Adventure
            </span>
            </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            From gentle lessons to epic expeditions, every experience is crafted for discovery and joy. 
            Each adventure is designed to create lasting memories on the water.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offerings.map((offering, index) => (
            <div key={offering.title} className="group relative w-full max-w-xs mx-auto">
              {/* Popular badge */}
              {offering.popular && (
                <div className="absolute -top-3 -right-3 z-10 bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                  Popular
                </div>
              )}
              <Card className={`h-full group-hover:shadow-2xl transition-all duration-500 bg-gradient-to-br ${offering.bgColor} border-2 ${offering.borderColor} rounded-3xl overflow-hidden relative`}>
                {/* Header with image and gradient overlay - 20% brighter */}
                <div className="h-44 relative overflow-hidden">
                  <OptimizedImage
                    src={getOfferingImage(offering.title)}
                    alt={offering.title}
                    className="w-full h-full brightness-110"
                    width={400}
                    height={176}
                    quality={80}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${offering.color} opacity-60`} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white z-10">
                      {offering.icon}
                    </div>
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-16 h-16 bg-white/10 rounded-full blur-sm" />
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/5 rounded-full blur-sm" />
                </div>
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-slate-900">{offering.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <Clock className="h-4 w-4" />
                      <span>{offering.duration}</span>
                    </div>
                  </div>
                  <p className="text-slate-600 mb-6 leading-relaxed text-lg">{offering.description}</p>
                  {/* Features with enhanced design */}
                  <div className="space-y-3 mb-6">
                    {offering.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-slate-600">
                        <div className="w-2 h-2 bg-gradient-to-r from-sky-400 to-blue-400 rounded-full mr-3" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  {/* Difficulty and price */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${
                        offering.difficulty === 'Beginner' ? 'bg-green-400' :
                        offering.difficulty === 'Intermediate' ? 'bg-yellow-400' : 'bg-red-400'
                      }`} />
                      <span className="text-sm text-slate-600">{offering.difficulty}</span>
                    </div>
                    {/* Desktop: improved price design */}
                    <div className="hidden lg:flex flex-col items-end">
                      <span className="text-base text-slate-500 font-medium">Price</span>
                      <span className="text-xl font-bold text-sky-700 bg-white/80 px-3 py-1 rounded-xl shadow">{offering.price}</span>
                    </div>
                    {/* Mobile: simple price */}
                    <div className="lg:hidden text-lg font-bold text-sky-700 bg-white/80 px-2 py-1 rounded-xl shadow">{offering.price}</div>
                  </div>
                  <Button className="ripple-effect w-full bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-700 hover:to-blue-700 text-white py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95">
                    <Sparkles className="h-4 w-4 mr-2" />
                    Book This Adventure
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-8 bg-gradient-to-r from-sky-50 to-blue-50 rounded-3xl border-2 border-sky-200">
            <div className="text-center sm:text-left">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Can't decide?</h3>
              <p className="text-slate-600">Create a custom package combining multiple activities!</p>
            </div>
            <Button size="lg" className="bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-700 hover:to-blue-700 text-white px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Sparkles className="h-5 w-5 mr-2" />
              Custom Package
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function BoatSection() {
  return (
    <section id="boat" className="py-20 bg-gradient-to-b from-white to-sky-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Meet Your Seaworthy Companion</h2>
            <p className="text-lg text-slate-600 mb-6">
              Picture this: A sleek 40-ft sailboat with two private cabins, perfect for day trips or overnight escapes. 
              Equipped for safety and comfort, she's your reliable steed for every adventure in Long Beach's idyllic waters.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Shield className="h-6 w-6 text-sky-600" />
                <span className="text-slate-700">Fully equipped for safety and comfort</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="h-6 w-6 text-sky-600" />
                <span className="text-slate-700">Two private cabins for relaxation</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-6 w-6 text-sky-600" />
                <span className="text-slate-700">Easy access from Long Beach marinas</span>
              </div>
              <div className="flex items-center gap-3">
                <Heart className="h-6 w-6 text-sky-600" />
                <span className="text-slate-700">Air-conditioned cabins for post-adventure bliss</span>
              </div>
            </div>
          </div>
          {/* Add spacing above image for mobile */}
          <div className="relative mt-16 lg:mt-0">
            <OptimizedImage
              src={images.sailing.boat.src}
              alt={images.sailing.boat.alt}
              title={images.sailing.boat.title}
              className="w-full h-96 rounded-3xl shadow-xl"
              width={600}
              height={400}
              quality={85}
            />
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
              <div className="text-sm font-semibold text-slate-800">40ft Sailboat</div>
              <div className="text-xs text-slate-600">Two Cabins • Safety Equipped</div>
              <div className="flex items-center gap-1 mt-2">
                <Star className="h-3 w-3 text-yellow-500 fill-current" />
                <Star className="h-3 w-3 text-yellow-500 fill-current" />
                <Star className="h-3 w-3 text-yellow-500 fill-current" />
                <Star className="h-3 w-3 text-yellow-500 fill-current" />
                <Star className="h-3 w-3 text-yellow-500 fill-current" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const reasons = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Experienced Captain",
      description: "20+ years navigating Long Beach waters with passion for ocean adventures"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Safety First",
      description: "All gear provided with eco-friendly practices to protect our ocean home"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Personalized Experience",
      description: "Small groups and custom bundles for the perfect day on the water"
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "Local Knowledge",
      description: "Deep understanding of Long Beach's best spots and seasonal opportunities"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-sky-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Why Sail With Us?</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            In a world of screens, we craft real connections—expert guidance, small groups, and unforgettable sunsets
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div key={reason.title}>
              <Card className="h-full p-6 text-center group hover:shadow-xl transition-all duration-300">
                <div className="inline-flex p-4 rounded-2xl bg-sky-100 text-sky-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {reason.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{reason.title}</h3>
                <p className="text-slate-600">{reason.description}</p>
            </Card>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <blockquote className="text-2xl font-medium text-slate-700 italic mb-4">
            "A day that unfolded like magic—from lessons to whale songs!"
          </blockquote>
          <p className="text-slate-600">— Happy Sailor</p>
        </div>
      </div>
    </section>
  );
}

function Testimonial() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 via-white to-sky-50/30 relative overflow-hidden">
      {/* Water-themed background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 w-48 h-48 bg-blue-100/15 rounded-full blur-3xl" />
        <div className="absolute top-40 right-20 w-36 h-36 bg-cyan-100/20 rounded-full blur-2xl" />
        <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-teal-100/15 rounded-full blur-2xl" />
        <div className="absolute bottom-40 right-1/4 w-32 h-32 bg-green-100/20 rounded-full blur-xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-sky-100 to-blue-100 border border-sky-200 mb-6">
            <Heart className="h-4 w-4 text-sky-600" />
            <span className="text-sm font-medium text-sky-700">Testimonial</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            What Our 
            <span className="block bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
              Sailors Say
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Testimonial content */}
          <div className="space-y-6">
            <div className="text-6xl text-sky-200 mb-4">"</div>
            <blockquote className="text-2xl lg:text-3xl font-medium text-slate-800 leading-relaxed">
              "The most incredible ocean experience I've ever had! The captain was amazing, 
              and we saw whales up close. The boat was perfect and the whole day was magical."
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full flex items-center justify-center mt-6">
                <span className="text-white font-bold text-xl">SJ</span>
              </div>
              <div>
                <div className="font-semibold text-slate-900 text-lg">James Miller</div>
                <div className="text-slate-600">Whale Watching Adventure</div>
                <div className="flex items-center gap-1 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Add spacing above image for mobile */}
          <div className="relative mt-8 lg:mt-0">
            <OptimizedImage
              src={images.whaleWatching.encounter.src}
              alt="Happy customer with whale"
              title="Customer Experience"
              className="w-full h-96 rounded-3xl shadow-2xl"
              width={600}
              height={400}
              quality={85}
            />
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-lg">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                  ))}
                </div>
                <span className="text-sm font-semibold text-slate-800">5.0 Rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function GalleryPlaceholder() {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [touchStartX, setTouchStartX] = React.useState<number | null>(null);
  const galleryImages = images.gallery;

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setModalOpen(true);
  };
  const closeModal = () => setModalOpen(false);
  const showPrev = () => setCurrentIndex((i) => (i === 0 ? galleryImages.length - 1 : i - 1));
  const showNext = () => setCurrentIndex((i) => (i === galleryImages.length - 1 ? 0 : i + 1));

  // Keyboard navigation
  React.useEffect(() => {
    if (!modalOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [modalOpen]);

  // Touch swipe for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchEndX - touchStartX;
    if (diff > 50) showPrev();
    if (diff < -50) showNext();
    setTouchStartX(null);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-sky-50/30 via-white to-slate-50 relative overflow-hidden">
      {/* Water-themed background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 w-48 h-48 bg-blue-100/15 rounded-full blur-3xl" />
        <div className="absolute top-40 right-20 w-36 h-36 bg-cyan-100/20 rounded-full blur-2xl" />
        <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-teal-100/15 rounded-full blur-2xl" />
        <div className="absolute bottom-40 right-1/4 w-32 h-32 bg-green-100/20 rounded-full blur-xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-sky-100 to-blue-100 border border-sky-200 mb-6">
            <Camera className="h-4 w-4 text-sky-600" />
            <span className="text-sm font-medium text-sky-700">Gallery</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Fun! On the 
            <span className="block bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
              Ocean
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Smiling faces, wildlife encounters, and sunsets over water. 
            See why our guests keep coming back for more ocean adventures.
          </p>
        </div>

        {/* Main gallery grid with real images */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {galleryImages.map((item, index) => (
            <div 
              key={index} 
              className={`group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 ${
                item.featured ? 'md:col-span-2 md:row-span-2' : ''
              } aspect-square flex items-center justify-center`}
              onClick={() => openModal(index)}
              role="button"
              tabIndex={0}
              aria-label={`Open image ${item.title}`}
            >
              <OptimizedImage
                src={item.src}
                alt={item.alt}
                title={item.title}
                className="w-full h-full cursor-pointer"
                width={item.featured ? 600 : 300}
                height={item.featured ? 400 : 300}
                quality={85}
              />
              {/* Content overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div className="text-white">
                  <h3 className={`font-bold mb-1 ${
                    item.featured ? 'text-xl' : 'text-sm'
                  }`}>
                    {item.title}
                  </h3>
                  <p className={`text-white/80 ${
                    item.featured ? 'text-sm' : 'text-xs'
                  }`}>
                    {item.category}
                  </p>
                </div>
              </div>
              {/* Category badge */}
              <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-slate-700">
                {item.category}
              </div>
              {/* Featured badge */}
              {item.featured && (
                <div className="absolute top-3 right-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-2 py-1 rounded-full text-xs font-bold">
                  Featured
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Modal for image preview and swipe */}
        {modalOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={closeModal}
            role="presentation"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <button
              className="absolute top-8 right-8 text-white text-3xl font-bold bg-black/40 rounded-full p-2 hover:bg-black/70 transition"
              onClick={closeModal}
              aria-label="Close preview"
              tabIndex={0}
            >
              &times;
            </button>
            {/* Left arrow always present, larger and touch-friendly on mobile */}
            <button
              className="absolute left-2 top-1/2 -translate-y-1/2 text-white text-4xl font-bold bg-black/50 rounded-full p-3 hover:bg-black/70 transition z-10 md:text-3xl md:p-2 md:left-4"
              style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.25)' }}
              onClick={e => { e.stopPropagation(); showPrev(); }}
              aria-label="Previous image"
              tabIndex={0}
            >
              &#8592;
            </button>
            <div className="max-w-full max-h-full flex flex-col items-center justify-center" onClick={e => e.stopPropagation()}>
              <OptimizedImage
                src={galleryImages[currentIndex].src}
                alt={galleryImages[currentIndex].alt}
                title={galleryImages[currentIndex].title}
                className="rounded-2xl shadow-2xl max-w-[90vw] max-h-[80vh] object-contain"
                width={800}
                height={600}
                quality={95}
              />
              <div className="mt-4 text-white text-lg font-semibold text-center">
                {galleryImages[currentIndex].title}
              </div>
              <div className="text-white/80 text-sm text-center">
                {galleryImages[currentIndex].category}
              </div>
            </div>
            {/* Right arrow always present */}
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-3xl font-bold bg-black/40 rounded-full p-2 hover:bg-black/70 transition"
              onClick={e => { e.stopPropagation(); showNext(); }}
              aria-label="Next image"
              tabIndex={0}
            >
              &#8594;
            </button>
          </div>
        )}

        {/* Video section */}
        <div className="text-center">
          <div className="inline-flex items-center gap-4 p-8 bg-gradient-to-r from-sky-50 to-blue-50 rounded-3xl border-2 border-sky-200 shadow-lg">
            <div className="w-16 h-16 bg-gradient-to-r from-sky-600 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
              <Play className="h-8 w-8 text-white ml-1" />
            </div>
            <div className="text-left">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Watch Our Story</h3>
              <p className="text-slate-600">See what makes our ocean adventures unforgettable</p>
            </div>
            <Button className="bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-700 hover:to-blue-700 text-white px-6 py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              Play Video
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    {
      question: "What should I bring for my sailing adventure?",
      answer: "Just bring sunscreen, a hat, comfortable clothes that can get wet, and a sense of adventure! We provide all safety gear, life jackets, and equipment."
    },
    {
      question: "Can I combine different activities in one day?",
      answer: "Absolutely! We love creating custom experiences. You can start with a sailing lesson, go whale watching, and end with paddle boarding—all in one epic day."
    },
    {
      question: "What happens if the weather is bad?",
      answer: "Safety is our top priority. We monitor weather conditions closely and will reschedule if needed. Long Beach's protected waters usually offer good conditions year-round."
    },
    {
      question: "Do I need any experience for sailing lessons?",
      answer: "Not at all! Our lessons are designed for complete beginners. Our experienced captain will teach you everything you need to know in a safe, supportive environment."
    },
    {
      question: "How many people can the boat accommodate?",
      answer: "Our 40-foot sailboat comfortably accommodates up to 6 people for day trips, with two private cabins for overnight adventures."
    },
    {
      question: "What's the best time for whale watching?",
      answer: "Gray whales migrate December through April, but we see various whale species year-round. Each season offers unique marine life encounters!"
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-slate-600">Everything you need to know for your ocean adventure</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index}>
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{faq.question}</h3>
                <p className="text-slate-600">{faq.answer}</p>
            </Card>
            </div>
          ))}
          </div>
        </div>
      </section>
  );
}

function Booking({ phone, formatPhone }: { phone: string; formatPhone: (phone: string) => string }) {
  return (
    <section id="booking" className="py-20 bg-gradient-to-b from-white to-sky-50">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Ready to Set Sail?</h2>
          <p className="text-xl text-slate-600 mb-8">
            Contact us to book your personalized ocean story
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a 
              href={`tel:${phone}`}
              className="inline-flex items-center gap-2 rounded-xl bg-sky-600 px-6 py-3 text-white font-medium shadow-sm hover:bg-sky-700 transition-colors hover:scale-105"
            >
              <Phone className="h-5 w-5" />
              {formatPhone(phone)}
            </a>
            <span className="text-slate-600">or</span>
            <Button size="lg" variant="outline" className="border-sky-600 text-sky-600 hover:bg-sky-50">
              Send Message
            </Button>
          </div>
        </div>

        <Card className="p-8">
          <h3 className="text-2xl font-semibold text-slate-900 mb-6 text-center">Book Your Adventure</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Your Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Phone</label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Desired Activity</label>
                <select className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent">
                  <option>Sailing Lessons</option>
                  <option>Catalina Trips</option>
                  <option>Whale Watching</option>
                  <option>Paddle Boarding</option>
                  <option>Fishing & Kayaking</option>
                  <option>Diving Adventures</option>
                  <option>Custom Package</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Preferred Date</label>
                <input 
                  type="date" 
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Group Size</label>
                <select className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent">
                  <option>1 person</option>
                  <option>2 people</option>
                  <option>3-4 people</option>
                  <option>5-6 people</option>
                  <option>Private group</option>
                </select>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <label className="block text-sm font-medium text-slate-700 mb-2">Tell us about your dream adventure</label>
            <textarea 
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent h-24"
              placeholder="Share any special requests or questions..."
            />
          </div>
          <div className="mt-6 text-center">
            <Button size="lg" className="bg-sky-600 hover:bg-sky-700 text-white px-8">
              Send Booking Request
          </Button>
          </div>
        </Card>

        <div className="mt-12 text-center text-sm text-slate-600">
          <p>Long Beach, CA • Licensed & Insured • Weather-dependent scheduling</p>
        </div>
        </div>
      </section>
  );
}

function Footer({ phone, formatPhone }: { phone: string; formatPhone: (phone: string) => string }) {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-sky-600 text-white">
                <Ship className="h-4 w-4" />
              </span>
              <span className="text-xl font-semibold">Sail Long Beach</span>
            </div>
            <p className="text-slate-400 mb-4">
              Crafted experiences from the Long Beach waterfront—designed for learning, adventure, and pure ocean joy.
            </p>
            <a 
              href={`tel:${phone}`}
              className="inline-flex items-center gap-2 text-sky-400 hover:text-sky-300 transition-colors"
            >
              <Phone className="h-4 w-4" />
              {formatPhone(phone)}
            </a>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#offerings" className="text-slate-400 hover:text-white transition-colors">Offerings</a></li>
              <li><a href="#journey" className="hover:text-white transition-colors">The Journey</a></li>
              <li><a href="#boat" className="text-slate-400 hover:text-white transition-colors">The Boat</a></li>
              <li><a href="#faq" className="text-slate-400 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#booking" className="text-slate-400 hover:text-white transition-colors">Book Now</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2 text-slate-400">
              <p>Long Beach, CA</p>
              <p>Licensed & Insured</p>
              <p>Weather-dependent scheduling</p>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
          <p>&copy; 2025 Sail Long Beach. All rights reserved. Fun on the ocean, one wave at a time.</p>
        </div>
      </div>
    </footer>
  );
}

function CallNowFloating({ phone, formatPhone }: { phone: string; formatPhone: (phone: string) => string }) {
  return (
    <div className="fixed bottom-6 left-6 z-50 md:hidden">
      {/* 3 Round Icons Stacked Vertically */}
      <div className="flex flex-col gap-3">
        {/* Call Icon */}
        <a
          href={`tel:${phone}`}
          className="ripple-effect inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-sky-600 to-blue-600 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 active:scale-95"
        >
          <div className="relative">
            <Phone className="h-6 w-6" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse" />
          </div>
        </a>
        
        {/* Book Icon */}
        <a
          href="#booking"
          className="ripple-effect inline-flex items-center justify-center w-14 h-14 rounded-full bg-white text-sky-600 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 border-2 border-sky-200"
        >
          <Calendar className="h-6 w-6" />
        </a>
        
        {/* Tours Icon */}
        <a
          href="#offerings"
          className="ripple-effect inline-flex items-center justify-center w-14 h-14 rounded-full bg-white text-sky-600 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 border-2 border-sky-200"
        >
          <Sparkles className="h-6 w-6" />
        </a>
      </div>
    </div>
  );
}

export default LandingPage;
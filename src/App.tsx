import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Palette, Sparkles } from 'lucide-react';
import Gallery from './components/Gallery';
import About from './components/About';
import LippieAndLather from './components/LippieAndLather';
import OtherCrafts from './components/OtherCrafts';
import WhereToFind from './components/WhereToFind';

interface CarouselSection {
  id: 'jewelry' | 'lippie' | 'crafts' | 'about';
  title: string;
  subtitle: string;
  description: string;
  image: string;
  gradient: string;
  textColor: string;
  component: React.ComponentType;
}

function App() {
  const [currentSection, setCurrentSection] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [activeContentSection, setActiveContentSection] = useState<'jewelry' | 'lippie' | 'crafts' | 'about' | null>(null);

  const carouselSections: CarouselSection[] = [
    {
      id: 'jewelry',
      title: 'Wearable Sculptures',
      subtitle: 'Handcrafted Jewelry Collection',
      description: 'Each piece emerges from the intersection of medical precision and artistic intuition—delicate sculptures that carry the healing energy of skilled hands.',
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=1200&h=800&fit=crop&crop=center',
      gradient: 'from-slate-900/60 via-slate-800/40 to-transparent',
      textColor: 'text-white',
      component: Gallery
    },
    {
      id: 'lippie',
      title: 'Lippie & Lather',
      subtitle: 'Botanical Skincare Artistry',
      description: 'Hand-poured with the same healing intention that flows through decades of caring for others—where botanical wisdom meets artisanal craft.',
      image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=1200&h=800&fit=crop&crop=center',
      gradient: 'from-emerald-900/60 via-teal-800/40 to-transparent',
      textColor: 'text-white',
      component: LippieAndLather
    },
    {
      id: 'crafts',
      title: 'Multi-Media Artistry',
      subtitle: 'Stained Glass • Furniture • Gardens',
      description: 'From luminous stained glass to custom furniture, from healing garden designs to therapeutic spaces—art that transforms environments and spirits.',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=800&fit=crop&crop=center',
      gradient: 'from-violet-900/60 via-purple-800/40 to-transparent',
      textColor: 'text-white',
      component: OtherCrafts
    },
    {
      id: 'about',
      title: 'The Artist',
      subtitle: 'Gina Stransky • Healer & Creator',
      description: 'Three decades of healing work transformed into artistic meditation—where the precision of healthcare meets the flow of creative expression.',
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=1200&h=800&fit=crop&crop=center',
      gradient: 'from-rose-900/60 via-pink-800/40 to-transparent',
      textColor: 'text-white',
      component: About
    }
  ];

  const nextSection = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSection((prev) => (prev + 1) % carouselSections.length);
      setIsTransitioning(false);
    }, 300);
  };

  const prevSection = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSection((prev) => (prev - 1 + carouselSections.length) % carouselSections.length);
      setIsTransitioning(false);
    }, 300);
  };

  const goToSection = (index: number) => {
    if (isTransitioning || index === currentSection) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSection(index);
      setIsTransitioning(false);
    }, 300);
  };

  const enterSection = (sectionId: 'jewelry' | 'lippie' | 'crafts' | 'about') => {
    setActiveContentSection(sectionId);
    setShowContent(true);
  };

  const exitToCarousel = () => {
    setShowContent(false);
    setActiveContentSection(null);
  };

  // Auto-advance carousel
  useEffect(() => {
    if (showContent) return;
    
    const interval = setInterval(() => {
      if (!isTransitioning) {
        nextSection();
      }
    }, 6000);

    return () => clearInterval(interval);
  }, [isTransitioning, showContent]);

  if (showContent && activeContentSection) {
    const ContentComponent = carouselSections.find(s => s.id === activeContentSection)?.component;
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-rose-50">
        {/* Elegant Back Navigation */}
        <div className="fixed top-8 left-8 z-50">
          <button
            onClick={exitToCarousel}
            className="group flex items-center space-x-3 bg-white/90 backdrop-blur-xl border border-slate-200/50 rounded-full px-6 py-3 shadow-xl hover:shadow-2xl transition-all duration-500 hover:bg-white"
          >
            <ChevronLeft className="w-5 h-5 text-slate-600 group-hover:text-slate-800 transition-colors" />
            <span className="text-sm font-medium text-slate-700 group-hover:text-slate-900 transition-colors">
              Portfolio
            </span>
          </button>
        </div>

        {/* Content */}
        <div className="pt-20">
          {ContentComponent && <ContentComponent />}
        </div>

        {/* Artist Footer */}
        <footer className="bg-slate-50/80 backdrop-blur-sm border-t border-slate-200 mt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-slate-600 to-rose-500 rounded-lg flex items-center justify-center transform rotate-12">
                  <Palette className="w-5 h-5 text-white transform -rotate-12" />
                </div>
                <div>
                  <h3 className="text-xl font-bold bg-gradient-to-r from-slate-700 to-rose-600 bg-clip-text text-transparent">
                    Adorna Design
                  </h3>
                  <p className="text-sm text-slate-600">Gina Stransky • Multi-Media Artist</p>
                </div>
              </div>
              <p className="text-slate-600 mb-6 max-w-md mx-auto">
                Creating art that bridges the worlds of healing and beauty, 
                one handcrafted piece at a time.
              </p>
              <div className="space-y-2">
                <p className="text-xs text-slate-500">
                  © 2025 Adorna Design. All artistic works are original and handcrafted by Gina Stransky.
                </p>
                <p className="text-xs text-slate-400">
                  Website crafted with ❤️ by{' '}
                  <a 
                    href="https://magicunicorn.tech" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate-500 hover:text-slate-700 transition-colors"
                  >
                    Magic Unicorn Unconventional Technology & Stuff Inc
                  </a>
                  {' '}using{' '}
                  <a 
                    href="https://unicorncommander.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate-500 hover:text-slate-700 transition-colors"
                  >
                    Unicorn Commander UC-1
                  </a>
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }

  const currentSlide = carouselSections[currentSection];

  return (
    <div className="relative h-screen overflow-hidden bg-black">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0">
        <div 
          className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ${isTransitioning ? 'scale-110 blur-sm' : 'scale-100'}`}
          style={{ backgroundImage: `url(${currentSlide.image})` }}
        />
        <div className={`absolute inset-0 bg-gradient-to-r ${currentSlide.gradient} transition-opacity duration-1000`} />
      </div>

      {/* Floating Artist Logo */}
      <div className="absolute top-8 left-8 z-30">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <div className="w-14 h-14 bg-white/20 backdrop-blur-xl border border-white/30 rounded-xl flex items-center justify-center shadow-2xl">
              <Palette className="w-7 h-7 text-white" />
            </div>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-rose-400 to-amber-400 rounded-full animate-pulse shadow-lg"></div>
          </div>
          <div className="text-white">
            <h1 className="text-xl font-bold tracking-tight">Adorna Design</h1>
            <p className="text-xs text-white/80 font-medium">Gina Stransky</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className={`space-y-8 transition-all duration-1000 ${isTransitioning ? 'opacity-0 translate-x-8' : 'opacity-100 translate-x-0'}`}>
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-xl rounded-full px-6 py-3 border border-white/20">
                  <Sparkles className="w-4 h-4 text-white/80" />
                  <span className="text-sm font-medium text-white/90">Multi-Media Artisan</span>
                </div>
                
                <div className="space-y-4">
                  <h2 className={`text-6xl md:text-7xl lg:text-8xl font-light ${currentSlide.textColor} leading-none tracking-tight`}>
                    {currentSlide.title}
                  </h2>
                  <p className={`text-xl md:text-2xl ${currentSlide.textColor}/80 font-light leading-relaxed`}>
                    {currentSlide.subtitle}
                  </p>
                </div>
                
                <p className={`text-lg ${currentSlide.textColor}/70 leading-relaxed max-w-2xl`}>
                  {currentSlide.description}
                </p>
              </div>

              {/* Enter Button */}
              <div className="pt-4">
                <button
                  onClick={() => enterSection(currentSlide.id)}
                  className="group relative overflow-hidden bg-white/10 backdrop-blur-xl border border-white/30 rounded-full px-8 py-4 text-white font-medium transition-all duration-500 hover:bg-white/20 hover:scale-105 hover:shadow-2xl"
                >
                  <span className="relative z-10">Explore Collection</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                </button>
              </div>
            </div>

            {/* Right Content - Navigation Dots */}
            <div className="hidden lg:flex justify-end">
              <div className="space-y-6">
                {carouselSections.map((section, index) => (
                  <button
                    key={section.id}
                    onClick={() => goToSection(index)}
                    className={`group flex items-center space-x-4 transition-all duration-500 ${
                      index === currentSection 
                        ? 'opacity-100' 
                        : 'opacity-40 hover:opacity-70'
                    }`}
                  >
                    <div className="text-right">
                      <p className="text-white font-medium text-sm">{section.title}</p>
                      <p className="text-white/60 text-xs">{section.subtitle}</p>
                    </div>
                    <div className={`w-3 h-3 rounded-full border-2 border-white transition-all duration-500 ${
                      index === currentSection 
                        ? 'bg-white scale-125' 
                        : 'bg-transparent group-hover:bg-white/50'
                    }`} />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <div className="flex items-center space-x-6">
          <button
            onClick={prevSection}
            disabled={isTransitioning}
            className="w-12 h-12 bg-white/10 backdrop-blur-xl border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 disabled:opacity-50 hover:scale-110"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Progress Dots */}
          <div className="flex space-x-3">
            {carouselSections.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSection(index)}
                className={`w-2 h-2 rounded-full transition-all duration-500 ${
                  index === currentSection 
                    ? 'bg-white w-8' 
                    : 'bg-white/40 hover:bg-white/60'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSection}
            disabled={isTransitioning}
            className="w-12 h-12 bg-white/10 backdrop-blur-xl border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 disabled:opacity-50 hover:scale-110"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden absolute bottom-24 left-8 right-8 z-30">
        <div className="bg-white/10 backdrop-blur-xl border border-white/30 rounded-2xl p-4">
          <div className="grid grid-cols-2 gap-3">
            {carouselSections.map((section, index) => (
              <button
                key={section.id}
                onClick={() => goToSection(index)}
                className={`p-3 rounded-xl text-left transition-all duration-300 ${
                  index === currentSection 
                    ? 'bg-white/20 text-white' 
                    : 'text-white/70 hover:bg-white/10 hover:text-white'
                }`}
              >
                <p className="font-medium text-sm">{section.title}</p>
                <p className="text-xs opacity-80">{section.subtitle}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

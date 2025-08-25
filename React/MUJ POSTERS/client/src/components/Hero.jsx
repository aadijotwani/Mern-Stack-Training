import { useState, useEffect, useCallback, useMemo } from "react";
import {
  FaFire,
  FaRocket,
  FaStar,
  FaHeart,
  FaThumbsUp,
  FaShoppingCart,
  FaTrophy,
  FaBolt,
  FaMagic,
} from "react-icons/fa";

const Hero = () => {
  const [currentPoster, setCurrentPoster] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Generate random rotations for rectangles (between -15 to 15 degrees)
  const rectangleRotations = useMemo(
    () => [
      Math.random() * 30 - 15, // First rectangle: -15 to 15 degrees
      Math.random() * 25 - 12.5, // Second rectangle: -12.5 to 12.5 degrees
      Math.random() * 20 - 10, // Third rectangle: -10 to 10 degrees
      Math.random() * 35 - 17.5, // Fourth rectangle: -17.5 to 17.5 degrees
    ],
    []
  );

  // Scroll to section function with navbar offset
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Calculate offset for sticky navbar (approximately 80px height)
      const navbarOffset = 80;
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // Memoized poster data for better performance
  const featuredPosters = useMemo(
    () => [
      {
        id: 1,
        title: "ANIME POSTERS",
        category: "Anime Collection",
        image: "https://picsum.photos/300/400?random=1",
        price: "₹299",
        badge: "🔥 TRENDING",
        gradient: "from-purple-600 to-pink-600",
      },
      {
        id: 2,
        title: "SUPERHERO POSTERS",
        category: "Hero Collection",
        image: "https://picsum.photos/300/400?random=2",
        price: "₹249",
        badge: "⚡ BESTSELLER",
        gradient: "from-orange-600 to-red-600",
      },
      {
        id: 3,
        title: "MOVIE POSTERS",
        category: "Cinema Collection",
        image: "https://picsum.photos/300/400?random=3",
        price: "₹199",
        badge: "🆕 NEW DROP",
        gradient: "from-cyan-600 to-blue-600",
      },
      {
        id: 4,
        title: "FORMULA 1 POSTERS",
        category: "Racing Collection",
        image: "https://picsum.photos/300/400?random=4",
        price: "₹349",
        badge: "🏎️ PREMIUM",
        gradient: "from-yellow-600 to-orange-600",
      },
      {
        id: 5,
        title: "QUOTES POSTERS",
        category: "Motivation Collection",
        image: "https://picsum.photos/300/400?random=5",
        price: "₹199",
        badge: "💭 INSPIRING",
        gradient: "from-indigo-600 to-purple-600",
      },
      {
        id: 6,
        title: "MUSIC POSTERS",
        category: "Artist Collection",
        image: "https://picsum.photos/300/400?random=6",
        price: "₹299",
        badge: "🎵 LIMITED",
        gradient: "from-green-600 to-emerald-600",
      },
    ],
    []
  );

  // Memoized stats data
  const stats = useMemo(
    () => [
      { number: "50K+", label: "Happy Students", icon: FaHeart },
      { number: "10K+", label: "Posters Sold", icon: FaShoppingCart },
      { number: "500+", label: "Designs", icon: FaMagic },
      { number: "#1", label: "Student Choice", icon: FaTrophy },
    ],
    []
  );

  // Optimized auto-rotate with useCallback
  const nextPoster = useCallback(() => {
    setCurrentPoster((prev) => (prev + 1) % featuredPosters.length);
  }, [featuredPosters.length]);

  useEffect(() => {
    const interval = setInterval(nextPoster, 5000);
    return () => clearInterval(interval);
  }, [nextPoster]);

  // Mobile-specific poster stack component
  const MobilePosterStack = () => (
    <div className="relative w-full max-w-sm mx-auto">
      {/* Single large poster display */}
      <div className="relative">
        <div className={`bg-gradient-to-br ${featuredPosters[currentPoster].gradient} p-4 rounded-2xl shadow-2xl`}>
          {/* Badge */}
          <div className="absolute -top-3 -right-3 bg-black text-white px-3 py-1 rounded-full font-bold text-xs z-10">
            {featuredPosters[currentPoster].badge}
          </div>
          
          {/* Poster Image */}
          <div className="relative overflow-hidden rounded-xl mb-4 border-2 border-white/20">
            <img
              src={featuredPosters[currentPoster].image}
              alt={featuredPosters[currentPoster].title}
              className="w-full h-64 object-cover"
              loading="lazy"
            />
          </div>
          
          {/* Poster Info */}
          <div className="text-white space-y-3">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-black text-lg leading-tight">
                  {featuredPosters[currentPoster].title}
                </h3>
                <p className="text-sm opacity-90">
                  {featuredPosters[currentPoster].category}
                </p>
              </div>
              <div className="text-right">
                <div className="font-black text-xl">
                  {featuredPosters[currentPoster].price}
                </div>
                <div className="text-xs line-through opacity-60">₹499</div>
              </div>
            </div>
            
            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-sm" />
                ))}
              </div>
              <span className="text-sm opacity-90">(2.5k reviews)</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {featuredPosters.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPoster(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-200 ${
              index === currentPoster ? "bg-purple-500" : "bg-gray-600"
            }`}
          />
        ))}
      </div>
    </div>
  );

  // Desktop poster component (existing complex stack)
  const DesktopPosterStack = () => (
    <div className="relative max-w-sm sm:max-w-md lg:max-w-2xl mx-auto mt-8 lg:mt-0 order-first lg:order-last">
      {/* Stacked Poster Display with realistic depth effect */}
      <div className="relative w-full h-[280px] sm:h-[350px] md:h-[400px] lg:h-[520px]">
        {/* Background posters stack */}
        {featuredPosters.map((poster, index) => {
          const isActive = index === currentPoster;
          const isNext = index === (currentPoster + 1) % featuredPosters.length;
          const isPrev = index === (currentPoster - 1 + featuredPosters.length) % featuredPosters.length;

          let zIndex = 1;
          let transformClasses = "scale-75 translate-y-4 rotate-1 sm:scale-70 sm:translate-y-8 lg:translate-y-16";
          let opacity = "opacity-15";

          if (isActive) {
            zIndex = 30;
            transformClasses = "scale-100 translate-y-0 rotate-0";
            opacity = "opacity-100";
          } else if (isNext) {
            zIndex = 20;
            transformClasses = "scale-90 translate-y-2 translate-x-2 rotate-1 sm:translate-y-4 sm:translate-x-4 lg:translate-y-8 lg:translate-x-8 lg:rotate-2";
            opacity = "opacity-75";
          } else if (isPrev) {
            zIndex = 15;
            transformClasses = "scale-85 translate-y-3 -translate-x-2 -rotate-1 sm:translate-y-6 sm:-translate-x-3 lg:translate-y-12 lg:-translate-x-6";
            opacity = "opacity-50";
          }

          return (
            <div
              key={poster.id}
              className={`absolute inset-0 transition-all duration-700 ease-out ${transformClasses} ${opacity}`}
              style={{ zIndex }}
            >
              <div
                className={`bg-gradient-to-br ${poster.gradient} p-4 sm:p-5 lg:p-6 rounded-2xl h-full shadow-2xl flex flex-col ${
                  !isActive ? "border border-white/10" : ""
                }`}
              >
                {/* Badge - only show on active */}
                {isActive && (
                  <div className="absolute -top-3 -right-3 bg-black text-white px-3 py-1 rounded-full font-bold text-xs z-10">
                    {poster.badge}
                  </div>
                )}

                {/* Poster Image */}
                <div className="relative overflow-hidden rounded-xl mb-3 border-2 border-white/20 flex-shrink-0">
                  <img
                    src={poster.image}
                    alt={poster.title}
                    className="w-full h-48 sm:h-56 lg:h-64 object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Poster Info - fixed height container */}
                <div className="text-white flex-1 flex flex-col justify-between min-h-0">
                  <div className="space-y-2">
                    <div className="flex justify-between items-start gap-3">
                      <div className="flex-1 min-w-0">
                        <h3 className={`font-black leading-tight truncate ${isActive ? "text-lg" : "text-base"}`}>
                          {poster.title}
                        </h3>
                        {isActive && (
                          <p className="text-sm opacity-90 leading-tight truncate">
                            {poster.category}
                          </p>
                        )}
                      </div>
                      <div className="text-right flex-shrink-0">
                        <div className={`font-black leading-tight ${isActive ? "text-xl" : "text-lg"}`}>
                          {poster.price}
                        </div>
                        {isActive && (
                          <div className="text-xs line-through opacity-60 leading-tight">₹499</div>
                        )}
                      </div>
                    </div>

                    {/* Rating - only show on active, at bottom */}
                    {isActive && (
                      <div className="flex items-center gap-2">
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <FaStar key={i} className="text-yellow-400 text-xs" />
                          ))}
                        </div>
                        <span className="text-xs opacity-90">(2.5k reviews)</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Poster Navigation - Properly spaced */}
      <div className="flex justify-center gap-2 mt-8 mb-4">
        {featuredPosters.map((poster, index) => (
          <button
            key={index}
            onClick={() => setCurrentPoster(index)}
            className={`w-12 h-14 rounded-lg overflow-hidden border-2 transition-colors duration-200 ${
              index === currentPoster ? "border-purple-500" : "border-gray-600 hover:border-gray-400"
            }`}
          >
            <img src={poster.image} alt={poster.title} className="w-full h-full object-cover" loading="lazy" />
          </button>
        ))}
      </div>

      {/* Decorative elements - Well positioned */}
      <div className="absolute -top-6 -left-6 w-12 h-16 bg-purple-500/20 rounded-lg -z-10"></div>
      <div className="absolute -bottom-2 -right-6 w-10 h-12 bg-cyan-500/20 rounded-lg -z-10"></div>
    </div>
  );

  return (
    <section className="relative min-h-screen bg-gray-900 overflow-hidden">
      {/* Simplified Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black opacity-50"></div>

      {/* Decorative elements - Only show on desktop */}
      {!isMobile && (
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute top-20 left-10 w-12 h-16 sm:w-16 sm:h-20 lg:w-20 lg:h-24 bg-purple-500 rounded-lg transition-transform duration-1000 hover:scale-110 float-1"
            style={{ "--rotation": `rotate(${rectangleRotations[0]}deg)` }}
          ></div>
          <div
            className="absolute top-40 right-20 w-10 h-14 sm:w-14 sm:h-18 lg:w-16 lg:h-20 bg-pink-500 rounded-lg transition-transform duration-1000 hover:scale-110 float-2"
            style={{ "--rotation": `rotate(${rectangleRotations[1]}deg)` }}
          ></div>
          <div
            className="absolute bottom-32 left-20 w-16 h-20 sm:w-20 sm:h-24 lg:w-24 lg:h-28 bg-orange-500 rounded-lg transition-transform duration-1000 hover:scale-110 float-3"
            style={{ "--rotation": `rotate(${rectangleRotations[2]}deg)` }}
          ></div>
          <div
            className="absolute bottom-20 right-10 w-14 h-18 sm:w-18 sm:h-22 lg:w-20 lg:h-24 bg-green-500 rounded-lg transition-transform duration-1000 hover:scale-110 float-4"
            style={{ "--rotation": `rotate(${rectangleRotations[3]}deg)` }}
          ></div>
        </div>
      )}

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Top Badge */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 sm:gap-3 bg-gray-800 border border-purple-500 px-3 sm:px-6 py-2 sm:py-3 rounded-full">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span className="text-purple-300 font-bold text-sm sm:text-base">
              🎨 MUJ'S #1 POSTER STORE
            </span>
            <FaFire className="text-orange-400 text-sm sm:text-base" />
          </div>
        </div>

        {/* Conditional Layout: Mobile vs Desktop */}
        {isMobile ? (
          // MOBILE LAYOUT - Stack everything vertically with custom design
          <div className="space-y-8">
            {/* Mobile Hero Text */}
            <div className="text-center space-y-6">
              {/* Main Headline */}
              <div className="space-y-2">
                <h1 className="text-3xl sm:text-4xl font-black leading-tight">
                  <span className="block text-white">POSTER</span>
                  <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    PARADISE
                  </span>
                  <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    FOR STUDENTS
                  </span>
                </h1>
              </div>

              {/* Subtitle */}
              <p className="text-sm text-gray-300 leading-relaxed px-4">
                Transform your room with our{" "}
                <span className="text-purple-400 font-semibold">premium poster collection</span>
                . From anime to sports - we've got your{" "}
                <span className="text-cyan-400 font-semibold">vibe covered!</span>
              </p>
            </div>

            {/* Mobile Poster Display */}
            <MobilePosterStack />

            {/* Mobile Features */}
            <div className="flex flex-wrap justify-center gap-2 px-4">
              <div className="flex items-center gap-2 bg-gray-800 border border-gray-700 px-3 py-2 rounded-full">
                <FaBolt className="text-yellow-400 text-xs" />
                <span className="text-white font-medium text-xs">Premium Quality</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-800 border border-gray-700 px-3 py-2 rounded-full">
                <FaRocket className="text-blue-400 text-xs" />
                <span className="text-white font-medium text-xs">Fast Delivery</span>
              </div>
            </div>

            {/* Mobile CTA Buttons */}
            <div className="flex flex-col gap-3 px-4">
              <button
                onClick={() => scrollToSection("posters-section")}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-bold hover:from-purple-700 hover:to-pink-700 transition-all duration-200"
              >
                <div className="flex items-center justify-center gap-2">
                  <FaShoppingCart />
                  <span>SHOP NOW</span>
                </div>
              </button>

              <button
                onClick={() => scrollToSection("collection-section")}
                className="border-2 border-purple-500 text-purple-400 px-8 py-4 rounded-xl font-semibold hover:bg-purple-500 hover:text-white transition-all duration-200"
              >
                <div className="flex items-center justify-center gap-2">
                  <FaHeart />
                  <span>VIEW COLLECTION</span>
                </div>
              </button>
            </div>

            {/* Mobile Stats */}
            <div className="grid grid-cols-2 gap-3 px-4">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div
                    key={index}
                    className="bg-gray-800 border border-gray-700 rounded-xl p-3 text-center"
                  >
                    <IconComponent className="text-base text-purple-400 mx-auto mb-1" />
                    <div className="text-lg font-bold text-white">{stat.number}</div>
                    <div className="text-xs text-gray-400">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          // DESKTOP LAYOUT - Keep existing grid layout
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
              {/* Main Headline */}
              <div className="space-y-2 sm:space-y-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
                  <span className="block text-white">POSTER</span>
                  <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    PARADISE
                  </span>
                  <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    FOR STUDENTS
                  </span>
                </h1>
              </div>

              {/* Subtitle */}
              <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Transform your room into a{" "}
                <span className="text-purple-400 font-semibold">creative sanctuary</span>{" "}
                with our
                <span className="text-pink-400 font-semibold"> premium poster collection</span>
                . From anime to sports, movies to music - we've got your{" "}
                <span className="text-cyan-400 font-semibold">vibe covered!</span>
              </p>

              {/* Features */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3">
                <div className="flex items-center gap-2 bg-gray-800 border border-gray-700 px-2 sm:px-3 py-1.5 sm:py-2 rounded-full">
                  <FaBolt className="text-yellow-400 text-xs sm:text-sm" />
                  <span className="text-white font-medium text-xs sm:text-sm">Premium Quality</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-800 border border-gray-700 px-2 sm:px-3 py-1.5 sm:py-2 rounded-full">
                  <FaRocket className="text-blue-400 text-xs sm:text-sm" />
                  <span className="text-white font-medium text-xs sm:text-sm">Fast Delivery</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-800 border border-gray-700 px-2 sm:px-3 py-1.5 sm:py-2 rounded-full">
                  <FaHeart className="text-red-400 text-xs sm:text-sm" />
                  <span className="text-white font-medium text-xs sm:text-sm">Student Approved</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto lg:mx-0">
                <button
                  onClick={() => scrollToSection("posters-section")}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 sm:px-8 py-3 rounded-xl font-bold hover:from-purple-700 hover:to-pink-700 transition-all duration-200 hover:scale-105"
                >
                  <div className="flex items-center justify-center gap-2">
                    <FaShoppingCart className="text-sm sm:text-base" />
                    <span className="text-sm sm:text-base">SHOP NOW</span>
                  </div>
                </button>

                <button
                  onClick={() => scrollToSection("collection-section")}
                  className="border-2 border-purple-500 text-purple-400 px-6 sm:px-8 py-3 rounded-xl font-semibold hover:bg-purple-500 hover:text-white transition-all duration-200 hover:scale-105"
                >
                  <div className="flex items-center justify-center gap-2">
                    <FaHeart className="text-sm sm:text-base" />
                    <span className="text-sm sm:text-base">VIEW COLLECTION</span>
                  </div>
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-lg mx-auto lg:mx-0">
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <div
                      key={index}
                      className="bg-gray-800 border border-gray-700 rounded-xl p-2 sm:p-3 text-center"
                    >
                      <IconComponent className="text-base sm:text-lg text-purple-400 mx-auto mb-1" />
                      <div className="text-lg sm:text-xl font-bold text-white">{stat.number}</div>
                      <div className="text-xs text-gray-400">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Side - Desktop Poster Display */}
            <DesktopPosterStack />
          </div>
        )}

        {/* Bottom Section - Social Proof */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 text-lg mb-6">
            Trusted by thousands of students across India
          </p>
          <div className={`flex ${isMobile ? 'flex-col gap-4' : 'flex-wrap justify-center items-center gap-6'}`}>
            <div className="flex items-center gap-2 justify-center">
              <div className="flex -space-x-1">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 bg-purple-500 rounded-full border-2 border-gray-800 flex items-center justify-center text-white font-bold text-xs"
                  >
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
              <span className="text-gray-300 ml-2">50,000+ Happy Customers</span>
            </div>

            <div className="flex items-center gap-2 justify-center">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>
              <span className="text-gray-300">4.9/5 Rating</span>
            </div>

            <div className="flex items-center gap-2 justify-center">
              <FaThumbsUp className="text-green-400" />
              <span className="text-gray-300">99% Satisfaction Rate</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

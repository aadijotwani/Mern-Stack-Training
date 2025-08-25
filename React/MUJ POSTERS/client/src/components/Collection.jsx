import { useEffect, useRef, useState } from "react";
import "./CircularGallery.css";

// Optimized collection with CSS-based carousel instead of heavy WebGL
function debounce(func, wait) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

// Optimized Collection Component - CSS-based with infinite scroll
export default function Collection({
  items,
  textColor = "#ffffff",
  scrollSpeed = 1,
}) {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true); // Re-enabled auto-scroll
  const autoScrollRef = useRef(null);

  const defaultItems = [
    { image: `https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop&crop=entropy&cs=tinysrgb`, text: "FOOD POSTERS" },
    { image: `https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=entropy&cs=tinysrgb`, text: "GYM POSTERS" },
    { image: `https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=400&h=300&fit=crop&crop=entropy&cs=tinysrgb`, text: "SUPERHERO POSTERS" },
    { image: `https://images.unsplash.com/photo-1489599440047-bf0c75b5e613?w=400&h=300&fit=crop&crop=entropy&cs=tinysrgb`, text: "MOVIE POSTERS" },
    { image: `https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop&crop=entropy&cs=tinysrgb`, text: "FORMULA 1 POSTERS" },
    { image: `https://images.unsplash.com/photo-1432821596592-e2c18b78144f?w=400&h=300&fit=crop&crop=entropy&cs=tinysrgb`, text: "QUOTES POSTERS" },
    { image: `https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop&crop=entropy&cs=tinysrgb`, text: "MUSIC POSTERS" },
    { image: `https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=300&fit=crop&crop=entropy&cs=tinysrgb`, text: "SERIES POSTERS" },
    { image: `https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop&crop=entropy&cs=tinysrgb`, text: "FOUNDATION POSTERS" },
    { image: `https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=300&fit=crop&crop=entropy&cs=tinysrgb`, text: "SPACE POSTERS" },
  ];

  const galleryItems = items && items.length ? items : defaultItems;

  // Auto-scroll functionality
  const startAutoScroll = () => {
    if (autoScrollRef.current) clearInterval(autoScrollRef.current);
    
    autoScrollRef.current = setInterval(() => {
      if (containerRef.current && isAutoScrolling && !isDragging) {
        const container = containerRef.current;
        const scrollAmount = 1; // Pixels per frame for smooth scrolling
        
        container.scrollLeft += scrollAmount;
        
        // Check for infinite loop reset
        const maxScroll = container.scrollWidth / 2; // Half because we duplicate items
        if (container.scrollLeft >= maxScroll) {
          container.scrollLeft = 0; // Reset to beginning for seamless loop
        }
      }
    }, 16); // ~60fps for smooth animation
  };

  const stopAutoScroll = () => {
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
      autoScrollRef.current = null;
    }
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setIsAutoScrolling(false);
    stopAutoScroll();
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
    containerRef.current.style.cursor = 'grabbing';
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * scrollSpeed;
    const newScrollLeft = scrollLeft - walk;
    
    containerRef.current.scrollLeft = newScrollLeft;
    
    // Handle infinite scroll during drag
    const container = containerRef.current;
    const maxScroll = container.scrollWidth / 2;
    
    if (container.scrollLeft >= maxScroll) {
      container.scrollLeft = 0;
      setScrollLeft(0);
    } else if (container.scrollLeft <= 0) {
      container.scrollLeft = maxScroll - 1;
      setScrollLeft(maxScroll - 1);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    containerRef.current.style.cursor = 'grab';
    
    // Resume auto-scroll after a brief delay
    setTimeout(() => {
      setIsAutoScrolling(true);
      startAutoScroll();
    }, 2000); // 2 second delay before resuming auto-scroll
  };

  const handleWheel = debounce((e) => {
    e.preventDefault();
    setIsAutoScrolling(false);
    stopAutoScroll();
    
    const container = containerRef.current;
    container.scrollLeft += e.deltaY;
    
    // Handle infinite scroll during wheel
    const maxScroll = container.scrollWidth / 2;
    
    if (container.scrollLeft >= maxScroll) {
      container.scrollLeft = 0;
    } else if (container.scrollLeft <= 0) {
      container.scrollLeft = maxScroll - 1;
    }
    
    // Resume auto-scroll after wheel stops
    setTimeout(() => {
      setIsAutoScrolling(true);
      startAutoScroll();
    }, 3000); // 3 second delay after wheel stops
  }, 10);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Start auto-scroll on mount
    startAutoScroll();

    // Add optimized event listeners
    container.addEventListener('mousedown', handleMouseDown, { passive: false });
    container.addEventListener('mousemove', handleMouseMove, { passive: false });
    container.addEventListener('mouseup', handleMouseUp, { passive: true });
    container.addEventListener('mouseleave', handleMouseUp, { passive: true });
    container.addEventListener('wheel', handleWheel, { passive: false });

    // Pause auto-scroll on hover
    const handleMouseEnter = () => {
      setIsAutoScrolling(false);
      stopAutoScroll();
    };
    
    const handleMouseLeave = () => {
      if (!isDragging) {
        setTimeout(() => {
          setIsAutoScrolling(true);
          startAutoScroll();
        }, 1000);
      }
    };

    container.addEventListener('mouseenter', handleMouseEnter, { passive: true });
    container.addEventListener('mouseleave', handleMouseLeave, { passive: true });

    // Touch events for mobile
    const handleTouchStart = (e) => {
      setIsDragging(true);
      setIsAutoScrolling(false);
      stopAutoScroll();
      setStartX(e.touches[0].pageX - container.offsetLeft);
      setScrollLeft(container.scrollLeft);
    };

    const handleTouchMove = (e) => {
      if (!isDragging) return;
      const x = e.touches[0].pageX - container.offsetLeft;
      const walk = (x - startX) * scrollSpeed;
      const newScrollLeft = scrollLeft - walk;
      
      container.scrollLeft = newScrollLeft;
      
      // Handle infinite scroll during touch
      const maxScroll = container.scrollWidth / 2;
      
      if (container.scrollLeft >= maxScroll) {
        container.scrollLeft = 0;
        setScrollLeft(0);
      } else if (container.scrollLeft <= 0) {
        container.scrollLeft = maxScroll - 1;
        setScrollLeft(maxScroll - 1);
      }
    };

    const handleTouchEnd = () => {
      setIsDragging(false);
      setTimeout(() => {
        setIsAutoScrolling(true);
        startAutoScroll();
      }, 2000);
    };

    container.addEventListener('touchstart', handleTouchStart, { passive: true });
    container.addEventListener('touchmove', handleTouchMove, { passive: true });
    container.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      stopAutoScroll();
      container.removeEventListener('mousedown', handleMouseDown);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseup', handleMouseUp);
      container.removeEventListener('mouseleave', handleMouseUp);
      container.removeEventListener('wheel', handleWheel);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
      container.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDragging, startX, scrollLeft, scrollSpeed, isAutoScrolling]);

  return (
    <section id="collection-section" className="collection-section">
      <div className="collection-header">
        <h2 className="collection-title">COLLECTIONS</h2>
        <p className="collection-subtitle">Explore our curated poster collections</p>
      </div>
      <div className="optimized-gallery" ref={containerRef}>
        <div className="gallery-track" ref={trackRef}>
          {/* First set of items */}
          {galleryItems.map((item, index) => (
            <div key={`first-${index}`} className="gallery-item">
              <div className="gallery-card">
                <div className="image-container">
                  <img 
                    src={item.image} 
                    alt={item.text} 
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop&crop=entropy&cs=tinysrgb';
                    }}
                  />
                  <div className="image-overlay"></div>
                </div>
                <div className="gallery-text" style={{ color: textColor }}>
                  {item.text}
                </div>
              </div>
            </div>
          ))}
          {/* Second set of items for infinite loop */}
          {galleryItems.map((item, index) => (
            <div key={`second-${index}`} className="gallery-item">
              <div className="gallery-card">
                <div className="image-container">
                  <img 
                    src={item.image} 
                    alt={item.text} 
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop&crop=entropy&cs=tinysrgb';
                    }}
                  />
                  <div className="image-overlay"></div>
                </div>
                <div className="gallery-text" style={{ color: textColor }}>
                  {item.text}
                </div>
              </div>
            </div>
          ))}
          {/* Third set for extra smooth infinite scroll */}
          {galleryItems.map((item, index) => (
            <div key={`third-${index}`} className="gallery-item">
              <div className="gallery-card">
                <div className="image-container">
                  <img 
                    src={item.image} 
                    alt={item.text} 
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop&crop=entropy&cs=tinysrgb';
                    }}
                  />
                  <div className="image-overlay"></div>
                </div>
                <div className="gallery-text" style={{ color: textColor }}>
                  {item.text}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="gallery-hint">
        {isAutoScrolling ? "Auto-scrolling • Hover to pause" : "← Drag to explore →"}
      </div>
    </section>
  );
}
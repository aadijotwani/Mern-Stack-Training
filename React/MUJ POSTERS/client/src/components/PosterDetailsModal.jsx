import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

const PosterDetailsModal = ({ poster, isOpen, onClose, onAddToCart }) => {
  const modalRef = useRef(null);
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [wasOpenedByUser, setWasOpenedByUser] = useState(false);

  // Track if page has fully loaded to prevent unwanted scrolling
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPageLoaded(true);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  // Store scroll position when modal opens (only if page is loaded and opened by user)
  useEffect(() => {
    if (isOpen && isPageLoaded) {
      setScrollPosition(window.pageYOffset);
      setWasOpenedByUser(true);
    } else if (!isOpen && wasOpenedByUser && isPageLoaded) {
      // Restore scroll position when modal closes (only if it was opened by user interaction)
      setTimeout(() => {
        window.scrollTo({
          top: scrollPosition,
          behavior: 'smooth'
        });
        setWasOpenedByUser(false); // Reset flag
      }, 150);
    }
  }, [isOpen, isPageLoaded, scrollPosition, wasOpenedByUser]);

  // Handle scroll behavior when modal opens/closes  
  useEffect(() => {
    if (isOpen) {
      // Disable page scroll
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      
      // Only scroll to modal if it was opened by user interaction (not during page load)
      if (isPageLoaded) {
        setTimeout(() => {
          if (modalRef.current) {
            modalRef.current.scrollIntoView({ 
              behavior: 'smooth', 
              block: 'center',
              inline: 'center'
            });
          }
        }, 100);
      }
    } else {
      // Re-enable page scroll
      document.body.style.overflow = 'unset';
      document.body.style.position = 'unset';
      document.body.style.width = 'unset';
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.position = 'unset';
      document.body.style.width = 'unset';
    };
  }, [isOpen, isPageLoaded]);

  if (!isOpen) return null;

  const modalContent = (
    <div 
      ref={modalRef}
      className="fixed inset-0 z-[10005] flex items-center justify-center p-4"
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      {/* Modal Content */}
      <div className="relative bg-gray-900 border border-gray-700 w-full max-w-4xl max-h-[95vh] shadow-2xl rounded-2xl overflow-hidden z-10">
        <div className="flex flex-col md:flex-row h-full max-h-[95vh]">
          
          {/* Image Section */}
          <div className="flex-1 p-6 flex items-center justify-center bg-gray-800/30 select-none">
            <div className="relative max-w-full max-h-full select-none">
              <img
                src={poster.img}
                alt={poster.title}
                className="w-full h-auto max-h-[70vh] object-contain rounded-xl shadow-2xl select-none"
                onContextMenu={(e) => e.preventDefault()} // Disable right-click
                onDragStart={(e) => e.preventDefault()} // Disable drag
                draggable={false} // Disable dragging
                style={{ userSelect: 'none', pointerEvents: 'none' }}
              />
              {/* Protection Overlay - Invisible but blocks interaction */}
              <div 
                className="absolute inset-0 z-10 select-none"
                onContextMenu={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
                style={{ userSelect: 'none' }}
              ></div>
              <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm px-3 py-1 rounded-full font-bold z-20">
                HD Quality
              </div>
            </div>
          </div>
          
          {/* Details Section */}
          <div className="w-full md:w-80 bg-gray-900 flex flex-col">
            {/* Header */}
            <div className="p-6 border-b border-gray-700">
              <div className="flex items-start justify-between mb-4">
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  {poster.title}
                </h2>
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-white p-2 hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Price:</span>
                  <span className="text-3xl font-bold text-green-400">₹{poster.price}</span>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-400 block">Size:</span>
                    <span className="text-white font-medium">A3 (297×420mm)</span>
                  </div>
                  <div>
                    <span className="text-gray-400 block">Material:</span>
                    <span className="text-white font-medium">Premium Paper</span>
                  </div>
                  <div>
                    <span className="text-gray-400 block">Finish:</span>
                    <span className="text-white font-medium">Matte/Glossy</span>
                  </div>
                  <div>
                    <span className="text-gray-400 block">Quality:</span>
                    <span className="text-white font-medium">HD Print</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Description */}
            <div className="p-6 border-b border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-3">Description</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                This high-quality poster features stunning artwork with vibrant colors and sharp details. 
                Perfect for decorating your room, office, or any space that needs a touch of personality. 
                Printed on premium paper with fade-resistant inks for long-lasting beauty.
              </p>
              
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="bg-purple-600/20 text-purple-300 px-2 py-1 rounded-full text-xs">Premium Quality</span>
                <span className="bg-green-600/20 text-green-300 px-2 py-1 rounded-full text-xs">Fast Delivery</span>
                <span className="bg-blue-600/20 text-blue-300 px-2 py-1 rounded-full text-xs">HD Print</span>
              </div>
            </div>
            
            {/* Action Section */}
            <div className="p-6 mt-auto">
              <button
                onClick={() => {
                  onAddToCart();
                  onClose();
                }}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 mb-3"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6h11" />
                </svg>
                Add to Cart
              </button>
              
              <button
                onClick={onClose}
                className="w-full bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};

export default PosterDetailsModal;

import React, { useState } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { useToast } from '../context/ToastContext';
import { useCart } from '../context/CartContext';
import PosterDetailsModal from './PosterDetailsModal';

const PosterCard = ({ poster, quantities, handleQuantityChange, resetQuantity }) => {
  const [ref, isIntersecting, hasIntersected] = useIntersectionObserver();
  const { showToast } = useToast();
  const { addToCart } = useCart();
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  
  const qty = quantities[poster.id] || 1;

  const handleAddToCart = () => {
    addToCart(poster, qty);
    showToast(`Added ${poster.title} (×${qty}) to cart!`, 'success');
    resetQuantity(poster.id);
  };

  const handleViewDetails = () => {
    setIsDetailsModalOpen(true);
  };

  return (
    <div 
      ref={ref}
      className={`bg-gray-800/20 border border-gray-700/50 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-purple-500/20 p-3 sm:p-4 flex flex-col items-center hover:scale-[1.02] transition-all duration-700 group transform ${
        hasIntersected 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10'
      }`}
      style={{
        transitionDelay: `${(poster.id - 1) * 100}ms` // Stagger animation
      }}
    >
      {/* Poster Image */}
      <div className="relative w-full h-40 sm:h-48 lg:h-52 mb-3 sm:mb-4 flex items-center justify-center overflow-hidden group/image select-none">
        <img
          src={poster.img}
          alt={poster.title}
          className="w-full h-full object-cover rounded-lg sm:rounded-xl shadow-md group-hover:brightness-105 transition-all duration-200 cursor-pointer select-none"
          loading="lazy"
          onClick={handleViewDetails}
          onContextMenu={(e) => e.preventDefault()} // Disable right-click
          onDragStart={(e) => e.preventDefault()} // Disable drag
          draggable={false} // Disable dragging
          style={{ userSelect: 'none', pointerEvents: 'auto' }}
        />
        {/* Protection Overlay - Invisible but blocks interaction */}
        <div 
          className="absolute inset-0 z-10 select-none"
          onContextMenu={(e) => e.preventDefault()}
          onDragStart={(e) => e.preventDefault()}
          style={{ userSelect: 'none' }}
        ></div>
        {/* View Details Overlay */}
        <div 
          className="absolute inset-0 bg-black/40 opacity-0 group-hover/image:opacity-100 transition-opacity duration-200 flex items-center justify-center cursor-pointer rounded-lg sm:rounded-xl z-20"
          onClick={handleViewDetails}
          onContextMenu={(e) => e.preventDefault()}
        >
          <div className="bg-white/90 text-gray-900 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-semibold text-xs sm:text-sm flex items-center gap-2 transform scale-90 group-hover/image:scale-100 transition-transform duration-200">
            <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            <span className="hidden sm:inline">View Details</span>
            <span className="sm:hidden">View</span>
          </div>
        </div>
        <span className="absolute top-2 sm:top-3 left-2 sm:left-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full font-bold">
          New
        </span>
      </div>

      {/* Poster Title and Price */}
      <div className="text-center mb-3">
        <h2 className="text-base sm:text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-1 line-clamp-2">
          {poster.title}
        </h2>
        <p className="text-xl sm:text-2xl font-bold text-green-400">₹{poster.price}</p>
      </div>

      {/* Quantity Selector */}
      <div className="flex items-center gap-1 bg-gray-700/30 border border-gray-600/50 rounded-lg sm:rounded-xl px-2 py-1 mb-3 shadow-md">
        <button
          type="button"
          onClick={() => handleQuantityChange(poster.id, -1)}
          className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-lg text-gray-300 font-bold hover:bg-gray-600/50 hover:text-white transition-colors duration-200 active:scale-95"
          aria-label="Decrease quantity"
        >
          <svg width="16" height="16" className="sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none">
            <rect x="6" y="11" width="12" height="2" rx="1" fill="currentColor"/>
          </svg>
        </button>
        <span className="mx-1 sm:mx-2 text-base sm:text-lg font-bold text-white bg-gray-600/20 border border-gray-500/50 rounded-lg px-2 sm:px-3 py-1">
          {qty}
        </span>
        <button
          type="button"
          onClick={() => handleQuantityChange(poster.id, 1)}
          className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center text-gray-300 font-bold hover:bg-gray-600/50 hover:text-white transition-colors duration-200 active:scale-95"
          aria-label="Increase quantity"
        >
          <svg width="16" height="16" className="sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none">
            <rect x="11" y="6" width="2" height="12" rx="1" fill="currentColor"/>
            <rect x="6" y="11" width="12" height="2" rx="1" fill="currentColor"/>
          </svg>
        </button>
      </div>

      {/* Action Buttons */}
      <div className="w-full space-y-2">
        {/* View Details Button */}
        <button
          onClick={handleViewDetails}
          className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-2 sm:py-2.5 px-3 sm:px-4 rounded-lg sm:rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/25 transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 text-sm sm:text-base"
        >
          <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
          <span className="hidden sm:inline">View Details</span>
          <span className="sm:hidden">Details</span>
        </button>
        
        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg sm:rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 text-sm sm:text-base"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6h11" />
          </svg>
          Add to Cart
        </button>
      </div>

      {/* Poster Details Modal */}
      <PosterDetailsModal 
        poster={poster}
        isOpen={isDetailsModalOpen}
        onClose={() => setIsDetailsModalOpen(false)}
        onAddToCart={handleAddToCart}
      />
    </div>
  );
};

export default PosterCard;

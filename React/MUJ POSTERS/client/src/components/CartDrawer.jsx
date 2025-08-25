import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';
import HostelBlockDropdown from './HostelBlockDropdown';

const Cart = ({ isOpen, onClose }) => {
  const { items, removeFromCart, updateQuantity, clearCart, getCartTotal, generateWhatsAppMessage } = useCart();
  const { showToast } = useToast();
  const cartRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [wasOpenedByUser, setWasOpenedByUser] = useState(false);
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  
  // Hostel block selection state
  const [selectedBlock, setSelectedBlock] = useState('Select Hostel Block');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [roomNumber, setRoomNumber] = useState('');
  const dropdownRef = useRef(null);
  
  // Available hostel blocks
  const hostelBlocks = [
    'B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8', 'B9', 'B10',
    'G1', 'G2', 'G3', 'G4', 'G5', 'G6', 'G7', 'G8', 'G9', 'G10'
  ];

  // Track if page has fully loaded
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPageLoaded(true);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  // Store scroll position when cart opens and restore when it closes
  useEffect(() => {
    if (isOpen && isPageLoaded) {
      setScrollPosition(window.pageYOffset);
      setWasOpenedByUser(true);
    } else if (!isOpen && wasOpenedByUser && isPageLoaded) {
      // Restore scroll position when cart closes
      setTimeout(() => {
        window.scrollTo({
          top: scrollPosition,
          behavior: 'smooth'
        });
        setWasOpenedByUser(false);
      }, 150);
    }
  }, [isOpen, isPageLoaded, scrollPosition, wasOpenedByUser]);

  // Handle clicking outside dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  // Check if order form is complete
  const isOrderFormComplete = selectedBlock !== 'Select Hostel Block' && roomNumber.trim().length > 0;

  // Handle scroll behavior when cart opens/closes
  useEffect(() => {
    if (isOpen) {
      // Disable page scroll
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      
      // Only scroll to cart if it was opened by user interaction (not during page load)
      if (isPageLoaded) {
        setTimeout(() => {
          if (cartRef.current) {
            cartRef.current.scrollIntoView({ 
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

  const handleWhatsAppOrder = () => {
    if (items.length === 0) {
      showToast('Your cart is empty!', 'error');
      return;
    }

    if (selectedBlock === 'Select Hostel Block') {
      showToast('Please select your hostel block for delivery!', 'error');
      return;
    }

    if (!roomNumber.trim()) {
      showToast('Please enter your room number!', 'error');
      return;
    }

    const message = generateWhatsAppMessage(selectedBlock, roomNumber.trim());
    // Replace with your actual WhatsApp number (include country code without +)
    // Example: For Indian number +91 98765 43210, use '919876543210'
    const phoneNumber = '919407293582'; // Updated WhatsApp number
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    
    window.open(whatsappUrl, '_blank');
    showToast('Redirecting to WhatsApp...', 'success');
  };

  if (!isOpen) return null;

  const modalContent = (
    <div 
      ref={cartRef}
      className="fixed inset-0 z-[10000] flex items-center justify-center p-2 sm:p-4"
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      {/* Cart Modal - Responsive sizing */}
      <div className="relative bg-gray-900 border border-gray-700 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl max-h-[95vh] sm:max-h-[90vh] shadow-2xl rounded-xl sm:rounded-2xl transform transition-all duration-300 ease-in-out z-10">
        <div className="flex flex-col h-full max-h-[95vh] sm:max-h-[90vh]">
          
          {/* Header */}
          <div className="bg-gray-900 border-b border-gray-700 p-3 sm:p-4 flex items-center justify-between rounded-t-xl sm:rounded-t-2xl">
            <h2 className="text-lg sm:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Cart ({items.length})
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white p-1.5 sm:p-2 hover:bg-gray-700 rounded-lg transition-colors"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Cart Content */}
          <div className="flex-1 overflow-y-auto p-3 sm:p-4 overflow-x-visible">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-8 sm:py-12">
                <div className="text-gray-400 mb-4">
                  <svg className="w-12 h-12 sm:w-16 sm:h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l-1 8H6L5 9z" />
                  </svg>
                </div>
                <p className="text-gray-400 text-center text-sm sm:text-base">Your cart is empty</p>
                <p className="text-gray-500 text-xs sm:text-sm text-center mt-2">Add some posters to get started!</p>
              </div>
            ) : (
              <div className="space-y-3 sm:space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="bg-gray-800/50 border border-gray-700 rounded-lg p-3 sm:p-4">
                    <div className="flex items-start gap-2 sm:gap-3">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded-lg flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="text-white font-medium text-xs sm:text-sm truncate">{item.title}</h3>
                        <p className="text-green-400 font-bold text-sm sm:text-base">₹{item.price}</p>
                        
                        {/* Quantity Controls */}
                        <div className="flex items-center gap-2 mt-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-6 h-6 flex items-center justify-center bg-gray-700 hover:bg-gray-600 text-white rounded text-sm transition-colors"
                          >
                            -
                          </button>
                          <span className="text-white font-medium px-1 sm:px-2 text-sm">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-6 h-6 flex items-center justify-center bg-gray-700 hover:bg-gray-600 text-white rounded text-sm transition-colors"
                          >
                            +
                          </button>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="ml-auto text-red-400 hover:text-red-300 transition-colors"
                            title="Remove item"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        </div>
                        
                        <div className="text-right text-xs sm:text-sm text-gray-400 mt-1">
                          Subtotal: <span className="text-green-400 font-medium">₹{item.price * item.quantity}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="bg-gray-900 border-t border-gray-700 p-3 sm:p-4 space-y-3">
              {/* Total */}
              <div className="flex justify-between items-center">
                <span className="text-lg sm:text-xl font-bold text-white">Total:</span>
                <span className="text-xl sm:text-2xl font-bold text-green-400">₹{getCartTotal()}</span>
              </div>
              
              {/* Delivery Information */}
              <div className="bg-gray-800 rounded-lg p-3 sm:p-4 border border-gray-700 relative overflow-visible">
                <h3 className="text-base sm:text-lg font-semibold text-white mb-3">📍 Delivery Information</h3>
                
                {/* Hostel Block Selection */}
                <div className={`transition-all duration-200 ${isDropdownOpen ? 'mb-40' : 'mb-3 sm:mb-4'}`}>
                  <HostelBlockDropdown
                    hostelBlocks={hostelBlocks}
                    selectedBlock={selectedBlock}
                    setSelectedBlock={setSelectedBlock}
                    isDropdownOpen={isDropdownOpen}
                    setIsDropdownOpen={setIsDropdownOpen}
                    dropdownRef={dropdownRef}
                  />
                </div>

                {/* Room Number Input */}
                <div className="space-y-2">
                  <label className="text-xs sm:text-sm font-semibold text-[#0ea5e9] block">
                    Room Number
                  </label>
                  <input
                    type="text"
                    value={roomNumber}
                    onChange={(e) => setRoomNumber(e.target.value)}
                    placeholder="Enter your room number (e.g., 101, 205)"
                    className="w-full bg-gray-100 hover:bg-gray-200 focus:bg-white transition-colors duration-200 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700 font-medium text-sm placeholder-gray-500"
                    maxLength="10"
                  />
                  {roomNumber.trim() && (
                    <div className="text-xs text-green-400 flex items-center gap-1">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Room number added
                    </div>
                  )}
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="space-y-2">
                <button
                  onClick={handleWhatsAppOrder}
                  disabled={!isOrderFormComplete}
                  className={`w-full font-semibold py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg transition-all duration-300 shadow-lg transform active:scale-[0.98] flex items-center justify-center gap-2 text-sm sm:text-base ${
                    isOrderFormComplete
                      ? 'bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white hover:shadow-green-500/25 hover:scale-[1.02] cursor-pointer'
                      : 'bg-gray-600 text-gray-400 cursor-not-allowed opacity-50'
                  }`}
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488z"/>
                  </svg>
                  <span className="hidden sm:inline">
                    {isOrderFormComplete ? 'Buy via WhatsApp' : 'Complete delivery info to order'}
                  </span>
                  <span className="sm:hidden">
                    {isOrderFormComplete ? 'Buy Now' : 'Complete Info'}
                  </span>
                </button>
                
                <button
                  onClick={() => {
                    clearCart();
                    showToast('Cart cleared successfully!', 'success');
                  }}
                  className="w-full bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 sm:py-2.5 px-3 sm:px-4 rounded-lg transition-all duration-300 text-sm sm:text-base"
                >
                  Clear Cart
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};

export default Cart;

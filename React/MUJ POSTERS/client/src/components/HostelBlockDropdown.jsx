import React from 'react';

const HostelBlockDropdown = ({ 
  hostelBlocks, 
  selectedBlock, 
  setSelectedBlock, 
  isDropdownOpen, 
  setIsDropdownOpen,
  dropdownRef 
}) => {
  // Separate blocks by gender
  const boyBlocks = hostelBlocks.filter(block => block.startsWith('B'));
  const girlBlocks = hostelBlocks.filter(block => block.startsWith('G'));

  // Function to determine block type and color
  const getBlockStyle = (block) => {
    const isBoyBlock = block.startsWith('B');
    const isGirlBlock = block.startsWith('G');
    
    if (selectedBlock === block) {
      // Selected state colors
      return isBoyBlock 
        ? 'bg-sky-200 text-sky-900 font-semibold' 
        : isGirlBlock 
        ? 'bg-pink-200 text-pink-900 font-semibold'
        : 'bg-blue-50 text-blue-700';
    } else {
      // Hover state colors
      return isBoyBlock 
        ? 'text-sky-800 hover:bg-sky-100' 
        : isGirlBlock 
        ? 'text-pink-800 hover:bg-pink-100'
        : 'text-gray-700 hover:bg-gray-50';
    }
  };

  return (
    <div className="w-full flex flex-col items-center transition-all duration-200">
      <label className="text-sm font-semibold text-[#0ea5e9] mb-2">
        Select Hostel Block
      </label>
      <div className="relative w-full" ref={dropdownRef} style={{ zIndex: isDropdownOpen ? 10001 : 1 }}>
        <button
          type="button"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="w-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200 px-4 py-2.5 rounded-lg border border-gray-300 flex items-center justify-between text-gray-700 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
        >
          <span>{selectedBlock}</span>
          <svg 
            className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        
        {isDropdownOpen && (
          <div 
            className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-xl z-[10001] overflow-hidden max-h-40 overflow-y-auto"
            style={{
              boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
            }}
          >
            {/* Boys Section */}
            <div className="bg-sky-50">
              <div className="px-3 py-1 bg-sky-100 border-b border-sky-200">
                <span className="text-sky-800 font-semibold text-xs flex items-center">
                  <span className="w-2 h-2 bg-sky-500 rounded-full mr-2"></span>
                  BOYS HOSTEL
                </span>
              </div>
              {boyBlocks.map((block) => (
                <button
                  key={block}
                  type="button"
                  onClick={() => {
                    setSelectedBlock(block);
                    setIsDropdownOpen(false);
                  }}
                  className={`w-full px-3 py-2 text-left transition-colors duration-150 font-medium border-b border-sky-100 last:border-b-0 text-sm bg-sky-50 ${getBlockStyle(block)}`}
                >
                  <span className="flex items-center">
                    <span className="w-2 h-2 bg-sky-400 rounded-full mr-2"></span>
                    {block}
                  </span>
                </button>
              ))}
            </div>
            
            {/* Girls Section */}
            <div className="bg-pink-50">
              <div className="px-3 py-1 bg-pink-100 border-b border-pink-200">
                <span className="text-pink-800 font-semibold text-xs flex items-center">
                  <span className="w-2 h-2 bg-pink-500 rounded-full mr-2"></span>
                  GIRLS HOSTEL
                </span>
              </div>
              {girlBlocks.map((block) => (
                <button
                  key={block}
                  type="button"
                  onClick={() => {
                    setSelectedBlock(block);
                    setIsDropdownOpen(false);
                  }}
                  className={`w-full px-3 py-2 text-left transition-colors duration-150 font-medium border-b border-pink-100 last:border-b-0 text-sm bg-pink-50 ${getBlockStyle(block)}`}
                >
                  <span className="flex items-center">
                    <span className="w-2 h-2 bg-pink-400 rounded-full mr-2"></span>
                    {block}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HostelBlockDropdown;

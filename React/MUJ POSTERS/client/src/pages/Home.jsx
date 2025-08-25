import React from "react";
import Hero from "../components/Hero";
import Collection from "../components/Collection";
import PosterCard from "../components/PosterCard";
import ScrollToTopButton from "../components/ScrollToTopButton";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const Home = () => {
  const [quantities, setQuantities] = React.useState({});
  const [headingRef, headingIntersecting, headingHasIntersected] = useIntersectionObserver();

  const handleQuantityChange = (id, delta) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(1, (prev[id] || 1) + delta),
    }));
  };

  const resetQuantity = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: 1,
    }));
  };

  const postersData = [
    {
      id: 1,
      title: "Minimal Art",
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
      price: 40
    },
    {
      id: 2,
      title: "Anime Vibes",
      img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
      price: 40
    },
    {
      id: 3,
      title: "Motivation",
      img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
      price: 40
    },
    {
      id: 4,
      title: "Pop Culture",
      img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80",
      price: 40
    },
    {
      id: 5,
      title: "Abstract",
      img: "https://images.unsplash.com/photo-1465101178521-c1a4c8a0a8b7?auto=format&fit=crop&w=400&q=80",
      price: 40
    },
    {
      id: 6,
      title: "Space Art",
      img: "https://images.unsplash.com/photo-1465101178521-c1a4c8a0a8b7?auto=format&fit=crop&w=400&q=80",
      price: 40
    },
  ];

  return (
    <>
      <ScrollToTopButton />
      
      <div className="flex flex-col gap-0">
        <Hero />
        <Collection />
        
        <div id="posters-section" className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex flex-col items-center py-10 px-4">
          {/* Posters Section Heading */}
          <div 
            ref={headingRef}
            id="posters-heading" 
            className={`text-center mb-12 transform transition-all duration-1000 ${
              headingHasIntersected 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-16'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 mb-4">
              Choose Your Perfect Poster
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Browse our collection of stunning poster designs. Select your favorite, customize the quantity, and get ready to decorate your space!
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 w-full max-w-7xl">
            {postersData.map((poster) => (
              <PosterCard 
                key={poster.id}
                poster={poster}
                quantities={quantities}
                handleQuantityChange={handleQuantityChange}
                resetQuantity={resetQuantity}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

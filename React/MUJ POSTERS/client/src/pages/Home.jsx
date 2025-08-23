import React from "react";
import Hero from "../components/Hero";

const Home = () => {
  const phone = "919407293582"; // your WhatsApp number

const [quantities, setQuantities] = React.useState({});

const handleQuantityChange = (id, delta) => {
    setQuantities((prev) => ({
        ...prev,
        [id]: Math.max(1, (prev[id] || 1) + delta),
    }));
};

return (
    <>
        <div className="flex flex-col gap-10">
            <Hero />
            <div className="min-h-screen bg-white flex flex-col items-center py-10 px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 w-full max-w-7xl">
                    {[
                        {
                            id: 1,
                            title: "Minimal Art",
                            img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
                        },
                        {
                            id: 2,
                            title: "Anime Vibes",
                            img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
                        },
                        {
                            id: 3,
                            title: "Motivation",
                            img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
                        },
                        {
                            id: 4,
                            title: "Pop Culture",
                            img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80",
                        },
                        {
                            id: 5,
                            title: "Abstract",
                            img: "https://images.unsplash.com/photo-1465101178521-c1a4c8a0a8b7?auto=format&fit=crop&w=400&q=80",
                        },
                        {
                            id: 6,
                            title: "Abstract",
                            img: "https://images.unsplash.com/photo-1465101178521-c1a4c8a0a8b7?auto=format&fit=crop&w=400&q=80",
                        },
                    ].map((poster) => {
                        const qty = quantities[poster.id] || 1;
                        const message = `Hi! I want to buy ${qty} "${poster.title}" poster(s). Here is the design: ${poster.img}`;
                        const waLink = `https://wa.me/${phone}?text=${encodeURIComponent(
                            message
                        )}`;

                        return (
                            <div
                                key={poster.id}
                                className="bg-white rounded-3xl shadow-2xl p-5 flex flex-col items-center hover:scale-105 hover:shadow-3xl transition-all duration-300 border border-[#38bdf8]/20 group"
                            >
                                <div className="relative w-full h-52 mb-4 flex items-center justify-center overflow-hidden">
                                    <img
                                        src={poster.img}
                                        alt={poster.title}
                                        className="w-full h-full object-cover rounded-2xl shadow-lg group-hover:brightness-90 transition-all duration-300"
                                    />
                                    <span className="absolute top-3 left-3 bg-[#38bdf8] text-white text-xs px-3 py-1 rounded-full font-bold shadow-md animate-pulse">
                                        New
                                    </span>
                                </div>
                                <h2 className="text-xl font-bold text-[#0ea5e9] mb-2 tracking-tight text-center">
                                    {poster.title}
                                </h2>
                                {/* Quantity selector */}
                                <div className="flex items-center gap-3 bg-green-100 rounded-2xl px-1 py-1 mb-3 shadow-md">
                                    <button
                                        type="button"
                                        onClick={() => handleQuantityChange(poster.id, -1)}
                                        className="w-10 h-10 flex items-center justify-center rounded-2x text-white text-2xl font-bold  hover:bg-sky-200 transition-all duration-200 focus:outline-none active:scale-95"
                                        aria-label="Decrease quantity"
                                    >
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <rect x="6" y="11" width="16" height="3" rx="1" fill="black"/>
                                        </svg>
                                    </button>
                                    <span className="mx-2 text-xl font-bold text-[#0ea5e9] bg-white rounded-2xl px-3 py-1 shadow-lg border border-[#38bdf8]/20">
                                        {qty}
                                    </span>
                                    <button
                                        type="button"
                                        onClick={() => handleQuantityChange(poster.id, 1)}
                                        className="w-10 h-10 flex items-center justify-center text-white text-2xl font-bold hover:bg-[#e0f2fe] hover:border-[#0ea5e9] transition-all duration-200 focus:outline-none active:scale-95"
                                        aria-label="Increase quantity"
                                    >
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <rect x="11" y="4.5" width="3" height="16" rx="1" fill="black"/>
                                            <rect x="4.5" y="11" width="16" height="3" rx="1" fill="black"/>
                                        </svg>
                                    </button>
                                </div>
                                <a
                                    href={waLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-3 px-6 py-2 bg-gradient-to-r from-[#25d366] to-[#128c7e] text-white rounded-xl font-bold shadow-md hover:scale-110 hover:shadow-lg transition-all duration-300"
                                >
                                    Buy on WhatsApp
                                </a>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    </>
);
};

export default Home;

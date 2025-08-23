import { FaRegSmileBeam, FaRegLightbulb, FaRegStar } from "react-icons/fa";

const Hero = () => {
    return (
        <section className="min-h-[91vh] flex flex-col items-center justify-center bg-gradient-to-b from-blue-100 via-teal-100 to-white px-4 relative overflow-hidden">
            {/* Minimalistic Decorative shapes */}
            <div className="absolute top-0 left-0 w-20 h-20 bg-blue-200 rounded-full opacity-20 blur-xl"></div>
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-green-200 rounded-full opacity-20 blur-xl"></div>
            {/* Subtle grid lines for minimalistic background using Tailwind */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="w-full h-full bg-[linear-gradient(to_right,#c7e6e6_0.5px,transparent_1px),linear-gradient(to_bottom,#c7e6e6_0.5px,transparent_1px)] bg-[size:40px_40px] min-h-[100vh]"></div>
            </div>
            {/* Poster designs on sides (no overlap) */}
            <div className="absolute left-6 top-1/2 -translate-y-1/2 z-10 hidden md:flex flex-col gap-8">
                {/* Poster 1 */}
                <div className="w-52 h-72 rounded-2xl shadow-xl overflow-hidden bg-white flex flex-col border border-gray-200 hover:scale-105 transition-transform duration-300 -rotate-3 relative z-20">
                    <img
                        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=300&q=80"
                        alt="Food Truck Fest Poster"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute top-0 left-0 w-full h-1/3 flex items-center justify-center bg-gradient-to-r from-yellow-200 to-orange-100 bg-opacity-60">
                        <span className="text-2xl font-bold text-yellow-700 drop-shadow-lg">Food Truck Fest</span>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full flex flex-col items-center justify-center px-4 py-2 bg-white bg-opacity-80">
                        <span className="text-lg font-semibold text-gray-700 mb-1">07.05.21</span>
                        <span className="text-sm text-gray-500">Live Music | Games | Food</span>
                        <span className="mt-2 text-xs text-gray-400">Central Park</span>
                    </div>
                </div>
                {/* Poster 2 */}
                <div className="w-52 h-72 rounded-2xl shadow-xl overflow-hidden bg-white flex flex-col border border-gray-200 hover:scale-105 transition-transform duration-300 rotate-3 relative z-10">
                    <img
                        src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=300&q=80"
                        alt="Summer Calling Poster"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute top-0 left-0 w-full h-1/3 flex items-center justify-center bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200 bg-opacity-60">
                        <span className="text-2xl font-bold text-purple-700 drop-shadow-lg">Summer Calling</span>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full flex flex-col items-center justify-center px-4 py-2 bg-white bg-opacity-80">
                        <span className="text-lg font-semibold text-gray-700 mb-1">DJ Alex | 31 July</span>
                        <span className="text-sm text-gray-500">Party | Free Parking</span>
                        <span className="mt-2 text-xs text-gray-400">Your Place Name</span>
                    </div>
                </div>
            </div>
            <div className="absolute right-6 top-1/2 -translate-y-1/2 z-10 hidden md:flex flex-col gap-8">
                {/* Poster 3 */}
                <div className="w-52 h-72 rounded-2xl shadow-xl overflow-hidden bg-white flex flex-col border border-gray-200 hover:scale-105 transition-transform duration-300 rotate-3 relative z-20">
                    <img
                        src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=300&q=80"
                        alt="Art Expo Poster"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute top-0 left-0 w-full h-1/3 flex items-center justify-center bg-gradient-to-r from-green-200 to-teal-100 bg-opacity-60">
                        <span className="text-2xl font-bold text-green-700 drop-shadow-lg">Art Expo</span>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full flex flex-col items-center justify-center px-4 py-2 bg-white bg-opacity-80">
                        <span className="text-lg font-semibold text-gray-700 mb-1">15.08.21</span>
                        <span className="text-sm text-gray-500">Gallery | Workshops</span>
                        <span className="mt-2 text-xs text-gray-400">Art Center</span>
                    </div>
                </div>
                {/* Poster 4 */}
                <div className="w-52 h-72 rounded-2xl shadow-xl overflow-hidden bg-white flex flex-col border border-gray-200 hover:scale-105 transition-transform duration-300 -rotate-3 relative z-10 -mr-12">
                    <img
                        src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=300&q=80"
                        alt="Tech Meetup Poster"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute top-0 left-0 w-full h-1/3 flex items-center justify-center bg-gradient-to-r from-blue-200 via-cyan-200 to-teal-200 bg-opacity-60">
                        <span className="text-2xl font-bold text-blue-700 drop-shadow-lg">Tech Meetup</span>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full flex flex-col items-center justify-center px-4 py-2 bg-white bg-opacity-80">
                        <span className="text-lg font-semibold text-gray-700 mb-1">22.09.21</span>
                        <span className="text-sm text-gray-500">Talks | Networking</span>
                        <span className="mt-2 text-xs text-gray-400">Innovation Hub</span>
                    </div>
                </div>
            </div>
            <div className="text-center max-w-3xl mx-auto z-10 relative mt-10">
                <h1 className="text-5xl md:text-7xl font-extrabold mb-8 text-blue-700 drop-shadow-lg">
                    Free AI Poster Maker for Effortless Promotion
                </h1>
                <p className="text-2xl md:text-3xl text-teal-700 mb-12 font-medium">
                    Posters that pop! 1,157,460+ poster templates for you to customise.<br />
                    Print, effortlessly promote on socials or run campaigns.
                </p>
                <a
                    href="#create"
                    className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 via-teal-500 to-green-500 text-white px-12 py-5 rounded-full font-bold text-xl md:text-2xl shadow-xl hover:scale-105 transition-transform duration-300"
                >
                    <FaRegStar className="text-yellow-400" size={32} />
                    Create your free poster
                </a>
                <div className="flex items-center justify-center mt-6 gap-3">
                    <span className="text-yellow-500 text-2xl">★ ★ ★ ★ ★</span>
                    <span className="text-gray-700 font-medium text-lg">4.9 / 5 (413)</span>
                </div>
            </div>
            {/* Steps Section */}
            <div className="flex items-center justify-center gap-10 mt-12 z-10 relative">
                {/* Step 1 */}
                <div className="flex flex-col items-center">
                    <div className="bg-blue-500 text-white rounded-full w-20 h-20 flex items-center justify-center text-4xl font-bold shadow-lg mb-3">
                        <FaRegSmileBeam size={40} />
                    </div>
                    <span className="text-xl font-semibold text-blue-700">Select Your Poster</span>
                </div>
                {/* Arrow */}
                <div className="hidden md:block text-5xl text-teal-400">
                    →
                </div>
                {/* Step 2 */}
                <div className="flex flex-col items-center">
                    <div className="bg-teal-500 text-white rounded-full w-20 h-20 flex items-center justify-center text-4xl font-bold shadow-lg mb-3">
                        <FaRegLightbulb size={40} />
                    </div>
                    <span className="text-xl font-semibold text-teal-700">Enter Quantity & Room Details</span>
                </div>
                {/* Arrow */}
                <div className="hidden md:block text-5xl text-green-400">
                    →
                </div>
                {/* Step 3 */}
                <div className="flex flex-col items-center">
                    <div className="bg-green-500 text-white rounded-full w-20 h-20 flex items-center justify-center text-4xl font-bold shadow-lg mb-3">
                        <FaRegStar size={40} />
                    </div>
                    <span className="text-xl font-semibold text-green-700">Proceed to Payment</span>
                </div>
            </div>
        </section>
    );
};

export default Hero;

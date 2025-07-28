import React from 'react';
import Hero from './Hero';
import { Link } from 'react-router-dom';

const Home = () => {
  const features = [
    {
      icon: "💬",
      title: "Instant Messaging",
      description: "Send and receive messages in real-time with lightning-fast delivery."
    },
    {
      icon: "🔒",
      title: "End-to-End Encryption",
      description: "Your conversations are secured with industry-standard encryption."
    },
    {
      icon: "👥",
      title: "Group Conversations",
      description: "Create group chats and collaborate with multiple people at once."
    },
    {
      icon: "📱",
      title: "Multi-Platform",
      description: "Access your chats from any device, anywhere, anytime."
    }
  ];

  return (
    <div className="min-h-screen bg-base-100">
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <div className="py-20 px-4 bg-base-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-base-content mb-4">Why Choose ChatKaro?</h2>
            <p className="text-lg text-base-content opacity-70 max-w-2xl mx-auto">
              Experience the next generation of communication with our powerful and intuitive chat platform.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-base-content mb-3">{feature.title}</h3>
                <p className="text-base-content opacity-70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-base-200">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-base-content mb-6">Ready to Start Chatting?</h2>
          <p className="text-lg text-base-content opacity-80 mb-8">
            Join thousands of users who are already using ChatKaro to stay connected with their friends and colleagues.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/signup" className="btn btn-primary btn-lg">
              Get Started Free
            </Link>
            <Link to="/login" className="btn btn-outline btn-lg">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
import React from 'react';

const About = () => {
  const features = [
    {
      icon: "💬",
      title: "Real-time Messaging",
      description: "Send and receive messages instantly with our fast and reliable chat system."
    },
    {
      icon: "🔒",
      title: "Secure & Private",
      description: "Your conversations are encrypted and protected with enterprise-grade security."
    },
    {
      icon: "👥",
      title: "Group Chats",
      description: "Create group conversations with friends, family, or team members."
    },
    {
      icon: "📱",
      title: "Cross-Platform",
      description: "Access your chats from any device - desktop, tablet, or mobile."
    },
    {
      icon: "🎨",
      title: "Customizable",
      description: "Personalize your chat experience with themes and custom settings."
    },
    {
      icon: "⚡",
      title: "Lightning Fast",
      description: "Built with modern technology for optimal performance and speed."
    }
  ];

  return (
    <div className="min-h-screen bg-base-100">
      {/* Hero Section */}
      <div className="hero py-20 bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold text-primary mb-6">About ChatKaro</h1>
            <p className="text-xl text-base-content opacity-80">
              A modern, secure, and user-friendly chat application designed to bring people together 
              through seamless communication.
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-base-content mb-4">Why Choose ChatKaro?</h2>
            <p className="text-lg text-base-content opacity-70">
              Discover the features that make ChatKaro the perfect choice for your communication needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card bg-base-200 shadow-xl hover:shadow-2xl transition-shadow">
                <div className="card-body text-center">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="card-title justify-center text-xl mb-3">{feature.title}</h3>
                  <p className="text-base-content opacity-70">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-20 bg-base-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-base-content mb-8">Our Mission</h2>
          <p className="text-lg text-base-content opacity-80 leading-relaxed">
            At ChatKaro, we believe communication should be simple, secure, and accessible to everyone. 
            Our mission is to create a platform that connects people across the globe while maintaining 
            the highest standards of privacy and user experience. We're committed to building technology 
            that brings people closer together.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

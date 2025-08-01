import React, { useState } from "react";
import SplitText from "../components/SplitText";
import Particles from "../components/Particles";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
    alert("Thank you for your message! We'll get back to you soon.");
  };

  return (
    <div className="min-h-screen font-sans text-white">
      {/* Background Particles */}
      <div className="fixed inset-0 z-0">
        <Particles
          particleColors={['#a8e6cf', '#dcedc1', '#ffd3b6']}
          particleCount={80}
          particleSpread={18}
          speed={0.04}
          particleBaseSize={90}
          moveParticlesOnHover={true}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>
      
      {/* Hero Section */}
      <section className="h-[60vh] flex items-center justify-center p-6 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/LuxeLane model.jpg"
            alt="LuxeLane Fashion"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="backdrop-blur-md bg-white/10 rounded-2xl shadow-glow p-10 text-center max-w-2xl border border-white/20 relative z-10">
          <img
            src="/LuxeLane logo.png"
            alt="LuxeLane Logo"
            className="w-24 h-24 mx-auto mb-4"
          />
          <SplitText
            text="📞 Get in Touch"
            className="text-5xl font-serif mb-4 block"
            delay={80}
            duration={1}
            splitType="chars"
          />
          <SplitText
            text="Have questions, suggestions, or just want to say hello? We'd love to hear from you!"
            className="text-white/90 block"
            delay={100}
            duration={0.8}
            splitType="words"
          />
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="px-8 py-12 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-glow border border-white/20">
            <SplitText
              text="💌 Send us a Message"
              className="text-3xl font-serif mb-6 block"
              delay={60}
              duration={0.8}
              splitType="chars"
            />
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white/90 mb-2 font-medium">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-white/50 transition-all duration-200"
                  placeholder="Enter your full name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-white/90 mb-2 font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-white/50 transition-all duration-200"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-white/90 mb-2 font-medium">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-white/50 transition-all duration-200"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="content">Content Submission</option>
                  <option value="technical">Technical Support</option>
                  <option value="feedback">Feedback & Suggestions</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-white/90 mb-2 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-white/50 transition-all duration-200 resize-none"
                  placeholder="Tell us what's on your mind..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-glow"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-glow border border-white/20">
              <h3 className="text-3xl font-serif mb-6">📍 Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-3 rounded-full">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Email Us</h4>
                    <p className="text-white/80">hello@luxelane.com</p>
                    <p className="text-white/80">partnerships@luxelane.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-3 rounded-full">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Visit Us</h4>
                    <p className="text-white/80">LuxeLane Studios</p>
                    <p className="text-white/80">123 Fashion Avenue</p>
                    <p className="text-white/80">New York, NY 10001</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-3 rounded-full">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Business Hours</h4>
                    <p className="text-white/80">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-white/80">Saturday: 10:00 AM - 4:00 PM</p>
                    <p className="text-white/80">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-glow border border-white/20">
              <h3 className="text-3xl font-serif mb-6">📱 Follow Us</h3>
              <div className="grid grid-cols-3 gap-4">
                <a href="#" className="bg-gradient-to-r from-pink-500 to-purple-600 p-4 rounded-lg text-center hover:scale-105 transition-transform duration-200">
                  <svg className="w-6 h-6 text-white mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                  <span className="text-white text-sm font-medium">Twitter</span>
                </a>
                
                <a href="#" className="bg-gradient-to-r from-pink-500 to-purple-600 p-4 rounded-lg text-center hover:scale-105 transition-transform duration-200">
                  <svg className="w-6 h-6 text-white mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                  <span className="text-white text-sm font-medium">Pinterest</span>
                </a>
                
                <a href="#" className="bg-gradient-to-r from-pink-500 to-purple-600 p-4 rounded-lg text-center hover:scale-105 transition-transform duration-200">
                  <svg className="w-6 h-6 text-white mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                  </svg>
                  <span className="text-white text-sm font-medium">TikTok</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-8 py-12 max-w-4xl mx-auto">
        <h3 className="text-3xl font-serif mb-8 text-center">❓ Frequently Asked Questions</h3>
        <div className="space-y-4">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-glow border border-white/20">
            <h4 className="text-xl font-semibold text-white mb-2">How can I submit content to LuxeLane?</h4>
            <p className="text-white/80">You can submit your fashion content through our submission form or email us at content@luxelane.com. We review all submissions within 48 hours.</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-glow border border-white/20">
            <h4 className="text-xl font-semibold text-white mb-2">Do you offer partnership opportunities?</h4>
            <p className="text-white/80">Yes! We're always looking for exciting partnerships with brands, influencers, and fashion houses. Contact us at partnerships@luxelane.com.</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-glow border border-white/20">
            <h4 className="text-xl font-semibold text-white mb-2">How long does it take to get a response?</h4>
            <p className="text-white/80">We typically respond to all inquiries within 24-48 hours during business days. For urgent matters, please include "URGENT" in your subject line.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 
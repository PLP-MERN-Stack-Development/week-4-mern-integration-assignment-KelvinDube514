import React, { useState } from "react";
import Particles from '../components/Particles';

const PostSubmissionForm = ({ onPostSubmit }) => {
  const [formData, setFormData] = useState({
    user: "",
    platform: "Instagram",
    caption: "",
    avatar: "",
    image: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.user || !formData.caption || !formData.image) {
      alert("Please fill in username, caption, and image URL.");
      return;
    }

    // Validate URL format
    const urlPattern = /^https?:\/\/.+\.(jpg|jpeg|png|gif|mp4|mov|avi|webm)$/i;
    if (!urlPattern.test(formData.image)) {
      alert("Please enter a valid image or video URL.");
      return;
    }

    if (formData.avatar && !urlPattern.test(formData.avatar)) {
      alert("Please enter a valid avatar URL.");
      return;
    }

    const newPost = {
      ...formData,
      id: Date.now(),
      time: "Just now",
      platformIcon: `/icons/${formData.platform.toLowerCase()}.svg`,
    };

    if (onPostSubmit) onPostSubmit(newPost);
    setFormData({ user: "", platform: "Instagram", caption: "", avatar: "", image: "" });
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white/10 backdrop-blur-md rounded-2xl shadow-glow text-white relative z-10">
      {/* Background Particles */}
      <div className="fixed inset-0 z-0">
        <Particles
          particleColors={['#a8e6cf', '#dcedc1', '#ffd3b6']}
          particleCount={60}
          particleSpread={20}
          speed={0.05}
          particleBaseSize={110}
          moveParticlesOnHover={true}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>
      <h2 className="text-2xl font-serif mb-6">📤 Submit Your Look</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="user"
          placeholder="Your username"
          value={formData.user}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-xl bg-white/20 placeholder-white/60 text-white focus:outline-none"
        />
        <select
          name="platform"
          value={formData.platform}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-xl bg-white/20 text-white focus:outline-none"
        >
          <option>Instagram</option>
          <option>TikTok</option>
          <option>Pinterest</option>
        </select>
        <textarea
          name="caption"
          placeholder="Write your caption..."
          value={formData.caption}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-xl bg-white/20 placeholder-white/60 text-white focus:outline-none"
        ></textarea>
        <input
          type="text"
          name="avatar"
          placeholder="Avatar image URL (optional)"
          value={formData.avatar}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-xl bg-white/20 placeholder-white/60 text-white focus:outline-none"
        />
        <input
          type="text"
          name="image"
          placeholder="Post image/video URL (required)"
          value={formData.image}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-xl bg-white/20 placeholder-white/60 text-white focus:outline-none"
        />

        <button
          type="submit"
          className="w-full bg-white/10 border border-white/20 px-6 py-3 rounded-xl hover:bg-white/20 transition"
        >
          Post to LuxeLane ✨
        </button>
      </form>
    </div>
  );
};

export default PostSubmissionForm;

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import SiteTitle from '../components/SiteTitle';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="relative">
      <SiteTitle title="Contact" subTitle="Get in touch with me">
      <div className="bg-black min-h-[60vh]" >
      <div className="max-w-[1400px] mx-auto px-4 py-32">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <div className="swiss-card">
                  <div className="flex items-center gap-4">
                    <Mail className="text-white" size={24} />
                    <div>
                      <h3 className="text-xl font-bold uppercase tracking-wider">Email</h3>
                      <p className="text-neutral-400">hello@utigernils.dev</p>
                    </div>
                  </div>
                </div>

                <div className="swiss-card">
                  <div className="flex items-center gap-4">
                    <Phone className="text-white" size={24} />
                    <div>
                      <h3 className="text-xl font-bold uppercase tracking-wider">Phone</h3>
                      <p className="text-neutral-400">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </div>

                <div className="swiss-card">
                  <div className="flex items-center gap-4">
                    <MapPin className="text-white" size={24} />
                    <div>
                      <h3 className="text-xl font-bold uppercase tracking-wider">Location</h3>
                      <p className="text-neutral-400">San Francisco, CA</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <form onSubmit={handleSubmit} className="swiss-card space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium uppercase tracking-wider mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-none focus:outline-none focus:border-white/30"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium uppercase tracking-wider mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-none focus:outline-none focus:border-white/30"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium uppercase tracking-wider mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-none focus:outline-none focus:border-white/30"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-white text-black font-bold uppercase tracking-wider hover:bg-neutral-200 transition-colors"
                  >
                    <Send size={18} />
                    Send Message
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
      </div>
      </SiteTitle>
    </div>
  );
};

export default Contact;
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Server, Globe, Shield, Cpu } from 'lucide-react';
import Background from '../components/Background';
import SiteTitle from '../components/SiteTitle';

interface SubdomainProps {
  name: string;
  url: string;
  description: string;
  status: 'active' | 'maintenance' | 'planned';
}

const subdomains: SubdomainProps[] = [
  {
    name: 'Backend',
    url: 'backend.utigernils.ch',
    description: 'Main API server and background processing',
    status: 'active'
  },
  {
    name: 'Media',
    url: 'media.utigernils.ch',
    description: 'Media storage and delivery system',
    status: 'active'
  },
  {
    name: 'Analytics',
    url: 'analytics.utigernils.ch',
    description: 'Real-time analytics and monitoring',
    status: 'active'
  }
];

const Infrastructure = () => {
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (backgroundRef.current) {
        const scrolled = window.scrollY;
        const opacity = Math.max(0, 1 - scrolled / 200);
        backgroundRef.current.style.opacity = opacity.toString();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative">
      <SiteTitle title="Infrastructure" subTitle="Learn more about the server specifications and subdomains">
        <div className="bg-black">
          <div className="max-w-[1400px] mx-auto px-4 py-16">
            <div className="grid-container mb-16">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="col-span-12 md:col-span-6 swiss-card"
              >
                <Server className="text-white mb-6" size={48} />
                <h2 className="text-2xl font-bold mb-4 uppercase tracking-wider">Server Specifications</h2>
                <ul className="space-y-4 text-neutral-400">
                  <li className="flex items-center gap-2">
                    <Cpu size={20} />
                    <span>AMD Ryzen 9 5950X (16 cores, 32 threads)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Shield size={20} />
                    <span>128GB ECC DDR4 RAM</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Globe size={20} />
                    <span>2TB NVMe SSD in RAID 1</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="col-span-12 md:col-span-6 swiss-card"
              >
                <Globe className="text-white mb-6" size={48} />
                <h2 className="text-2xl font-bold mb-4 uppercase tracking-wider">Network</h2>
                <ul className="space-y-4 text-neutral-400">
                  <li>10 Gbps Fiber Connection</li>
                  <li>Cloudflare Enterprise Protection</li>
                  <li>Global CDN Distribution</li>
                  <li>Automated SSL Certificate Management</li>
                </ul>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-32"
            >
              <h2 className="text-4xl font-bold mb-12 tracking-tighter uppercase">Subdomains</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {subdomains.map((subdomain, index) => (
                  <div key={index} className="swiss-card">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold uppercase tracking-wider">{subdomain.name}</h3>
                      <span className={`px-3 py-1 text-sm uppercase ${
                        subdomain.status === 'active' ? 'bg-green-900 text-green-200' :
                        subdomain.status === 'maintenance' ? 'bg-yellow-900 text-yellow-200' :
                        'bg-blue-900 text-blue-200'
                      }`}>
                        {subdomain.status}
                      </span>
                    </div>
                    <p className="text-neutral-400 mb-4">{subdomain.description}</p>
                    <a
                      href={`https://${subdomain.url}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-neutral-400 transition-colors font-mono text-sm"
                    >
                      {subdomain.url}
                    </a>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="swiss-card"
            >
              <h2 className="text-2xl font-bold mb-6 uppercase tracking-wider">Security & Monitoring</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-neutral-400">
                <div>
                  <h3 className="text-lg font-bold mb-4 uppercase">Security Measures</h3>
                  <ul className="space-y-2">
                    <li>• DDoS Protection</li>
                    <li>• Web Application Firewall</li>
                    <li>• Regular Security Audits</li>
                    <li>• Automated Backup System</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-4 uppercase">Monitoring</h3>
                  <ul className="space-y-2">
                    <li>• 24/7 System Monitoring</li>
                    <li>• Real-time Performance Metrics</li>
                    <li>• Automated Alert System</li>
                    <li>• Resource Usage Analytics</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
          </div>
        </SiteTitle>
    </div>
  );
};

export default Infrastructure;
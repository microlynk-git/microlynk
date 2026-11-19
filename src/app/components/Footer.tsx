'use client'

import React, { useState } from 'react';
import { MapPin, Mail} from 'lucide-react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import LogoImage from "@/assets/ML Logo/ML Logo - PNG.png"

const Footer = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  
  const serviceRoutes = {
    'Embedded Systems Development': '/service/embedded-systems',
    'Hardware & PCB Design': '/service/hardware-pcb-design',
    'Custom Product Development': '/service/custom-product-development',
    'Consulting & R&D': '/service/consulting-and-rd',
    'IoT Solutions': '/service/iot-solutions',
  };
  
  const services = [
    'Embedded Systems Development',
    'Hardware & PCB Design',
    'Custom Product Development',
    'Consulting & R&D',
    'IoT Solutions'
  ];

  const company = [
    { label: 'What We Do', href: '#services' },
    { label: 'Our Approach', href: '/our-approach' },
    { label: 'Projects', href: '/case-study' },
    { label: 'About Us', href: '/about-us' },
    { label: 'Careers', href: '/careers' }
  ];

  const legalLinks = [
    { label: 'Privacy Statement', href: '/privacy-statement' },
    { label: 'Terms and Conditions', href: '/terms-and-conditions' },
    { label: 'Cookies Policy', href: '/cookies-policy' }
  ];


  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    const isOnHomepage = window.location.pathname === '/';
    
    if (isOnHomepage) {
      if (href === '#home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const target = document.querySelector(href);
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      router.push('/');
      
      setTimeout(() => {
        if (href === '#home') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          const target = document.querySelector(href);
          if (target) target.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); 
    }
  };

  const handleNavigate = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    router.push(path);
    window.scrollTo(0, 0);
  };

  const handleServiceClick = (e: React.MouseEvent<HTMLAnchorElement>, service: string) => {
    const path = serviceRoutes[service as keyof typeof serviceRoutes];
    if (path) {
      e.preventDefault();
      router.push(path);
    }
  };

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus('success');
        setEmail('');
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
      }
    } catch (error) {
      console.error('Error subscribing:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <footer className="bg-backgroundDarkBlue text-white font-inter">
      <div className="max-w-[1200px] mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-8">
          {/* Brand Section */}
          <div className="flex flex-col gap-4  md:col-span-2">
            <Image src={LogoImage} alt="Microlynk Logo" width={200} height={200} className="object-contain -ml-4" />
            <p className="text-white font-regular">Stay current with our latest insights</p>
            {/* Newsletter Subscription */}
            <form className="flex flex-col min-[512px]:flex-row gap-3" onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="Email Address"
                className="px-4 py-3  bg-transparent border border-white placeholder:text-white/70 text-white flex-1 font-light"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={status === 'loading'}
              />
              <button 
                type="submit" 
                className="bg-backgroundLightBlue text-white px-9 py-3 font-medium disabled:opacity-70 disabled:cursor-not-allowed min-w-[140px]"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? '...' : status === 'success' ? 'Subscribed!' : status === 'error' ? 'Failed' : 'Subscribe'}
              </button>
            </form>
            {/* Contact Info */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 mt-14">
              
              <div className="flex items-center gap-3 text-white font-light">
                <Mail size={20} />
                <span>contact@microlynk.com</span>
              </div>
            </div>
          </div>

          {/* Services and Company Sections Wrapper */}
          <div className="md:col-span-2 flex flex-col md:flex-row justify-end gap-10 md:gap-16">
            {/* Services Section */}
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-semibold">Services</h3>
              <ul className="flex flex-col gap-2">
                {services.map((service, index) => (
                  <li key={index}>
                    <a
                      href={serviceRoutes[service as keyof typeof serviceRoutes] || '#'}
                      className="text-white/90 hover:text-white text-[17px] font-inter"
                      onClick={(e) => handleServiceClick(e, service)}
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
              
            </div>

            {/* Company Section */}
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-semibold">Company</h3>
              <ul className="flex flex-col gap-2">
                {company.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      className="text-white/90 hover:text-white text-[17px] font-inter"
                      onClick={(e) => item.href.startsWith('#') ? handleScroll(e, item.href) : handleNavigate(e, item.href)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
              
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="w-full flex flex-col min-[912px]:flex-row justify-between items-left mt-8 border-t border-white/20 pt-4 gap-3 font-light">
          <div className="flex flex-col min-[912px]:flex-row items-left gap-2 min-[912px]:gap-4 text-sm">
            {legalLinks.map((link, index) => (
              <React.Fragment key={index}>
                <a
                  href={link.href}
                  className="text-gray-300 hover:text-white whitespace-nowrap"
                  onClick={(e) => handleNavigate(e, link.href)}
                >
                  {link.label}
                </a>
                {index < legalLinks.length - 1 && <span className="text-white/50 hidden min-[912px]:inline">•</span>}
              </React.Fragment>
            ))}
          </div>
          <p className="text-gray-300 text-sm">© 2025 Microlynk - All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

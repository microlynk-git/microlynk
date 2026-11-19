'use client'
import { useState } from 'react';
import TextType from "../components/TextType";
import { Check, ChevronDown, Loader2 } from "lucide-react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { motion } from 'framer-motion';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const listVariants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 1.8,
      staggerChildren: 0.7,
    },
  },
} as const
const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
} as const

export default function ContactUs() {
  const [selectedService, setSelectedService] = useState('');
  const [customService, setCustomService] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          service: selectedService,
          customService: selectedService === 'Other' ? customService : undefined,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      toast.success('Message sent successfully!');
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        country: '',
        phone: '',
        message: ''
      });
      setSelectedService('');
      setCustomService('');
    } catch (error: any) {
      console.error('Submission error:', error);
      toast.error(error.message || 'Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
    <Navbar/>
      <section className="bg-[#f5f5f5] min-h-[calc(100vh-40px)] flex flex-col py-2 ">
        <h2 className="text-center text-[40px] leading-tight min-[912px]:text-[50px] min-[912px]:leading-normal mb-8 text-[#1D1D1D] font-semibold font-regular  md:mt-28 mt-14 px-5">
          We'd love to hear from you
        </h2>
        <div className="flex w-full max-w-[1200px] mx-auto bg-white overflow-hidden flex-1 mb-10">
          {/* Left Side */}
          <div className="hidden min-[912px]:flex flex-1 text-white p-5 md:p-10 flex-col min-h-[750px] bg-backgroundDarkBlue pb-5">
            <h3 className="text-[45px]  font-regular font-semibold">Microlynk</h3>
            <TextType
              text="Why Partner with us?"
              as="p"
              startOnVisible={false}
              loop={false}
              initialDelay={400}
              className="text-[24px] mb-10 mt-2 font-regular"
            />
            <motion.ul
  className="list-none p-0 m-0 text-lg space-y-7 font-inter "
  variants={listVariants}
  initial="hidden"
  animate="visible"
>
  <motion.li variants={itemVariants} className="flex items-start gap-4 leading-relaxed ">
    <Check className="text-tick flex-shrink-0" /> Expert engineering across embedded, hardware, and IoT
  </motion.li>
  <motion.li variants={itemVariants} className="flex items-start gap-4 leading-relaxed">
    <Check className="text-tick flex-shrink-0" /> Continuous support from development to deployment
  </motion.li>
  <motion.li variants={itemVariants} className="flex items-start gap-4 leading-relaxed">
    <Check className="text-tick flex-shrink-0" /> Proven track record with reliable, scalable solutions
  </motion.li>
  <motion.li variants={itemVariants} className="flex items-start gap-4 leading-relaxed">
    <Check className="text-tick flex-shrink-0" /> Skilled team with deep technical experience
  </motion.li>
</motion.ul>
          </div>

          {/* Right Side  */}
          <div className="flex-1 px-10 py-3 flex flex-col min-h-[700px] mx-auto pb-5">
            <p className="text-brand-primary text-[25px] font-regular font-semibold pb-5 mt-5">
              Fill out the form and a Microlynk team
            </p>
            <p className="text-brand-primary text-[25px] font-regular font-semibold -mt-5 mb-10">
              member will reach out
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-full">
              <div className="flex gap-6 flex-col md:flex-row">
                <div className="flex flex-col gap-2 flex-1 mb-5">
                  <label className="text-brand-primary text-[19px] font-regular">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    required
                    className="px-3 py-3 border border-gray-300 text-[14px] font-regular focus:border-black outline-none transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2 flex-1 mb-5">
                  <label className="text-brand-primary text-[19px] font-regular">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="youremail@gmail.com"
                    required
                    className="px-3 py-3 border border-gray-300 text-[14px] font-regular focus:border-black outline-none transition-colors"
                  />
                </div>
              </div>
              <div className="flex gap-6 flex-col md:flex-row">
                <div className="flex flex-col gap-2 flex-1 mb-5">
                  <label className="text-brand-primary text-[19px] font-regular">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Your company"
                    className="px-3 py-3 border border-gray-300 text-[14px] font-regular focus:border-black outline-none transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2 flex-1 mb-5 relative">
                  <label className="text-brand-primary text-[19px] font-regular">
                    Service Interest
                  </label>
                  <div className="relative flex items-center border border-gray-300 bg-white focus-within:border-black transition-colors">
                    <span className="flex-1 px-3 py-3 text-[14px] text-gray-600 font-regular font-inter">
                      {selectedService || "Select a service"}
                    </span>
                    <ChevronDown className="text-gray-600 mr-3 pointer-events-none" />
                    <select 
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer appearance-none outline-none"
                    >
                      <option value="">Select a service</option>
                      <option value="Embedded System" className="font-inter">Embedded System</option>
                      <option value="Hardware & PCB Design" className="font-inter">Hardware & PCB Design</option>
                      <option value="IoT Solutions" className="font-inter">IoT Solutions</option>
                      <option value="Custom Product Development" className="font-inter">Custom Product Development</option>
                      <option value="Consulting & R&D" className="font-inter">Consulting & R&D</option>
                      <option value="Other" className="font-inter">Other</option>
                    </select>
                  </div>
                </div>
              </div>
              {selectedService === 'Other' && (
                <div className="flex flex-col gap-2 mb-5">
                  <label className="text-brand-primary text-[19px] font-regular">
                    Please specify
                  </label>
                  <input
                    type="text"
                    value={customService}
                    autoFocus
                    onChange={(e) => setCustomService(e.target.value)}
                    placeholder="Enter your service interest"
                    className="px-3 py-3 border border-gray-300 text-[14px] font-regular focus:border-black outline-none transition-colors"
                  />
                </div>
              )}
              <div className="flex gap-6 flex-col md:flex-row">
                <div className="flex flex-col gap-2 flex-1 mb-5">
                  <label className="text-brand-primary text-[19px] font-regular">
                    Country
                  </label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    placeholder="Your country"
                    className="px-3 py-3 border border-gray-300 text-[14px] font-regular focus:border-black outline-none transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2 flex-1 mb-5">
                  <label className="text-brand-primary text-[19px] font-regular">
                    Phone
                  </label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Your phone number"
                    className="px-3 py-3 border border-gray-300 text-[14px] font-regular focus:border-black outline-none transition-colors"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2 mb-2">
                <label className="text-brand-primary text-[19px] font-regular">
                  Write your message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  style={{
                    resize: "none",
                  }}
                  placeholder="Tell us about your project objectives and current challenges.."
                  className="px-3 py-3 border border-gray-300 text-[14px] font-regular min-h-[100px] max-h-[200px] resize-y w-full leading-6 text-gray-800 mb-3 focus:border-black outline-none transition-colors"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-backgroundLightBlue text-white px-5 py-3  hover:bg-backgroundBlue w-full md:w-auto font-regular flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin h-5 w-5" />
                    Sending...
                  </>
                ) : (
                  'Send message'
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
      <div>
        <Footer />
      </div>
      <ToastContainer position="bottom-right" />
    </>
  );
};



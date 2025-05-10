import { Link } from "wouter";
import { Facebook, Instagram, Bookmark, Phone, Mail, MapPin, Heart, ArrowUp } from "lucide-react";
import { FaWhatsapp, FaPinterestP, FaTiktok } from "react-icons/fa";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import AnimatedButton from "./AnimatedButton";

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="relative mt-8">
      {/* Decorative wave top */}
      <div className="absolute top-0 left-0 right-0 transform -translate-y-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path fill="#495057" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,208C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
      
      {/* Main footer content */}
      <div className="bg-gradient-to-br from-dark to-gray-800 text-white pt-16 pb-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* Brand section */}
            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed">Creating bespoke handcrafted items and decorations for all your special occasions. Each piece is made with love and attention to detail.</p>
              <div className="flex space-x-6">
                <a 
                  href="https://www.facebook.com/kenjacreations" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center text-white hover:bg-[#1877F2] hover:scale-110 transition-all duration-300"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center text-white hover:bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:scale-110 transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>
            
            {/* Quick Links */}
            <div className="mt-8 md:mt-0">
              <h3 className="text-lg font-bold mb-6 relative inline-block">
                Quick Links
                <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></span>
              </h3>
              <ul className="space-y-3">
                {[
                  { href: "/", label: "Home" },
                  { href: "/about", label: "About Us" },
                  { href: "/shop", label: "Shop" },
                  { href: "/gallery", label: "Gallery" },
                  { href: "/testimonials", label: "Testimonials" }
                  // Contact link removed
                ].map((link) => (
                  <li key={link.href} className="transform hover:translate-x-2 transition-transform duration-300">
                    <Link href={link.href}>
                      <a className="text-gray-300 hover:text-primary transition-colors duration-300 flex items-center">
                        <span className="mr-2 text-xs">›</span>
                        {link.label}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Products */}
            <div className="mt-8 md:mt-0">
              <h3 className="text-lg font-bold mb-6 relative inline-block">
                Products
                <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></span>
              </h3>
              <ul className="space-y-3">
                {[
                  { href: "/shop?category=gifts", label: "Customized Gifts" },
                  { href: "/shop?category=decorations", label: "Event Decorations" },
                  { href: "/shop?category=home", label: "Home Decor" },
                  { href: "/shop?category=seasonal", label: "Seasonal Items" },
                  { href: "/shop?category=corporate", label: "Corporate Gifts" }
                ].map((link) => (
                  <li key={link.href} className="transform hover:translate-x-2 transition-transform duration-300">
                    <Link href={link.href}>
                      <a className="text-gray-300 hover:text-primary transition-colors duration-300 flex items-center">
                        <span className="mr-2 text-xs">›</span>
                        {link.label}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Contact section removed */}
          </div>
          
          {/* Newsletter */}
          <div className="bg-gray-900/50 rounded-xl p-6 mb-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              <div className="md:col-span-1">
                <h4 className="text-lg font-bold mb-1">Subscribe to our newsletter</h4>
                <p className="text-gray-400 text-sm">Get the latest updates and offers</p>
              </div>
              <div className="md:col-span-2">
                <form className="flex flex-col sm:flex-row gap-3">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="bg-gray-800 text-white rounded-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-primary flex-grow"
                    required
                  />
                  <AnimatedButton
                    type="submit"
                    className="font-medium px-6 py-3"
                    primaryColor="#FF6B6B"
                  >
                    Subscribe
                  </AnimatedButton>
                </form>
              </div>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="border-t border-gray-700 pt-8 mt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-gray-400 mb-4 md:mb-0">&copy; {new Date().getFullYear()} Kenjac’ Creations. All rights reserved.</p>
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                <a href="/privacy-policy" className="text-sm text-gray-400 hover:text-primary transition-colors duration-300">Privacy Policy</a>
                <a href="/terms" className="text-sm text-gray-400 hover:text-primary transition-colors duration-300">Terms of Service</a>
                <a href="/shipping" className="text-sm text-gray-400 hover:text-primary transition-colors duration-300">Shipping & Returns</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll to top button */}
      <div className={cn(
        "fixed bottom-6 right-6 z-50",
        showScrollTop ? "opacity-100 visible" : "opacity-0 invisible"
      )}>
        <AnimatedButton
          onClick={scrollToTop}
          className="w-12 h-12 rounded-full flex items-center justify-center p-0"
          primaryColor="#FF6B6B"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </AnimatedButton>
      </div>
    </footer>
  );
};

export default Footer;

import { Helmet } from "react-helmet";
import { MapPin, Mail, Phone } from "lucide-react";
import { FaWhatsapp, FaFacebookF, FaInstagram, FaPinterestP, FaTiktok } from "react-icons/fa";
import ContactForm from "@/components/forms/ContactForm";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - Kenjac’ Creations</title>
        <meta 
          name="description" 
          content="Get in touch with Kenjac’ Creations for custom gifts, event decorations, or any questions. We're here to help make your special occasions memorable."
        />
      </Helmet>
      
      <main id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold font-heading mb-4">Get in Touch</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Have questions or need assistance? Reach out to us through any of these channels.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center text-primary mr-4">
                    <MapPin />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Location</h3>
                    <p className="text-gray-600">123 Craft Avenue, Creativity District, NY 10001</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center text-primary mr-4">
                    <Mail />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Email</h3>
                    <a href="mailto:hello@Kenjac’creations.com" className="text-primary">
                      hello@Kenjac’creations.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center text-primary mr-4">
                    <Phone />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Phone</h3>
                    <a href="tel:+1234567890" className="text-primary">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center text-primary mr-4">
                    <FaWhatsapp size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">WhatsApp</h3>
                    <a 
                      href="https://wa.me/1234567890" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-primary"
                    >
                      Message us on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="font-bold text-lg mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-10 h-10 bg-primary bg-opacity-10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition"
                    aria-label="Facebook"
                  >
                    <FaFacebookF />
                  </a>
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-10 h-10 bg-primary bg-opacity-10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition"
                    aria-label="Instagram"
                  >
                    <FaInstagram />
                  </a>
                  <a 
                    href="https://pinterest.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-10 h-10 bg-primary bg-opacity-10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition"
                    aria-label="Pinterest"
                  >
                    <FaPinterestP />
                  </a>
                  <a 
                    href="https://tiktok.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-10 h-10 bg-primary bg-opacity-10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition"
                    aria-label="TikTok"
                  >
                    <FaTiktok />
                  </a>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="font-bold text-lg mb-4">Business Hours</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday:</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <ContactForm />
            </div>
          </div>
          
          <div className="mt-16">
            <h3 className="text-2xl font-bold font-heading mb-6 text-center">Find Us</h3>
            <div className="rounded-lg overflow-hidden shadow-md h-[400px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976397304605!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1623825296403!5m2!1sen!2s" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                title="Kenjac’ Creations Location"
              ></iframe>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Contact;

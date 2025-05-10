import { Link } from "wouter";

const CTASection = () => {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold font-heading mb-4">Ready to Create Something Special?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Let us help you make your next celebration unforgettable with our custom creations.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="https://www.facebook.com/kenjacreations" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-white text-primary hover:bg-opacity-90 font-medium px-8 py-3 rounded-full transition text-center cursor-pointer"
          >
            Start Your Custom Order
          </a>
          <a 
            href="https://www.facebook.com/kenjacreations" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-transparent border-2 border-white hover:bg-white hover:text-primary font-medium px-8 py-3 rounded-full transition text-center cursor-pointer"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

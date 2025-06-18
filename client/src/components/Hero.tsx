import { Link } from "wouter";
import { useEffect, useState } from "react";
import { HeroParallax } from "./ui/hero-parallax";
import { products } from "../data/products";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section id="hero" className="relative overflow-hidden">
      {/* Parallax Background */}
      <div className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 z-0">
          <HeroParallax products={products} />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent z-10" />

        {/* Foreground Content */}
        <div className="container mx-auto px-4 h-screen flex items-center relative z-20">
          <div
            className={`max-w-xl text-white transition-all duration-1000 ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 text-shadow-lg relative">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-200 to-violet-200 animate-text-shimmer inline-block">
                Handcrafted
              </span>
              <span className="relative mx-2 text-white">with</span>
              <span className="text-pink-300 relative inline-block animate-pulse-scale">
                Love
                <span className="absolute -top-6 -right-6 text-4xl text-pink-300 animate-pulse drop-shadow-[0_0_10px_rgba(244,114,182,0.7)]">
                  ♥
                </span>
              </span>
            </h1>
            <p className="text-xl mb-10 text-shadow-lg text-violet-100 max-w-lg leading-relaxed">
              Create unforgettable moments with our{" "}
              <span className="text-pink-200 font-semibold">customized gifts</span> and{" "}
              <span className="text-violet-200 font-semibold">event decorations</span>.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-6">
              <Link href="/shop">
                <div className="relative overflow-hidden group bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white font-medium px-10 py-4 rounded-full text-center cursor-pointer shadow-lg hover:shadow-violet-500/50 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300">
                  <span className="relative z-10">Shop Now</span>
                  <span className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                  <span className="absolute -inset-full top-0 right-0 w-1/4 h-full z-5 block transform -skew-x-12 bg-white opacity-40 group-hover:animate-shine" />
                </div>
              </Link>

              <a
                href="https://www.facebook.com/kenjacreations"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="relative overflow-hidden group bg-white hover:bg-opacity-95 text-violet-700 font-medium px-10 py-4 rounded-full text-center cursor-pointer shadow-lg hover:shadow-white/50 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-violet-200">
                  <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-violet-700 to-purple-700">
                    Custom Order
                  </span>
                  <span className="absolute inset-0 bg-violet-50/30 transform scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-500" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style >{`
        @keyframes gradient-shift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient-shift 15s ease infinite;
        }

        .animate-text-shimmer {
          background-size: 200% auto;
          animation: text-shimmer 3s linear infinite;
        }

        @keyframes text-shimmer {
          0% {
            background-position: 0% center;
          }
          100% {
            background-position: 200% center;
          }
        }

        .text-shadow-lg {
          text-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
        }

        @keyframes shine {
          from {
            transform: translateX(-100%) skewX(10deg);
          }
          to {
            transform: translateX(150%) skewX(10deg);
          }
        }

        .animate-shine {
          animation: shine 2s ease-in-out infinite;
        }

        @keyframes pulse-scale {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }

        .animate-pulse-scale {
          animation: pulse-scale 2s infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;

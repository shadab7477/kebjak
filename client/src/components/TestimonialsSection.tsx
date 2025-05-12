import { Star } from "lucide-react";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

const TestimonialsSection = () => {
  const testimonials = [
    {
      content: "The custom birthday decorations were absolutely stunning! Everyone at the party was impressed by the attention to detail and beautiful craftsmanship.",
      author: "Sarah M.",
      event: "Birthday Party",
      rating: 5,
      initials: "SM",
      bgColor: "bg-primary"
    },
    {
      content: "I ordered a personalized anniversary gift for my husband, and it was better than I imagined. The craftsmanship was excellent, and it arrived perfectly packaged.",
      author: "Jennifer D.",
      event: "Anniversary Gift",
      rating: 5,
      initials: "JD",
      bgColor: "bg-secondary"
    },
    {
      content: "Kenjac’ Creations transformed our corporate event with beautiful customized decor that perfectly matched our brand. The team was professional and delivered on time.",
      author: "Robert B.",
      event: "Corporate Event",
      rating: 4.5,
      initials: "RB",
      bgColor: "bg-accent"
    }
  ];

  // Helper to render stars based on rating
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    // Full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} className="fill-accent text-accent" size={18} />);
    }
    
    // Half star
    if (hasHalfStar) {
      stars.push(
        <svg key="half" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" className="text-accent">
          <path fill="currentColor" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" clipPath="inset(0 50% 0 0)" />
          <path fill="none" stroke="currentColor" strokeWidth="1.5" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
        </svg>
      );
    }
    
    // Empty stars (to make total of 5)
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="text-accent" size={18} />);
    }
    
    return stars;
  };

  return (
    <section id="testimonials" className="py-16 bg-secondary bg-opacity-10 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-heading mb-4 dark:text-white">What Our Customers Say</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Hear from our satisfied customers about their experience with Kenjac' Creations.
          </p>
        </div>
        
        <AnimatedTestimonials
          testimonials={[
            {
              quote: testimonials[0].content,
              name: testimonials[0].author,
              designation: testimonials[0].event,
              src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            },
            {
              quote: testimonials[1].content,
              name: testimonials[1].author,
              designation: testimonials[1].event,
              src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80",
            },
            {
              quote: testimonials[2].content,
              name: testimonials[2].author,
              designation: testimonials[2].event,
              src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            },
          ]}
          autoplay={true}
        />
      </div>
    </section>
  );
};

export default TestimonialsSection;

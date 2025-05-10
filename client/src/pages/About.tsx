import { Helmet } from "react-helmet";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Kenjac’ Creations</title>
        <meta 
          name="description" 
          content="Learn about Kenjac’ Creations, our story, vision, and passion for creating handcrafted custom gifts and event decorations."
        />
      </Helmet>
      
      <main className="pt-8 pb-16">
        <section className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold font-heading mb-6 text-center">About <span className="text-primary">Kenjac’ Creations</span></h1>
            
            <div className="mb-12">
              <h2 className="text-2xl font-bold font-heading mb-4 text-center">Our Story</h2>
              
              <StickyScroll
                content={[
                  {
                    title: "The Beginning",
                    description:
                      "Kenjac’ Creations began in 2015 as a passion project when our founder, Kenjac’Creation, started creating handmade gifts for friends and family. What started as a hobby quickly grew into a business as word spread about her unique, personalized creations.",
                    content: (
                      <img
                        src="https://images.unsplash.com/photo-1499013819532-e4ff41b00669?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                        alt="Kenjac’ Creations Beginning"
                        className="h-full w-full object-cover"
                      />
                    ),
                  },
                  {
                    title: "Our Expertise",
                    description:
                      "With a background in fine arts and event planning, Sarah combined her skills to offer not just beautiful handcrafted items, but also complete event decoration services that tell a story and create memorable experiences.",
                    content: (
                      <img
                        src="https://images.unsplash.com/photo-1464349153735-7db50ed83c84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                        alt="Kenjac’ Creations Expertise"
                        className="h-full w-full object-cover"
                      />
                    ),
                  },
                  {
                    title: "Our Growth",
                    description:
                      "Over the years, we've expanded our team and capabilities, serving hundreds of clients across the country. Our commitment to quality and personalization has made us a trusted name in custom gifts and event decorations.",
                    content: (
                      <img
                        src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                        alt="Kenjac’ Creations Growth"
                        className="h-full w-full object-cover"
                      />
                    ),
                  },
                ]}
              />
              
              <div className="my-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-bold font-heading mb-4">Our Mission</h2>
                  <p className="text-lg mb-4 leading-relaxed">
                    At Kenjac’ Creations, our mission is to bring joy and create unforgettable moments through our handcrafted creations. We believe that every celebration deserves special attention to detail and personal touches that reflect the individual's personality and style.
                  </p>
                </div>
                <div>
                  <h2 className="text-2xl font-bold font-heading mb-4">Our Values</h2>
                  <ul className="list-disc pl-5 text-lg space-y-2 leading-relaxed">
                    <li>Quality craftsmanship in every creation</li>
                    <li>Personalized approach to each customer</li>
                    <li>Sustainable and eco-friendly materials</li>
                    <li>Supporting local artisans and suppliers</li>
                    <li>Creating unique and meaningful experiences</li>
                  </ul>
                </div>
              </div>
              
              <h2 className="text-2xl font-bold font-heading mb-4">Our Process</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center text-primary mx-auto mb-4">
                    <span className="text-2xl font-bold">1</span>
                  </div>
                  <h3 className="font-bold text-lg mb-2">Consultation</h3>
                  <p className="text-gray-600">
                    We start by understanding your vision, preferences, and requirements through a detailed consultation.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="w-16 h-16 bg-secondary bg-opacity-10 rounded-full flex items-center justify-center text-secondary mx-auto mb-4">
                    <span className="text-2xl font-bold">2</span>
                  </div>
                  <h3 className="font-bold text-lg mb-2">Design</h3>
                  <p className="text-gray-600">
                    Our creative team designs custom concepts that align with your event theme or gift purpose.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="w-16 h-16 bg-accent bg-opacity-10 rounded-full flex items-center justify-center text-accent mx-auto mb-4">
                    <span className="text-2xl font-bold">3</span>
                  </div>
                  <h3 className="font-bold text-lg mb-2">Creation</h3>
                  <p className="text-gray-600">
                    We handcraft each item with care and attention to detail, ensuring the highest quality.
                  </p>
                </div>
              </div>
              
              <h2 className="text-2xl font-bold font-heading mb-4 text-center">Meet Our Team</h2>
              
              <AnimatedTestimonials
                testimonials={[
                  {
                    quote: "With over 10 years of experience in art and design, I'm passionate about creating unique, personalized gifts that tell a story and make every occasion special.",
                    name: "Sarah Johnson",
                    designation: "Founder & Creative Director",
                    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
                  },
                  {
                    quote: "My background in interior design helps me create stunning event spaces that transform ordinary venues into extraordinary experiences for our clients.",
                    name: "Priyanshu-Rai",
                    designation: "Event Decoration Specialist",
                    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
                  },
                  {
                    quote: "I specialize in personalizing gifts to make them unique and meaningful. Every detail matters when creating something that will be treasured for years to come.",
                    name: "Aisha Patel",
                    designation: "Customization Expert",
                    src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80",
                  },
                ]}
                autoplay={true}
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;

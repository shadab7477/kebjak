import { Gift, Cake, Palette } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Gift className="text-4xl text-secondary" />,
      title: "Customized Gifts",
      description: "Personalized gifts that capture the essence of your special moments."
    },
    {
      icon: <Cake className="text-4xl text-primary" />,
      title: "Event Decorations",
      description: "Transform your events with our bespoke decorations tailored to your theme."
    },
    {
      icon: <Palette className="text-4xl text-accent" />,
      title: "Handcrafted Creations",
      description: "Unique artisanal creations made with attention to detail and love."
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="text-center p-6 hover:shadow-lg rounded-lg transition duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold font-heading mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

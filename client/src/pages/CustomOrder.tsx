import { Helmet } from "react-helmet";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "wouter";
import CustomOrderForm from "@/components/forms/CustomOrderForm";

const CustomOrder = () => {
  return (
    <>
      <Helmet>
        <title>Custom Order - Kenjac’ Creations</title>
        <meta 
          name="description" 
          content="Request a custom-made gift or event decoration package from Kenjac’ Creations. We create personalized items tailored to your specific needs and occasion."
        />
      </Helmet>
      
      <main className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-2/5 bg-primary p-8 text-white">
                <h1 className="text-2xl font-bold font-heading mb-4">Custom Order Request</h1>
                <p className="mb-6">
                  Let us know what you're looking for, and we'll create something special just for you.
                </p>
                
                <div className="mb-6">
                  <h3 className="font-bold mb-2">Our Process</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="mr-2">1.</span>
                      <span>Submit your request with details</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">2.</span>
                      <span>Receive a quote within 24 hours</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">3.</span>
                      <span>Approve the design concept</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">4.</span>
                      <span>Receive your custom creation</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-bold mb-2">Questions?</h3>
                  <p className="mb-2">Contact us directly:</p>
                  <a 
                    href="https://wa.me/1234567890" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white flex items-center hover:underline"
                  >
                    <FaWhatsapp className="mr-2" />
                    <span>WhatsApp Chat</span>
                  </a>
                </div>
                
                <div className="mt-8">
                  <h3 className="font-bold mb-4">Project Examples</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <img 
                      src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=200" 
                      alt="Custom Gift Example" 
                      className="rounded-md"
                    />
                    <img 
                      src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=200" 
                      alt="Event Decoration Example" 
                      className="rounded-md"
                    />
                  </div>
                </div>
              </div>
              
              <div className="md:w-3/5 p-8">
                <h2 className="text-xl font-bold mb-6">Tell Us About Your Project</h2>
                <CustomOrderForm />
                
                <div className="mt-6 text-center text-sm text-gray-500">
                  <p>
                    By submitting this form, you agree to our{" "}
                    <Link href="/terms">
                      <a className="text-primary hover:underline">Terms of Service</a>
                    </Link>
                    {" "}and{" "}
                    <Link href="/privacy-policy">
                      <a className="text-primary hover:underline">Privacy Policy</a>
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto mt-16">
            <h2 className="text-2xl font-bold font-heading mb-6 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg mb-2">How much do custom orders typically cost?</h3>
                <p className="text-gray-600">
                  Custom order prices vary widely depending on the complexity, materials, and time required. 
                  Most gift items range from $25-$150, while event decorations start at $100 and increase 
                  based on the scope of the project. We'll provide a detailed quote after reviewing your request.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg mb-2">How far in advance should I place a custom order?</h3>
                <p className="text-gray-600">
                  For gift items, we recommend placing your order 2-3 weeks in advance. For event decorations, 
                  4-6 weeks is ideal, especially during peak seasons (holidays, summer weddings, etc.). 
                  Rush orders may be accommodated for an additional fee, subject to our current schedule.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg mb-2">Can I make changes to my order after it's been approved?</h3>
                <p className="text-gray-600">
                  Minor changes can often be accommodated if the production hasn't progressed too far. 
                  Significant changes may require a new quote and could affect the delivery timeline. 
                  We recommend finalizing all details during the design approval phase.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg mb-2">Do you offer delivery services for event decorations?</h3>
                <p className="text-gray-600">
                  Yes, we offer delivery, setup, and breakdown services for event decorations within a 50-mile 
                  radius of our location. These services are quoted separately based on distance, complexity, 
                  and timing requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default CustomOrder;

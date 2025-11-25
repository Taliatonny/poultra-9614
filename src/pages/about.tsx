import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Target, Eye, Heart, Users } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            About POULTRA
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Empowering poultry farmers with knowledge, products, and technology
          </p>
        </div>

        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/poultry-farm.png"
                alt="Poultry Farm"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
              <p className="text-gray-600 leading-relaxed">
                POULTRA was born from a simple observation: poultry farmers 
                needed a single, reliable platform to access everything they 
                need for success. From sourcing quality chicks to learning 
                best practices, from buying equipment to getting expert advice, 
                the journey was fragmented and challenging.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We set out to change that. By combining e-commerce, education, 
                and cutting-edge AI technology, POULTRA has become the 
                comprehensive platform that farmers can trust for their entire 
                poultry farming journey.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, we serve farmers of all sizes, from backyard enthusiasts 
                to commercial operations, providing them with the tools and 
                knowledge they need to build thriving, sustainable poultry businesses.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To empower poultry farmers worldwide by providing easy access 
                to quality products, expert knowledge, and innovative technology. 
                We believe that every farmer deserves the resources they need 
                to succeed, regardless of their scale or location.
              </p>
            </Card>

            <Card className="p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <Eye className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To become the world's most trusted platform for poultry farming, 
                where farmers can find everything they need in one place. We 
                envision a future where technology and tradition work together 
                to create sustainable, profitable farming operations.
              </p>
            </Card>
          </div>
        </section>

        <section className="mb-16 bg-yellow-50 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            What We Offer
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-white rounded-full mx-auto flex items-center justify-center shadow-md">
                <img
                  src="/chicken-breeds.png"
                  alt="Quality Products"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <h3 className="font-bold text-gray-900 text-lg">
                Quality Products
              </h3>
              <p className="text-sm text-gray-600">
                Birds, equipment, vaccines, and feed from trusted suppliers
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-white rounded-full mx-auto flex items-center justify-center shadow-md">
                <img
                  src="/baby-chicks.png"
                  alt="Expert Knowledge"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <h3 className="font-bold text-gray-900 text-lg">
                Expert Knowledge
              </h3>
              <p className="text-sm text-gray-600">
                Comprehensive guides on breeds, care, health, and management
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-white rounded-full mx-auto flex items-center justify-center shadow-md">
                <img
                  src="/ai-chatbot-icon.png"
                  alt="AI Assistant"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <h3 className="font-bold text-gray-900 text-lg">AI Assistant</h3>
              <p className="text-sm text-gray-600">
                24/7 intelligent support for all your poultry farming questions
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-white rounded-full mx-auto flex items-center justify-center shadow-md">
                <Users className="w-12 h-12 text-green-600" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg">Community</h3>
              <p className="text-sm text-gray-600">
                Connect with fellow farmers and share experiences
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <Card className="p-12 rounded-2xl shadow-lg bg-green-50">
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center">
                <Heart className="h-10 w-10 text-white" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="text-center">
                <h3 className="font-bold text-gray-900 mb-2 text-lg">
                  Quality First
                </h3>
                <p className="text-gray-600 text-sm">
                  We never compromise on the quality of products or information 
                  we provide to our farmers.
                </p>
              </div>
              <div className="text-center">
                <h3 className="font-bold text-gray-900 mb-2 text-lg">
                  Farmer-Centric
                </h3>
                <p className="text-gray-600 text-sm">
                  Every decision we make is guided by what's best for our 
                  farming community.
                </p>
              </div>
              <div className="text-center">
                <h3 className="font-bold text-gray-900 mb-2 text-lg">
                  Innovation
                </h3>
                <p className="text-gray-600 text-sm">
                  We embrace technology to make farming easier, smarter, and 
                  more profitable.
                </p>
              </div>
            </div>
          </Card>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600 mb-6">
            Have questions or want to learn more? We'd love to hear from you.
          </p>
          <div className="flex justify-center gap-4">
            <a href="/contact">
              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium">
                Contact Us
              </button>
            </a>
            <a href="mailto:contact@poultra.com">
              <button className="border border-green-600 text-green-600 hover:bg-green-50 px-8 py-3 rounded-lg font-medium">
                Email Us
              </button>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

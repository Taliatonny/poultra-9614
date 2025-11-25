import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ChevronLeft, ChevronRight, Send } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const carouselSlides = [
  {
    title: "Expert Chick-Raising Tips",
    description: "Learn the best practices for raising healthy chicks from day one.",
    image: "/baby-chicks.png",
  },
  {
    title: "Choose the Right Breed",
    description: "Discover which breeds are best suited for your climate and goals.",
    image: "/chicken-breeds.png",
  },
  {
    title: "Vaccination Schedules",
    description: "Stay on top of your flock's health with proper vaccination timing.",
    image: "/poultry-vaccines.png",
  },
  {
    title: "Modern Infrastructure",
    description: "Design efficient and comfortable housing for your poultry.",
    image: "/poultry-housing.png",
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [chatMessage, setChatMessage] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl font-bold text-gray-900">POULTRA</h1>
              <p className="text-xl text-green-600 font-medium">
                Your smart partner in poultry farming.
              </p>
              <p className="text-gray-600 leading-relaxed">
                POULTRA provides everything you need for successful poultry farming. 
                Access quality products, expert knowledge, and AI-powered advice to 
                help your farm thrive. Whether you're raising chicks, managing a large 
                flock, or just getting started, we're here to support your journey.
              </p>
              <Link to="/products">
                <Button
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white px-8"
                >
                  Explore Products
                </Button>
              </Link>
            </div>

            <div className="relative">
              <Card className="overflow-hidden rounded-2xl shadow-lg">
                <div className="relative h-96">
                  <img
                    src={carouselSlides[currentSlide].image}
                    alt={carouselSlides[currentSlide].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">
                      {carouselSlides[currentSlide].title}
                    </h3>
                    <p className="text-sm">
                      {carouselSlides[currentSlide].description}
                    </p>
                  </div>
                </div>
              </Card>

              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-6 w-6 text-gray-900" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg"
                aria-label="Next slide"
              >
                <ChevronRight className="h-6 w-6 text-gray-900" />
              </button>

              <div className="flex justify-center gap-2 mt-4">
                {carouselSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentSlide
                        ? "w-8 bg-green-600"
                        : "w-2 bg-gray-300"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Card className="p-8 rounded-2xl shadow-lg border-2 border-green-100">
            <div className="flex items-start gap-4">
              <img
                src="/ai-chatbot-icon.png"
                alt="Poultra AI"
                className="w-16 h-16 rounded-full"
              />
              <div className="flex-1 space-y-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Ask Poultra Anything
                  </h2>
                  <p className="text-gray-600">
                    Get instant answers about poultry farming, from chick care to 
                    flock management. Our AI assistant is here to help 24/7.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-4 min-h-[120px]">
                  <p className="text-sm text-gray-500 italic">
                    Chat preview will appear here...
                  </p>
                </div>

                <div className="flex gap-2">
                  <Input
                    placeholder="Ask about breeds, vaccination, feeding, housing..."
                    value={chatMessage}
                    onChange={(e) => setChatMessage(e.target.value)}
                    className="flex-1"
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        setChatMessage("");
                      }
                    }}
                  />
                  <Button
                    onClick={() => setChatMessage("")}
                    className="bg-green-600 hover:bg-green-700"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
                <Link to="/chat" className="block text-center">
                  <Button variant="outline" className="w-full">
                    Open Full Chat
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </section>

        <section className="bg-yellow-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Choose POULTRA?
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We're committed to supporting poultry farmers with the best 
                products, knowledge, and technology.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-6 text-center space-y-4 bg-white rounded-2xl">
                <div className="w-16 h-16 bg-green-100 rounded-full mx-auto flex items-center justify-center">
                  <img
                    src="/poultry-equipment.png"
                    alt="Quality Products"
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Quality Products
                </h3>
                <p className="text-gray-600">
                  Access a wide range of poultry supplies, from birds to equipment 
                  and vaccines, all in one place.
                </p>
              </Card>

              <Card className="p-6 text-center space-y-4 bg-white rounded-2xl">
                <div className="w-16 h-16 bg-green-100 rounded-full mx-auto flex items-center justify-center">
                  <img
                    src="/chicken-breeds.png"
                    alt="Expert Knowledge"
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Expert Knowledge
                </h3>
                <p className="text-gray-600">
                  Learn from comprehensive guides covering breeds, care, health, 
                  and farm management best practices.
                </p>
              </Card>

              <Card className="p-6 text-center space-y-4 bg-white rounded-2xl">
                <div className="w-16 h-16 bg-green-100 rounded-full mx-auto flex items-center justify-center">
                  <img
                    src="/ai-chatbot-icon.png"
                    alt="AI Support"
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900">AI Support</h3>
                <p className="text-gray-600">
                  Get instant answers to your farming questions with our intelligent 
                  AI assistant available 24/7.
                </p>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

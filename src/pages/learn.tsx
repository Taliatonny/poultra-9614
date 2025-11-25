import { useState } from "react";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ChevronLeft, ChevronRight, BookOpen, Thermometer, Syringe, Home, Wheat, Shield } from "lucide-react";

const breeds = [
  {
    name: "Rhode Island Red",
    climate: "Cold & Hot",
    purpose: "Dual-purpose",
    image: "/chicken-breeds.png",
  },
  {
    name: "Leghorn",
    climate: "Hot",
    purpose: "Egg production",
    image: "/chicken-breeds.png",
  },
  {
    name: "Plymouth Rock",
    climate: "Cold",
    purpose: "Dual-purpose",
    image: "/chicken-breeds.png",
  },
  {
    name: "Brahma",
    climate: "Cold",
    purpose: "Meat",
    image: "/chicken-breeds.png",
  },
];

export default function Learn() {
  const [currentBreed, setCurrentBreed] = useState(0);

  const nextBreed = () => {
    setCurrentBreed((prev) => (prev + 1) % breeds.length);
  };

  const prevBreed = () => {
    setCurrentBreed((prev) => (prev - 1 + breeds.length) % breeds.length);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Learn Poultry Farming
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Master the essentials of poultry farming with our comprehensive guides. 
            From selecting breeds to managing flock health, we've got you covered.
          </p>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Choose the Right Breed
          </h2>
          <Card className="overflow-hidden rounded-2xl shadow-lg max-w-3xl mx-auto">
            <div className="relative">
              <div className="relative h-80">
                <img
                  src={breeds[currentBreed].image}
                  alt={breeds[currentBreed].name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-3xl font-bold mb-2">
                    {breeds[currentBreed].name}
                  </h3>
                  <div className="flex gap-6 text-sm">
                    <div>
                      <span className="font-semibold">Climate:</span>{" "}
                      {breeds[currentBreed].climate}
                    </div>
                    <div>
                      <span className="font-semibold">Purpose:</span>{" "}
                      {breeds[currentBreed].purpose}
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={prevBreed}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg"
                aria-label="Previous breed"
              >
                <ChevronLeft className="h-6 w-6 text-gray-900" />
              </button>
              <button
                onClick={nextBreed}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg"
                aria-label="Next breed"
              >
                <ChevronRight className="h-6 w-6 text-gray-900" />
              </button>
            </div>

            <div className="p-6 bg-yellow-50">
              <h4 className="font-bold text-gray-900 mb-2">
                Best Breeds by Climate
              </h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-semibold text-green-600">Cold Climates:</p>
                  <p className="text-gray-600">
                    Plymouth Rock, Brahma, Orpington, Wyandotte
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-green-600">Hot Climates:</p>
                  <p className="text-gray-600">
                    Leghorn, Fayoumi, Easter Egger, Ancona
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Essential Topics
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Chick Care
              </h3>
              <img
                src="/baby-chicks.png"
                alt="Chick Care"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Temperature: 95°F week 1, reduce 5°F weekly</li>
                <li>• Use heat lamp or brooder heater</li>
                <li>• Provide fresh water and starter feed</li>
                <li>• Keep bedding clean and dry</li>
                <li>• Monitor for signs of illness</li>
              </ul>
            </Card>

            <Card className="p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Syringe className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Vaccination Schedule
              </h3>
              <img
                src="/poultry-vaccines.png"
                alt="Vaccination"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Day 1: Marek's disease</li>
                <li>• Week 1-2: Newcastle disease</li>
                <li>• Week 4: Infectious bronchitis</li>
                <li>• Week 8-10: Fowl pox</li>
                <li>• Boosters as recommended by vet</li>
              </ul>
            </Card>

            <Card className="p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Home className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Housing & Infrastructure
              </h3>
              <img
                src="/poultry-housing.png"
                alt="Housing"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• 2-4 sq ft per bird inside coop</li>
                <li>• 8-10 sq ft per bird in run</li>
                <li>• Good ventilation without drafts</li>
                <li>• Predator-proof construction</li>
                <li>• Easy to clean and maintain</li>
              </ul>
            </Card>

            <Card className="p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Wheat className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Feeding Guide
              </h3>
              <img
                src="/poultry-feed.png"
                alt="Feeding"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Starter (0-6 weeks): 20-24% protein</li>
                <li>• Grower (6-20 weeks): 16-18% protein</li>
                <li>• Layer: 16% protein, high calcium</li>
                <li>• Fresh water always available</li>
                <li>• Treats should be &lt;10% of diet</li>
              </ul>
            </Card>

            <Card className="p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Disease Prevention
              </h3>
              <img
                src="/poultry-vaccines.png"
                alt="Disease Prevention"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Maintain clean, dry environment</li>
                <li>• Quarantine new birds 30 days</li>
                <li>• Watch for lethargy, poor appetite</li>
                <li>• Provide biosecurity measures</li>
                <li>• Regular health checks</li>
              </ul>
            </Card>

            <Card className="p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Thermometer className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Climate Management
              </h3>
              <img
                src="/poultry-housing.png"
                alt="Climate"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Cold: insulate, prevent drafts, deep litter</li>
                <li>• Heat: shade, ventilation, cool water</li>
                <li>• Monitor temperature extremes</li>
                <li>• Adjust feed for energy needs</li>
                <li>• Watch for stress signs</li>
              </ul>
            </Card>
          </div>
        </section>

        <section className="bg-green-50 rounded-2xl p-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Have More Questions?
            </h2>
            <p className="text-gray-600 mb-6">
              Our AI assistant is available 24/7 to answer your specific poultry 
              farming questions. Get personalized advice for your flock.
            </p>
            <div className="flex justify-center gap-4">
              <a href="/chat">
                <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium">
                  Ask Poultra AI
                </button>
              </a>
              <a href="/contact">
                <button className="border border-green-600 text-green-600 hover:bg-green-50 px-6 py-3 rounded-lg font-medium">
                  Contact Us
                </button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

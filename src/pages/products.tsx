import { useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ShoppingCart } from "lucide-react";

const categories = [
  {
    id: "birds",
    name: "Birds",
    image: "/chicken-breeds.png",
    description: "Quality breeding stock and day-old chicks",
  },
  {
    id: "equipment",
    name: "Equipment",
    image: "/poultry-equipment.png",
    description: "Feeders, waterers, and farming tools",
  },
  {
    id: "vaccines",
    name: "Vaccines",
    image: "/poultry-vaccines.png",
    description: "Essential vaccines for flock health",
  },
  {
    id: "feed",
    name: "Feed",
    image: "/poultry-feed.png",
    description: "Nutritious feed for all growth stages",
  },
];

const products = {
  birds: [
    {
      id: 1,
      name: "Rhode Island Red Chicks",
      price: 5.99,
      description: "Hardy dual-purpose breed, excellent layers",
      image: "/baby-chicks.png",
    },
    {
      id: 2,
      name: "Broiler Day-Old Chicks",
      price: 3.99,
      description: "Fast-growing meat birds",
      image: "/baby-chicks.png",
    },
    {
      id: 3,
      name: "Leghorn Laying Hens",
      price: 15.99,
      description: "Prolific white egg layers",
      image: "/chicken-breeds.png",
    },
    {
      id: 4,
      name: "Plymouth Rock Chicks",
      price: 6.99,
      description: "Friendly, cold-hardy dual-purpose breed",
      image: "/baby-chicks.png",
    },
  ],
  equipment: [
    {
      id: 5,
      name: "Automatic Feeder",
      price: 49.99,
      description: "10kg capacity, weatherproof design",
      image: "/poultry-equipment.png",
    },
    {
      id: 6,
      name: "Waterer System",
      price: 34.99,
      description: "5L capacity with drip tray",
      image: "/poultry-equipment.png",
    },
    {
      id: 7,
      name: "Nesting Boxes (Set of 6)",
      price: 89.99,
      description: "Durable plastic with perches",
      image: "/poultry-housing.png",
    },
    {
      id: 8,
      name: "Heat Lamp Kit",
      price: 39.99,
      description: "Essential for chick brooding",
      image: "/poultry-equipment.png",
    },
  ],
  vaccines: [
    {
      id: 9,
      name: "Newcastle Disease Vaccine",
      price: 24.99,
      description: "100-dose vial with instructions",
      image: "/poultry-vaccines.png",
    },
    {
      id: 10,
      name: "Marek's Disease Vaccine",
      price: 29.99,
      description: "Essential for day-old chicks",
      image: "/poultry-vaccines.png",
    },
    {
      id: 11,
      name: "Fowl Pox Vaccine",
      price: 19.99,
      description: "Wing-web application kit",
      image: "/poultry-vaccines.png",
    },
    {
      id: 12,
      name: "Infectious Bronchitis Vaccine",
      price: 27.99,
      description: "Respiratory protection",
      image: "/poultry-vaccines.png",
    },
  ],
  feed: [
    {
      id: 13,
      name: "Starter Feed (25kg)",
      price: 32.99,
      description: "High protein for 0-6 weeks",
      image: "/poultry-feed.png",
    },
    {
      id: 14,
      name: "Grower Feed (50kg)",
      price: 54.99,
      description: "Balanced nutrition for 6-20 weeks",
      image: "/poultry-feed.png",
    },
    {
      id: 15,
      name: "Layer Feed (50kg)",
      price: 49.99,
      description: "Enhanced calcium for egg production",
      image: "/poultry-feed.png",
    },
    {
      id: 16,
      name: "Broiler Finisher (50kg)",
      price: 52.99,
      description: "High-energy for meat birds",
      image: "/poultry-feed.png",
    },
  ],
};

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedCategory = searchParams.get("category") || null;

  const handleCategorySelect = (categoryId: string) => {
    setSearchParams({ category: categoryId });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Our Products
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Quality products for every stage of your poultry farming journey. 
            From day-old chicks to equipment and vaccines, we've got you covered.
          </p>
        </div>

        {!selectedCategory ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Card
                key={category.id}
                className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => handleCategorySelect(category.id)}
              >
                <div className="relative h-48">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="text-xl font-bold mb-1">{category.name}</h3>
                    <p className="text-sm">{category.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <div>
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900">
                {categories.find((c) => c.id === selectedCategory)?.name}
              </h2>
              <Button
                variant="outline"
                onClick={() => setSearchParams({})}
              >
                View All Categories
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products[selectedCategory as keyof typeof products]?.map(
                (product) => (
                  <Card
                    key={product.id}
                    className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div className="relative h-48">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4 space-y-3">
                      <h3 className="font-bold text-gray-900 text-lg">
                        {product.name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {product.description}
                      </p>
                      <div className="flex items-center justify-between pt-2">
                        <span className="text-2xl font-bold text-green-600">
                          ${product.price}
                        </span>
                        <Button
                          size="sm"
                          className="bg-green-600 hover:bg-green-700"
                        >
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  </Card>
                )
              )}
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

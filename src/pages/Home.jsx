import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white text-center py-20 px-4">
        <h1 className="text-4xl font-bold mb-4">Scottech Limited</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Your trusted partner for KRA ETR Machines and Point of Sale (POS)
          Systems.
        </p>
        <div className="mt-6 space-x-4">
          <Button variant="secondary">Shop ETR Machines</Button>
          <Button className="bg-white text-blue-900 hover:bg-gray-100">
            Shop POS Systems
          </Button>
        </div>
      </section>

      {/* Featured Products */}
      <section className="px-6">
        <h2 className="text-2xl font-semibold text-center mb-10">
          Featured Products
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <Card
              key={item}
              className="shadow-lg hover:scale-105 transition-transform"
            >
              <img
                src={`/images/product${item}.jpg`}
                alt="Product"
                className="rounded-t-lg"
              />
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg">
                  ETR Machine Model {item}
                </h3>
                <p className="text-gray-600 mt-2">KES 35,000</p>
                <Button className="mt-4 w-full">View Details</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}

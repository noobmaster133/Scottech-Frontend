import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const products = [
  {
    id: 1,
    name: "ETR Machine A",
    price: 35000,
    image:
      "https://silkroom.odoo.com/web/image/product.product/11768/image_1920?unique=acb0aed",
  },
  {
    id: 2,
    name: "ETR Machine B",
    price: 36000,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3YeeRFTUClnu0GtVjB00CPWuX9bx8AUVX8g&s",
  },
  {
    id: 3,
    name: "POS System X",
    price: 45000,
    image:
      "https://www.posiflow.in/cdn/shop/files/WhatsAppImage2024-10-16at17.27.56_1_1500x.jpg?v=1729081654",
  },
];

function Home() {
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
          {products.map((product) => (
            <Card
              key={product.id}
              className="shadow-lg hover:scale-105 transition-transform"
            >
              <img
                src={product.image}
                alt={product.name}
                className="rounded-t-lg h-48 w-full object-cover"
              />
              <CardContent className="p-4 flex flex-col justify-between h-full">
                <h3 className="font-semibold text-lg">{product.name}</h3>
                <p className="text-gray-600 mt-2">KES{product.price}</p>
                <Button className="mt-4 w-full">View Details</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
export default Home
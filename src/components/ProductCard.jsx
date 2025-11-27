import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ProductCard({ product }) {
  return (
    <Card className="hover:shadow-lg transition-all">
      <img
        src={product.image}
        alt={product.name}
        className="rounded-t-lg h-48 w-full object-cover"
      />
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg">{product.name}</h3>
        <p className="text-gray-600">{product.category}</p>
        <p className="font-medium mt-2">KES {product.price}</p>
        <Button className="w-full mt-3">Add to Cart</Button>
      </CardContent>
    </Card>
  );
}

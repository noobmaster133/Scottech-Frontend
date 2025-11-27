import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Replace this with Flask API endpoint
    fetch("http://127.0.0.1:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch(() => {
        // fallback data for now
        setProducts([
          {
            id: 1,
            name: "Datecs DP-25 ETR Machine",
            category: "ETR",
            price: 35000,
            image:
              "https://i.ytimg.com/vi/U6nqL2e7_Aw/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGGUgVyhHMA8=&rs=AOn4CLD_54XWRfFk3CkDZX2TxOlUZoxdVw",
          },
          {
            id: 2,
            name: "Sunmi V2 POS System",
            category: "POS",
            price: 42000,
            image:
              "https://www.srkinnovations.com/cdn/shop/files/1_1_18f16911-cb71-4643-8ccd-c842cbd55087_2048x.jpg?v=1737905484",
          },
          {
            id: 3,
            name: "Daisy Expert SX",
            category: "ETR",
            price: 38000,
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_weTQ2r4UyfeqVr6tu92MrfUVqwDFvGvm1A&s",
          },
        ]);
      });
  }, []);

  return (
    <div className="px-6 py-10">
      <h2 className="text-3xl font-semibold text-center mb-8 text-blue-900">
        Our Products
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
export default Products
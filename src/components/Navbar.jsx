import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

function Navbar() {
  return (
    <header className="flex justify-between items-center px-6 py-4 border-b bg-white shadow-sm">
      <h1 className="text-2xl font-bold text-blue-900">Scottech Limited</h1>

      <NavigationMenu>
        <NavigationMenuList className="flex space-x-6 text-sm font-medium">
          <NavigationMenuItem>Home</NavigationMenuItem>
          <NavigationMenuItem>Products</NavigationMenuItem>
          <NavigationMenuItem>About</NavigationMenuItem>
          <NavigationMenuItem>Contact</NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <Button asChild>
        <Link to="/products">Shop Now</Link>
        </Button>
    </header>
  );
}
export default Navbar
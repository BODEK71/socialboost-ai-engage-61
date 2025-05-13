
import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <header className="border-b bg-white sticky top-0 z-40">
      <div className="container mx-auto max-w-7xl py-4 px-4 md:px-8 flex items-center justify-between">
        <Link to="/" className="flex-shrink-0">
          <Logo />
        </Link>

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link to="/" className={navigationMenuTriggerStyle()}>
                Główna
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Platformy</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  <Link to="/x-twitter" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                    <div className="text-sm font-medium leading-none">X (Twitter)</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Zwiększ zasięgi i zaangażowanie na platformie X
                    </p>
                  </Link>
                  <Link to="/youtube" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                    <div className="text-sm font-medium leading-none">YouTube</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Zwiększ wyświetlenia i subskrypcje
                    </p>
                  </Link>
                  <Link to="/web3" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                    <div className="text-sm font-medium leading-none">Web3</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Buduj społeczność w Web3
                    </p>
                  </Link>
                  <div className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors text-muted-foreground">
                    <div className="text-sm font-medium leading-none">Instagram</div>
                    <p className="line-clamp-2 text-sm leading-snug">
                      Wkrótce dostępne (Q3 2025)
                    </p>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/blog" className={navigationMenuTriggerStyle()}>
                Blog
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/faq" className={navigationMenuTriggerStyle()}>
                FAQ
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/kontakt" className={navigationMenuTriggerStyle()}>
                Kontakt
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-4">
          <Button variant="outline" className="hidden md:inline-flex">
            Zaloguj się
          </Button>
          <Button>Rozpocznij</Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

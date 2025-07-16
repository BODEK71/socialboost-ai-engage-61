
import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t } = useTranslation(["navbar", "common"]);

  return (
    <header className="border-b bg-white sticky top-0 z-40">
      <div className="container mx-auto max-w-7xl py-3 px-4 md:px-8 flex items-center justify-between">
        <Link to="/" className="flex-shrink-0">
          <Logo size="large" />
        </Link>

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link to="/" className={navigationMenuTriggerStyle()}>
                {t("home")}
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>{t("platforms")}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  <Link to="/x-twitter" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                    <div className="text-sm font-medium leading-none">{t("platformsItems.xTwitter")}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      {t("platformsItems.xTwitterDesc")}
                    </p>
                  </Link>
                  <Link to="/youtube" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                    <div className="text-sm font-medium leading-none">{t("platformsItems.youtube")}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      {t("platformsItems.youtubeDesc")}
                    </p>
                  </Link>
                  <Link to="/web3" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                    <div className="text-sm font-medium leading-none">{t("platformsItems.web3")}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      {t("platformsItems.web3Desc")}
                    </p>
                  </Link>
                  <div className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors text-muted-foreground">
                    <div className="text-sm font-medium leading-none">{t("platformsItems.instagram")}</div>
                    <p className="line-clamp-2 text-sm leading-snug">
                      {t("platformsItems.instagramDesc")}
                    </p>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/pricing" className={navigationMenuTriggerStyle()}>
                {t("pricing")}
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/ai-seo" className={navigationMenuTriggerStyle()}>
                AI SEO
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/blog" className={navigationMenuTriggerStyle()}>
                {t("blog")}
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/faq" className={navigationMenuTriggerStyle()}>
                {t("faq")}
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/kontakt" className={navigationMenuTriggerStyle()}>
                {t("contact")}
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center">
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
};

export default Navbar;

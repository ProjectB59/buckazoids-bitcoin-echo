
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { type NavigationItem } from "./NavigationItems";

interface DesktopNavProps {
  navigation: NavigationItem[];
  isHomePage?: boolean;
}

export const DesktopNav = ({
  navigation,
  isHomePage = true
}: DesktopNavProps) => {
  return (
    <nav className="hidden lg:flex items-center text-sm xl:text-base">
      {navigation.map(item => (
        <div key={item.name} className="relative shrink-0">
          {item.href.startsWith('/') ? (
            <Link
              to={item.href}
              className={`px-1.5 xl:px-3 py-2 whitespace-nowrap ${isHomePage ? 'text-white hover:text-buckazoids-orange' : 'text-white hover:text-buckazoids-orange'}`}
            >
              {item.name}
            </Link>
          ) : (
            <a
              href={item.href}
              className={`px-1.5 xl:px-3 py-2 whitespace-nowrap ${isHomePage ? 'text-white hover:text-buckazoids-orange' : 'text-white hover:text-buckazoids-orange'}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.name}
            </a>
          )}
        </div>
      ))}
    </nav>
  );
};

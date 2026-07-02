import { useState } from "react";
import { Menu, X, ChevronDown, Search, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  {
    label: "About Us",
    children: ["Our Mission", "Leadership", "Governance", "History", "Partners", "Careers"],
  },
  {
    label: "Countries",
    children: ["West Africa", "East Africa", "Central Africa", "Southern Africa", "North Africa"],
  },
  {
    label: "Topics",
    children: ["Energy", "Agriculture", "Infrastructure", "Health", "Education", "Climate Change", "Gender"],
  },
  {
    label: "Projects",
    children: ["Active Projects", "Completed Projects", "Project Pipeline", "Results & Impact"],
  },
  {
    label: "Publications",
    children: ["Annual Reports", "Working Papers", "Economic Outlook", "Data Portal"],
  },
  {
    label: "News & Events",
    children: ["Press Releases", "Featured Stories", "Events", "Multimedia"],
  },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      {/* Top bar */}
      <div className="bg-[hsl(200,30%,12%)] text-white">
        <div className="container-wide flex items-center justify-between py-2 text-sm">
          <div className="hidden md:flex items-center gap-4">
            <a href="#" className="hover:text-[hsl(155,80%,60%)] transition-colors cursor-pointer">Investors</a>
            <a href="#" className="hover:text-[hsl(155,80%,60%)] transition-colors cursor-pointer">Business Opportunities</a>
            <a href="#" className="hover:text-[hsl(155,80%,60%)] transition-colors cursor-pointer">Careers</a>
          </div>
          <div className="flex items-center gap-4 ml-auto">
            <button className="flex items-center gap-1 hover:text-[hsl(155,80%,60%)] transition-colors cursor-pointer">
              <Globe className="h-4 w-4" />
              <span>EN</span>
            </button>
            <button className="hover:text-[hsl(155,80%,60%)] transition-colors cursor-pointer">
              <Search className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container-wide">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 cursor-pointer">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[hsl(155,100%,21%)] flex items-center justify-center">
              <span className="text-white font-bold text-sm md:text-base">AfDB</span>
            </div>
            <div className="hidden sm:block">
              <p className="font-bold text-[hsl(200,30%,15%)] text-sm md:text-base leading-tight">African Development Bank</p>
              <p className="text-xs text-muted-foreground">Building today, a better Africa tomorrow</p>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground hover:text-[hsl(155,100%,21%)] transition-colors cursor-pointer rounded-md hover:bg-accent">
                  {item.label}
                  <ChevronDown className="h-3 w-3" />
                </button>
                {activeDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-0 w-56 bg-white border border-border rounded-lg shadow-lg py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                    {item.children.map((child) => (
                      <a
                        key={child}
                        href="#"
                        className="block px-4 py-2.5 text-sm text-foreground hover:bg-accent hover:text-[hsl(155,100%,21%)] transition-colors cursor-pointer"
                      >
                        {child}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden cursor-pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-white animate-in slide-in-from-top-2 duration-300">
          <div className="container-wide py-4 space-y-2">
            {navItems.map((item) => (
              <div key={item.label} className="border-b border-border last:border-0 pb-2">
                <button
                  className="flex items-center justify-between w-full py-2 text-sm font-medium cursor-pointer"
                  onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                >
                  {item.label}
                  <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === item.label ? "rotate-180" : ""}`} />
                </button>
                {activeDropdown === item.label && (
                  <div className="pl-4 space-y-1 pb-2">
                    {item.children.map((child) => (
                      <a key={child} href="#" className="block py-1.5 text-sm text-muted-foreground hover:text-[hsl(155,100%,21%)] cursor-pointer">
                        {child}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
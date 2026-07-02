import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const footerLinks = {
  "About the Bank": [
    "Our Mission & Strategy",
    "Board of Directors",
    "President's Office",
    "Organizational Structure",
    "History & Timeline",
    "Annual Reports",
  ],
  Operations: [
    "Countries & Regions",
    "Sectors & Topics",
    "Project Portfolio",
    "Results & Impact",
    "Procurement",
    "Disbursement",
  ],
  "Knowledge & Data": [
    "Publications",
    "Statistics",
    "Africa Economic Outlook",
    "Open Data Platform",
    "Research Papers",
    "Data Portal",
  ],
  "Work With Us": [
    "Careers",
    "Business Opportunities",
    "Consulting Services",
    "Civil Society",
    "Partnerships",
    "Internship Program",
  ],
};

export function Footer() {
  return (
    <footer className="bg-[hsl(200,30%,12%)] text-white">
      {/* Newsletter */}
      <div className="border-b border-white/10">
        <div className="container-wide py-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-1">Stay Informed</h3>
              <p className="text-white/60 text-sm">Subscribe to our newsletter for the latest updates on Africa's development.</p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-72 px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-[hsl(155,80%,40%)] transition-colors"
              />
              <Button className="bg-[hsl(155,100%,21%)] hover:bg-[hsl(155,100%,28%)] text-white px-5 cursor-pointer font-semibold">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer links */}
      <div className="container-wide py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-sm text-white mb-4 uppercase tracking-wider">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-white/60 hover:text-[hsl(155,80%,60%)] transition-colors cursor-pointer">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Contact & Social */}
      <div className="border-t border-white/10">
        <div className="container-wide py-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <div className="flex items-center gap-2 text-sm text-white/60">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span>Avenue Joseph Anoma, Abidjan, Côte d'Ivoire</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/60">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>+225 20 26 10 20</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/60">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>info@afdb.org</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              {["Twitter", "LinkedIn", "Facebook", "YouTube"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[hsl(155,100%,21%)] flex items-center justify-center transition-colors cursor-pointer"
                  title={social}
                >
                  <ExternalLink className="h-4 w-4 text-white" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-wide py-5">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <p className="text-xs text-white/40">
              © 2026 African Development Bank Group. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#" className="text-xs text-white/40 hover:text-white/70 transition-colors cursor-pointer">Terms of Use</a>
              <a href="#" className="text-xs text-white/40 hover:text-white/70 transition-colors cursor-pointer">Privacy Policy</a>
              <a href="#" className="text-xs text-white/40 hover:text-white/70 transition-colors cursor-pointer">Accessibility</a>
              <a href="#" className="text-xs text-white/40 hover:text-white/70 transition-colors cursor-pointer">Fraud & Corruption</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
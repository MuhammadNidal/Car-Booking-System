import React from "react";
import Button from "./ui/Button";

const Footer = () => (
  <footer className="bg-surface border-t border-gray-200 mt-12">
    <div className="container mx-auto px-4 md:px-8 lg:px-20 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {/* Brand Section */}
      <div className="text-center sm:text-left">
        <div className="text-2xl font-bold text-primary">CarShowroom</div>
        <p className="text-sm text-muted mt-2 max-w-xs mx-auto sm:mx-0">
          Trusted car marketplace — buy, sell and service with confidence.
        </p>
      </div>

      {/* Links Section */}
      <div className="flex flex-wrap justify-center sm:justify-between gap-10">
        <div>
          <h4 className="font-semibold mb-3 text-primary">Company</h4>
          <ul className="text-sm text-muted space-y-2">
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                Press
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-primary">Support</h4>
          <ul className="text-sm text-muted space-y-2">
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                Privacy
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="text-center sm:text-left">
        <h4 className="font-semibold mb-2 text-primary">Stay in the loop</h4>
        <p className="text-sm text-muted mb-3">
          Subscribe for updates and offers.
        </p>
        <form className="flex flex-col sm:flex-row w-full max-w-xs mx-auto sm:mx-0 gap-2">
          <input
            aria-label="Email"
            placeholder="you@company.com"
            className="flex-1 px-3 py-2 rounded border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <Button className="whitespace-nowrap btn-md w-full sm:w-auto">
            Subscribe
          </Button>
        </form>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-8 lg:px-20 py-4 text-sm text-muted flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
        <div>© {new Date().getFullYear()} CarShowroom. All rights reserved.</div>
        <div className="flex items-center gap-4">
          <a href="#" className="text-muted hover:text-primary transition-colors">
            Terms
          </a>
          <a href="#" className="text-muted hover:text-primary transition-colors">
            Privacy
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;

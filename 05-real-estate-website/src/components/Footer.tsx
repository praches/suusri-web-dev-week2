import { Building2, Facebook, Instagram, Twitter, Linkedin, Send } from 'lucide-react';

const footerLinks = {
  Company: ['About Us', 'Our Team', 'Careers', 'Press', 'Contact'],
  Properties: ['Villas', 'Apartments', 'Commercial', 'Luxury Estates', 'New Listings'],
  Resources: ['Mortgage Calculator', 'Neighborhood Guide', 'Market Reports', 'Buying Guide', 'Selling Guide'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Accessibility'],
};

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="container-luxury py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Building2 className="w-8 h-8 text-champagne-400" />
              <span className="font-serif text-2xl font-medium tracking-wide">LuxEstate</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Curating extraordinary living spaces for discerning clients since 2001. Your forever
              address starts here.
            </p>
            <div className="flex gap-3 mt-6">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 bg-slate-800 rounded-full flex items-center justify-center text-white/60 hover:bg-champagne-500 hover:text-white transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-sans text-sm font-semibold tracking-wider uppercase text-champagne-300 mb-4">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/50 text-sm hover:text-champagne-300 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} LuxEstate. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <input
              type="email"
              placeholder="Subscribe to our newsletter"
              className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-md text-sm text-white/70 placeholder:text-white/30 focus:border-champagne-500 focus:outline-none transition-colors"
            />
            <button className="w-10 h-10 bg-champagne-500 rounded-md flex items-center justify-center hover:bg-champagne-600 transition-colors">
              <Send className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

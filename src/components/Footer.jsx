import { Link } from 'react-router-dom'
import { Linkedin, Twitter, Mail } from 'lucide-react'
import Container from './Container'

const Footer = () => {
  const currentYear = 2026

  const footerLinks = [
    {
      title: 'Quick Links',
      links: [
        { label: 'Home', path: '/' },
        { label: 'About', path: '/about' },
        { label: 'Career', path: '/career' },
        { label: 'Contact', path: '/contact' },
      ],
    },
    {
      title: 'Highlights',
      links: [
        { label: 'Achievements', path: '/achievements' },
        { label: 'Projects', path: '/projects' },
        { label: 'Blog', path: '/blog' },
      ],
    },
  ]

  return (
    <footer className="bg-cream-100 border-t border-cream-200">
      <Container>
        <div className="py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gold-500 rounded flex items-center justify-center">
                  <span className="text-navy-900 font-bold text-xl font-[var(--font-heading)]">RM</span>
                </div>
                <div>
                  <span className="text-navy-900 font-semibold text-xl block">Radheshyam Mopalwar</span>
                  <span className="text-gold-500 text-sm uppercase tracking-wider">IAS Retd.</span>
                </div>
              </div>
              <div className="mb-2">
                <span className="text-gold-600 text-xs uppercase tracking-wider font-semibold">Current Positions (2026)</span>
              </div>
              <p className="text-navy-900 font-medium text-sm mb-4">
                CMD, Hazoor Multi Projects Ltd • Chairman, Modern Engineering & Projects Ltd
              </p>
              <p className="text-gray-600 max-w-md mb-6 leading-relaxed">
                Radheshyam Mopalwar (IAS Retd., 1995 Batch, Maharashtra Cadre) — Over 40 years of experience from IRS (1982) to State Service (1983-1995) to IAS leadership. Former DG of the CM's Infrastructure War Room with record 7 post-retirement extensions (2018-2023). Architect of the ₹55,000 Cr Samruddhi Mahamarg. Now leading private infrastructure development from Nariman Point, Mumbai.
              </p>
              <div className="flex gap-4">
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-cream-200 flex items-center justify-center text-gray-600 hover:bg-gold-500 hover:text-navy-900 transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-cream-200 flex items-center justify-center text-gray-600 hover:bg-gold-500 hover:text-navy-900 transition-all duration-300"
                  aria-label="Twitter"
                >
                  <Twitter size={18} />
                </a>
                <a 
                  href="mailto:contact@example.com" 
                  className="w-10 h-10 rounded-full bg-cream-200 flex items-center justify-center text-gray-600 hover:bg-gold-500 hover:text-navy-900 transition-all duration-300"
                  aria-label="Email"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>

            {/* Links */}
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h4 className="text-navy-900 font-semibold mb-6 text-sm uppercase tracking-wider">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.path}>
                      <Link 
                        to={link.path}
                        className="text-gray-600 hover:text-gold-600 transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cream-200 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2026 Radheshyam Mopalwar • CMD, Hazoor Multi Projects Ltd • Chairman, Modern Engineering & Projects Ltd • Nariman Point, Mumbai
            </p>
            <p className="text-gray-500 text-sm">
              1995-Batch IAS (Retd.) • Maharashtra Cadre
            </p>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer

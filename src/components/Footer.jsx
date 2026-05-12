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

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Mail, href: 'mailto:contact@radheshyammopalwar.in', label: 'Email' },
  ]

  return (
    <footer className="bg-cream-100 border-t border-cream-200/80">
      <Container>
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
            {/* Brand */}
            <div className="lg:col-span-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-gradient-to-br from-gold-400 to-gold-600 rounded-lg flex items-center justify-center shadow-md shadow-gold-500/15">
                  <span className="text-navy-900 font-bold text-sm font-[var(--font-heading)]">RM</span>
                </div>
                <div>
                  <span className="text-navy-900 font-semibold text-base leading-tight block">Radheshyam Mopalwar</span>
                  <span className="text-gold-600 text-[10px] uppercase tracking-widest font-medium">IAS Retd.</span>
                </div>
              </div>
              <div className="mb-2">
                <span className="text-gold-600 text-[10px] uppercase tracking-widest font-semibold">Current Positions (2026)</span>
              </div>
              <p className="text-navy-800 font-medium text-sm mb-3">
                CMD, Hazoor Multi Projects Ltd · Chairman, Modern Engineering & Projects Ltd
              </p>
              <p className="text-gray-600 max-w-md mb-5 leading-relaxed text-sm">
                Radheshyam Mopalwar (IAS Retd., 1995 Batch, Maharashtra Cadre) — Over 40 years of experience from IRS (1982) to State Service (1983-1995) to IAS leadership. Former DG of the CM's Infrastructure War Room with record 7 post-retirement extensions (2018-2023). Architect of the ₹55,000 Cr Samruddhi Mahamarg.
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-9 h-9 rounded-lg bg-cream-200/80 flex items-center justify-center text-gray-500 hover:bg-gold-500 hover:text-navy-900 transition-all duration-300 hover:shadow-md hover:shadow-gold-500/20"
                    aria-label={social.label}
                  >
                    <social.icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            {/* Links */}
            {footerLinks.map((section) => (
              <div key={section.title} className="lg:col-span-3">
                <h4 className="text-navy-900 font-semibold mb-4 text-xs uppercase tracking-widest">
                  {section.title}
                </h4>
                <ul className="space-y-2.5">
                  {section.links.map((link) => (
                    <li key={link.path}>
                      <Link
                        to={link.path}
                        className="text-gray-600 hover:text-gold-600 transition-colors duration-200 text-sm"
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
        <div className="border-t border-cream-200/80 py-5">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
            <p className="text-gray-500 text-xs text-center sm:text-left">
              © {currentYear} Radheshyam Mopalwar · CMD, Hazoor Multi Projects Ltd · Nariman Point, Mumbai
            </p>
            <p className="text-gray-500 text-xs">
              1995-Batch IAS (Retd.) · Maharashtra Cadre
            </p>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer

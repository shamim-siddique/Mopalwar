import { Link } from 'react-router-dom'
import { Linkedin, Twitter, Mail } from 'lucide-react'
import Container from './Container'

const Footer = () => {
  const currentYear = new Date().getFullYear()

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
              <p className="text-gray-600 max-w-md mb-6 leading-relaxed">
                Distinguished civil servant with over three decades of exemplary service in the Indian Administrative Service. Committed to nation-building through transformative infrastructure and governance.
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
              © {currentYear} Radheshyam Mopalwar. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm">
              Designed with excellence in mind
            </p>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
